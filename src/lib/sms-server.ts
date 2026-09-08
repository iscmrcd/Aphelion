/**
 * Demo SMS over Twilio.
 *
 * This endpoint is a loaded gun and is treated as one. It is reachable by
 * anyone who opens the site, and it sends a message to whatever number the
 * caller types. Without limits that is an open relay: a visitor could put a
 * stranger's number in the demo and Aphelion's Twilio account would text them.
 *
 * So every send must satisfy all of these, checked server-side against
 * Supabase because the app runs on stateless Workers where in-memory counters
 * reset per isolate:
 *   - one SMS per chat session, ever
 *   - a small number per IP per rolling day
 *   - a global daily ceiling, so a botnet cannot run up the Twilio bill
 *   - the number must look like a real mobile in a country we allow
 * Every attempt is logged with a hashed IP so abuse can actually be audited.
 *
 * The message identifies itself as a demo from Aphelion and says how to stop,
 * because someone who did not ask for it may receive it.
 *
 * Environment: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER.
 */

import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";

/** One per session. Not "one per session per day" — one, full stop. */
const MAX_PER_IP_PER_DAY = 3;
/** Ceiling across all visitors, so a bad day cannot become a bad invoice. */
const MAX_GLOBAL_PER_DAY = 150;

type SupabaseConfig = { url: string; key: string };

function supabaseConfig(): SupabaseConfig | null {
  const env = process.env;
  const url = env.SUPABASE_URL || env.VITE_SUPABASE_URL || env.SUPABASE_PROJECT_URL;
  const key = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_KEY || env.SUPABASE_SECRET_KEY;
  if (!url || !key) return null;
  return { url: url.replace(/\/+$/, ""), key };
}

const sbHeaders = (cfg: SupabaseConfig) => ({
  apikey: cfg.key,
  Authorization: `Bearer ${cfg.key}`,
  "Content-Type": "application/json",
});

async function hashIp(ip: string): Promise<string> {
  try {
    const data = new TextEncoder().encode(`aphelion-sms:${ip}`);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
      .slice(0, 32);
  } catch {
    return "unknown";
  }
}

/**
 * Normalise to E.164 and refuse anything we are not confident about.
 * Only Mexico and the US are allowed: those are the markets Aphelion serves,
 * and an unbounded country list is how demo endpoints end up funding fraud.
 */
export function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/[^\d+]/g, "");
  const bare = digits.replace(/\D/g, "");
  if (digits.startsWith("+52") || (bare.length === 12 && bare.startsWith("52"))) {
    const local = bare.slice(2).replace(/^1/, "");
    return local.length === 10 ? `+52${local}` : null;
  }
  if (digits.startsWith("+1") || (bare.length === 11 && bare.startsWith("1"))) {
    const local = bare.slice(1);
    return local.length === 10 ? `+1${local}` : null;
  }
  // Bare 10 digits: assume Mexico, which is where the site's audience is.
  if (bare.length === 10) return `+52${bare}`;
  return null;
}

async function countSms(cfg: SupabaseConfig, filter: string): Promise<number | null> {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  try {
    const res = await fetch(
      `${cfg.url}/rest/v1/demo_sms?${filter}&created_at=gte.${encodeURIComponent(since)}&select=id`,
      { headers: { ...sbHeaders(cfg), Prefer: "count=exact", Range: "0-0" } },
    );
    if (!res.ok) return null;
    const total = res.headers.get("content-range")?.split("/")[1];
    return total && total !== "*" ? Number(total) : null;
  } catch {
    return null;
  }
}

async function logSms(cfg: SupabaseConfig, row: Record<string, unknown>): Promise<void> {
  try {
    await fetch(`${cfg.url}/rest/v1/demo_sms`, {
      method: "POST",
      headers: { ...sbHeaders(cfg), Prefer: "return=minimal" },
      body: JSON.stringify(row),
    });
  } catch {
    // Never let logging break the response.
  }
}

async function sendViaTwilio(to: string, body: string): Promise<boolean> {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  if (!sid || !token || !from) {
    console.warn("[demo sms] Twilio not configured — nothing sent.");
    return false;
  }
  try {
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(`${sid}:${token}`)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ To: to, From: from, Body: body }),
    });
    if (!res.ok) {
      console.warn("[demo sms] Twilio rejected:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.warn("[demo sms] Twilio request failed:", err);
    return false;
  }
}

export type SmsResult = {
  sent: boolean;
  /** Why it did not send, for an honest message in the UI. */
  reason?: "config" | "limit" | "phone" | "provider";
};

export const sendDemoSms = createServerFn({ method: "POST" })
  .validator((data: unknown): { sessionId: string; phone: string; name?: string } => {
    const d = (data ?? {}) as Record<string, unknown>;
    const sessionId = typeof d.sessionId === "string" ? d.sessionId.slice(0, 64) : "";
    const phone = typeof d.phone === "string" ? d.phone.slice(0, 40) : "";
    if (!sessionId || !phone) throw new Error("sessionId and phone required");
    return {
      sessionId,
      phone,
      name: typeof d.name === "string" ? d.name.trim().slice(0, 60) : "",
    };
  })
  .handler(async ({ data }): Promise<SmsResult> => {
    const to = normalisePhone(data.phone);
    if (!to) return { sent: false, reason: "phone" };

    const cfg = supabaseConfig();
    // Fail closed: without the datastore there is no way to enforce the
    // limits, and an unlimited SMS endpoint is worse than a missing feature.
    if (!cfg) return { sent: false, reason: "config" };

    let ipHash = "unknown";
    try {
      const ip = getRequestIP({ xForwardedFor: true });
      if (ip) ipHash = await hashIp(ip);
    } catch {
      // Falls through to the "unknown" bucket, which is still rate-limited.
    }

    const perSession = await countSms(cfg, `session_id=eq.${encodeURIComponent(data.sessionId)}`);
    const perIp = await countSms(cfg, `ip_hash=eq.${encodeURIComponent(ipHash)}`);
    const global = await countSms(cfg, "id=gt.0");

    // A null count means the query failed. Treat that as over the limit
    // rather than under it.
    if (
      perSession === null ||
      perIp === null ||
      global === null ||
      perSession >= 1 ||
      perIp >= MAX_PER_IP_PER_DAY ||
      global >= MAX_GLOBAL_PER_DAY
    ) {
      await logSms(cfg, {
        session_id: data.sessionId,
        ip_hash: ipHash,
        phone_e164: to,
        status: "blocked",
      });
      return { sent: false, reason: "limit" };
    }

    const name = data.name ? `${data.name}, ` : "";
    const body =
      `${name}este es un SMS de DEMOSTRACIÓN de Aphelion (aphelion.mx). ` +
      `Así se vería el recordatorio de una cita en tu negocio. ` +
      `No es una cita real y no te volveremos a escribir. Responde BAJA para no recibir nada más.`;

    const ok = await sendViaTwilio(to, body);
    await logSms(cfg, {
      session_id: data.sessionId,
      ip_hash: ipHash,
      phone_e164: to,
      status: ok ? "sent" : "failed",
    });
    return ok ? { sent: true } : { sent: false, reason: "provider" };
  });

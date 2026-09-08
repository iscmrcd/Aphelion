/**
 * Lead capture and notification, server side only.
 *
 * Why this exists: the contact form used to build a WhatsApp message and open
 * wa.me in a new tab, then mark itself as sent regardless of what happened
 * next. If the popup was blocked, if the visitor was on desktop without
 * WhatsApp Web, or if they changed their mind before pressing send, the lead
 * was lost and nobody ever knew. Everything here runs on the server so the
 * Resend key never reaches the browser, and the lead is persisted BEFORE the
 * email is attempted, so a Resend outage cannot lose it.
 *
 * Environment variables (set in Lovable, never in the repo):
 *   RESEND_API_KEY     — from the Resend dashboard
 *   RESEND_FROM        — e.g. "Aphelion <leads@aphelion.mx>", verified domain
 *   LEADS_TO_EMAIL     — where notifications land
 * Supabase reuses the same variables the chat demo already reads.
 */

import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";

export type LeadSource = "contact-form" | "chat-widget" | "diagnostic";

export type LeadPayload = {
  source: LeadSource;
  name: string;
  /** Email, phone or WhatsApp — whatever the visitor actually gave us. */
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  /** Chat transcript, when the lead came from the widget. */
  transcript?: string;
  /** Page the lead came from, for attribution. */
  path?: string;
};

const MAX_FIELD = 2000;
const MAX_TRANSCRIPT = 12000;

const clean = (v: unknown, max = MAX_FIELD) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

type SupabaseConfig = { url: string; key: string };

function supabaseConfig(): SupabaseConfig | null {
  const env = process.env;
  const url = env.SUPABASE_URL || env.VITE_SUPABASE_URL || env.SUPABASE_PROJECT_URL;
  const key = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_KEY || env.SUPABASE_SECRET_KEY;
  if (!url || !key) return null;
  return { url: url.replace(/\/+$/, ""), key };
}

const supabaseHeaders = (cfg: SupabaseConfig) => ({
  apikey: cfg.key,
  Authorization: `Bearer ${cfg.key}`,
  "Content-Type": "application/json",
});

async function hashIp(ip: string): Promise<string> {
  try {
    const data = new TextEncoder().encode(`aphelion-lead:${ip}`);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
      .slice(0, 32);
  } catch {
    return "unknown";
  }
}

/** Persist first. An email provider outage must not lose a lead. */
async function storeLead(lead: LeadPayload, ipHash: string): Promise<boolean> {
  const cfg = supabaseConfig();
  if (!cfg) {
    console.warn("[leads] Supabase not configured — lead not persisted.");
    return false;
  }
  try {
    const res = await fetch(`${cfg.url}/rest/v1/leads`, {
      method: "POST",
      headers: { ...supabaseHeaders(cfg), Prefer: "return=minimal" },
      body: JSON.stringify({
        source: lead.source,
        name: lead.name,
        email: lead.email || null,
        phone: lead.phone || null,
        company: lead.company || null,
        service: lead.service || null,
        budget: lead.budget || null,
        message: lead.message || null,
        transcript: lead.transcript || null,
        path: lead.path || null,
        ip_hash: ipHash,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function renderEmail(lead: LeadPayload): { subject: string; html: string; text: string } {
  const rows: [string, string][] = [
    ["Origen", lead.source],
    ["Nombre", lead.name],
    ["Email", lead.email || "—"],
    ["Teléfono / WhatsApp", lead.phone || "—"],
    ["Empresa", lead.company || "—"],
    ["Servicio", lead.service || "—"],
    ["Presupuesto", lead.budget || "—"],
    ["Página", lead.path || "—"],
  ];
  const subject = `Nuevo lead · ${lead.name}${lead.phone ? ` · ${lead.phone}` : ""}`;
  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    lead.message ? `Mensaje:\n${lead.message}` : "",
    lead.transcript ? `\nConversación:\n${lead.transcript}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `<div style="font-family:system-ui,-apple-system,sans-serif;max-width:640px">
<h2 style="margin:0 0 16px;font-size:18px">${esc(subject)}</h2>
<table style="border-collapse:collapse;width:100%;font-size:14px">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:6px 12px 6px 0;color:#666;white-space:nowrap">${esc(k)}</td><td style="padding:6px 0">${esc(v)}</td></tr>`,
  )
  .join("")}
</table>
${lead.message ? `<h3 style="font-size:14px;margin:20px 0 6px">Mensaje</h3><p style="white-space:pre-wrap;font-size:14px;margin:0">${esc(lead.message)}</p>` : ""}
${lead.transcript ? `<h3 style="font-size:14px;margin:20px 0 6px">Conversación</h3><pre style="white-space:pre-wrap;font-size:13px;background:#f6f8f9;padding:12px;border-radius:8px;margin:0">${esc(lead.transcript)}</pre>` : ""}
</div>`;
  return { subject, html, text };
}

/** Resend over fetch, no SDK: one dependency less to keep current. */
async function sendEmail(lead: LeadPayload): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.LEADS_TO_EMAIL;
  if (!key || !from || !to) {
    console.warn("[leads] Resend not configured — email not sent.");
    return false;
  }
  const { subject, html, text } = renderEmail(lead);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        text,
        // So hitting reply in the inbox writes to the prospect, not to Resend.
        ...(lead.email ? { reply_to: lead.email } : {}),
      }),
    });
    if (!res.ok) {
      console.warn("[leads] Resend rejected the message:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.warn("[leads] Resend request failed:", err);
    return false;
  }
}

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: unknown): LeadPayload => {
    const d = (data ?? {}) as Record<string, unknown>;
    const source =
      d.source === "chat-widget" || d.source === "diagnostic" ? d.source : "contact-form";
    const name = clean(d.name, 200);
    if (!name) throw new Error("name required");
    return {
      source: source as LeadSource,
      name,
      email: clean(d.email, 200),
      phone: clean(d.phone, 60),
      company: clean(d.company, 200),
      service: clean(d.service, 120),
      budget: clean(d.budget, 120),
      message: clean(d.message),
      transcript: clean(d.transcript, MAX_TRANSCRIPT),
      path: clean(d.path, 300),
    };
  })
  .handler(async ({ data }) => {
    let ipHash = "unknown";
    try {
      const ip = getRequestIP({ xForwardedFor: true });
      if (ip) ipHash = await hashIp(ip);
    } catch {
      // Best effort. A missing IP must never block a lead.
    }

    const stored = await storeLead(data, ipHash);
    const emailed = await sendEmail(data);

    // Reported back so the UI can tell the visitor the truth rather than
    // always claiming success the way the old form did.
    return { ok: stored || emailed, stored, emailed };
  });

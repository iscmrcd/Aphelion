/**
 * Aphelion's own site assistant, behind the floating button.
 *
 * Separate from agente-ia-server on purpose. That one runs the three demo
 * agents for prospects and is deliberately stingy: twenty messages, three
 * sessions an hour, because its job is to show a capability. This one talks to
 * real visitors, so cutting a genuine prospect off mid-question would be worse
 * than the abuse it prevents. Limits here are looser but still present.
 *
 * The lead fires as soon as a phone number appears, not when the conversation
 * ends, because most people close the tab without saying goodbye.
 */

import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";
import { APHELION_AGENT_PROMPT, EXTRACTION_PROMPT } from "./aphelion-agent-prompts";

const MODEL = "claude-haiku-4-5-20251001";

/** Generous, but not unbounded: a real prospect rarely needs more. */
const MAX_MESSAGES_PER_SESSION = 40;
const MAX_SESSIONS_PER_IP_PER_HOUR = 8;
const MAX_INPUT_CHARS = 1200;
const MAX_HISTORY_TURNS = 30;

export type ChatRole = "user" | "assistant";
export type ChatTurn = { role: ChatRole; content: string };

export type AphelionReply = {
  reply: string;
  messageCount: number;
  limitReached: boolean;
  /** True once this session's details have been registered as a lead. */
  captured: boolean;
};

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

/**
 * Loose on purpose: Mexican numbers get written as 664 123 4567,
 * +52 664 123 4567, 6641234567 and every variation with dots or dashes.
 * False positives are cheap here because the extraction call vets it after.
 */
const PHONE_RE = /(?:\+?52[\s.-]?)?(?:1[\s.-]?)?(?:\(?\d{2,3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/;

function looksLikePhone(text: string): boolean {
  const m = text.match(PHONE_RE);
  if (!m) return false;
  // Reject prices and years: needs at least 10 digits to be a phone here.
  return (m[0].match(/\d/g) ?? []).length >= 10;
}

/** Has this session already produced a lead? Avoids duplicate rows. */
async function alreadyCaptured(cfg: SupabaseConfig, sessionId: string): Promise<boolean> {
  try {
    const res = await fetch(
      `${cfg.url}/rest/v1/leads?session_id=eq.${encodeURIComponent(sessionId)}&select=id&limit=1`,
      { headers: sbHeaders(cfg) },
    );
    if (!res.ok) return false;
    const rows = (await res.json()) as unknown[];
    return rows.length > 0;
  } catch {
    return false;
  }
}

async function countSessionsForIp(cfg: SupabaseConfig, ipHash: string): Promise<number | null> {
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  try {
    const res = await fetch(
      `${cfg.url}/rest/v1/agent_messages?ip_hash=eq.${encodeURIComponent(ipHash)}` +
        `&created_at=gte.${encodeURIComponent(since)}&select=session_id`,
      { headers: sbHeaders(cfg) },
    );
    if (!res.ok) return null;
    const rows = (await res.json()) as Array<{ session_id: string }>;
    return new Set(rows.map((r) => r.session_id)).size;
  } catch {
    return null;
  }
}

async function countMessages(cfg: SupabaseConfig, sessionId: string): Promise<number | null> {
  try {
    const res = await fetch(
      `${cfg.url}/rest/v1/agent_messages?session_id=eq.${encodeURIComponent(sessionId)}&select=id`,
      { headers: { ...sbHeaders(cfg), Prefer: "count=exact", Range: "0-0" } },
    );
    if (!res.ok) return null;
    const range = res.headers.get("content-range");
    const total = range?.split("/")[1];
    return total && total !== "*" ? Number(total) : null;
  } catch {
    return null;
  }
}

async function logTurn(cfg: SupabaseConfig, row: Record<string, unknown>): Promise<void> {
  try {
    await fetch(`${cfg.url}/rest/v1/agent_messages`, {
      method: "POST",
      headers: { ...sbHeaders(cfg), Prefer: "return=minimal" },
      body: JSON.stringify(row),
    });
  } catch {
    // Logging must never break the conversation.
  }
}

async function anthropic(
  system: string,
  messages: ChatTurn[],
  maxTokens: number,
): Promise<string | null> {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({ model: MODEL, max_tokens: maxTokens, system, messages }),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { content?: Array<{ text?: string }> };
    return (
      json.content
        ?.map((c) => c.text ?? "")
        .join("")
        .trim() || null
    );
  } catch {
    return null;
  }
}

/** One cheap call, only on the turn a phone first appears. */
async function extractLead(
  history: ChatTurn[],
): Promise<{ name: string | null; phone: string | null; interest: string | null } | null> {
  const transcript = history
    .map((m) => `${m.role === "user" ? "Visitante" : "Asistente"}: ${m.content}`)
    .join("\n");
  const out = await anthropic(EXTRACTION_PROMPT, [{ role: "user", content: transcript }], 300);
  if (!out) return null;
  try {
    const json = out.slice(out.indexOf("{"), out.lastIndexOf("}") + 1);
    const parsed = JSON.parse(json) as Record<string, unknown>;
    const str = (v: unknown) =>
      typeof v === "string" && v.trim() && v.trim().toLowerCase() !== "null"
        ? v.trim().slice(0, 200)
        : null;
    return { name: str(parsed.name), phone: str(parsed.phone), interest: str(parsed.interest) };
  } catch {
    return null;
  }
}

async function storeLeadRow(cfg: SupabaseConfig, row: Record<string, unknown>): Promise<boolean> {
  try {
    const res = await fetch(`${cfg.url}/rest/v1/leads`, {
      method: "POST",
      headers: { ...sbHeaders(cfg), Prefer: "return=minimal" },
      body: JSON.stringify(row),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function emailLead(fields: {
  name: string;
  phone: string;
  interest: string;
  transcript: string;
  path: string;
}): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.LEADS_TO_EMAIL;
  if (!key || !from || !to) return;
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `Lead del chat · ${fields.name || "sin nombre"} · ${fields.phone}`,
        html:
          `<div style="font-family:system-ui,sans-serif;max-width:640px">` +
          `<h2 style="font-size:18px;margin:0 0 12px">Lead capturado por el agente</h2>` +
          `<p style="font-size:14px;margin:0 0 4px"><b>Nombre:</b> ${esc(fields.name || "—")}</p>` +
          `<p style="font-size:14px;margin:0 0 4px"><b>WhatsApp:</b> ${esc(fields.phone)}</p>` +
          `<p style="font-size:14px;margin:0 0 4px"><b>Busca:</b> ${esc(fields.interest || "—")}</p>` +
          `<p style="font-size:14px;margin:0 0 16px"><b>Página:</b> ${esc(fields.path || "—")}</p>` +
          `<h3 style="font-size:14px;margin:0 0 6px">Conversación</h3>` +
          `<pre style="white-space:pre-wrap;font-size:13px;background:#f6f8f9;padding:12px;border-radius:8px;margin:0">${esc(fields.transcript)}</pre>` +
          `</div>`,
      }),
    });
  } catch {
    // The lead is already stored; a failed email must not throw.
  }
}

export const chatWithAphelion = createServerFn({ method: "POST" })
  .validator(
    (data: unknown): { sessionId: string; message: string; history: ChatTurn[]; path?: string } => {
      const d = (data ?? {}) as Record<string, unknown>;
      const sessionId = typeof d.sessionId === "string" ? d.sessionId.slice(0, 64) : "";
      const message =
        typeof d.message === "string" ? d.message.trim().slice(0, MAX_INPUT_CHARS) : "";
      if (!sessionId || !message) throw new Error("sessionId and message required");
      const rawHistory = Array.isArray(d.history) ? d.history : [];
      const history: ChatTurn[] = rawHistory
        .filter(
          (m): m is ChatTurn =>
            !!m &&
            typeof m === "object" &&
            ((m as ChatTurn).role === "user" || (m as ChatTurn).role === "assistant") &&
            typeof (m as ChatTurn).content === "string",
        )
        .slice(-MAX_HISTORY_TURNS)
        .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_INPUT_CHARS) }));
      return {
        sessionId,
        message,
        history,
        path: typeof d.path === "string" ? d.path.slice(0, 300) : "",
      };
    },
  )
  .handler(async ({ data }): Promise<AphelionReply> => {
    const cfg = supabaseConfig();

    let ipHash = "unknown";
    try {
      const ip = getRequestIP({ xForwardedFor: true });
      if (ip) ipHash = await hashIp(ip);
    } catch {
      // Best effort.
    }

    // Fail closed on the counters the same way the demo does: if Supabase is
    // unreachable we trust the client-declared history length as a floor
    // rather than granting unlimited turns.
    let messageCount = data.history.filter((m) => m.role === "user").length;
    if (cfg) {
      const counted = await countMessages(cfg, data.sessionId);
      if (counted !== null) messageCount = counted;

      if (messageCount === 0) {
        const sessions = await countSessionsForIp(cfg, ipHash);
        if (sessions !== null && sessions >= MAX_SESSIONS_PER_IP_PER_HOUR) {
          return {
            reply:
              "Parece que ya tuvimos varias conversaciones desde aquí hace poco. Escríbenos directo por WhatsApp y te atendemos de inmediato.",
            messageCount,
            limitReached: true,
            captured: false,
          };
        }
      }
    }

    if (messageCount >= MAX_MESSAGES_PER_SESSION) {
      return {
        reply:
          "Creo que ya es momento de que te atienda alguien del equipo. Déjame tu WhatsApp y te escribimos, o escríbenos tú directo por ahí.",
        messageCount,
        limitReached: true,
        captured: false,
      };
    }

    const messages: ChatTurn[] = [...data.history, { role: "user", content: data.message }];
    const reply =
      (await anthropic(APHELION_AGENT_PROMPT, messages, 500)) ??
      "Se me cayó la conexión un segundo. ¿Me lo repites? Si prefieres, escríbenos por WhatsApp y te contestamos ahí.";

    if (cfg) {
      await logTurn(cfg, {
        session_id: data.sessionId,
        ip_hash: ipHash,
        user_message: data.message,
        assistant_message: reply,
        message_index: messageCount + 1,
      });
    }

    /*
     * Fire the lead the moment a phone number shows up. Waiting for the
     * conversation to "end" would lose most of them: people close the tab.
     */
    let captured = false;
    const userText = messages
      .filter((m) => m.role === "user")
      .map((m) => m.content)
      .join(" ");

    if (cfg && looksLikePhone(userText)) {
      const done = await alreadyCaptured(cfg, data.sessionId);
      if (!done) {
        const full: ChatTurn[] = [...messages, { role: "assistant", content: reply }];
        const info = await extractLead(full);
        if (info?.phone) {
          const transcript = full
            .map((m) => `${m.role === "user" ? "Visitante" : "Aphelion"}: ${m.content}`)
            .join("\n");
          const stored = await storeLeadRow(cfg, {
            source: "chat-widget",
            name: info.name || "Visitante del chat",
            phone: info.phone,
            message: info.interest,
            transcript,
            path: data.path || null,
            ip_hash: ipHash,
            session_id: data.sessionId,
          });
          if (stored) {
            captured = true;
            await emailLead({
              name: info.name || "",
              phone: info.phone,
              interest: info.interest || "",
              transcript,
              path: data.path || "",
            });
          }
        }
      } else {
        captured = true;
      }
    }

    return {
      reply,
      messageCount: messageCount + 1,
      limitReached: messageCount + 1 >= MAX_MESSAGES_PER_SESSION,
      captured,
    };
  });

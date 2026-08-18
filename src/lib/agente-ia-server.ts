/**
 * Server-side chat endpoint for the Agente IA demo.
 *
 * Runs exclusively on the server via createServerFn, so ANTHROPIC_API_KEY and
 * the Supabase service key never reach the client bundle.
 *
 * Guardrail design note:
 * This app builds to Cloudflare Workers, which is stateless — module-level
 * counters would reset per isolate and be trivially bypassed. So every limit
 * (per-session message count, per-IP session count) is derived from Supabase,
 * which is the single source of truth shared across all isolates AND across
 * all three agents. Switching agents does not reset anything, because the
 * counters key off session_id / ip, never off agent_type.
 */

import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";
import { DEMO_AGENTS, isAgentType, type AgentType } from "./agente-ia-data";
import { AGENT_PROMPTS } from "./agente-ia-prompts";

const MODEL = "claude-haiku-4-5-20251001";

/** Hard ceiling of user messages allowed per session_id, across all agents. */
const MAX_MESSAGES_PER_SESSION = 20;
/** Turn at which the agent is told to wrap up and hand off to a human. */
const SOFT_CLOSE_TURN = 12;
/** New sessions allowed per IP per rolling hour, across all agents. */
const MAX_SESSIONS_PER_IP_PER_HOUR = 3;
/** Defensive caps so a crafted client payload can't blow up the prompt. */
const MAX_INPUT_CHARS = 1000;
const MAX_HISTORY_TURNS = 24;

export type ChatRole = "user" | "assistant";
export type ChatTurn = { role: ChatRole; content: string };

export type ChatReply = {
  reply: string;
  /** User messages consumed so far in this session, across every agent. */
  messageCount: number;
  remaining: number;
  /** True when the session is finished and the composer should lock. */
  limitReached: boolean;
  /** Set when the request was refused before reaching the model. */
  blocked?: "session_limit" | "rate_limit" | "unavailable";
};

/* ------------------------------------------------------------------ */
/* Supabase (REST via fetch — no SDK needed, Workers-friendly)          */
/* ------------------------------------------------------------------ */

type SupabaseConfig = { url: string; key: string };

/**
 * Resolves the Supabase connection from whichever env var names are present.
 * The database is provisioned through Lovable, which may expose these under a
 * few different names depending on how the integration is wired, so we accept
 * the common variants rather than hard-coding one.
 *
 * A service-role key is required: RLS is enabled on demo_conversations with no
 * policies, so an anon key can neither read nor write it. Without the service
 * role we intentionally fall back to the degraded (history-derived) ceiling
 * rather than failing open.
 */
function supabaseConfig(): SupabaseConfig | null {
  const env = process.env;
  const url = env.SUPABASE_URL || env.VITE_SUPABASE_URL || env.SUPABASE_PROJECT_URL;
  const key = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_KEY || env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    if (url && !key) {
      console.warn(
        "[agente-ia demo] Supabase URL found but no service-role key — " +
          "guardrails are running in degraded mode and conversations are not being logged.",
      );
    }
    return null;
  }
  return { url: url.replace(/\/$/, ""), key };
}

function supabaseHeaders(cfg: SupabaseConfig) {
  return {
    apikey: cfg.key,
    Authorization: `Bearer ${cfg.key}`,
    "Content-Type": "application/json",
  };
}

/**
 * Counts rows matching a filter using PostgREST's exact count, without
 * transferring the rows themselves.
 */
async function countRows(cfg: SupabaseConfig, query: string): Promise<number | null> {
  try {
    const res = await fetch(`${cfg.url}/rest/v1/demo_conversations?${query}&select=id`, {
      method: "HEAD",
      headers: { ...supabaseHeaders(cfg), Prefer: "count=exact" },
    });
    if (!res.ok) return null;
    // content-range looks like "0-24/25"; the total is after the slash.
    const total = res.headers.get("content-range")?.split("/")[1];
    if (!total || total === "*") return null;
    const parsed = Number.parseInt(total, 10);
    return Number.isFinite(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

/** User messages already recorded for this session, regardless of agent. */
async function countSessionMessages(
  cfg: SupabaseConfig,
  sessionId: string,
): Promise<number | null> {
  return countRows(cfg, `session_id=eq.${encodeURIComponent(sessionId)}`);
}

/** Distinct sessions started by this IP in the last hour, regardless of agent. */
async function countRecentSessionsForIp(cfg: SupabaseConfig, ip: string): Promise<number | null> {
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  try {
    const res = await fetch(
      `${cfg.url}/rest/v1/demo_conversations` +
        `?ip_hash=eq.${encodeURIComponent(ip)}` +
        `&created_at=gte.${encodeURIComponent(since)}` +
        `&select=session_id`,
      { headers: supabaseHeaders(cfg) },
    );
    if (!res.ok) return null;
    const rows = (await res.json()) as Array<{ session_id: string }>;
    return new Set(rows.map((r) => r.session_id)).size;
  } catch {
    return null;
  }
}

async function logExchange(
  cfg: SupabaseConfig,
  row: {
    session_id: string;
    agent_type: AgentType;
    ip_hash: string;
    user_message: string;
    assistant_message: string;
    message_index: number;
  },
): Promise<void> {
  try {
    await fetch(`${cfg.url}/rest/v1/demo_conversations`, {
      method: "POST",
      headers: { ...supabaseHeaders(cfg), Prefer: "return=minimal" },
      body: JSON.stringify(row),
    });
  } catch {
    // Logging must never break the visitor's conversation.
  }
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

/**
 * Hashes the IP so raw addresses are never stored. Uses Web Crypto, which is
 * available on both Workers and Node 18+.
 */
async function hashIp(ip: string): Promise<string> {
  try {
    const data = new TextEncoder().encode(`aphelion-demo:${ip}`);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest))
      .slice(0, 16)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  } catch {
    return "unknown";
  }
}

function sanitizeHistory(history: unknown): ChatTurn[] {
  if (!Array.isArray(history)) return [];
  const turns: ChatTurn[] = [];
  for (const item of history) {
    if (!item || typeof item !== "object") continue;
    const role = (item as ChatTurn).role;
    const content = (item as ChatTurn).content;
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string" || !content.trim()) continue;
    turns.push({ role, content: content.slice(0, MAX_INPUT_CHARS) });
  }
  // Keep only the tail, and make sure the model always sees a user turn first.
  const tail = turns.slice(-MAX_HISTORY_TURNS);
  const firstUser = tail.findIndex((t) => t.role === "user");
  return firstUser <= 0 ? tail : tail.slice(firstUser);
}

function closingInstruction(lang: "es" | "en"): string {
  return lang === "es"
    ? "\n\nNOTA DEL SISTEMA: esta conversación de demostración está por terminar. Cierra de forma natural en este mensaje: resume brevemente lo que entendiste, y di que para continuar el equipo de Aphelion puede contactarlos. No hagas más preguntas nuevas."
    : "\n\nSYSTEM NOTE: this demo conversation is about to end. Close naturally in this message: briefly summarize what you understood, and mention that the Aphelion team can follow up to continue. Do not ask any new questions.";
}

function limitMessage(lang: "es" | "en", agent: AgentType): string {
  const business = DEMO_AGENTS[agent].businessName;
  return lang === "es"
    ? `Aquí termina la demo 😊 Platicamos como lo haría ${business} con un cliente real. Si quieres un agente así para tu negocio, escríbenos y lo armamos: aphelion.mx/contacto`
    : `That's the end of the demo 😊 This is how ${business} would talk to a real customer. If you want an agent like this for your business, reach out and we'll build it: aphelion.mx/contacto`;
}

/* ------------------------------------------------------------------ */
/* Server function                                                     */
/* ------------------------------------------------------------------ */

export const sendDemoMessage = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    const input = (data ?? {}) as Record<string, unknown>;

    const sessionId = typeof input.sessionId === "string" ? input.sessionId.slice(0, 64) : "";
    const message = typeof input.message === "string" ? input.message.trim() : "";
    const lang = input.lang === "es" ? "es" : "en";

    if (!sessionId) throw new Error("Missing sessionId");
    if (!isAgentType(input.agentType)) throw new Error("Invalid agentType");
    if (!message) throw new Error("Empty message");

    return {
      sessionId,
      agentType: input.agentType,
      message: message.slice(0, MAX_INPUT_CHARS),
      history: sanitizeHistory(input.history),
      lang: lang as "es" | "en",
    };
  })
  .handler(async ({ data }): Promise<ChatReply> => {
    const { sessionId, agentType, message, history, lang } = data;
    const agent = DEMO_AGENTS[agentType];

    const apiKey = process.env.ANTHROPIC_API_KEY;
    const cfg = supabaseConfig();

    if (!apiKey) {
      return {
        reply:
          lang === "es"
            ? "La demo no está disponible en este momento. Escríbenos y con gusto te la mostramos en vivo."
            : "The demo isn't available right now. Reach out and we'll gladly walk you through it live.",
        messageCount: 0,
        remaining: MAX_MESSAGES_PER_SESSION,
        limitReached: false,
        blocked: "unavailable",
      };
    }

    const rawIp = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    const ipHash = await hashIp(rawIp);

    // --- Guardrails, all derived from Supabase so they survive statelessness ---
    // Fallback: if Supabase is unreachable or unconfigured we must NOT fail open,
    // or the demo becomes an unmetered path to the model. The client-sent history
    // is spoofable, so it is a weaker ceiling than the database, but it still caps
    // casual abuse. Real enforcement requires SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY.
    const historyFloor = history.filter((turn) => turn.role === "user").length;
    let priorMessages = historyFloor;

    if (cfg) {
      const counted = await countSessionMessages(cfg, sessionId);
      // Trust whichever source has seen more messages.
      if (counted !== null) priorMessages = Math.max(counted, historyFloor);

      // Only gate brand-new sessions; an in-flight conversation is never cut off.
      if (priorMessages === 0) {
        const recentSessions = await countRecentSessionsForIp(cfg, ipHash);
        if (recentSessions !== null && recentSessions >= MAX_SESSIONS_PER_IP_PER_HOUR) {
          return {
            reply:
              lang === "es"
                ? "Ya probaste la demo varias veces 🙂 Para seguir explorándola, escríbenos y te la mostramos con tu propio caso: aphelion.mx/contacto"
                : "You've already run the demo a few times 🙂 To keep exploring, reach out and we'll walk through it with your own use case: aphelion.mx/contacto",
            messageCount: 0,
            remaining: 0,
            limitReached: true,
            blocked: "rate_limit",
          };
        }
      }
    }

    // Applies with or without Supabase.
    if (priorMessages >= MAX_MESSAGES_PER_SESSION) {
      return {
        reply: limitMessage(lang, agentType),
        messageCount: priorMessages,
        remaining: 0,
        limitReached: true,
        blocked: "session_limit",
      };
    }

    const messageCount = priorMessages + 1;
    const shouldForceClose = messageCount >= SOFT_CLOSE_TURN;

    const basePrompt = AGENT_PROMPTS[agentType];
    const systemPrompt = shouldForceClose ? basePrompt + closingInstruction(lang) : basePrompt;

    // --- Model call ---
    let reply: string;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 400,
          system: systemPrompt,
          messages: [...history, { role: "user", content: message }],
        }),
      });

      if (!res.ok) throw new Error(`Anthropic responded ${res.status}`);

      const json = (await res.json()) as {
        content?: Array<{ type: string; text?: string }>;
      };
      reply =
        json.content
          ?.filter((b) => b.type === "text")
          .map((b) => b.text ?? "")
          .join("")
          .trim() || "";

      if (!reply) throw new Error("Empty completion");
    } catch (error) {
      console.error("[agente-ia demo]", error);
      return {
        reply:
          lang === "es"
            ? "Se me cruzaron los cables un segundo 😅 ¿Me lo repites?"
            : "My wires crossed for a second there 😅 Mind saying that again?",
        messageCount: priorMessages,
        remaining: Math.max(0, MAX_MESSAGES_PER_SESSION - priorMessages),
        limitReached: false,
        blocked: "unavailable",
      };
    }

    if (cfg) {
      await logExchange(cfg, {
        session_id: sessionId,
        agent_type: agentType,
        ip_hash: ipHash,
        user_message: message,
        assistant_message: reply,
        message_index: messageCount,
      });
    }

    return {
      reply,
      messageCount,
      remaining: Math.max(0, MAX_MESSAGES_PER_SESSION - messageCount),
      limitReached: messageCount >= MAX_MESSAGES_PER_SESSION,
    };
  });

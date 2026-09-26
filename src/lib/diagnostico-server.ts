/**
 * Stores every finished diagnostic, with or without a lead.
 *
 * The browser shows the result instantly and then calls this in the
 * background. Nothing here is personal: no name, phone or email, only the
 * answers, the recomputed score and where the visit came from. That is what
 * shows which industries use the tool, where they score low and which
 * campaigns bring them, before anyone asks for a call.
 *
 * The score is recomputed here from the raw answer indexes with the same
 * scoreDiagnostic() the browser uses, so a crafted request cannot store a
 * fake result. A lead, when it comes, lands in `leads` with session_id set to
 * this attempt_id, which is the join key between the two tables.
 */

import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";
import { bandaFor, getVertical, scoreDiagnostic, type Answers } from "@/lib/diagnostico-data";
import { hashIp, supabaseConfig, supabaseHeaders } from "@/lib/notify-server";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Generous: a person retaking it a few times never gets near it; a script does. */
const MAX_PER_IP_PER_HOUR = 30;

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "landing_path",
  "referrer",
] as const;

type SavePayload = {
  attemptId: string;
  vertical: string;
  lang: "es" | "en";
  entry: "selector" | "direct";
  answers: Answers;
  attribution: Partial<Record<(typeof ATTRIBUTION_KEYS)[number], string>> & {
    click_source?: "meta" | "google";
  };
};

const clip = (v: unknown, max: number) =>
  typeof v === "string" && v.trim() ? v.trim().slice(0, max) : undefined;

export const saveDiagnostic = createServerFn({ method: "POST" })
  .validator((data: unknown): SavePayload => {
    const d = (data ?? {}) as Record<string, unknown>;
    if (typeof d.attemptId !== "string" || !UUID_RE.test(d.attemptId)) {
      throw new Error("invalid attempt");
    }
    const v = typeof d.vertical === "string" ? getVertical(d.vertical) : undefined;
    if (!v) throw new Error("invalid vertical");

    // Every question must be answered with an index that exists. Unknown keys
    // are dropped rather than stored.
    const raw = (d.answers ?? {}) as Record<string, unknown>;
    const answers: Answers = {};
    for (const q of v.questions) {
      const idx = raw[q.id];
      if (typeof idx !== "number" || !Number.isInteger(idx) || idx < 0 || idx >= q.options.length) {
        throw new Error("invalid answers");
      }
      answers[q.id] = idx;
    }

    const a = (d.attribution ?? {}) as Record<string, unknown>;
    const attribution: SavePayload["attribution"] = {};
    for (const k of ATTRIBUTION_KEYS) {
      const val = clip(a[k], k === "landing_path" ? 300 : 200);
      if (val) attribution[k] = val;
    }
    if (a.click_source === "meta" || a.click_source === "google") {
      attribution.click_source = a.click_source;
    }

    return {
      attemptId: d.attemptId,
      vertical: v.slug,
      lang: d.lang === "es" ? "es" : "en",
      entry: d.entry === "selector" ? "selector" : "direct",
      answers,
      attribution,
    };
  })
  .handler(async ({ data }) => {
    const cfg = supabaseConfig();
    if (!cfg) {
      console.warn("[diagnosticos] Supabase not configured — result not stored.");
      return { ok: false };
    }

    let ipHash = "unknown";
    try {
      const ip = getRequestIP({ xForwardedFor: true });
      if (ip) ipHash = await hashIp(ip);
    } catch {
      // Best effort.
    }

    // Rate limit per IP. Fails open: losing an analytics row is worse than
    // storing one extra, and nothing here costs money or reaches anyone.
    if (ipHash !== "unknown") {
      try {
        const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
        const res = await fetch(
          `${cfg.url}/rest/v1/diagnosticos?ip_hash=eq.${encodeURIComponent(ipHash)}` +
            `&created_at=gte.${encodeURIComponent(since)}&select=id`,
          { headers: { ...supabaseHeaders(cfg), Prefer: "count=exact", Range: "0-0" } },
        );
        const total = Number(res.headers.get("content-range")?.split("/")[1]);
        if (res.ok && Number.isFinite(total) && total >= MAX_PER_IP_PER_HOUR) {
          return { ok: false, limited: true };
        }
      } catch {
        // Counter unavailable: store anyway.
      }
    }

    const v = getVertical(data.vertical)!;
    const r = scoreDiagnostic(v, data.answers);
    const band = bandaFor(r.rawScore, v);
    const context = Object.fromEntries(r.context.map((c) => [c.id, c.label]));

    try {
      const res = await fetch(`${cfg.url}/rest/v1/diagnosticos?on_conflict=attempt_id`, {
        method: "POST",
        headers: {
          ...supabaseHeaders(cfg),
          // Same attempt re-sent (a retry, a double tap) updates its row.
          Prefer: "resolution=merge-duplicates,return=minimal",
        },
        body: JSON.stringify({
          attempt_id: data.attemptId,
          vertical: v.slug,
          version: v.version,
          lang: data.lang,
          entry: data.entry,
          score: r.score,
          raw_score: r.rawScore,
          coverage: r.coverage,
          partial: r.partial,
          band: band.label,
          answers: data.answers,
          gaps: r.gaps.map((q) => q.id),
          unknown: r.unknown.map((q) => q.id),
          not_applicable: r.notApplicable.map((q) => q.id),
          context,
          utm_source: data.attribution.utm_source ?? null,
          utm_medium: data.attribution.utm_medium ?? null,
          utm_campaign: data.attribution.utm_campaign ?? null,
          utm_content: data.attribution.utm_content ?? null,
          utm_term: data.attribution.utm_term ?? null,
          click_source: data.attribution.click_source ?? null,
          landing_path: data.attribution.landing_path ?? null,
          referrer: data.attribution.referrer ?? null,
          ip_hash: ipHash,
          updated_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        console.warn("[diagnosticos] insert rejected:", res.status, await res.text());
      }
      return { ok: res.ok };
    } catch (err) {
      console.warn("[diagnosticos] insert failed:", err);
      return { ok: false };
    }
  });

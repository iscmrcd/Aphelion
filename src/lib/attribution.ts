/**
 * First-touch attribution for the current tab.
 *
 * The root route's search validator keeps only `lang`, so utm_* parameters
 * disappear on the first client-side navigation. This captures them once, on
 * the landing page, before that happens, and keeps them in sessionStorage so
 * a diagnostic finished three pages later still knows which ad it came from.
 *
 * Only the presence of a click id is recorded (meta / google), never the id
 * itself: it is enough to tell paid from organic and it identifies nobody.
 */

const KEY = "aphelion.attribution";

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  click_source?: "meta" | "google";
  landing_path?: string;
  referrer?: string;
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

const clip = (v: string | null | undefined, max = 200) => (v ? v.trim().slice(0, max) : undefined);

/** Call once on mount. Keeps the first touch; later pages never overwrite it. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    if (window.sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const a: Attribution = {};
    for (const k of UTM_KEYS) {
      const v = clip(params.get(k));
      if (v) a[k] = v;
    }
    if (params.has("fbclid")) a.click_source = "meta";
    else if (params.has("gclid") || params.has("gbraid") || params.has("wbraid"))
      a.click_source = "google";
    a.landing_path = clip(window.location.pathname, 300);
    // Only the referring site, not the full URL, which can carry personal data.
    if (document.referrer) {
      try {
        const host = new URL(document.referrer).hostname;
        if (host && host !== window.location.hostname) a.referrer = clip(host, 120);
      } catch {
        // Malformed referrer: ignore.
      }
    }
    window.sessionStorage.setItem(KEY, JSON.stringify(a));
  } catch {
    // Storage blocked (private mode, strict settings): attribution is optional.
  }
}

export function readAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

/** One line for the lead email, e.g. "meta · facebook / paid · clinicas-sept". */
export function describeAttribution(a: Attribution): string {
  const parts = [
    a.click_source,
    [a.utm_source, a.utm_medium].filter(Boolean).join(" / "),
    a.utm_campaign,
    a.utm_content,
  ].filter(Boolean);
  const origin = parts.length
    ? parts.join(" · ")
    : a.referrer
      ? `referido: ${a.referrer}`
      : "directo u orgánico";
  return a.landing_path ? `${origin} (entrada: ${a.landing_path})` : origin;
}

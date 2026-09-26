/**
 * Meta Pixel helpers.
 *
 * The base snippet in __root.tsx only loads in production, so in dev and in
 * the Lovable preview window.fbq is undefined and every call here is a no-op.
 * Nothing in this file may throw: tracking must never break the page.
 *
 * What is sent, on purpose: event names, the vertical slug and whether the
 * visitor came in through the selector or a direct link. What is never sent:
 * scores, answers, gaps, names, phones or emails. Meta gets "someone from a
 * dental practice finished the diagnostic", not how that practice is doing.
 */

type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

type Params = Record<string, string | number | boolean>;

function fbq(): Fbq | null {
  if (typeof window === "undefined") return null;
  return typeof window.fbq === "function" ? window.fbq : null;
}

/** Standard events (PageView, Lead, ...). eventID lets a future server-side feed deduplicate. */
export function trackStandard(event: "PageView" | "Lead", params?: Params, eventId?: string) {
  const f = fbq();
  if (!f) return;
  try {
    if (eventId) f("track", event, params ?? {}, { eventID: eventId });
    else f("track", event, params ?? {});
  } catch {
    // Never let tracking break the page.
  }
}

/** Custom events, used to build audiences per industry in Ads Manager. */
export function trackCustom(event: string, params?: Params) {
  const f = fbq();
  if (!f) return;
  try {
    f("trackCustom", event, params ?? {});
  } catch {
    // Never let tracking break the page.
  }
}

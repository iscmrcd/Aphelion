import { hasAdvertisingOptOut, isMetaHost, regionAllowsMeta } from "./meta-permission";

export const META_PIXEL_ID = "2813619889012734";
type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  push?: Fbq;
  loaded?: boolean;
  version?: string;
};
type PixelState = { allowed: boolean; initialized: boolean; sent: Set<string>; revoked: boolean; lastPagePath?: string };
declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
    aphelionMeta?: PixelState;
  }
}
type Params = Record<string, string | number | boolean>;

function permittedPixel(): Fbq | null {
  try {
    if (typeof window === "undefined" || !isMetaHost(window.location.hostname)) return null;
    const state = window.aphelionMeta;
    if (!state?.allowed || !state.initialized) return null;
    if (hasAdvertisingOptOut()) {
      if (!state.revoked) window.fbq?.("consent", "revoke");
      state.revoked = true;
      return null;
    }
    // Withdrawal is not an absent choice; never resume an old instance.
    if (state.revoked) return null;
    return typeof window.fbq === "function" ? window.fbq : null;
  } catch { return null; }
}

/** One SDK initialization; all PageViews share the path guard below. */
export async function initializeMetaPixel(): Promise<void> {
  try {
    if (typeof window === "undefined" || !isMetaHost(window.location.hostname) || window.aphelionMeta) return;
    const state: PixelState = { allowed: false, initialized: false, sent: new Set(), revoked: false };
    window.aphelionMeta = state;
    if (hasAdvertisingOptOut()) return;
    const response = await fetch("/cdn-cgi/trace", { signal: AbortSignal.timeout(2000) });
    if (!response.ok || !regionAllowsMeta(await response.text(), window.location.hostname) || hasAdvertisingOptOut()) return;
    state.allowed = true;
    // An existing unexpected install is not initialized a second time.
    if (window.fbq) return;
    const queue: unknown[][] = [];
    const f: Fbq = (...args) => {
      if (f.callMethod) f.callMethod.apply(f, args);
      else queue.push(args);
    };
    f.queue = queue;
    f.push = f;
    f.loaded = true;
    f.version = "2.0";
    window.fbq = f;
    window._fbq = f;
    state.initialized = true;
    f("init", META_PIXEL_ID, {}, { agent: "lovable" });
    trackPageView();
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  } catch { /* Measurement must never break the page. */ }
}

/** One view per path transition, ignoring language/query/hash-only changes. */
export function trackPageView(): void {
  try {
    const f = permittedPixel();
    const state = window.aphelionMeta;
    if (!f || !state) return;
    const path = window.location.pathname;
    if (state.lastPagePath === path) return;
    state.lastPagePath = path;
    f("track", "PageView");
  } catch { /* Measurement must never affect navigation. */ }
}

/** The ID deduplicates a successful outcome, not a button press. */
export function trackStandard(event: "PageView" | "Lead" | "Contact", params?: Params, eventId?: string): void {
  try {
    const f = permittedPixel();
    if (!f) return;
    const key = eventId ? `${event}:${eventId}` : undefined;
    if (key && window.aphelionMeta?.sent.has(key)) return;
    if (key) window.aphelionMeta?.sent.add(key);
    if (eventId) f("track", event, params ?? {}, { eventID: eventId });
    else f("track", event, params ?? {});
  } catch { /* No retry/replay of blocked or uncertain events. */ }
}

export function trackCustom(event: string, params?: Params): void {
  try { permittedPixel()?.("trackCustom", event, params ?? {}); } catch { /* No-op. */ }
}

export function trackContactFormResult(res: { ok?: boolean } | null | undefined, eventId: string): void {
  if (res?.ok === true) trackStandard("Lead", { content_name: "contact_form", lead_source: "contact-form" }, eventId);
}

export function trackChatResult(res: { captured?: boolean } | null | undefined, sessionId: string): void {
  if (res?.captured === true) trackStandard("Lead", { content_name: "aphelion_chat", lead_source: "chat" }, `chat:${sessionId}`);
}

export function contactChannel(href: string): "whatsapp" | "email" | "phone" | null {
  try {
    const url = new URL(href);
    if (url.protocol === "mailto:") return "email";
    if (url.protocol === "tel:") return "phone";
    if ((url.protocol === "https:" || url.protocol === "http:")
      && (url.hostname === "wa.me" || url.hostname === "api.whatsapp.com")) return "whatsapp";
  } catch { /* Internal and malformed links are not contacts. */ }
  return null;
}

/** Capture delegation covers dynamically inserted chat links without blocking navigation. */
export function installContactTracking(): () => void {
  if (typeof document === "undefined") return () => {};
  const listener = (event: MouseEvent) => {
    try {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      const channel = contactChannel(link?.getAttribute("href") ?? "");
      if (channel) trackStandard("Contact", { content_name: "contact_click", channel });
    } catch { /* Never interfere with navigation. */ }
  };
  const withdraw = () => { permittedPixel(); };
  document.addEventListener("click", listener, true);
  window.addEventListener("storage", withdraw);
  window.addEventListener("advertising-consent-change", withdraw);
  return () => {
    document.removeEventListener("click", listener, true);
    window.removeEventListener("storage", withdraw);
    window.removeEventListener("advertising-consent-change", withdraw);
  };
}

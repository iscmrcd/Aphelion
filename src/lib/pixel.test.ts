import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import { isMetaHost, regionAllowsMeta } from "./meta-permission";
import { contactChannel, initializeMetaPixel, installContactTracking, trackChatResult, trackContactFormResult, trackCustom, trackStandard } from "./pixel";

let calls: unknown[][];
let inserted: unknown[];
let listeners: Map<string, (event: unknown) => void>;
let storage: Map<string, string>;
const original = new Map<string, PropertyDescriptor | undefined>();
function setGlobal(name: string, value: unknown) {
  if (!original.has(name)) original.set(name, Object.getOwnPropertyDescriptor(globalThis, name));
  Object.defineProperty(globalThis, name, { configurable: true, writable: true, value });
}
function ready(hostname = "aphelion.mx") {
  setGlobal("window", {
    location: { hostname }, fbq: (...args: unknown[]) => calls.push(args),
    aphelionMeta: { allowed: true, initialized: true, sent: new Set(), revoked: false },
    addEventListener: (name: string, fn: (event: unknown) => void) => listeners.set(name, fn),
    removeEventListener: (name: string) => listeners.delete(name),
  });
}
beforeEach(() => {
  calls = []; inserted = []; listeners = new Map(); storage = new Map();
  setGlobal("navigator", { doNotTrack: "0", globalPrivacyControl: false });
  setGlobal("localStorage", { getItem: (key: string) => storage.get(key) ?? null });
  setGlobal("document", {
    head: { appendChild: (script: unknown) => inserted.push(script) },
    createElement: () => ({}),
    addEventListener: (name: string, fn: (event: unknown) => void) => listeners.set(name, fn),
    removeEventListener: (name: string) => listeners.delete(name),
  });
  ready();
});
afterEach(() => {
  for (const [name, descriptor] of original) {
    if (descriptor) Object.defineProperty(globalThis, name, descriptor);
    else Reflect.deleteProperty(globalThis, name);
  }
  original.clear();
});

test("only the two exact public hosts are allowed, including production-built previews", () => {
  for (const host of ["aphelion.mx", "www.aphelion.mx", "APHELION.MX"]) assert.equal(isMetaHost(host), true);
  for (const host of ["localhost", "127.0.0.1", "easy-digital-links.lovable.app", "test.aphelion.mx", "aphelion.mx.evil.com", "id-preview--123.lovable.app", "id-preview-6--123.lovable.app", "id-preview-abc--123.lovable.app", "live--123.workspace.lovable.app"]) {
    assert.equal(isMetaHost(host), false);
    ready(host); trackStandard("Lead", {}, "blocked"); trackCustom("IndustrySelected");
  }
  assert.equal(calls.length, 0);
});
test("regional fallback blocks consent regions, unknown, proxy and failed trace", () => {
  assert.equal(regionAllowsMeta("h=aphelion.mx\nloc=MX", "aphelion.mx"), true);
  for (const loc of ["ES", "DE", "GB", "CH", "NO", "XX", "T1", "", "USA"]) assert.equal(regionAllowsMeta(`h=aphelion.mx\nloc=${loc}`, "aphelion.mx"), false);
  assert.equal(regionAllowsMeta("h=proxy.example\nloc=MX", "aphelion.mx"), false);
});
test("contact success alone sends controlled Lead params with eventID", () => {
  trackContactFormResult({ ok: true }, "contact:one");
  assert.deepEqual(calls, [["track", "Lead", { content_name: "contact_form", lead_source: "contact-form" }, { eventID: "contact:one" }]]);
});
test("contact failure, missing response and nonboolean truthy success are not Leads", () => {
  trackContactFormResult({ ok: false }, "failed"); trackContactFormResult(undefined, "missing");
  trackContactFormResult({ ok: "yes" } as unknown as { ok: boolean }, "invalid");
  assert.equal(calls.length, 0);
});
test("repeated successful attempt is counted once; distinct attempts count independently", () => {
  trackContactFormResult({ ok: true }, "a"); trackContactFormResult({ ok: true }, "a"); trackContactFormResult({ ok: true }, "b");
  assert.equal(calls.length, 2);
});
test("chat captured false, opening and questions do not emit Lead; true deduplicates session", () => {
  trackChatResult({ captured: false }, "session"); trackChatResult(undefined, "session");
  assert.equal(calls.length, 0);
  trackChatResult({ captured: true }, "session"); trackChatResult({ captured: true }, "session");
  trackChatResult({ captured: true }, "other");
  assert.equal(calls.length, 2);
  assert.deepEqual(calls[0], ["track", "Lead", { content_name: "aphelion_chat", lead_source: "chat" }, { eventID: "chat:session" }]);
});
test("diagnostic keeps its attempt ID and deduplicates the same outcome", () => {
  trackStandard("Lead", { content_name: "diagnostico" }, "attempt-123");
  trackStandard("Lead", { content_name: "diagnostico" }, "attempt-123");
  assert.equal(calls.length, 1); assert.deepEqual(calls[0]?.[3], { eventID: "attempt-123" });
});
test("contact links classify exact domains and protocols, never internal or lookalike URLs", () => {
  assert.equal(contactChannel("https://wa.me/123?text=private"), "whatsapp");
  assert.equal(contactChannel("https://api.whatsapp.com/send?phone=123&text=private"), "whatsapp");
  assert.equal(contactChannel("mailto:private@example.com?body=secret"), "email");
  assert.equal(contactChannel("tel:+521234"), "phone");
  for (const href of ["/contacto", "https://aphelion.mx/contacto", "https://wa.me.evil.com/123", "javascript:alert(1)", "invalid"]) assert.equal(contactChannel(href), null);
});
test("delegated nested/dynamic link click sends only channel once without preventing navigation", () => {
  class MockElement {
    constructor(private href: string) {}
    closest() { return { getAttribute: () => this.href }; }
  }
  setGlobal("Element", MockElement);
  const cleanup = installContactTracking();
  let prevented = false;
  for (const href of ["https://wa.me/123?text=secret", "mailto:private@example.com", "tel:123", "/contacto"]) {
    listeners.get("click")?.({ target: new MockElement(href), preventDefault: () => { prevented = true; } });
  }
  assert.deepEqual(calls, ["whatsapp", "email", "phone"].map((channel) => ["track", "Contact", { content_name: "contact_click", channel }]));
  assert.equal(prevented, false); cleanup(); assert.equal(listeners.has("click"), false);
});
test("helper errors and absent browser never throw", () => {
  window.fbq = () => { throw new Error("SDK unavailable"); };
  assert.doesNotThrow(() => trackStandard("Lead", {}, "throws"));
  assert.doesNotThrow(() => trackCustom("Anything"));
  setGlobal("window", undefined);
  assert.doesNotThrow(() => trackStandard("Lead"));
});
test("explicit refusal and GPC revoke and block subsequent sends, including storage notification", () => {
  installContactTracking(); storage.set("cookie_consent", JSON.stringify({ advertising: false }));
  listeners.get("storage")?.({}); trackStandard("Lead", {}, "refused");
  assert.deepEqual(calls, [["consent", "revoke"]]);
  ready(); calls = []; navigator.globalPrivacyControl = true;
  trackStandard("Contact"); assert.deepEqual(calls, [["consent", "revoke"]]);
});
test("initializer queues one init with lovable agent and one PageView across repeated calls", async () => {
  window.fbq = undefined; window.aphelionMeta = undefined;
  setGlobal("fetch", async () => ({ ok: true, text: async () => "h=aphelion.mx\nloc=MX" }));
  await Promise.all([initializeMetaPixel(), initializeMetaPixel()]);
  assert.deepEqual(window.fbq?.queue, [["init", "2813619889012734", {}, { agent: "lovable" }], ["track", "PageView"]]);
  assert.equal(inserted.length, 1);
  const dispatched: unknown[][] = [];
  if (window.fbq) window.fbq.callMethod = (...args) => { dispatched.push(args); };
  trackContactFormResult({ ok: true }, "after-ready"); assert.equal(dispatched.length, 1);
});
test("initializer never loads on previews or unresolved regions", async () => {
  let reads = 0;
  setGlobal("fetch", async () => { reads++; throw new Error("timeout"); });
  ready("localhost"); window.fbq = undefined; window.aphelionMeta = undefined;
  await initializeMetaPixel(); assert.equal(reads, 0);
  ready(); window.fbq = undefined; window.aphelionMeta = undefined;
  await initializeMetaPixel(); assert.equal(reads, 1); assert.equal(inserted.length, 0);
  trackStandard("Lead"); assert.equal(calls.length, 0);
});
import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import {
  createHubSpotClient,
  HubSpotFailure,
  isTestLead,
  leadNote,
  normalPhone,
  type CrmLead,
} from "./hubspot-client.server";
import { syncLeadToHubSpot } from "./hubspot-sync.server";
import { submitLead } from "./notify-server";

const lead: CrmLead = {
  id: 99,
  created_at: "2026-11-06T15:00:00Z",
  source: "contact-form",
  name: "Persona de prueba unitaria",
  email: "person@example.test",
  phone: "+1 202 555 0123",
  company: "Example",
  service: "Web",
  message: "<script>unsafe</script>\nConsulta",
  path: "/contacto",
};
const existing = {
  id: "contact-1",
  properties: {
    firstname: "Nombre corregido",
    lastname: "Apellido",
    email: lead.email,
    phone: lead.phone,
    company: "Empresa corregida",
  },
};
const json = (value: unknown, status = 200) =>
  new Response(JSON.stringify(value), { status, headers: { "Content-Type": "application/json" } });
type Request = { url: string; method: string; body: Record<string, unknown> | null };
let calls: Request[] = [];
let originalFetch: typeof fetch;
let savedEnv: Record<string, string | undefined>;
const envNames = [
  "HUBSPOT_SERVICE_KEY",
  "HUBSPOT_SYNC_ENABLED",
  "HUBSPOT_OWNER_ID",
  "SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
  "RESEND_FROM",
  "LEADS_TO_EMAIL",
  "TWILIO_ACCOUNT_SID",
];
beforeEach(() => {
  calls = [];
  originalFetch = globalThis.fetch;
  savedEnv = Object.fromEntries(envNames.map((k) => [k, process.env[k]]));
  for (const k of envNames) delete process.env[k];
});
afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const [k, v] of Object.entries(savedEnv))
    if (v === undefined) delete process.env[k];
    else process.env[k] = v;
});
function mock(handler: (request: Request) => Response | Promise<Response>) {
  const fetcher: typeof fetch = async (input, init) => {
    const request = {
      url: String(input),
      method: init?.method ?? "GET",
      body: typeof init?.body === "string" ? JSON.parse(init.body) : null,
    };
    calls.push(request);
    return handler(request);
  };
  return fetcher;
}
const stages = () => {
  const values: Array<{ stage: string; progress: unknown }> = [];
  return {
    values,
    checkpoint: async (stage: string, progress?: unknown) => {
      values.push({ stage, progress });
    },
  };
};

test("new email contact is captured with a dated, associated note and no subscription fields", async () => {
  const fetcher = mock((r) => {
    if (r.url.includes("idProperty=email")) return json({}, 404);
    if (r.url.endsWith("/search")) return json({ results: [], total: 0 });
    if (r.url.endsWith("/contacts")) return json({ id: "new-contact", properties: {} }, 201);
    if (r.url.endsWith("/notes")) return json({ id: "note-1" }, 201);
    throw Error("Unexpected request");
  });
  const log = stages();
  const result = await createHubSpotClient({
    token: "unit-test",
    ownerId: "owner-1",
    fetcher,
  }).deliver(lead, log.checkpoint);
  assert.deepEqual(result, { contactId: "new-contact", noteId: "note-1" });
  const contact = calls.find((r) => r.url.endsWith("/contacts"))!;
  assert.deepEqual(contact.body?.properties, {
    firstname: lead.name,
    lifecyclestage: "lead",
    hs_lead_status: "NEW",
    email: lead.email,
    phone: lead.phone,
    company: lead.company,
    hubspot_owner_id: "owner-1",
  });
  const note = calls.find((r) => r.url.endsWith("/notes"))!;
  assert.equal(
    (note.body?.properties as Record<string, string>).hs_timestamp,
    "2026-11-06T15:00:00.000Z",
  );
  assert.deepEqual(note.body?.associations, [
    {
      to: { id: "new-contact" },
      types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 }],
    },
  ]);
  assert.equal(log.values[0].stage, "contact_write_pending");
  assert.equal(log.values.at(-1)?.stage, "complete");
  assert.equal(JSON.stringify(contact.body).includes("marketing"), false);
});
test("existing CRM name, company, owner and lifecycle are never reset", async () => {
  const fetcher = mock((r) => (r.method === "GET" ? json(existing) : json({ id: "note-1" })));
  await createHubSpotClient({ token: "unit-test", ownerId: "new-owner", fetcher }).deliver(
    lead,
    async () => {},
  );
  assert.equal(calls.filter((r) => r.method === "PATCH").length, 0);
  assert.equal(calls.filter((r) => r.url.endsWith("/contacts") && r.method === "POST").length, 0);
});
test("CRM delivery works with the Workers redirect modes", async () => {
  const handler = mock((r) => (r.method === "GET" ? json(existing) : json({ id: "note-1" })));
  const workersFetch: typeof fetch = async (input, init) => {
    if (init?.redirect === "error") throw new TypeError("Unsupported redirect mode: error");
    assert.equal(init?.redirect, "manual");
    return handler(input, init);
  };
  const result = await createHubSpotClient({ token: "unit-test", fetcher: workersFetch }).deliver(
    lead,
    async () => {},
  );
  assert.deepEqual(result, { contactId: "contact-1", noteId: "note-1" });
});
test("API redirects stop without forwarding credentials or retrying a write", async () => {
  const fetcher = mock((r) =>
    r.method === "GET"
      ? json(existing)
      : new Response(null, { status: 307, headers: { Location: "https://other.example.test" } }),
  );
  await assert.rejects(
    createHubSpotClient({ token: "unit-test", fetcher }).deliver(lead, async () => {}),
    (e) => e instanceof HubSpotFailure && e.code === "unexpected_redirect" && e.uncertain,
  );
  assert.equal(calls.length, 2);
  assert.ok(calls.every((r) => r.url.startsWith("https://api.hubapi.com/")));
});
test("only missing CRM fields are filled", async () => {
  const fetcher = mock((r) =>
    r.method === "GET"
      ? json({ ...existing, properties: { ...existing.properties, company: null } })
      : json({ id: "note-1" }),
  );
  await createHubSpotClient({ token: "unit-test", fetcher }).deliver(lead, async () => {});
  assert.deepEqual(calls.find((r) => r.method === "PATCH")?.body, {
    properties: { company: "Example" },
  });
});
test("phone-only chat reuses an unambiguous existing contact without guessing a country", async () => {
  const input = { ...lead, email: null, phone: "202 555 0123", source: "chat-widget" };
  const fetcher = mock((r) =>
    r.url.endsWith("/search")
      ? json({
          results: [
            { ...existing, properties: { ...existing.properties, phone: "(202) 555-0123" } },
          ],
          total: 1,
        })
      : json({ id: "note-1" }),
  );
  const result = await createHubSpotClient({ token: "unit-test", fetcher }).deliver(
    input,
    async () => {},
  );
  assert.equal(result.contactId, "contact-1");
  assert.equal(normalPhone(input.phone), "2025550123");
  assert.equal(calls.filter((r) => r.url.endsWith("/contacts")).length, 0);
});
test("a shared telephone never merges two different email identities", async () => {
  const fetcher = mock((r) => {
    if (r.url.includes("idProperty=email")) return json({}, 404);
    if (r.url.endsWith("/search"))
      return json({
        results: [
          {
            ...existing,
            properties: { ...existing.properties, email: "someone-else@example.test" },
          },
        ],
        total: 1,
      });
    if (r.url.endsWith("/contacts")) return json({ id: "separate-person", properties: {} }, 201);
    return json({ id: "note-1" });
  });
  const result = await createHubSpotClient({ token: "unit-test", fetcher }).deliver(
    lead,
    async () => {},
  );
  assert.equal(result.contactId, "separate-person");
  assert.equal(
    calls.some((r) => r.method === "PATCH"),
    false,
  );
});
test("ambiguous phone matches stop for review without creating a record", async () => {
  const fetcher = mock(() =>
    json({ results: [existing, { ...existing, id: "contact-2" }], total: 2 }),
  );
  await assert.rejects(
    createHubSpotClient({ token: "unit-test", fetcher }).deliver(
      { ...lead, email: null },
      async () => {},
    ),
    (e) => e instanceof HubSpotFailure && e.code === "ambiguous_phone" && e.uncertain,
  );
  assert.equal(calls.length, 1);
});
test("email creation conflict resolves the existing contact instead of creating again", async () => {
  let reads = 0;
  const fetcher = mock((r) => {
    if (r.url.includes("idProperty=email")) return ++reads === 1 ? json({}, 404) : json(existing);
    if (r.url.endsWith("/search")) return json({ results: [], total: 0 });
    if (r.url.endsWith("/contacts")) return json({}, 409);
    return json({ id: "note-1" });
  });
  const result = await createHubSpotClient({ token: "unit-test", fetcher }).deliver(
    lead,
    async () => {},
  );
  assert.equal(result.contactId, "contact-1");
  assert.equal(calls.filter((r) => r.url.endsWith("/contacts")).length, 1);
});
test("uncertain contact writes are never retried blindly", async () => {
  const fetcher = mock((r) => {
    if (r.url.includes("idProperty=email")) return json({}, 404);
    if (r.url.endsWith("/search")) return json({ results: [], total: 0 });
    throw Error("Connection lost after sending");
  });
  const log = stages();
  await assert.rejects(
    createHubSpotClient({ token: "unit-test", fetcher }).deliver(lead, log.checkpoint),
    (e) => e instanceof HubSpotFailure && e.uncertain,
  );
  assert.equal(calls.filter((r) => r.url.endsWith("/contacts")).length, 1);
  assert.equal(log.values.at(-1)?.stage, "contact_write_pending");
});
test("persisted note IDs make a retry skip the remote note write", async () => {
  const fetcher = mock(() => json(existing));
  const result = await createHubSpotClient({ token: "unit-test", fetcher }).deliver(
    lead,
    async () => {},
    { contactId: "contact-1", noteId: "note-existing" },
  );
  assert.equal(result.noteId, "note-existing");
  assert.equal(calls.length, 1);
});
test("inquiry notes escape HTML and omit private transcripts or IP metadata", () => {
  const note = leadNote({
    ...lead,
    transcript: "PRIVATE_TRANSCRIPT",
    ip_hash: "PRIVATE_IP",
  } as CrmLead);
  assert.ok(note.includes("&lt;script&gt;"));
  assert.ok(!note.includes("<script>"));
  assert.ok(!note.includes("PRIVATE_"));
  assert.ok(note.includes("Registro 99"));
});
test("explicit tests are skipped; a genuine contact preference is preserved", () => {
  assert.equal(isTestLead({ ...lead, name: "PRUEBA DE MEDICIÓN — NO CONTACTAR" }), true);
  assert.equal(
    isTestLead({ ...lead, message: "No contactar por teléfono; responder por email." }),
    false,
  );
  assert.equal(isTestLead({ ...lead, name: "Isaac" }), false);
});
test("missing/disabled server configuration never makes a network request", async () => {
  globalThis.fetch = mock(() => {
    throw Error("No network expected");
  });
  assert.equal(
    await syncLeadToHubSpot({ url: "https://database.test", key: "unit-test" }, 99),
    "not_configured",
  );
  assert.equal(calls.length, 0);
});
test("CRM ledger saves contact and note IDs and releases only its own lease", async () => {
  process.env.HUBSPOT_SERVICE_KEY = "unit-test";
  process.env.HUBSPOT_SYNC_ENABLED = "true";
  const updates: Record<string, unknown>[] = [];
  let lease = "";
  globalThis.fetch = mock((r) => {
    if (r.url.includes("/rpc/claim_hubspot_lead")) {
      lease = String(r.body?.p_token);
      return json({ lead, contactId: "contact-1", noteId: "note-1" });
    }
    if (r.url.includes("hubspot_identity_map?")) return json([]);
    if (r.url.includes("/rpc/remember_hubspot_identity"))
      return new Response(null, { status: 204 });
    if (r.url.includes("hubspot_lead_sync?") && r.method === "PATCH") {
      updates.push(r.body!);
      return new Response(null, { status: 204 });
    }
    if (r.url.includes("hubspot_lead_sync?")) return json([]);
    if (r.url.includes("hubspot_delivery_lock?")) {
      assert.ok(r.url.includes(lease));
      return new Response(null, { status: 204 });
    }
    if (r.url.startsWith("https://api.hubapi.com/")) return json(existing);
    throw Error("Unexpected request");
  });
  assert.equal(
    await syncLeadToHubSpot({ url: "https://database.test", key: "unit-test" }, 99),
    "synced",
  );
  assert.equal(updates.at(-1)?.status, "synced");
  assert.equal(updates.at(-1)?.note_id, "note-1");
});
test("contact form reuses a persisted capture ID after an ambiguous response", async () => {
  process.env.SUPABASE_URL = "https://database.test";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "unit-test";
  const captureId = "52873998-51f6-46e1-93cb-bc97908fd9bb";
  globalThis.fetch = mock((r) => {
    assert.ok(r.url.startsWith("https://database.test/"));
    if (r.method === "POST") return json({ code: "23505" }, 409);
    assert.ok(r.url.includes(encodeURIComponent("contact-form:" + captureId)));
    return json([{ id: 99 }]);
  });
  const result = await submitLead({
    data: { source: "contact-form", name: "Persona", email: "person@example.test", captureId },
  });
  assert.equal(result.ok, true);
  assert.equal(result.stored, true);
  assert.equal(result.emailed, false);
  assert.equal(result.alerted, false);
  assert.equal(calls.length, 2);
});
test("retrying a persisted form resumes CRM delivery without repeating email or SMS", async () => {
  process.env.SUPABASE_URL = "https://database.test";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "unit-test";
  process.env.HUBSPOT_SERVICE_KEY = "unit-test";
  process.env.HUBSPOT_SYNC_ENABLED = "true";
  process.env.RESEND_API_KEY = "unit-test";
  const captureId = "52873998-51f6-46e1-93cb-bc97908fd9bb";
  globalThis.fetch = mock((r) => {
    if (r.url.endsWith("leads?select=id")) return json({ code: "23505" }, 409);
    if (r.url.includes("leads?capture_id=")) return json([{ id: lead.id }]);
    if (r.url.includes("rpc/claim_hubspot_lead"))
      return json({ lead, contactId: null, noteId: null, attempts: 2 });
    if (
      r.url.includes("hubspot_identity_map?") ||
      (r.url.includes("hubspot_lead_sync?") && r.method === "GET")
    )
      return json([]);
    if (r.url.startsWith("https://api.hubapi.com/"))
      return r.method === "GET" ? json(existing) : json({ id: "recovered-note" }, 201);
    if (
      r.url.includes("hubspot_lead_sync?") ||
      r.url.includes("hubspot_delivery_lock?") ||
      r.url.includes("rpc/remember_hubspot_identity")
    )
      return new Response(null, { status: 204 });
    throw Error("Unexpected notification or network request");
  });
  const result = await submitLead({
    data: { source: "contact-form", name: "Persona", email: "person@example.test", captureId },
  });
  assert.deepEqual(result, { ok: true, stored: true, emailed: false, alerted: false });
  assert.equal(calls.filter((r) => r.url.endsWith("/notes")).length, 1);
  assert.equal(calls.filter((r) => r.url.endsWith("/contacts")).length, 0);
  assert.ok(
    calls.every(
      (r) =>
        r.url.startsWith("https://database.test/") || r.url.startsWith("https://api.hubapi.com/"),
    ),
  );
});

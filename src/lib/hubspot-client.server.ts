/** No browser SDK: CRM delivery never installs a second Meta pixel. */
export type CrmLead = {
  id: string | number;
  created_at: string;
  source: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  message?: string | null;
  path?: string | null;
};
type Contact = { id: string; properties: Record<string, string | null> };
export type CrmProgress = { contactId?: string | null; noteId?: string | null };
export type CrmCheckpoint = (stage: string, progress?: CrmProgress) => Promise<void>;
type ClientOptions = {
  token: string;
  ownerId?: string;
  fetcher?: typeof fetch;
};
export class HubSpotFailure extends Error {
  constructor(
    public readonly code: string,
    public readonly uncertain = false,
  ) {
    super(code);
  }
}
const CONTACT_FIELDS = ["firstname", "lastname", "email", "phone", "mobilephone", "company"];
export const normalEmail = (value?: string | null) => (value ?? "").trim().toLowerCase();
// Preserve country information as supplied. Ten digits are not assumed Mexican.
export const normalPhone = (value?: string | null) => (value ?? "").replace(/\D/g, "");
export function isTestLead(lead: CrmLead): boolean {
  return (
    /^(?:PRUEBA|TEST)(?:\s|—|-|:|$)/i.test(lead.name) ||
    (/PRUEBA AUTORIZADA/i.test(lead.message ?? "") && /DATOS FICTICIOS/i.test(lead.message ?? ""))
  );
}
const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c]!,
  );
export function leadNote(lead: CrmLead): string {
  const lines = [
    `Solicitud de aphelion.mx · Registro ${lead.id}`,
    `Fecha original: ${lead.created_at}`,
    `Origen: ${lead.source}`,
    `Nombre proporcionado: ${lead.name}`,
    lead.email ? `Email proporcionado: ${lead.email}` : "",
    lead.phone ? `Teléfono proporcionado: ${lead.phone}` : "",
    lead.company ? `Empresa: ${lead.company}` : "",
    lead.service ? `Servicio: ${lead.service}` : "",
    lead.path ? `Página: ${lead.path}` : "",
    lead.message ? `Mensaje: ${lead.message}` : "",
  ].filter(Boolean);
  // No IP, full chat transcript, assessment answers or marketing subscriptions.
  return lines.map((line) => `<p>${escapeHtml(line).replace(/\n/g, "<br>")}</p>`).join("");
}

export function createHubSpotClient({ token, ownerId, fetcher = fetch }: ClientOptions) {
  async function request<T>(
    path: string,
    init?: RequestInit,
    write = false,
    allowMissing = false,
  ): Promise<T | null> {
    let response: Response;
    try {
      response = await fetcher(`https://api.hubapi.com${path}`, {
        ...init,
        redirect: "error",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        signal: AbortSignal.timeout(4000),
      });
    } catch {
      throw new HubSpotFailure("network_error", write);
    }
    if (response.status === 404 && allowMissing) return null;
    if (!response.ok)
      throw new HubSpotFailure(`http_${response.status}`, write && response.status >= 500);
    try {
      return (await response.json()) as T;
    } catch {
      throw new HubSpotFailure("invalid_response", write);
    }
  }
  const byId = (id: string) =>
    request<Contact>(
      `/crm/v3/objects/contacts/${encodeURIComponent(id)}?properties=${CONTACT_FIELDS.join(",")}`,
      undefined,
      false,
      true,
    );
  const byEmail = (email: string) =>
    request<Contact>(
      `/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email&properties=${CONTACT_FIELDS.join(",")}`,
      undefined,
      false,
      true,
    );
  async function byPhone(lead: CrmLead): Promise<Contact | null> {
    const phone = normalPhone(lead.phone);
    if (!phone) return null;
    const result = await request<{ results: Contact[]; total: number }>(
      "/crm/v3/objects/contacts/search",
      {
        method: "POST",
        body: JSON.stringify({ query: phone, properties: CONTACT_FIELDS, limit: 100 }),
      },
    );
    const matches = (result?.results ?? []).filter(
      (c) =>
        normalPhone(c.properties.phone) === phone ||
        normalPhone(c.properties.mobilephone) === phone,
    );
    if (matches.length > 1 || (result?.total ?? 0) > 100)
      throw new HubSpotFailure("ambiguous_phone", true);
    return matches[0] ?? null;
  }
  async function deliver(
    lead: CrmLead,
    checkpoint: CrmCheckpoint,
    prior: CrmProgress = {},
    mappedId?: string | null,
  ): Promise<Required<CrmProgress>> {
    if (isTestLead(lead)) throw new HubSpotFailure("test_record");
    const email = normalEmail(lead.email);
    if (!email && !normalPhone(lead.phone)) throw new HubSpotFailure("missing_contact_details");
    let contact: Contact | null = null;
    if (prior.contactId) contact = await byId(prior.contactId);
    if (!contact && email) contact = await byEmail(email);
    if (!contact) {
      const candidate = await byPhone(lead);
      // A shared telephone must not merge two different email identities.
      if (
        candidate &&
        (!email ||
          !normalEmail(candidate.properties.email) ||
          normalEmail(candidate.properties.email) === email)
      )
        contact = candidate;
    }
    if (!contact && mappedId) {
      const mapped = await byId(mappedId);
      if (
        mapped &&
        (!email ||
          !normalEmail(mapped.properties.email) ||
          normalEmail(mapped.properties.email) === email)
      )
        contact = mapped;
    }
    if (!contact) {
      const properties: Record<string, string> = {
        firstname: lead.name,
        lifecyclestage: "lead",
        hs_lead_status: "NEW",
      };
      if (email) properties.email = email;
      if (lead.phone) properties.phone = lead.phone;
      if (lead.company) properties.company = lead.company;
      if (ownerId) properties.hubspot_owner_id = ownerId;
      await checkpoint("contact_write_pending");
      try {
        contact = await request<Contact>(
          "/crm/v3/objects/contacts",
          { method: "POST", body: JSON.stringify({ properties }) },
          true,
        );
      } catch (error) {
        if (error instanceof HubSpotFailure && error.code === "http_409" && email)
          contact = await byEmail(email);
        else throw error;
      }
      if (!contact?.id) throw new HubSpotFailure("missing_contact_id", true);
    } else {
      const fill: Record<string, string> = {};
      const supplied: Record<string, string | undefined | null> = {
        firstname: lead.name,
        email,
        phone: lead.phone,
        company: lead.company,
      };
      for (const [name, value] of Object.entries(supplied))
        if (value && !contact.properties[name]) fill[name] = value;
      if (Object.keys(fill).length) {
        await checkpoint("contact_write_pending", { contactId: contact.id });
        await request(
          `/crm/v3/objects/contacts/${encodeURIComponent(contact.id)}`,
          { method: "PATCH", body: JSON.stringify({ properties: fill }) },
          true,
        );
      }
    }
    await checkpoint("contact_ready", { contactId: contact.id });
    let noteId = prior.noteId ?? null;
    if (!noteId) {
      await checkpoint("note_write_pending", { contactId: contact.id });
      const note = await request<{ id: string }>(
        "/crm/v3/objects/notes",
        {
          method: "POST",
          body: JSON.stringify({
            properties: {
              hs_timestamp: new Date(lead.created_at).toISOString(),
              hs_note_body: leadNote(lead),
            },
            associations: [
              {
                to: { id: contact.id },
                types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 }],
              },
            ],
          }),
        },
        true,
      );
      if (!note?.id) throw new HubSpotFailure("missing_note_id", true);
      noteId = note.id;
    }
    await checkpoint("complete", { contactId: contact.id, noteId });
    return { contactId: contact.id, noteId };
  }
  return { deliver };
}

import {
  createHubSpotClient,
  HubSpotFailure,
  isTestLead,
  normalEmail,
  normalPhone,
  type CrmLead,
  type CrmProgress,
} from "./hubspot-client.server";
type Database = { url: string; key: string };
type Claim = { lead: CrmLead; contactId: string | null; noteId: string | null; attempts: number };
type SyncStatus = "not_configured" | "queued" | "synced" | "skipped" | "review" | "error";
const headers = (cfg: Database) => ({
  apikey: cfg.key,
  Authorization: `Bearer ${cfg.key}`,
  "Content-Type": "application/json",
});
async function database<T>(cfg: Database, path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${cfg.url}/rest/v1/${path}`, {
    ...init,
    headers: { ...headers(cfg), ...init?.headers },
    signal: AbortSignal.timeout(3000),
  });
  if (!response.ok) throw new Error("crm_ledger_unavailable");
  const body = await response.text();
  return body ? (JSON.parse(body) as T) : (null as T);
}
async function identityHash(value: string): Promise<string> {
  const result = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(result)].map((v) => v.toString(16).padStart(2, "0")).join("");
}

/** Called only after durable capture; a CRM outage never changes lead success. */
async function syncSingleLead(cfg: Database, leadId: string | number): Promise<SyncStatus> {
  const token = process.env.HUBSPOT_SERVICE_KEY;
  if (!token || process.env.HUBSPOT_SYNC_ENABLED !== "true") return "not_configured";
  const lockToken = crypto.randomUUID();
  let progress: CrmProgress = {};
  let claim: Claim | null = null;
  async function save(
    status: Exclude<SyncStatus, "not_configured" | "queued"> | "syncing",
    stage: string,
    error: string | null = null,
  ) {
    await database(
      cfg,
      `hubspot_lead_sync?lead_id=eq.${encodeURIComponent(String(leadId))}&lock_token=eq.${lockToken}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          status,
          stage,
          contact_id: progress.contactId ?? null,
          note_id: progress.noteId ?? null,
          last_error: error,
          updated_at: new Date().toISOString(),
        }),
      },
    );
  }
  try {
    claim = await database<Claim | null>(cfg, "rpc/claim_hubspot_lead", {
      method: "POST",
      body: JSON.stringify({ p_lead_id: leadId, p_token: lockToken }),
    });
    if (!claim) return "queued";
    progress = { contactId: claim.contactId, noteId: claim.noteId };
    if (isTestLead(claim.lead)) {
      await save("skipped", "test_record");
      return "skipped";
    }
    const keys: string[] = [];
    const email = normalEmail(claim.lead.email),
      phone = normalPhone(claim.lead.phone);
    if (email) keys.push(await identityHash(`email:${email}`));
    if (phone) keys.push(await identityHash(`phone:${phone}`));
    const maps = keys.length
      ? await database<Array<{ identity_hash: string; contact_id: string; ambiguous: boolean }>>(
          cfg,
          `hubspot_identity_map?identity_hash=in.(${keys.join(",")})&select=identity_hash,contact_id,ambiguous`,
        )
      : [];
    if (!email && maps.some((m) => m.ambiguous))
      throw new HubSpotFailure("ambiguous_identity", true);
    // Prefer the exact email identity; a shared phone never overrides it.
    const mappedId = maps.find((m) => m.identity_hash === keys[0])?.contact_id;
    const client = createHubSpotClient({ token, ownerId: process.env.HUBSPOT_OWNER_ID });
    const result = await client.deliver(
      claim.lead,
      async (stage, p) => {
        progress = { ...progress, ...p };
        await save("syncing", stage);
      },
      progress,
      mappedId,
    );
    progress = result;
    for (const key of keys)
      await database(cfg, "rpc/remember_hubspot_identity", {
        method: "POST",
        body: JSON.stringify({ p_hash: key, p_contact_id: result.contactId }),
      });
    await save("synced", "complete");
    return "synced";
  } catch (error) {
    const uncertain = error instanceof HubSpotFailure ? error.uncertain : !progress.noteId;
    const status = uncertain || (claim?.attempts ?? 0) >= 3 ? "review" : "error";
    const code = error instanceof HubSpotFailure ? error.code : "ledger_or_delivery_error";
    if (claim) await save(status, "stopped", code).catch(() => {});
    // Log only a local record ID and an error category, never the token or PII.
    console.warn("[hubspot] delivery pending", leadId, code);
    return status;
  } finally {
    await database(cfg, `hubspot_delivery_lock?id=eq.true&token=eq.${lockToken}`, {
      method: "DELETE",
    }).catch(() => {});
  }
}

/** Retry a bounded queue without exposing a public CRM-write endpoint. */
export async function retryPendingHubSpotLeads(cfg: Database, limit = 5) {
  const jobs = await database<Array<{ lead_id: string }>>(
    cfg,
    `hubspot_lead_sync?status=in.(pending,error)&attempts=lt.3&select=lead_id&order=updated_at.asc&limit=${Math.min(10, Math.max(1, limit))}`,
  );
  for (const job of jobs) await syncSingleLead(cfg, job.lead_id);
}

export async function syncLeadToHubSpot(
  cfg: Database,
  leadId: string | number,
): Promise<SyncStatus> {
  const status = await syncSingleLead(cfg, leadId);
  if (status === "synced") await retryPendingHubSpotLeads(cfg, 2).catch(() => {});
  return status;
}

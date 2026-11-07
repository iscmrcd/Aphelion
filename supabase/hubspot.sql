-- Server-only CRM delivery ledger. Existing leads are imported explicitly.
alter table public.leads add column if not exists capture_id text;
create unique index if not exists leads_capture_id_uidx
  on public.leads (capture_id) where capture_id is not null;

create table if not exists public.hubspot_lead_sync (
  lead_id bigint primary key references public.leads(id),
  status text not null default 'pending'
    check (status in ('pending','syncing','synced','error','review','skipped')),
  stage text not null default 'lookup',
  contact_id text,
  note_id text,
  attempts integer not null default 0,
  last_error text,
  lock_token uuid,
  updated_at timestamptz not null default now()
);
create table if not exists public.hubspot_identity_map (
  identity_hash text primary key,
  contact_id text not null,
  ambiguous boolean not null default false
);
create table if not exists public.hubspot_delivery_lock (
  id boolean primary key default true check (id),
  token uuid not null,
  expires_at timestamptz not null
);
alter table public.hubspot_lead_sync enable row level security;
alter table public.hubspot_identity_map enable row level security;
alter table public.hubspot_delivery_lock enable row level security;
revoke all on public.hubspot_lead_sync, public.hubspot_identity_map,
  public.hubspot_delivery_lock from anon, authenticated;
grant all on public.hubspot_lead_sync, public.hubspot_identity_map,
  public.hubspot_delivery_lock to service_role;

create or replace function public.queue_hubspot_lead()
returns trigger language plpgsql security definer set search_path = pg_catalog, public as $$
begin
  insert into public.hubspot_lead_sync (lead_id) values (new.id)
    on conflict (lead_id) do nothing;
  return new;
end;
$$;
revoke all on function public.queue_hubspot_lead() from public, anon, authenticated;
drop trigger if exists leads_queue_hubspot on public.leads;
create trigger leads_queue_hubspot after insert on public.leads
  for each row execute function public.queue_hubspot_lead();

-- Serialise writes across sources, including phone-only contacts. A timed-out
-- write must be reviewed, rather than blindly creating another contact/note.
create or replace function public.claim_hubspot_lead(p_lead_id bigint, p_token uuid)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public as $$
declare job public.hubspot_lead_sync%rowtype; result jsonb;
begin
  insert into public.hubspot_delivery_lock (id,token,expires_at)
    values (true,p_token,now()+interval '60 seconds')
    on conflict (id) do update set token=excluded.token,expires_at=excluded.expires_at
      where public.hubspot_delivery_lock.expires_at < now();
  if not found then return null; end if;
  select * into job from public.hubspot_lead_sync where lead_id=p_lead_id for update;
  if not found or job.status in ('synced','review','skipped') then
    delete from public.hubspot_delivery_lock where id and token=p_token;
    return null;
  end if;
  if job.attempts >= 3 then
    update public.hubspot_lead_sync set status='review',last_error='retry_limit',
      updated_at=now() where lead_id=p_lead_id;
    delete from public.hubspot_delivery_lock where id and token=p_token;
    return null;
  end if;
  if job.status='syncing' and job.stage in ('contact_write_pending','note_write_pending') then
    update public.hubspot_lead_sync set status='review',last_error='interrupted_write',
      updated_at=now() where lead_id=p_lead_id;
    delete from public.hubspot_delivery_lock where id and token=p_token;
    return null;
  end if;
  update public.hubspot_lead_sync set status='syncing',lock_token=p_token,
    attempts=attempts+1,updated_at=now() where lead_id=p_lead_id;
  select jsonb_build_object('lead',jsonb_build_object(
    'id',l.id,'created_at',l.created_at,'source',l.source,'name',l.name,
    'email',l.email,'phone',l.phone,'company',l.company,'service',l.service,
    'message',l.message,'path',l.path),'contactId',job.contact_id,'noteId',job.note_id,'attempts',job.attempts+1)
    into result from public.leads l where l.id=p_lead_id;
  return result;
end;
$$;
revoke all on function public.claim_hubspot_lead(bigint,uuid) from public,anon,authenticated;
grant execute on function public.claim_hubspot_lead(bigint,uuid) to service_role;

create or replace function public.remember_hubspot_identity(p_hash text,p_contact_id text)
returns void language sql security definer set search_path = pg_catalog, public as $$
  insert into public.hubspot_identity_map (identity_hash,contact_id)
    values(p_hash,p_contact_id)
    on conflict(identity_hash) do update set
      ambiguous=public.hubspot_identity_map.ambiguous or public.hubspot_identity_map.contact_id<>excluded.contact_id;
$$;
revoke all on function public.remember_hubspot_identity(text,text) from public,anon,authenticated;
grant execute on function public.remember_hubspot_identity(text,text) to service_role;
notify pgrst, 'reload schema';

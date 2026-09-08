-- Leads captured by the site: contact form, chat widget, diagnostic.
--
-- Written to with the service-role key from a server function only, so RLS is
-- enabled with no policies: anon and authenticated clients get nothing, and the
-- service role bypasses RLS by design. Same posture as demo_conversations.
--
-- ip_hash is a truncated SHA-256 of the IP with a fixed prefix. It exists to
-- spot abuse patterns, not to identify anyone, and the raw IP is never stored.

create table if not exists public.leads (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  source      text        not null check (source in ('contact-form','chat-widget','diagnostic')),
  name        text        not null,
  email       text,
  phone       text,
  company     text,
  service     text,
  budget      text,
  message     text,
  transcript  text,
  path        text,
  -- Set by the chat widget so a session can only ever produce one lead row.
  session_id  text,
  ip_hash     text        not null default 'unknown',
  -- Set from the future panel once someone has actually followed up.
  status      text        not null default 'new' check (status in ('new','contacted','qualified','won','lost'))
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx     on public.leads (status);
create index if not exists leads_ip_hash_idx    on public.leads (ip_hash, created_at desc);
create unique index if not exists leads_session_id_uidx on public.leads (session_id) where session_id is not null;

alter table public.leads enable row level security;

-- Turn log for Aphelion's own site assistant. Separate from
-- demo_conversations so the demo's tight limits and this widget's looser ones
-- never read each other's counters.
create table if not exists public.agent_messages (
  id                bigint generated always as identity primary key,
  created_at        timestamptz not null default now(),
  session_id        text        not null,
  ip_hash           text        not null default 'unknown',
  user_message      text        not null,
  assistant_message text        not null,
  message_index     integer     not null default 0
);

create index if not exists agent_messages_session_idx on public.agent_messages (session_id);
create index if not exists agent_messages_ip_idx      on public.agent_messages (ip_hash, created_at desc);

alter table public.agent_messages enable row level security;

-- Every demo SMS attempt, sent or blocked. This is the rate-limit ledger and
-- the audit trail: because the endpoint is publicly reachable and sends to a
-- number the caller supplies, being able to answer "who did we text and why"
-- is not optional. Blocked attempts are recorded too, so a spike is visible.
create table if not exists public.demo_sms (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  session_id  text        not null,
  ip_hash     text        not null default 'unknown',
  phone_e164  text        not null,
  status      text        not null check (status in ('sent','blocked','failed'))
);

create index if not exists demo_sms_session_idx on public.demo_sms (session_id);
create index if not exists demo_sms_ip_idx      on public.demo_sms (ip_hash, created_at desc);
create index if not exists demo_sms_created_idx on public.demo_sms (created_at desc);

alter table public.demo_sms enable row level security;

-- Applied to the live database on 2026-09-08 via the Lovable database tool.
-- Verified afterwards: all three tables exist, RLS is on, and no policies are
-- attached, so only the service-role key can read or write them.

-- Table backing the WhatsApp IA demo on /servicios/whatsapp-ia
--
-- It stores every exchange for later review AND acts as the source of truth for
-- the demo's guardrails. The app builds to Cloudflare Workers, which is
-- stateless, so in-memory counters would reset per isolate — these rows are what
-- make the limits actually hold across requests and across the three agents.
--
-- Required server env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

create table if not exists public.demo_conversations (
  id                bigint generated always as identity primary key,
  session_id        text        not null,
  agent_type        text        not null check (agent_type in ('real-estate','health','professional')),
  ip_hash           text        not null,
  user_message      text        not null,
  assistant_message text        not null,
  message_index     integer     not null,
  created_at        timestamptz not null default now()
);

-- Counting messages in a session (the 20-message cap).
create index if not exists demo_conversations_session_idx
  on public.demo_conversations (session_id);

-- Counting distinct sessions per IP in the last hour (the 3-per-hour cap).
create index if not exists demo_conversations_ip_created_idx
  on public.demo_conversations (ip_hash, created_at desc);

-- The server talks to this table with the service role key, which bypasses RLS.
-- RLS is still enabled so that anon/authenticated keys can never read visitor
-- conversations, even if one of those keys is exposed client-side later.
alter table public.demo_conversations enable row level security;

-- Optional retention: drop demo transcripts after 90 days.
-- Requires pg_cron. Uncomment to enable.
-- select cron.schedule(
--   'purge-demo-conversations',
--   '0 4 * * *',
--   $$delete from public.demo_conversations where created_at < now() - interval '90 days'$$
-- );

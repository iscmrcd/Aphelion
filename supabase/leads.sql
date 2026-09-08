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
  ip_hash     text        not null default 'unknown',
  -- Set from the future panel once someone has actually followed up.
  status      text        not null default 'new' check (status in ('new','contacted','qualified','won','lost'))
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx     on public.leads (status);
create index if not exists leads_ip_hash_idx    on public.leads (ip_hash, created_at desc);

alter table public.leads enable row level security;

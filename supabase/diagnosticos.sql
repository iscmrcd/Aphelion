-- Every finished diagnostic, whether or not the visitor left their details.
--
-- No personal data lives here: no name, phone or email. Those only exist in
-- `leads`, and only when the visitor asks for a call. The two tables join on
-- leads.session_id = diagnosticos.attempt_id.
--
-- Written with the service-role key from a server function only, so RLS is
-- enabled with no policies, the same posture as leads.
--
-- answers stores the index of the option chosen per question id, together
-- with `version`, so an edit to the questions never silently changes how an
-- old row reads. score is null when the result was partial (too many
-- "No lo sé"); raw_score is always filled.

create table if not exists public.diagnosticos (
  id              bigint generated always as identity primary key,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  attempt_id      text        not null,
  vertical        text        not null,
  version         text        not null,
  lang            text        not null default 'es' check (lang in ('es','en')),
  entry           text        not null default 'direct' check (entry in ('selector','direct')),
  score           smallint    check (score between 0 and 100),
  raw_score       smallint    not null check (raw_score between 0 and 100),
  coverage        numeric(3,2) not null check (coverage between 0 and 1),
  partial         boolean     not null default false,
  band            text,
  answers         jsonb       not null,
  gaps            text[]      not null default '{}',
  unknown         text[]      not null default '{}',
  not_applicable  text[]      not null default '{}',
  context         jsonb       not null default '{}'::jsonb,
  utm_source      text,
  utm_medium      text,
  utm_campaign    text,
  utm_content     text,
  utm_term        text,
  click_source    text        check (click_source in ('meta','google')),
  landing_path    text,
  referrer        text,
  ip_hash         text        not null default 'unknown'
);

create unique index if not exists diagnosticos_attempt_uidx  on public.diagnosticos (attempt_id);
create index if not exists diagnosticos_created_at_idx       on public.diagnosticos (created_at desc);
create index if not exists diagnosticos_vertical_idx         on public.diagnosticos (vertical, created_at desc);
create index if not exists diagnosticos_ip_hash_idx          on public.diagnosticos (ip_hash, created_at desc);

alter table public.diagnosticos enable row level security;

-- Useful reads from the Lovable database tool:
--
-- Diagnostics per industry, last 30 days, and how many became leads:
--   select d.vertical, count(*) as diagnosticos, count(l.id) as leads,
--          round(avg(d.raw_score)) as puntaje_promedio
--   from diagnosticos d
--   left join leads l on l.session_id = d.attempt_id
--   where d.created_at > now() - interval '30 days'
--   group by d.vertical order by diagnosticos desc;
--
-- Most common gaps in one industry:
--   select g as gap, count(*) from diagnosticos, unnest(gaps) g
--   where vertical = 'dental' group by g order by count(*) desc;

-- Applied to the live database on 2026-09-25 via the Lovable database tool.
-- Verified afterwards: table exists, RLS is on, no policies, 5 indexes.

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  package_type text not null,
  status text not null default 'Pending' check (status in ('Pending', 'Paid Cash')),
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

alter table public.leads enable row level security;

drop policy if exists "Allow public booking inserts" on public.leads;
create policy "Allow public booking inserts"
on public.leads
for insert
to anon
with check (status = 'Pending');

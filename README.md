# Iron Pulse Gym Website

Production-ready bilingual gym website built with Next.js App Router, Tailwind CSS, Lucide React, and Supabase.

## File Structure

```txt
src/
  app/
    api/admin/leads/route.js   # Password-protected admin API for reading/updating leads
    admin/page.jsx             # /admin dashboard route
    globals.css                # Tailwind and global theme styles
    layout.jsx                 # Root layout and app provider
    page.jsx                   # / landing page
  components/
    AdminDashboard.jsx
    BookingModal.jsx
    FeaturesSection.jsx
    Footer.jsx
    Header.jsx
    HeroSection.jsx
    PricingSection.jsx
    TestimonialsSection.jsx
  context/
    AppContext.jsx             # Language and dark/light theme state
  lib/
    site-content.js            # English/Arabic content, packages, gym info
    supabase-admin.js          # Server-side Supabase service-role client
    supabase.js                # Browser Supabase anon client
supabase/
  schema.sql                   # Leads table and insert policy
```

## Supabase SQL

Run this in the Supabase SQL editor:

```sql
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
```

The landing page inserts bookings with the public anon key. The admin dashboard reads and updates leads through a Next.js API route using `SUPABASE_SERVICE_ROLE_KEY`, so no public select/update policy is needed.

## Setup

1. Create the Supabase table with `supabase/schema.sql`.
2. Create `.env.local` from `.env.local.example`.
3. Add your Supabase project URL, anon key, and service role key.
4. Start the app:

```bash
npm run dev
```

Routes:

- `/` landing page with hero, features, pricing, booking modal, language toggle, and theme toggle.
- `/admin` password-gated dashboard. Password: `gym1234`.

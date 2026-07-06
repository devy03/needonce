<div align="center">

# NeedOnce

### Need it once? Don't buy it.

Compare neighbors, rental stores, tool libraries, and community lenders to find the cheapest way to borrow or rent anything nearby — all in one search.

*A premium, dark-themed front-end prototype for a comparison marketplace: think Google Flights, but for borrowing instead of buying.*

</div>

---

## The idea

Every year, people buy expensive tools, event supplies, sports gear, and household items they'll only ever use **once**. A pressure washer for one driveway clean. Folding chairs for one backyard party. A drill for one TV mount.

Right now, finding a cheaper way means manually checking Facebook Marketplace, Home Depot, the local library, group chats, and random Google searches — one at a time.

**NeedOnce combines all of it into a single comparison engine:**

- 🏠 **Neighbors** renting out things they already own
- 🏬 **Hardware stores & rental shops** (Home Depot, Lowe's, local rental companies)
- 📚 **Libraries & tool libraries** (Library of Things, tool-lending programs, makerspaces)
- 👥 **Private community groups** (apartment buildings, colleges, temples, sports teams)

Search a task or an item, and NeedOnce ranks every option by price, distance, speed, and reliability — then tells you when buying new is *actually* the smarter move.

## What's built

This is a fully-functional front-end prototype — every page is real, interactive, and backed by realistic mock data structured to map directly onto a future relational backend (see [Data model](#data-model)).

| Page | What it does |
|---|---|
| **Home** (`/`) | Animated hero with a live comparison preview, category chips, "how it works," savings stats, popular needs near you, and community lending highlights |
| **Search** (`/search`) | The core comparison engine — best-match summary, side-by-side comparison rows, community/store/library sections, list/map/compare views, and a buy-vs-rent calculator |
| **Item detail** (`/item/:id`) | Gallery, pricing, availability calendar, condition checklist, owner trust profile, reviews, and similar cheaper options |
| **Add item** (`/add-item`) | List an item with a mock **AI listing helper** — type "yellow drill with charger" and get an auto-generated title, price, deposit, and description |
| **Rental request flow** | A full modal: pick dates → pickup/delivery → price breakdown → confirm → QR pickup code |
| **Dashboard** (`/dashboard`) | Rentals, listings, requests, saved items, payments, reviews, trust profile, and groups — all in tabs |
| **Messages** (`/messages`) | Threaded conversations with quick replies and system messages (request sent, accepted, pickup confirmed) |
| **Groups** (`/groups`, `/group/:id`) | Private lending circles for apartments, colleges, temples, and sports teams, with leaderboards and activity feeds |
| **Admin** (`/admin`) | Platform stats, user/listing management, disputes, and banned-item moderation |
| **How it works, Safety, Pricing, Suggest a source** | Supporting marketing & trust pages |

### Design language

Dark, premium, and alive — not another flat marketplace template.

- Glassmorphic panels with blurred, animated background glow
- Framer Motion transitions on scroll, hover, and page load
- Gold "Best Deal" badges, emerald "free" highlights, violet/blue gradients
- Fully responsive, from a 1440px desktop dashboard down to a 375px phone

## Tech stack

- **React 19 + Vite** — fast dev loop, component-based structure
- **Tailwind CSS v4** — CSS-first theming via `@theme`, no config file needed
- **Framer Motion** — scroll-triggered and interactive animations
- **Lucide React** — icon set
- **React Router** — client-side routing across 14 routes

No backend yet — everything runs on structured mock data in [`src/data/`](src/data), which is intentionally shaped so it can be swapped for real API calls without touching the UI.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

```bash
npm run build   # production build
npm run preview # preview the production build locally
```

## Project structure

```
src/
  components/     Reusable UI: PremiumSearchBar, ComparisonResultRow, MapMock,
                  RentalRequestModal, TrustBadge, AvailabilityCalendar, etc.
  pages/          One file per route (Home, Search, ItemDetail, Dashboard, ...)
  data/           Mock data: items, users, external sources, groups, rentals,
                  messages, admin stats — structured like future DB tables
  lib/            Small formatting helpers (currency, distance)
```

## Data model

The mock data in `src/data/` is deliberately shaped to mirror a future relational schema, so swapping in a real backend (Supabase/Postgres, Stripe for payments, Google Maps for the map view) is a matter of replacing the data layer, not rewriting the UI:

- `users` — trust score, badges, verification status, ratings
- `items` — pricing tiers, deposit, condition, accessories, group visibility
- `rental_requests` / `transactions` — status flow (Requested → Accepted → Picked Up → Returned → Completed), Stripe-Connect-style fee breakdown
- `external_sources` — hardware stores, tool libraries, Library of Things, makerspaces, university checkout
- `groups` — private lending circles with invite codes and trust scores
- `reviews`, `messages`, `disputes` — supporting tables for trust & safety

## Business model (as designed)

- 10% service fee on peer-to-peer rentals
- Optional $1–$3 booking fee on small rentals
- Featured placements for local rental stores
- Premium lender plan for frequent listers
- Custom community plans for apartment buildings, colleges, and clubs

## Status

This is a **front-end prototype** — no real backend, payments, or authentication are wired up. It's built to demonstrate the full product experience end-to-end with realistic, detailed mock data, ready to be connected to real services (Supabase, Stripe, Google Maps) behind the same component structure.

---

<div align="center">

**Your community already owns what you need.**

</div>

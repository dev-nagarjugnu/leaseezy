# LeaseEzy

LeaseEzy is a premium, high-speed B2B real estate portfolio built with Next.js 15 and powered by Sanity. Admins curate flagship commercial properties, while brands and builders browse, evaluate specs, and send inquiries without creating an account.

## Project Overview
- **Audience:** Corporate real estate teams, enterprise tenants, builders
- **Goal:** Deliver a Cushman & Wakefield-inspired experience with instant-load hero sliders, property spotlights, and deep-dive detail pages
- **Content Source:** All property metadata (title, location, amenities, galleries, pricing) lives in Sanity and is queried at build/request time
- **Deployment Target:** Vercel with strict web vitals budgets

## Tech Stack
- **Framework:** Next.js 15 (App Router, React Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (mobile-first, design tokens)
- **CMS:** Sanity.io with `next-sanity` client helpers
- **Animations:** Framer Motion (hero slider, intersection fade-ins)
- **Icons:** Lucide React
- **Images:** `next/image` everywhere for responsive, optimized media
- **Deployment:** Vercel edge network

## Folder Structure
```
app/                # App Router routes (home, properties, dynamic slug pages)
public/             # Static assets that do not belong in Sanity
sanity.config.ts    # Sanity Studio configuration mounted at /studio
sanity/
  env.ts            # Environment variable helpers for Sanity values
  lib/client.ts     # Reusable next-sanity client
  schema.ts         # Combined schema registry
  schemas/
    property.ts     # Property document definition
```

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Configure env vars** in `.env.local` (see the sample below) so both Next.js and Sanity clients share the same values.
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   NEXT_PUBLIC_SANITY_USE_CDN=true
   ```
3. **Run the Next.js dev server**
   ```bash
   npm run dev
   ```
4. **(Optional) Launch Sanity Studio locally** once you have content editors set up:
   ```bash
   npx sanity dev
   ```

## Key Features
- Property catalogue landing page with fast filtering and featured hero
- Dedicated SEO-friendly routes per property: `/properties/[slug]`
- High-resolution hero sliders driven by Framer Motion and `next/image`
- Amenities, pricing, area, gallery, and descriptive content managed in Sanity
- Inquiry CTAs wired for B2B lead capture (email, WhatsApp, or embedded forms)

## Next Steps
- Wire property list/detail queries with GROQ fragments
- Implement Framer Motion-powered hero carousel fed by Sanity
- Connect inquiry forms to the desired backend (HubSpot, custom API, etc.)

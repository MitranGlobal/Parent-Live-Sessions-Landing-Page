# MiTran Global — Imparting Positivity Masterclass

A standalone one-page site for the **free** live masterclass for parents and teens
(currently one evening — Fri 13 Nov 2026, 7:00–8:30 pm IST — in two parts: *Beneath “Fine”* and *From managing to supporting*).

Every **Register now** button (header, announcement bar, hero, benefits, facilitator,
seat card, closing footer — 7 in total) goes to the MiTran Hub checkout:

```
https://hub.mitranglobal.com/web/checkout/6aed769c37e24ae81be618e5
```

## Stack (same as MiTranGlobalPage)

- **Next.js 14** (App Router, TypeScript) — statically prerendered
- **Tailwind CSS v3** — tokens in `tailwind.config.ts` (MiTran near-black `#08090c`, ivory `#f5f4ef`, gold `#e9c46a / #f5d17a / #c99b3a`)
- **Framer Motion** — hero entrance, mobile menu
- **GSAP + ScrollTrigger** — scroll reveals (`components/ui/Reveal.tsx`)
- **next/font** — Inter (all text) + Oswald (event lock-up only)

Three.js and Zustand from the main site aren't needed on this page, so they are left out.

## One-day or two-day event

The page supports both formats. Open `lib/content.ts` and change one word near the top:

```ts
export const EVENT_FORMAT = "one-day" as EventFormat;   // or "two-day"
```

- **one-day** — one evening in two parts. The agenda shows a single date banner made from both
  agenda photos (Part 1 / Part 2), then the two parts side by side.
- **two-day** — two evenings. The agenda shows one row per evening, each with its own dated photo.

Each format keeps its own dates and wording in the `ONE_DAY` and `TWO_DAY` blocks just below the
switch (top bar, hero, agenda, registration card, FAQ, closing line, Google description). Update
the dates in the block you are switching to, then push.

## Editing content

**All copy, dates and links live in one file: `lib/content.ts`.**

Any “Free”/“free” in that file is automatically shown as a highlighted chip on the page
(`components/ui/Free.tsx`) — gold on dark/ivory sections, black on the gold bands.

### Adding photos

The page uses built-in gold “stage light” art wherever a photo would go. To use real photos,
put the files in `public/` and set the paths in `images` at the top of `lib/content.ts`:

```ts
export const images = {
  hero: "/hero.jpg",          // wide, ~2400×1400, subject on the right
  session1: "/session-1.png", // ~980×490
  session2: "/session-2.png",
  facilitator: "/vidyashankar-guru.png", // 16:10
  closing: "/closing.jpg",    // wide crowd / stage shot
};
```

## Page structure

1. Gradient announcement bar + black header (logo · section links · Register now)
2. Hero — rounded photo card, dot-eyebrow, headline, Register pill + Dates / Place / Time, event lock-up tile
3. “Sound familiar?” — six parent situations on an always-moving row of image cards
4. Black stats band — 2 evenings · 90 min · 25k+ trained
5. “After the sessions” — the same six turned into positive outcomes (row moves the other way)
6. Gold band — six take-home tools
7. Agenda — Session 1 & 2 rows with day label, outline and date panel
8. Facilitator — designation, five ✦ points, gold lock-up tile joined to a media panel
9. Gold band — “Save your seat” pass card (price: FREE) with everything included
10. FAQ accordion
11. Closing call to action that doubles as the footer — headline, Register now, MiTran logo, disclaimer, copyright

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Push to GitHub

From inside this folder:

```bash
git init
git add .
git commit -m "Imparting Positivity Masterclass landing page"
git branch -M main

# Create an empty repo on GitHub first, e.g. MitranGlobal/parent-live-sessions, then:
git remote add origin https://github.com/MitranGlobal/parent-live-sessions.git
git push -u origin main
```

> Keep this as its **own repo** (don’t push it over MiTranGlobalPage) so the main site is untouched.

## Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the new repo.
2. Framework preset: **Next.js** (auto-detected). No environment variables.
3. Click **Deploy**. Every push to `main` redeploys.
4. Optional: in *Settings → Domains* add a subdomain such as `parents.mitranglobal.com`
   and create the CNAME record Vercel shows you at your DNS provider.

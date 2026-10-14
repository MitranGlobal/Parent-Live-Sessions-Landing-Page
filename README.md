# MiTran Global — Parent Live Sessions landing page

A standalone one-page site for **“Live Sessions for Parents of Teens”**
(Session 1 · *Beneath “Fine”* — Wed 21 Oct · Session 2 · *From managing to supporting* — Thu 22 Oct).

Every **Register now** button (header, announcement bar, hero, benefits, facilitator,
seat card, closing band — 7 in total) goes to the MiTran Hub checkout:

```
https://hub.mitranglobal.com/web/checkout/6acf55d0740ba37d96e6ba0f
```

## Stack (same as MiTranGlobalPage)

- **Next.js 14** (App Router, TypeScript) — statically prerendered
- **Tailwind CSS v3** — tokens in `tailwind.config.ts` (MiTran near-black `#08090c`, ivory `#f5f4ef`, gold `#e9c46a / #f5d17a / #c99b3a`)
- **Framer Motion** — hero entrance, mobile menu
- **GSAP + ScrollTrigger** — scroll reveals (`components/ui/Reveal.tsx`)
- **next/font** — Inter (all text) + Oswald (event lock-up only)

Three.js and Zustand from the main site aren't needed on this page, so they are left out.

## Editing content

**All copy, dates and links live in one file: `lib/content.ts`.**

Before going live, fill in the items the original draft left unconfirmed
(search the project for `[`):

| Placeholder | Where it shows |
|---|---|
| `[SESSION TIME]` | Hero “Time”, seat card |
| `[Free / fee: confirm]`, `[Confirm: free / fee]` | Hero note, seat card price, FAQ |
| `[confirm]` recording | Hero note, seat card, FAQ |
| `[Add only verified credentials and affiliations]` | Facilitator |
| `[Add Vidyashankar Guru’s photo]` | Facilitator panel |
| `[Privacy policy] · [Terms] · [Contact]` | Footer (`footer.links` → set real URLs) |

### Adding photos

The page uses built-in gold “stage light” art wherever a photo would go. To use real photos,
put the files in `public/` and set the paths in `images` at the top of `lib/content.ts`:

```ts
export const images = {
  hero: "/hero.jpg",          // wide, ~2400×1400, subject on the right
  session1: "/session-1.jpg", // ~980×490
  session2: "/session-2.jpg",
  facilitator: "/vidyashankar-guru.jpg", // ~1600×1000
  closing: "/closing.jpg",    // wide crowd / stage shot
};
```

## Page structure

1. Gradient announcement bar + black header (logo · section links · Log in · Register now)
2. Hero — rounded photo card, dot-eyebrow, headline, Register pill + Dates / Place / Time, event lock-up tile
3. “If you’ve reminded them a hundred times…” — six parent situations on a drifting row of image cards
4. Black stats band — 2 evenings · 90 min · 20 yrs
5. Gold band — six take-home tools
6. Agenda — Session 1 & 2 rows with day label, outline and date panel
7. Facilitator — gold lock-up tile joined to a media panel
8. Gold band — “Save your seat” pass card with everything included
9. FAQ accordion + Contact us
10. Full-bleed closing call to action
11. More from MiTran Global (podcast, newsletter, e-book, posters, Positivity Score)
12. Footer — disclaimer, 112 and Tele-MANAS 14416, legal links

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
git commit -m "Parent Live Sessions landing page"
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

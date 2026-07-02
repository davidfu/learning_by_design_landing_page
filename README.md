# Learning By Design AI — site

Marketing site for [learningbydesign.ai](https://learningbydesign.ai). **Next.js (App Router, TypeScript)**, deployed on Vercel.

## Structure

```
app/
  layout.tsx            Root layout: fonts (next/font), SEO metadata, JSON-LD, Header/Footer
  globals.css           All styling (hand-written CSS — unchanged from the original design)
  page.tsx              Landing page
  blog/page.tsx         "Writing" page — server-renders every Substack post (ISR, hourly)
  api/substack-feed/    JSON endpoint mirroring the feed (optional; blog renders server-side)
components/
  Header.tsx            Nav + mobile menu (client)
  Footer.tsx
  ScrollReveal.tsx      Scroll-in animations (client)
  LogoStrip.tsx         Client/investor/upskilling logos — edit the arrays to add logos
lib/substack.ts         Fetches + parses the Substack RSS (zero-dependency)
public/
  assets/logos/         Logo images
  assets/og-image.png   1200×630 social share image
  robots.txt, sitemap.xml
  revenue-os.html, css/, js/   Legacy page, kept so its URL keeps resolving
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

Connected to Vercel via GitHub — pushes to `main` deploy to production. Vercel auto-detects
Next.js from `package.json` (no config needed). If the project's Framework Preset was previously
pinned to "Other/Static", set it to **Next.js** in Project Settings → Build & Development.

## The Substack feed

`lib/substack.ts` fetches `https://learningbydesign.substack.com/feed`, parses the RSS, and the
blog page renders the posts **server-side** (good for SEO) with hourly revalidation (ISR). New
posts appear automatically — no redeploy. If the feed is unreachable, the page degrades to a
"read them all on Substack" link.

## Adding a logo

Drop the file in `public/assets/logos/` and add an entry to the relevant array in
`components/LogoStrip.tsx` (`{ name, file, dark? }`). Set `dark: true` for white/reversed logos.

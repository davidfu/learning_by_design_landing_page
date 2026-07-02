# Learning By Design AI — landing site

Static marketing site for [learningbydesign.ai](https://learningbydesign.ai), deployed on Vercel.

## Structure

```
index.html              Landing page
blog.html               "Writing" page — lists all Substack posts
api/substack-feed.js    Serverless function: fetches + parses the Substack RSS (server-side, no CORS)
assets/logos/           Client / investor / upskilling logos (served copies)
assets/og-image.png     1200×630 social share image
vercel.json             Clean URLs + long-cache headers for /assets
robots.txt, sitemap.xml SEO
```

## Local preview

It's a static site plus one serverless function. Easiest full-fidelity preview:

```bash
npx vercel dev     # serves index.html + the /api/substack-feed function
```

Or just open `index.html` in a browser (the blog feed needs the serverless function,
so it falls back to a "read on Substack" link when opened as a bare file).

## Deploy

Connected to Vercel via GitHub — every push to `main` deploys automatically.
No build step; Vercel serves the static files and runs `api/` as Node functions.

## The Substack feed

`blog.html` calls `/api/substack-feed`, which fetches
`https://learningbydesign.substack.com/feed`, parses the RSS, and returns JSON.
Results are edge-cached for 1 hour. New Substack posts appear automatically —
nothing to redeploy. If the feed is ever unreachable, the page degrades to a
"read them all on Substack" link.

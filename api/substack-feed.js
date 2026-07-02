// Vercel serverless function: fetches the Substack RSS feed server-side (no CORS),
// parses it with zero dependencies, and returns clean JSON for the blog page.
// Free and self-owned — no third-party feed widget required.

const FEED_URL = "https://learningbydesign.substack.com/feed";

function unwrap(value) {
  if (!value) return "";
  // strip CDATA wrapper if present, then decode a few common entities
  const cdata = value.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  let text = cdata ? cdata[1] : value;
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();
}

function field(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  return m ? unwrap(m[1]) : "";
}

function summarize(html, max = 220) {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

export default async function handler(req, res) {
  try {
    const upstream = await fetch(FEED_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (LearningByDesignAI blog feed)" },
    });
    if (!upstream.ok) throw new Error(`Upstream ${upstream.status}`);
    const xml = await upstream.text();

    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => {
      const block = m[1];
      const enclosure = block.match(/<enclosure[^>]*url="([^"]+)"/i);
      const rawDesc = (block.match(/<description>([\s\S]*?)<\/description>/i) || [])[1] || "";
      return {
        title: field(block, "title"),
        link: field(block, "link"),
        author: field(block, "dc:creator"),
        pubDate: field(block, "pubDate"),
        image: enclosure ? enclosure[1] : "",
        summary: summarize(unwrap(rawDesc)),
      };
    });

    // Cache at the edge for an hour; serve stale while revalidating.
    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json({ ok: true, count: items.length, posts: items });
  } catch (err) {
    res.status(200).json({ ok: false, error: String(err && err.message || err), posts: [] });
  }
}

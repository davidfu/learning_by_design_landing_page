// Fetches + parses the Substack RSS feed (zero dependencies). Shared by the
// server-rendered blog page and the /api/substack-feed route.

export const FEED_URL = "https://learningbydesign.substack.com/feed";

export type Post = {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  image: string;
  summary: string;
};

function unwrap(value: string): string {
  if (!value) return "";
  const cdata = value.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  const text = cdata ? cdata[1] : value;
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();
}

function field(block: string, tag: string): string {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  return m ? unwrap(m[1]) : "";
}

function summarize(html: string, max = 220): string {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(FEED_URL, {
    headers: { "User-Agent": "Mozilla/5.0 (LearningByDesignAI blog feed)" },
    // Revalidate at most hourly (ISR); new posts appear without a redeploy.
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Upstream ${res.status}`);
  const xml = await res.text();

  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => {
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
}

export function formatDate(s: string): string {
  const d = new Date(s);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

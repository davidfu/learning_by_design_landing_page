import { getPosts } from "@/lib/substack";

// JSON endpoint mirroring the old serverless function, in case anything wants
// the feed client-side. The blog page renders server-side and doesn't need it.
export const revalidate = 3600;

export async function GET() {
  try {
    const posts = await getPosts();
    return Response.json(
      { ok: true, count: posts.length, posts },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (err) {
    return Response.json({ ok: false, error: String(err), posts: [] });
  }
}

import type { Metadata } from "next";
import { getPosts, formatDate, type Post } from "@/lib/substack";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Writing — Learning By Design AI",
  description:
    "AI By Design — field notes from Learning By Design AI on building AI-native product and GTM. Every post from our Substack, in one place.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "https://learningbydesign.ai/blog",
    title: "Writing — Learning By Design AI",
    description:
      "Field notes on building AI-native product and GTM. Every post from our Substack, in one place.",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
};

export default async function BlogPage() {
  let posts: Post[] = [];
  try {
    posts = await getPosts();
  } catch {
    posts = [];
  }

  return (
    <>
      <section className="bloghero">
        <div className="wrap">
          <div className="eyebrow">Writing · AI By Design</div>
          <h1>Notes from the build.</h1>
          <p>
            Field notes on building AI-native product and GTM: what actually works, what breaks in
            the last 20%, and the moves we make with clients. Published on our Substack — collected
            here.
          </p>
          <div className="ss-cta">
            <a
              className="btn ghost"
              href="https://learningbydesign.substack.com"
              target="_blank"
              rel="noopener"
            >
              Open on Substack &rarr;
            </a>
          </div>
          <div className="subscribe">
            <iframe
              src="https://learningbydesign.substack.com/embed"
              width={480}
              height={150}
              scrolling="no"
              title="Subscribe to Learning By Design AI on Substack"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="posts">
        <div className="wrap">
          <div className="eyebrow">All posts</div>
          {posts.length > 0 ? (
            <div className="postgrid">
              {posts.map((p) => (
                <a className="post" key={p.link} href={p.link} target="_blank" rel="noopener">
                  {p.image && (
                    <div className="thumb">
                      <img src={p.image} alt="" loading="lazy" />
                    </div>
                  )}
                  <div className="body">
                    <div className="date">{formatDate(p.pubDate)}</div>
                    <h3>{p.title}</h3>
                    <p className="sum">{p.summary}</p>
                    <span className="go">Read post &rarr;</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="status">
              Our posts live on Substack —{" "}
              <a
                href="https://learningbydesign.substack.com"
                style={{ color: "var(--ink)", borderBottom: "2px solid var(--gold)" }}
              >
                read them all here &rarr;
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 301 redirects preserve SEO for any old URL that changed or went away.
  // Add entries from Google Search Console → Pages (URLs with clicks/impressions
  // that no longer resolve). `/revenue-os.html` still exists, so it isn't listed.
  async redirects() {
    return [
      // Example — uncomment and edit with real old paths:
      // { source: "/old-pricing", destination: "/#offerings", permanent: true },
      // { source: "/services", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;

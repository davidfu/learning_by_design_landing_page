import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const description =
  "Learning By Design AI is an AI enablement team for B2B and edtech companies. We build your AI-native product or GTM engine with you — then hand your team the keys. Product By Design AI & GTM By Design AI.";

export const metadata: Metadata = {
  metadataBase: new URL("https://learningbydesign.ai"),
  title: "Learning By Design AI — AI-native product & GTM, built with your team",
  description,
  authors: [{ name: "Learning By Design AI" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: { url: "/assets/logos/logo-lxd.svg", type: "image/svg+xml" },
    apple: "/assets/logos/logo-lxd.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Learning By Design AI",
    url: "https://learningbydesign.ai/",
    title: "Learning By Design AI — AI-native product & GTM, built with your team",
    description:
      "An AI enablement team for B2B and edtech companies. We build your AI-native product or GTM engine with you — then hand your team the keys.",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning By Design AI — AI-native product & GTM, built with your team",
    description:
      "An AI enablement team for B2B and edtech companies. We build your AI-native product or GTM engine with you — then hand your team the keys.",
    images: ["/assets/og-image.png"],
  },
};

export const viewport = { themeColor: "#1E3A5F" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Learning By Design AI",
  alternateName: "LXD",
  url: "https://learningbydesign.ai/",
  description:
    "An AI enablement team for B2B and edtech companies. We build AI-native product and GTM engines with your team.",
  sameAs: [
    "https://linkedin.com/company/learningxdesign",
    "https://learningbydesign.substack.com",
  ],
  founder: { "@type": "Person", name: "David Fu" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}

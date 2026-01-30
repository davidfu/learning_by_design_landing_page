import type { Metadata, Viewport } from "next"
import { DM_Sans, Lora } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Learning By Design – AI-native GTM, Product & Education",
  description:
    "We help education and B2B teams turn fuzzy ideas and messy pipelines into focused offers, clean CRM habits, and repeatable revenue.",
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable}`}>
      <body className="font-serif">{children}</body>
    </html>
  )
}

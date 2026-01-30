import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PersonaStrip } from "@/components/persona-strip"
import { SocialProof } from "@/components/social-proof"
import { Services } from "@/components/services"
import { WhySection } from "@/components/why-section"
import { Testimonials } from "@/components/testimonials"
import { Resources } from "@/components/resources"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PersonaStrip />
        <SocialProof />
        <Services />
        <WhySection />
        <Testimonials />
        <Resources />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

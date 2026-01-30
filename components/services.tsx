import Link from "next/link"

const services = [
  {
    id: "offer-rev-ops",
    title: "B2B Rev Ops × AI (Revenue OS.ai)",
    subtitle: "Systematize your founder-led sales and demand gen.",
    description:
      "Replace scattered spreadsheets and one-off hacks with a simple, AI-native GTM system:",
    features: [
      "Clean CRM setup and pipeline stages you'll actually use.",
      "Lead sourcing and data enrichment via tools like Clay, Apollo, and Instantly.",
      "Outreach sequences, follow-up cadences, and dashboards for demos, proposals, and closed-won.",
      "Weekly working sessions and ride-along coaching so the system sticks.",
    ],
    footer:
      "Built for early-stage B2B teams—especially in edtech—who need to turn \"we're getting in the door\" into a repeatable motion.",
    link: { href: "/revenue-os", label: "Explore Revenue OS.ai →" },
  },
  {
    id: "offer-product",
    title: "Product & Productization × AI",
    subtitle: "Nail the offer. Sell what's buildable, and build what sells.",
    description:
      "For organizations with strong programs, services, or IP that haven't yet been turned into clear products:",
    features: [
      "Jobs-to-be-done and user research to clarify who you serve and why they buy.",
      "Packaging, pricing, and product definition aligned with your delivery capacity.",
      "AI-enabled product roadmaps that sequence bets over 1, 3, and 5 years.",
      "Buy/build/partner decisions and funder/board-ready recommendations.",
    ],
    footer:
      "Examples include productization and AI roadmapping for Shine Early Learning/Acelero and a pan-African edtech nonprofit serving ministries of education across multiple countries.",
  },
  {
    id: "offer-ai",
    title: "AI Upskilling, Automation & Transformation",
    subtitle: "From AI curiosity to everyday practice.",
    description: "For companies that want more than a one-off AI workshop:",
    features: [
      "AI skills frameworks and assessments tailored to your roles.",
      "Cohort-based \"30-Day AI Challenge\" style programs that build real habits.",
      "AI-enabled process redesign for teams (sales, L&D, ops).",
      "Pilot design and metrics so you can show real impact, not just hype.",
    ],
    footer:
      "At 100 School and JFF, this has meant going from scattered AI experiments to structured programs, assessment dashboards, and six-figure B2B opportunities.",
  },
  {
    id: "offer-edtech",
    title: "Edtech GTM & Ecosystem Navigation",
    subtitle: "Go-to-market in education without losing years to the learning curve.",
    description: "If you're building for K-12, higher ed, or workforce:",
    features: [
      "ICP definition and GTM strategy across districts, CMOs, and workforce boards.",
      "Founder-led sales coaching and RFP/bid support.",
      "Positioning and narrative that resonates with educators, administrators, and funders.",
      "Intros and pattern recognition from a decade across African Leadership Group, Streetlight Schools, edtech startups, and US intermediaries.",
    ],
  },
  {
    id: "offer-program",
    title: "Program Design, Facilitation & Coaching",
    subtitle: "Build the programs that build entrepreneurs.",
    description: "For incubators, funders, schools, and fellowship programs:",
    features: [
      "Curriculum and program design for social entrepreneurship and future-of-learning ventures.",
      "Facilitated workshops on problem discovery, JTBD, and validation.",
      "1:1 coaching for founders navigating pivots, funding, and personal inflection points.",
    ],
    footer:
      "This is the work I do with Penn GSE's M.S.Ed. in Education Entrepreneurship, Transcend Network, 4.0 Schools, Promise Venture Studio and others.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-4 font-sans text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold text-white">
          Expertise / Service Offerings
        </h2>
        <p className="mb-16 max-w-[640px] text-[17px] text-[#fffff0]">
          {"Every engagement blends strategy + execution. I don't just advise; I roll up my sleeves with you and your team."}
        </p>

        {services.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="border-b border-[#3b2214] py-10 first:pt-0"
          >
            <div className="mb-6">
              <h3 className="font-sans text-[clamp(1.2rem,2.5vw,1.5rem)] font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 font-sans text-[17px] font-medium text-[#b87333]">
                {service.subtitle}
              </p>
            </div>
            <div>
              <p className="text-[#fffff0]">{service.description}</p>
              <ul className="my-4 list-disc pl-5">
                {service.features.map((feature, index) => (
                  <li key={index} className="mb-2 text-[#fffff0]">
                    {feature}
                  </li>
                ))}
              </ul>
              {service.footer && <p className="text-[#fffff0]">{service.footer}</p>}
              {service.link && (
                <Link
                  href={service.link.href}
                  className="mt-6 inline-block font-sans font-semibold text-[#1bbe90] transition-colors hover:text-white"
                >
                  {service.link.label}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

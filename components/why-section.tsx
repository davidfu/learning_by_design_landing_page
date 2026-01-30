import Link from "next/link"

const reasons = [
  {
    title: "A network of operators and experts power our work.",
    description:
      "We bring the strongest domain experts across industry (education) and functions (tech, sales, GTM, marketing, revops, product) who've experienced and overcome challenges in scaling and leading organizations.",
  },
  {
    title: "Strategy + execution, not either/or.",
    description:
      "I don't hand you a deck and disappear. I join pipeline reviews, rewrite outreach, interview users, and help you implement tools, processes and habits until things work.",
  },
  {
    title: "Calm judgment when things are messy.",
    description:
      "From xenophobic violence and COVID disruptions to leadership transitions and funding crunches, I've led teams through \"war-time\" moments while protecting what matters most: people, positioning, process and profit / sustainability.",
  },
  {
    title: "Cross-functional by design.",
    description:
      "I move fluently between product, GTM, ops, and finance—connecting dots so your strategy, messaging, and execution aren't fighting each other.",
  },
]

const people = [
  { name: "Karn", desc: "Fractional CTO with AI/ML expertise", initials: "K" },
  { name: "Ntaka", desc: "Innovation, strategy, project manager", initials: "N" },
  { name: "Darin", desc: "Higher ed × GTM & sales — avoiding the pilot trap", initials: "D" },
  {
    name: "Lawrence",
    desc: "Consultant & private equity & public markets investor turned vertical SaaS owner & operator",
    initials: "L",
  },
]

const shortTestimonials = [
  {
    icon: "\u{1F4B0}",
    quote:
      "Thanks for being real with me and thinking through tradeoffs, optimization, and cofounder equity.",
    cite: "~ from a founder who successfully raised a round",
  },
  {
    icon: "\u{1F392}",
    quote: "Thanks for all your thoughts. You're extremely knowledgeable about this space.",
    cite: "~ from a founder about edtech",
  },
  {
    icon: "\u{2764}\u{FE0F}",
    quote:
      "Really glad I talked to you before leaving to deal with a personal family situation; I was able to be there with them in their last moments and support my mom afterwards before returning to build my startup.",
    cite: "~ from a founder navigating life",
  },
]

export function WhySection() {
  return (
    <section id="why" className="py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-8 text-center text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold text-white text-balance">
          Not just a consultant. A cross-functional co-builder, powered by a powerful network.
        </h2>

        <div className="mb-10 flex justify-center">
          <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full bg-white p-1 text-6xl font-bold text-black shadow-[0_0_0_4px_white]">
            DF
          </div>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-md border border-[#3b2214] bg-[rgba(27,59,34,0.2)] p-8"
            >
              <h3 className="mb-4 text-lg font-semibold text-[#1bbe90]">
                {reason.title}
              </h3>
              <p className="text-[#fffff0]">{reason.description}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-8 text-center text-lg font-semibold text-[#1bbe90]">
          {"People we've worked with include"}
        </h3>
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {people.map((person) => (
            <div key={person.name} className="text-center">
              <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-[#3b2214] text-2xl font-bold text-[#fffff0]">
                {person.initials}
              </div>
              <p className="text-[15px] font-semibold text-white">{person.name}</p>
              <p className="text-[13px] leading-snug text-[#fffff0]">{person.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {shortTestimonials.map((t, index) => (
            <blockquote
              key={index}
              className="border-l-[3px] border-[#b87333] p-6 text-[15px] italic text-[#fffff0]"
            >
              <span className="mb-2 block not-italic">{t.icon}</span>
              {t.quote}
              <cite className="mt-2 block text-[13px] not-italic text-[#b87333]">{t.cite}</cite>
            </blockquote>
          ))}
        </div>

        <p className="text-center">
          <Link
            href="https://bit.ly/lxd_working_session"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded bg-[#1bbe90] px-6 py-3.5 text-[15px] font-semibold text-black transition-colors hover:bg-white"
          >
            Book a 30-minute intro
          </Link>
        </p>
      </div>
    </section>
  )
}

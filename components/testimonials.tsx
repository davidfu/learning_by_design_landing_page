const testimonials = [
  {
    name: "Max — 100 School",
    initials: "M",
    quotes: [
      "David Fu has been a cheat code for 100 School.",
      "When we were juggling two hard problems at once — (1) re-building & launching our learning experience so it actually transformed people while keeping our core differentiation intact, and (2) validating the right B2B enterprise AI enablement/upskilling opportunity … David came in and brought both clarity + momentum.",
      "On strategy / discovery: He ran tight discovery across learners + enterprise stakeholders, then translated messy feedback into crisp decisions: what to cut, what to double down on, and what our \"atomic challenge\" format needed to be. That work directly helped us pivot from the old 100-day and 7 day atomic challenges into a punchy, foundations challenge that's easier to ship, easier to run, and way better for engagement (30 days for B2B; 15 days for B2C).",
      "On execution + team: David didn't just \"advise.\" He showed up like a cofounder — helping me navigate the hard leadership stuff: alignment, prioritization, and the uncomfortable conversations you avoid when you're tired and moving fast. He also brought in Liza, who complemented his strengths and became instrumental as a product/project lead to empower the team and keep the trains running.",
      "On revenue impact: This is the part founders care about. David helped us tighten our enterprise story, improve proposals, and run a real sales process. Result: 7-figure pipeline created and 6-figures in revenue closed, plus 5 pilots (and counting) — including with a global top-tier consulting company.",
    ],
  },
  {
    name: "Jennifer — JFF",
    initials: "J",
    quotes: [
      "Wanted to take a moment to thank David Fu, who partnered with us at JFFLabs recently, for his awesome work.",
      "David brought crucial energy and momentum to our tiger team when we were looking for specific GTM and productization expertise. He quickly identified valuable insights and worked with us to synthesize them into actionable recommendations, enabling leadership to make key strategic decisions on priorities and operationalization.",
      "David delivered a comprehensive market landscape analysis, helping us think about the value chain and the dynamics of an evolving market. He went beyond simple market sizing, uncovering atypical insights to help us push our work further, while always centering our mission of supporting workers and learners in an age of evolving skills and technology.",
      "David's work provided clarity on JFF's strategy, while taking into industry trends to help us plan for the future. His strong communication ensured clear timelines, ownership, and high-quality deliverables throughout the project.",
    ],
  },
  {
    name: "Seth — African Leadership Group",
    initials: "S",
    quotes: [
      "Fu is a one of one - his background in finance and operations keep him well grounded in feasibility and delivering real value, but he elevates above that to define ambitious product vision while aligning and empowering diverse cross-functional teams to bring that vision to life. He navigates between big picture and minute detail seamlessly, and he leads across multiple layers of complexity to create clarity and focus. He was the critical lynchpin behind a massive scale up for a product that had reached product market fit, growing revenue 10x in less than a year.",
      "Fu's leadership unlocks a new level within his teams - people perform at a higher level and unlock levels of creative problem solving that they haven't experienced before. He always brings a contagious energy and relentless courage to the work that leads to outsized results.",
    ],
  },
]

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-10 text-center font-sans text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold text-white">
          What clients say
        </h2>
        <div className="flex flex-col gap-16">
          {testimonials.map((t) => (
            <article key={t.name} className="grid items-start gap-8 sm:grid-cols-[80px_1fr]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#3b2214] font-sans text-2xl font-bold text-[#fffff0]">
                {t.initials}
              </div>
              <div>
                <p className="mb-4 font-sans text-[15px] font-semibold text-[#1bbe90]">
                  {t.name}
                </p>
                <blockquote>
                  {t.quotes.map((quote, index) => (
                    <p key={index} className="mb-4 text-[15px] leading-relaxed text-[#fffff0]">
                      {quote}
                    </p>
                  ))}
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

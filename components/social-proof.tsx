const trustedLogos = [
  "100 School",
  "JFFLabs",
  "Penn GSE",
  "African Leadership Group",
  "Shine Early Learning",
  "Diffusion Venture Studio",
  "XtraMath",
  "Reforge",
  "Streetlight Schools",
]

const fundedByLogos = [
  "Y Combinator",
  "Techstars",
  "a16z",
  "Gates Foundation",
  "Walton Family Foundation",
  "MSDF",
]

const results = [
  {
    icon: "$",
    text: "$1 million+ in pipeline, six figures ($100ks) in closed revenue in a short period of time (for multiple clients)",
  },
  {
    icon: "AI",
    text: "AI-powered product roadmaps to productize your expertise areas and leverage AI in building and the platform (for multiple clients)",
  },
  {
    icon: "W",
    text: "AI-powered process & people for translation, QA and AI-voice over of a huge volume of learning content and $850k state-wide workforce dev grant for a simulation, workforce learning platform",
  },
  {
    icon: "P",
    text: "Enterprise learning startup: honed positioning, GTM, value prop and the right fit for their replacement CEO",
  },
]

export function SocialProof() {
  return (
    <section id="results" className="py-16">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-[#b87333]">
          Trusted by teams backed by leading VCs and philanthropies
        </p>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustedLogos.map((name) => (
            <span
              key={name}
              className="font-sans text-sm font-medium text-[#fffff0] opacity-80"
            >
              {name}
            </span>
          ))}
        </div>

        <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-[#b87333]">
          Orgs have been funded by
        </p>
        <div className="mb-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {fundedByLogos.map((name) => (
            <span
              key={name}
              className="font-sans text-sm font-medium text-[#fffff0] opacity-80"
            >
              {name}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-[#fffff0] p-10 text-left text-[#b87333]"
              style={{
                clipPath:
                  index % 2 === 0
                    ? "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 85%)",
              }}
            >
              <p className="mb-4 font-sans text-2xl font-bold">{result.icon}</p>
              <p className="text-[15px]">{result.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

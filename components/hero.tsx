import Link from "next/link"

export function Hero() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[720px]">
          <h1 className="mb-8 text-[clamp(2rem,5vw,3rem)] leading-tight text-white text-balance">
            Build AI-native GTM systems and products that close deals.
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-[#fffff0] opacity-95">
            We help education and B2B teams turn fuzzy ideas and messy pipelines into focused
            offers, clean CRM habits, and repeatable revenue—combining AI, GTM, and product
            leadership from experience across startups, scale-ups, and non-profits.
          </p>
          <div className="mb-10 h-px w-2/3 max-w-[320px] bg-white opacity-90" aria-hidden="true" />
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://bit.ly/lxd_working_session"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded bg-[#1bbe90] px-6 py-3.5 text-[15px] font-semibold text-black transition-colors hover:bg-white"
            >
              Book a working session
            </Link>
            <Link
              href="https://bit.ly/david_lxd_mini_cases_1"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded border-2 border-[#fffff0] bg-transparent px-6 py-3.5 text-[15px] font-semibold text-[#fffff0] transition-colors hover:bg-[#fffff0] hover:text-black"
            >
              See client results
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

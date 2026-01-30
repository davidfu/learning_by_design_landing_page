import Link from "next/link"

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#143b22] to-black py-24"
    >
      <div className="mx-auto max-w-[560px] px-6 text-center">
        <h2 className="mb-4 font-sans text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold text-white">
          Ready to turn ideas and potential into systems and results?
        </h2>
        <p className="mb-10 text-[#fffff0]">
          {"Let's explore whether there's a high-leverage project we can tackle together."}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://bit.ly/lxd_working_session"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded bg-[#1bbe90] px-6 py-3.5 font-sans text-[15px] font-semibold text-black transition-colors hover:bg-white"
          >
            Book a 30-minute intro
          </Link>
          <Link
            href="https://bit.ly/david_lxd_results"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded border-2 border-[#fffff0] bg-transparent px-6 py-3.5 font-sans text-[15px] font-semibold text-[#fffff0] transition-colors hover:bg-[#fffff0] hover:text-black"
          >
            Download detailed case studies
          </Link>
        </div>
      </div>
    </section>
  )
}

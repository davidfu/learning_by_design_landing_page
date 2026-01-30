import Link from "next/link"

export function Resources() {
  return (
    <section id="resources" className="py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-4 font-sans text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold text-white">
          Resources
        </h2>
        <p className="text-[17px] text-[#fffff0]">
          <Link
            href="https://learningbydesign.substack.com"
            target="_blank"
            rel="noopener"
            className="text-[#1bbe90] transition-colors hover:text-white"
          >
            {"0 → 1 GTM"}
          </Link>{" "}
          — on Substack.
        </p>
      </div>
    </section>
  )
}

import Link from "next/link"

function Logo() {
  return (
    <svg
      viewBox="0 0 48 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-auto"
    >
      <rect width="48" height="20" rx="4" fill="#1bbe90" />
      <text x="6" y="14" fontSize="10" fill="black" fontWeight="bold">LxD</text>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-[#3b2214] py-8">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6">
        <Link href="/" className="flex items-center gap-1">
          <Logo />
          <span className="ml-1 font-sans text-lg font-semibold text-white max-sm:hidden">
            Learning By Design
          </span>
        </Link>
        <p className="text-[13px] text-[#b87333]">
          © Learning By Design LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

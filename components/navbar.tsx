"use client"

import { useState } from "react"
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

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#3b2214] bg-black">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-1">
          <Logo />
          <span className="ml-1 font-sans text-lg font-semibold text-white max-sm:hidden">
            Learning By Design
          </span>
        </Link>

        <nav
          className={`${
            isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
          } absolute left-0 right-0 top-full border-b border-[#3b2214] bg-black p-6 transition-all md:static md:block md:translate-y-0 md:border-none md:bg-transparent md:p-0 md:opacity-100 md:visible`}
        >
          <ul className="flex flex-col gap-4 md:flex-row md:gap-6">
            {[
              { href: "#services", label: "Services" },
              { href: "#results", label: "Results" },
              { href: "#why", label: "About" },
              { href: "#resources", label: "Resources" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-sans text-[15px] font-medium text-[#fffff0] transition-colors hover:text-[#1bbe90]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-[5px] p-2 md:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block h-0.5 w-[22px] bg-white" />
          <span className="block h-0.5 w-[22px] bg-white" />
          <span className="block h-0.5 w-[22px] bg-white" />
        </button>
      </div>
    </header>
  )
}

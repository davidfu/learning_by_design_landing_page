"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onBlog = pathname?.startsWith("/blog");

  return (
    <header>
      <div className="wrap nav">
        <Link className="brand" href="/">
          <span className="logo">LXD</span> Learning By Design AI
        </Link>
        <nav className={`nav-links${open ? " open" : ""}`} id="nav" onClick={() => setOpen(false)}>
          <a href="/#find">Who we help</a>
          <a href="/#offerings">Offerings</a>
          <a href="/#work">Proof</a>
          <a href="/#team">Team</a>
          <Link href="/blog" style={onBlog ? { color: "var(--ink)" } : undefined}>
            Writing
          </Link>
          <a className="btn gold" href="https://cal.com/davidfu/30min">
            Book a call
          </a>
        </nav>
        <button
          className="menu-toggle"
          id="menuBtn"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

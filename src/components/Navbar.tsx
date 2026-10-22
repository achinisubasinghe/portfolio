"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/navigation";
import GooeyNav from "@/components/bits/GooeyNav";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const activeIndex = Math.max(
    0,
    navLinks.findIndex((link) =>
      link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
    )
  );

  return (
    <header className="sticky top-0 z-40 px-3 pt-4 md:px-6 md:pt-5">
      <div className="glass-nav mx-auto flex max-w-[1120px] items-center gap-3 rounded-full px-2 py-1.5 md:px-3 md:py-2">
        <Link
          href="/"
          className="glass-chip grid size-10 shrink-0 place-items-center rounded-full text-xl text-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Home"
        >
          AS
        </Link>

        <div className="hidden min-w-0 flex-1 lg:flex">
          <GooeyNav items={navLinks} activeIndex={activeIndex} />
        </div>

        <button
          className="glass-chip ml-auto grid size-10 place-items-center rounded-full text-ice lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <ul className="glass mx-auto mt-2 flex max-w-[1120px] flex-col gap-1 rounded-3xl p-3 lg:hidden">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-full px-4 py-2.5 text-lg ${
                    isActive ? "glass-chip-active text-ice" : "text-ice/80 hover:bg-white/10"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/navigation";
import GooeyNav from "@/components/bits/GooeyNav";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const activeIndex = navLinks.findIndex((link) =>
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
  );

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-[var(--z-nav)] bg-gradient-to-b from-background/85 via-background/40 to-transparent px-4 pb-2 pt-4 sm:px-6 md:pt-5">
      <div className="glass-nav mx-auto flex max-w-[1200px] items-center gap-4 rounded-full px-2.5 py-2 md:px-3.5">
        <Link
          href="/"
          className="glass-chip grid size-10 shrink-0 place-items-center rounded-full font-script text-2xl leading-none text-ice active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Achini Subasinghe home"
        >
          AS
        </Link>

        <div className="hidden min-w-0 flex-1 lg:flex">
          <GooeyNav items={navLinks} activeIndex={activeIndex} />
        </div>

        <button
          type="button"
          className="glass-chip ml-auto grid size-10 place-items-center rounded-full text-ice active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="glass panel-enter mx-auto mt-2.5 max-w-[1200px] rounded-2xl p-2.5 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      isActive
                        ? "glass-chip-active text-ice"
                        : "text-muted hover:bg-white/[0.06] hover:text-ice"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  activeIndex?: number;
}

const GooeyNav = ({ items, activeIndex = 0 }: GooeyNavProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const [halo, setHalo] = useState({ x: 0, ready: false });

  useEffect(() => {
    const syncHalo = () => {
      const container = containerRef.current;
      const list = navRef.current;
      if (!container || !list || activeIndex < 0) {
        setHalo({ x: 0, ready: false });
        return;
      }
      const activeLi = list.children[activeIndex] as HTMLElement | undefined;
      if (!activeLi) {
        setHalo({ x: 0, ready: false });
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeLi.getBoundingClientRect();
      const center = activeRect.left - containerRect.left + activeRect.width / 2;
      setHalo({ x: center, ready: true });
    };

    syncHalo();
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) syncHalo();
    });

    const list = navRef.current;
    if (!list) {
      return () => {
        cancelled = true;
      };
    }

    const resizeObserver = new ResizeObserver(syncHalo);
    resizeObserver.observe(list);
    const activeLi = activeIndex >= 0 ? (list.children[activeIndex] as HTMLElement | undefined) : undefined;
    if (activeLi) resizeObserver.observe(activeLi);

    return () => {
      cancelled = true;
      resizeObserver.disconnect();
    };
  }, [activeIndex]);

  return (
    <nav ref={containerRef} aria-label="Primary" className="relative w-full">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 h-8 w-24 rounded-full bg-accent/20 blur-md transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{
          transform: `translate3d(${halo.x - 48}px, -50%, 0)`,
          opacity: halo.ready ? 1 : 0,
        }}
      />
      <ul
        ref={navRef}
        className="relative z-10 m-0 flex w-full list-none items-center justify-end gap-1 p-0"
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium tracking-[-0.01em] transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isActive
                    ? "glass-chip-active text-ice"
                    : "border border-transparent text-muted hover:bg-white/[0.06] hover:text-ice"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default GooeyNav;

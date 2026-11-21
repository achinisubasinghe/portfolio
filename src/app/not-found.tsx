import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <Section>
        <p className="font-mono text-sm tracking-[0.06em] tabular-nums text-accent">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.025em] text-ice sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-[38ch] text-sm leading-relaxed text-muted">
          The page you requested does not exist or has moved.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-accent/45 bg-accent/15 px-5 py-2.5 text-sm font-medium text-ice transition-all duration-200 hover:border-accent/70 hover:bg-accent/25 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Go home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-xl border border-white/14 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-muted transition-all duration-200 hover:border-white/30 hover:bg-white/[0.09] hover:text-ice active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View projects
          </Link>
        </div>
      </Section>
    </div>
  );
}

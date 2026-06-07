import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Page not found | Achini Subasinghe",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[50dvh] items-center justify-center px-1">
      <Section className="w-full max-w-md text-center">
        <p className="font-handwritten text-5xl text-accent sm:text-6xl md:text-7xl">
          404
        </p>
        <h1 className="mt-4 text-xl font-medium tracking-tight sm:text-2xl">
          Page not found
        </h1>
        <p className="mt-3 text-base text-muted">
          This page doesn&apos;t exist or may have moved. Head back home to keep browsing.
        </p>
        <Link
          href="/"
          className="interactive-surface mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-accent/40 bg-accent px-6 py-2.5 text-sm font-medium text-background shadow-[0_0_20px_rgba(196,168,130,0.15)] hover:bg-accent-muted sm:mt-8 sm:w-auto"
        >
          Go back home
        </Link>
      </Section>
    </div>
  );
}

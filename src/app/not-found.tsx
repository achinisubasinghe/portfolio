import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Achini Subasinghe",
};

export default function NotFound() {
  return (
    <div className="text-center">
      <Section>
        <h1 className="text-4xl md:text-5xl mb-4">404</h1>
        <p className="mb-6 text-2xl text-muted">Page not found</p>
        <Link
          href="/"
          className="inline-block rounded-full border border-white/25 bg-white/8 px-6 py-2 text-lg transition-colors hover:bg-white/14 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Go back home
        </Link>
      </Section>
    </div>
  );
}

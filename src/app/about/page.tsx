import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Education, development tools, and technologies used by Achini Subasinghe.",
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <p className="font-mono text-xs tracking-[0.06em] text-accent">01 / About</p>
        <h1 className="text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-balance text-ice md:text-5xl">
          About
        </h1>
      </header>
      <AboutContent />
    </div>
  );
}

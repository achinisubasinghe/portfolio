import type { Metadata } from "next";
import { workEntries } from "@/data/workExperience";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Work experience",
  description: "Work experience of Achini Subasinghe.",
};

export default function WorkExperiencePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="font-mono text-xs tracking-[0.06em] text-accent">04 / Experience</p>
        <h1 className="text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-balance text-ice md:text-5xl">
          Work experience
        </h1>
      </header>

      <div className="flex flex-col gap-6">
        {workEntries.map((entry) => (
          <Section key={entry.title} as="article" className="glass-interactive">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="flex flex-col gap-2.5 md:col-span-4">
                <time className="font-mono text-xs tracking-[0.04em] tabular-nums text-accent">
                  {entry.period}
                </time>
                <span className="w-fit rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-muted">
                  {entry.type}
                </span>
              </div>

              <div className="md:col-span-8">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ice">
                  {entry.title}
                </h2>
                <p className="mt-1 text-base font-medium text-muted">{entry.company}</p>
                <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.7] text-pretty text-ice/80">
                  {entry.description}
                </p>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}

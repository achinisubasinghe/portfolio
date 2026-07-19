import type { Metadata } from "next";
import { workEntries } from "@/data/workExperience";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Work experience | Achini Subasinghe",
  description: "Work experience of Achini Subasinghe",
};

export default function WorkExperiencePage() {
  return (
    <div>
      <header className="mb-8 space-y-2 sm:mb-10 sm:space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Career
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          Work experience
        </h1>
      </header>
      <div className="relative flex flex-col gap-5 sm:gap-6">
        {/* Timeline rail — desktop */}
        <div
          className="absolute bottom-4 left-[11px] top-4 hidden w-px bg-border-strong md:block"
          aria-hidden="true"
        />
        {workEntries.map((entry) => (
          <div key={entry.title} className="relative min-w-0 md:pl-10">
            <span
              className="absolute left-0 top-8 hidden h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-background md:flex"
              aria-hidden="true"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <Section className="border-l-2 border-l-accent/50 md:border-l md:border-l-border">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                  {entry.title.trim()}
                </h2>
                <p className="text-base font-medium text-accent-muted">
                  {entry.company}
                </p>
                <p className="text-sm tabular-nums text-muted">{entry.period}</p>
                <p className="mt-2 max-w-prose text-base leading-relaxed text-foreground/90">
                  {entry.description}
                </p>
              </div>
            </Section>
          </div>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { volunteeringExperiences } from "@/data/volunteering";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Volunteering",
  description: "University tech community volunteering by Achini Subasinghe at NSBM Green University.",
};

export default function VolunteeringPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="font-mono text-xs tracking-[0.06em] text-accent">03 / Volunteering</p>
        <h1 className="text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-balance text-ice md:text-5xl">
          Volunteering
        </h1>
        <p className="max-w-[60ch] text-[15px] leading-[1.7] text-pretty text-muted sm:text-base">
          Student society events, hackathons, and datathons supported at NSBM Green University.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {volunteeringExperiences.map((exp) => (
          <Section key={exp.title} as="article" className="glass-interactive">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className="flex flex-col lg:col-span-5">
                <time className="font-mono text-xs tracking-[0.05em] tabular-nums text-accent">
                  {exp.period}
                </time>
                <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.02em] text-ice">
                  {exp.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-ice/90">{exp.role}</p>
                <p className="mt-0.5 text-sm text-muted">{exp.organization}</p>
                <p className="mt-4 max-w-[48ch] text-[15px] leading-[1.7] text-pretty text-ice/80">
                  {exp.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                <figure className="aspect-[4/3] overflow-hidden rounded-xl border border-white/14 bg-[#0b1018]">
                  <Image
                    src={exp.image1}
                    alt={exp.image1Alt}
                    width={800}
                    height={600}
                    className={`h-full w-full ${
                      exp.image1Contain ? "object-contain p-1.5" : "object-cover object-top"
                    }`}
                  />
                </figure>
                <figure className="aspect-[4/3] overflow-hidden rounded-xl border border-white/14 bg-[#0b1018]">
                  <Image
                    src={exp.image2}
                    alt={exp.image2Alt}
                    width={800}
                    height={600}
                    className={`h-full w-full object-cover ${exp.image2Position ?? "object-top"}`}
                  />
                </figure>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}

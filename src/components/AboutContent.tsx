"use client";

import { useState } from "react";
import Image from "next/image";
import { aboutTabs, type AboutTab, type EducationItem, type SkillItem } from "@/data/about";
import { TabGroup, type Tab } from "@/components/TabGroup";
import { Section } from "@/components/Section";

const tabImages: Record<
  AboutTab["id"],
  { src: string; width: number; height: number; alt: string }
> = {
  education: {
    src: "/images/vice.jpeg",
    width: 1145,
    height: 764,
    alt: "Achini Subasinghe at NSBM Green University",
  },
  tools: {
    src: "/images/lap.jpeg",
    width: 3024,
    height: 4032,
    alt: "Achini Subasinghe configuring a network switch on her laptop in a university lab",
  },
  technologies: {
    src: "/images/work.jpeg",
    width: 1280,
    height: 1145,
    alt: "Achini Subasinghe working on a laptop during a university lab session",
  },
};

function groupByCategory(items: SkillItem[]) {
  return items.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item.name);
      return acc;
    },
    {} as Record<string, string[]>
  );
}

function EducationList({ items }: { items: EducationItem[] }) {
  return (
    <ul className="divide-y divide-white/10">
      {items.map((item) => (
        <li key={item.degree} className="py-5 first:pt-0 last:pb-0">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-base font-semibold tracking-[-0.01em] text-ice sm:text-lg">
              {item.degree}
            </h2>
            <time className="font-mono text-xs tracking-[0.03em] tabular-nums text-accent">
              {item.period}
            </time>
          </div>
          <p className="mt-1 text-sm text-muted">{item.institution}</p>
          {item.details && <p className="mt-1.5 text-sm text-ice/75">{item.details}</p>}
        </li>
      ))}
    </ul>
  );
}

function SkillGrid({ items }: { items: SkillItem[] }) {
  const grouped = groupByCategory(items);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {Object.entries(grouped).map(([category, names]) => (
        <div
          key={category}
          className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
        >
          <h2 className="border-b border-white/10 pb-2 font-mono text-xs tracking-[0.04em] text-muted">
            {category}
          </h2>
          <div className="flex flex-wrap gap-2">
            {names.map((name) => (
              <span
                key={name}
                className="rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-ice/90"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function AboutContent() {
  const [activeTab, setActiveTab] = useState<AboutTab["id"]>(aboutTabs[0].id);

  const tabs: Tab[] = aboutTabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    content: (
      <Section>
        {tab.education ? (
          <EducationList items={tab.education} />
        ) : (
          <SkillGrid items={tab.skills ?? []} />
        )}
      </Section>
    ),
  }));

  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <TabGroup
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={(id) => setActiveTab(id as AboutTab["id"])}
          ariaLabel="About sections"
        />
      </div>
      <div className="lg:sticky lg:top-28 lg:col-span-5">
        <div className="glass overflow-hidden rounded-2xl p-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#0b1018]">
            {(Object.entries(tabImages) as [AboutTab["id"], (typeof tabImages)[AboutTab["id"]]][]).map(
              ([id, item]) => {
                const isActive = activeTab === id;
                return (
                  <Image
                    key={id}
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    priority={id === "education"}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-200 motion-reduce:transition-none ${
                      isActive ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

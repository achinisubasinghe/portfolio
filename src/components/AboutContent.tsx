"use client";

import { useState } from "react";
import Image from "next/image";
import { aboutTabs } from "@/data/about";
import { TabGroup, type Tab } from "@/components/TabGroup";
import { Section } from "@/components/Section";

const tabImages: Record<string, { src: string; width: number; height: number }> = {
  education: { src: "/images/vice.jpeg", width: 1145, height: 764 },
  tools: { src: "/images/lap.jpeg", width: 1280, height: 1145 },
  technologies: { src: "/images/work.jpeg", width: 3024, height: 4032 },
};

function groupByCategory(items: { name: string; category?: string }[]) {
  return items.reduce(
    (acc, item) => {
      const cat = item.category || "Other";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item.name);
      return acc;
    },
    {} as Record<string, string[]>
  );
}

function ToolPill({ name }: { name: string }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-white/25 bg-white/8 px-3 py-1 text-sm">
      {name}
    </span>
  );
}

function renderToolsContent(content: { name: string; category?: string }[]) {
  const grouped = groupByCategory(content);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {Object.entries(grouped).map(([category, names]) => (
        <div
          key={category}
          className="flex flex-col gap-3 rounded-xl border border-white/20 bg-white/5 p-4"
        >
          <h3 className="border-b border-white/15 pb-2 text-base text-muted">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {names.map((name) => (
              <ToolPill key={name} name={name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderTabContent(
  tabId: string,
  content: string[] | { name: string; category?: string }[]
) {
  const items = content;

  if (typeof items[0] === "string") {
    return (
      <ul className="list-disc list-inside space-y-3 text-lg">
        {(items as string[]).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  if (tabId === "tools") {
    return renderToolsContent(items as { name: string; category?: string }[]);
  }

  const grouped = groupByCategory(items as { name: string; category?: string }[]);

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([category, names]) => (
        <div key={category}>
          <h3 className="mb-3 text-xl text-muted">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {names.map((name) => (
              <ToolPill key={name} name={name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function AboutContent() {
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id);

  const tabs: Tab[] = aboutTabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    content: <Section>{renderTabContent(tab.id, tab.content)}</Section>,
  }));

  const image = tabImages[activeTab] ?? tabImages.education;

  return (
    <div className="flex flex-col md:flex-row gap-10 items-start">
      <div className="w-full md:w-3/5">
        <TabGroup tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="w-full md:w-2/5 flex justify-center sticky top-8">
        <Image
          src={image.src}
          alt="About section image"
          width={image.width}
          height={image.height}
          className="h-auto w-full rounded-3xl border border-white/20 object-contain shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
        />
      </div>
    </div>
  );
}

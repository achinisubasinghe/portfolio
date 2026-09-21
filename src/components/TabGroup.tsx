"use client";

import { useState, type ReactNode } from "react";

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabGroupProps {
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export function TabGroup({ tabs, activeTab: controlledTab, onTabChange }: TabGroupProps) {
  const [internalTab, setInternalTab] = useState(tabs[0].id);
  const activeTab = controlledTab ?? internalTab;

  function handleTabClick(tabId: string) {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setInternalTab(tabId);
    }
  }

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`rounded-full border border-white/25 px-6 py-2 text-base backdrop-blur-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              activeTab === tab.id
                ? "bg-ice text-background"
                : "bg-white/8 text-ice hover:bg-white/14"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <div>
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
}

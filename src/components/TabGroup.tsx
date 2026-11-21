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
  ariaLabel?: string;
}

export function TabGroup({
  tabs,
  activeTab: controlledTab,
  onTabChange,
  ariaLabel = "Section tabs",
}: TabGroupProps) {
  const [internalTab, setInternalTab] = useState(tabs[0].id);
  const activeTab = controlledTab ?? internalTab;

  function handleTabClick(tabId: string) {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setInternalTab(tabId);
    }
  }

  const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="mb-6 inline-flex flex-wrap gap-1.5 rounded-xl border border-white/12 bg-white/[0.04] p-1.5 backdrop-blur-md"
      >
        {tabs.map((tab) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => handleTabClick(tab.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium tracking-[-0.01em] transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isSelected
                  ? "border border-accent/40 bg-accent/18 text-ice shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
                  : "border border-transparent text-muted hover:bg-white/[0.06] hover:text-ice"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        key={currentTab.id}
        id={`panel-${currentTab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentTab.id}`}
        className="panel-enter"
      >
        {currentTab.content}
      </div>
    </div>
  );
}

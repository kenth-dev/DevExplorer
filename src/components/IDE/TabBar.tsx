import { X } from 'lucide-react';
import type { Tab } from '@/types';

interface TabBarProps {
  tabs: Tab[];
  activeTabId: string;
  onSwitchTab: (tabId: string) => void;
  onCloseTab: (tabId: string) => void;
}

export default function TabBar({ tabs, activeTabId, onSwitchTab, onCloseTab }: TabBarProps) {
  return (
    <div className="flex items-stretch bg-surface border-b border-border overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <button
            key={tab.id}
            onClick={() => onSwitchTab(tab.id)}
            className={`group relative flex items-center gap-2 px-4 py-2 text-sm font-mono whitespace-nowrap transition-colors duration-150 border-r border-border cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
              isActive
                ? 'bg-surface-elevated text-text-primary'
                : 'bg-surface text-text-muted hover:bg-surface-elevated/50 hover:text-text-primary'
            } ${!isActive ? 'hidden md:flex' : ''}`}
          >
            {/* Active tab bottom indicator */}
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-cyan" />
            )}

            <span>{tab.label}</span>

            {tab.closeable && (
              <button
                type="button"
                aria-label={`Close ${tab.label}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onCloseTab(tab.id);
                }}
                className="ml-1 p-0.5 rounded hover:bg-border/60 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan cursor-pointer"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            )}
          </button>
        );
      })}
    </div>
  );
}

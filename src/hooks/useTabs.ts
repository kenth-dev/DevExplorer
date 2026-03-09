import { useState, useCallback } from 'react';
import type { Tab } from '@/types';
import { languages } from '@/data/languages';

const WELCOME_TAB: Tab = {
  id: 'welcome',
  label: 'Welcome',
  closeable: false,
};

export function useTabs() {
  const [openTabs, setOpenTabs] = useState<Tab[]>([WELCOME_TAB]);
  const [activeTabId, setActiveTabId] = useState<string>('welcome');

  const openTab = useCallback((languageId: string) => {
    setOpenTabs((prev) => {
      const existing = prev.find((tab) => tab.id === languageId);
      if (existing) {
        setActiveTabId(languageId);
        return prev;
      }

      const lang = languages.find((l) => l.id === languageId);
      if (!lang) return prev;

      const newTab: Tab = {
        id: lang.id,
        label: lang.filename,
        closeable: true,
      };

      setActiveTabId(lang.id);
      return [...prev, newTab];
    });
  }, []);

  const closeTab = useCallback((tabId: string) => {
    setOpenTabs((prev) => {
      const tabIndex = prev.findIndex((tab) => tab.id === tabId);
      if (tabIndex === -1) return prev;

      const tab = prev[tabIndex];
      if (!tab.closeable) return prev;

      const newTabs = prev.filter((t) => t.id !== tabId);

      setActiveTabId((currentActive) => {
        if (currentActive !== tabId) return currentActive;

        if (tabIndex > 0) {
          return newTabs[tabIndex - 1].id;
        }
        return newTabs[0]?.id ?? 'welcome';
      });

      return newTabs;
    });
  }, []);

  const switchTab = useCallback((tabId: string) => {
    setActiveTabId(tabId);
  }, []);

  return {
    openTabs,
    activeTabId,
    openTab,
    closeTab,
    switchTab,
  };
}

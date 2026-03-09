import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTabs } from '@/hooks/useTabs';
import { languages } from '@/data/languages';
import TitleBar from './TitleBar';
import Sidebar from './Sidebar';
import TabBar from './TabBar';
import Editor from './Editor';
import StatusBar from './StatusBar';

const ACCENT_DOT_COLORS: Record<string, string> = {
  'lang-yellow': 'bg-lang-yellow',
  'lang-indigo': 'bg-lang-indigo',
  'lang-orange': 'bg-lang-orange',
  'lang-blue': 'bg-lang-blue',
  'lang-red': 'bg-lang-red',
  'lang-cyan': 'bg-accent-cyan',
};

export default function IDE() {
  const { openTabs, activeTabId, openTab, closeTab, switchTab } = useTabs();
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    if (!mobileDropdownOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMobileDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileDropdownOpen]);

  // Close dropdown on Escape key
  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMobileDropdownOpen(false);
    }
  }, []);

  const activeLang = languages.find((l) => l.id === activeTabId);
  const statusLanguage = activeLang ? activeLang.label : 'Plain Text';

  const handleFileClick = (languageId: string) => {
    openTab(languageId);
    setMobileDropdownOpen(false);
  };

  return (
    <section id="ide" className="w-full max-w-[1100px] mx-auto px-4">
      <div className="rounded-xl overflow-hidden border border-border shadow-lg shadow-accent-cyan/5 animate-pulse-glow">
        <TitleBar />

        {/* Mobile language selector — shown only below md */}
        <div ref={dropdownRef} className="md:hidden border-b border-border bg-surface px-3 py-2 relative" onKeyDown={handleDropdownKeyDown}>
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="flex items-center justify-between w-full text-sm font-mono text-text-muted hover:text-text-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan rounded"
            aria-label="Select a programming language"
            aria-expanded={mobileDropdownOpen}
          >
            <span>
              {activeLang ? `📁 ${activeLang.filename}` : '📁 Select a language...'}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                mobileDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {mobileDropdownOpen && (
            <div className="absolute top-full left-0 right-0 z-20 bg-surface-elevated border border-border rounded-b-lg shadow-xl max-h-64 overflow-y-auto">
              {languages.map((lang) => {
                const dotColor = ACCENT_DOT_COLORS[lang.accentColor] ?? 'bg-text-muted';
                return (
                  <button
                    key={lang.id}
                    onClick={() => handleFileClick(lang.id)}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm font-mono text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
                      lang.id === activeTabId
                        ? 'bg-accent-cyan/10 text-accent-cyan'
                        : 'text-text-muted hover:bg-surface-elevated hover:text-text-primary'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor}`} aria-hidden="true" />
                    {lang.filename}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex h-[400px] sm:h-[500px] md:h-[560px]">
          <Sidebar activeFileId={activeTabId} onFileClick={handleFileClick} />

          <div className="flex flex-col flex-1 min-w-0">
            <TabBar
              tabs={openTabs}
              activeTabId={activeTabId}
              onSwitchTab={switchTab}
              onCloseTab={closeTab}
            />
            <Editor activeTabId={activeTabId} />
          </div>
        </div>

        {/* StatusBar — hidden on mobile */}
        <div className="hidden md:block">
          <StatusBar language={statusLanguage} />
        </div>
      </div>
    </section>
  );
}

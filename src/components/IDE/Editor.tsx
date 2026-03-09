import { useEffect, useState, useRef } from 'react';
import { createHighlighter, type Highlighter } from 'shiki';
import { languages } from '@/data/languages';
import LineNumbers from './LineNumbers';
import WelcomeTab from './WelcomeTab';

interface EditorProps {
  activeTabId: string;
}

const SHIKI_LANGS = languages.map((l) => l.shikiLanguage);

// Module-level promise so Shiki is only initialized once
let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['one-dark-pro'],
      langs: SHIKI_LANGS,
    });
  }
  return highlighterPromise;
}

function SkeletonLoader() {
  return (
    <div className="flex-1 p-4 space-y-3 animate-pulse">
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className="h-4 bg-surface-elevated rounded"
          style={{ width: `${40 + Math.random() * 50}%` }}
        />
      ))}
    </div>
  );
}

export default function Editor({ activeTabId }: EditorProps) {
  const [highlighter, setHighlighter] = useState<Highlighter | null>(null);
  const [highlightedHtml, setHighlightedHtml] = useState<string>('');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize Shiki once
  useEffect(() => {
    getHighlighter().then(setHighlighter);
  }, []);

  // Highlight code when active tab changes
  useEffect(() => {
    if (!highlighter || activeTabId === 'welcome') {
      setHighlightedHtml('');
      return;
    }

    const lang = languages.find((l) => l.id === activeTabId);
    if (!lang) return;

    const html = highlighter.codeToHtml(lang.code, {
      lang: lang.shikiLanguage,
      theme: 'one-dark-pro',
    });

    setHighlightedHtml(html);

    // Scroll editor back to top on tab switch
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [highlighter, activeTabId]);

  // Welcome tab
  if (activeTabId === 'welcome') {
    return (
      <div ref={scrollRef} className="flex-1 overflow-auto bg-surface">
        <WelcomeTab />
      </div>
    );
  }

  const activeLang = languages.find((l) => l.id === activeTabId);
  const lineCount = activeLang ? activeLang.code.split('\n').length : 0;

  // Loading state while Shiki initializes
  if (!highlighter) {
    return <SkeletonLoader />;
  }

  return (
    <div ref={scrollRef} className="flex-1 overflow-auto bg-surface">
      <div className="flex min-h-full">
        <LineNumbers count={lineCount} />
        <div className="flex-1 py-4 pr-4 overflow-x-auto">
          <div
            className="shiki-wrapper"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </div>
      </div>
    </div>
  );
}

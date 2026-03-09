import { useEffect, useState, useRef } from 'react';
import { WrapText } from 'lucide-react';
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
  const [wordWrap, setWordWrap] = useState(false);
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
    <div className="flex flex-col flex-1 min-h-0 bg-surface">
      {/* Toolbar */}
      <div className="flex items-center justify-end px-3 py-1 border-b border-border bg-surface">
        <button
          onClick={() => setWordWrap((w) => !w)}
          title={wordWrap ? 'Disable word wrap' : 'Enable word wrap'}
          aria-label={wordWrap ? 'Disable word wrap' : 'Enable word wrap'}
          aria-pressed={wordWrap}
          className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
            wordWrap
              ? 'text-accent-cyan bg-accent-cyan/10'
              : 'text-text-muted hover:text-text-primary'
          }`}
        >
          <WrapText className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Wrap</span>
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-auto">
        <div className="flex min-h-full">
          {!wordWrap && <LineNumbers count={lineCount} />}
          <div className={`flex-1 py-4 pr-4 ${wordWrap ? 'pl-4 shiki-wrap' : 'overflow-x-auto'}` }>
            <div
              className="shiki-wrapper"
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

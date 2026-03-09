import { FileCode, FolderOpen } from 'lucide-react';
import { languages } from '@/data/languages';

interface SidebarProps {
  activeFileId: string;
  onFileClick: (languageId: string) => void;
}

const ACCENT_DOT_COLORS: Record<string, string> = {
  'lang-yellow': 'bg-lang-yellow',
  'lang-indigo': 'bg-lang-indigo',
  'lang-orange': 'bg-lang-orange',
  'lang-blue': 'bg-lang-blue',
  'lang-red': 'bg-lang-red',
  'lang-cyan': 'bg-accent-cyan',
};

export default function Sidebar({ activeFileId, onFileClick }: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col w-56 bg-surface border-r border-border shrink-0 overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">
        Explorer
      </div>

      {/* Folder */}
      <div className="px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
        <FolderOpen className="w-4 h-4 text-accent-cyan" />
        <span>Programming Languages</span>
      </div>

      {/* File list */}
      <nav className="flex-1 py-1" aria-label="File explorer">
        {languages.map((lang) => {
          const isActive = lang.id === activeFileId;
          const dotColor = ACCENT_DOT_COLORS[lang.accentColor] ?? 'bg-text-muted';

          return (
            <button
              key={lang.id}
              onClick={() => onFileClick(lang.id)}
              className={`w-full flex items-center gap-2.5 px-4 py-1.5 text-sm font-mono text-left transition-all duration-150 cursor-pointer group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan focus-visible:ring-inset ${
                isActive
                  ? 'bg-surface-elevated text-text-primary border-l-2 border-accent-cyan'
                  : 'text-text-muted hover:bg-surface-elevated/40 hover:text-text-primary border-l-2 border-transparent'
              }`}
              title={lang.filename}
            >
              <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor}`} aria-hidden="true" />
              <FileCode className="w-4 h-4 shrink-0 opacity-60" aria-hidden="true" />
              <span className="truncate">{lang.filename}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

import { useState } from 'react';
import { FolderOpen, FolderClosed, ChevronDown, ChevronRight } from 'lucide-react';
import { languages } from '@/data/languages';
import LanguageIcon from './LanguageIcon';

interface SidebarProps {
  activeFileId: string;
  onFileClick: (languageId: string) => void;
}

export default function Sidebar({ activeFileId, onFileClick }: SidebarProps) {
  const [folderOpen, setFolderOpen] = useState(true);

  return (
    <aside className="hidden md:flex flex-col w-56 bg-surface border-r border-border shrink-0 overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">
        Explorer
      </div>

      {/* Folder toggle */}
      <button
        onClick={() => setFolderOpen((o) => !o)}
        className="px-3 py-1.5 flex items-center gap-1.5 text-xs font-semibold text-text-muted uppercase tracking-wider hover:text-text-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan justify-start text-left w-full"
      >
        {folderOpen
          ? <ChevronDown className="w-3 h-3 shrink-0" />
          : <ChevronRight className="w-3 h-3 shrink-0" />}
        {folderOpen
          ? <FolderOpen className="w-4 h-4 shrink-0 text-accent-cyan" />
          : <FolderClosed className="w-4 h-4 shrink-0 text-accent-cyan" />}
        <span className="flex-1 text-left">Programming Languages</span>
      </button>

      {/* File list */}
      {folderOpen && (
        <nav className="flex-1 py-1" aria-label="File explorer">
          {languages.map((lang) => {
            const isActive = lang.id === activeFileId;

            return (
              <button
                key={lang.id}
                onClick={() => onFileClick(lang.id)}
                className={`w-full flex items-center gap-2.5 pl-8 pr-4 py-1.5 text-sm font-mono text-left transition-all duration-150 cursor-pointer group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan focus-visible:ring-inset ${
                  isActive
                    ? 'bg-surface-elevated text-text-primary border-l-2 border-accent-cyan'
                    : 'text-text-muted hover:bg-surface-elevated/40 hover:text-text-primary border-l-2 border-transparent'
                }`}
                title={lang.filename}
              >
                <LanguageIcon languageId={lang.id} className="w-4 h-4 shrink-0" />
                <span className="truncate">{lang.filename}</span>
              </button>
            );
          })}
        </nav>
      )}
    </aside>
  );
}

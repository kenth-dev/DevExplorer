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
    <>
      {/* Desktop sidebar */}
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

      {/* Mobile language select slider — always visible at bottom */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-40 bg-surface border-t border-border shadow-2xl">
        <div className="flex overflow-x-auto gap-2 px-2 py-2 scrollbar-hide">
          {languages.map((lang) => {
            const isActive = lang.id === activeFileId;
            return (
              <button
                key={lang.id}
                onClick={() => onFileClick(lang.id)}
                className={`flex flex-col items-center px-3 py-1.5 rounded-lg font-mono text-xs transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan focus-visible:ring-inset ${
                  isActive
                    ? 'bg-surface-elevated text-text-primary shadow-md'
                    : 'text-text-muted hover:bg-surface-elevated/40 hover:text-text-primary'
                }`}
                title={lang.filename}
              >
                <LanguageIcon languageId={lang.id} className="w-6 h-6 mb-1" />
                <span className="truncate max-w-[60px]">{lang.filename}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

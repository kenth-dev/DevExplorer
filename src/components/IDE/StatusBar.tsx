import { GitBranch } from 'lucide-react';

interface StatusBarProps {
  language: string;
}

export default function StatusBar({ language }: StatusBarProps) {
  return (
    <div className="flex items-center justify-between px-3 py-1 bg-surface border-t border-border text-xs text-text-muted font-mono">
      <div className="flex items-center gap-2">
        <GitBranch className="w-3.5 h-3.5" />
        <span>main</span>
      </div>
      <div className="flex items-center gap-4">
        <span>UTF-8</span>
        <span>{language}</span>
      </div>
    </div>
  );
}

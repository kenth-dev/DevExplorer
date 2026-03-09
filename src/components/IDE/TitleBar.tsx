export default function TitleBar() {
  return (
    <div className="relative flex items-center px-4 py-2 bg-surface border-b border-border">
      <div className="flex items-center gap-2 mr-4" aria-hidden="true">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-text-muted font-mono tracking-wide pointer-events-none select-none">
        DevExplorer IDE
      </span>
    </div>
  );
}

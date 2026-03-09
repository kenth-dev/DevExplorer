export default function TitleBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-surface border-b border-border">
      <span className="text-sm font-medium text-text-muted font-mono tracking-wide">
        DevExplorer IDE
      </span>
      <div className="flex items-center gap-2" aria-hidden="true">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
    </div>
  );
}

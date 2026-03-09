export default function Footer() {
  return (
    <footer className="relative w-full border-t border-border py-8 px-4 scanline-bg overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center gap-1">
          <span className="text-accent-cyan text-sm font-mono">DevExplorer</span>
          <span className="text-sm font-mono max-w-xs text-text-muted">Built by Kenth to inspire the next generation of developers.</span>
        </div>
      </div>
    </footer>
  );
}

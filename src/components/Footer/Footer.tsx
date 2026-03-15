import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-border py-8 px-4 scanline-bg overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Branding */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-accent-cyan text-lg font-mono">DevExplorer</span>
            <span className="text-[11px] font-mono text-text-muted text-center">Built by Kenneth Gasmen to inspire the next generation of developers.</span>
          </div>

          {/* Contact icons */}
          <div className="flex items-center justify-center gap-5">
            <a href="mailto:kengasmen@gmail.com" aria-label="Email"
              className="text-text-muted hover:text-accent-cyan transition-colors duration-200">
              <Mail size={18} />
            </a>
            <a href="https://github.com/kenth-dev" target="_blank" rel="noreferrer" aria-label="GitHub"
              className="text-text-muted hover:text-accent-cyan transition-colors duration-200">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/kenneth-gasmen-021046354/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="text-text-muted hover:text-accent-cyan transition-colors duration-200">
              <Linkedin size={18} />
            </a>
            <a href="https://m.me/Kenth.Gasmen" target="_blank" rel="noreferrer" aria-label="Messenger"
              className="text-text-muted hover:text-accent-cyan transition-colors duration-200">
              <MessageCircle size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

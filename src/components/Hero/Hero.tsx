import { ChevronDown } from 'lucide-react';
import GlitchText from './GlitchText';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden dot-grid-bg">
      {/* Subtle scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,245,255,0.08) 2px, rgba(0,245,255,0.08) 4px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Glitch title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight mb-6 drop-shadow-[0_0_30px_rgba(0,245,255,0.3)]">
          <GlitchText text="HELLO WORLD" />
        </h1>

        {/* Subheading with blinking cursor */}
        <p className="text-lg sm:text-xl md:text-2xl text-text-muted font-mono mb-6">
          This is the first line of code most programmers learn
          <span className="inline-block w-0.5 h-5 sm:h-6 bg-accent-cyan ml-1 align-middle animate-blink" />
        </p>

        {/* Body text */}
        <p className="text-sm sm:text-base text-text-muted/80 max-w-xl mx-auto leading-relaxed mb-12">
          Printing is how programming languages display text on screen.
          Here is how to print &quot;Hello World&quot; in different programming languages&nbsp;↓
        </p>
      </div>

      {/* Scroll-down arrow */}
      <a
        href="#ide"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-accent-cyan/60 hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-full"
        aria-label="Scroll down to the IDE section"
      >
        <ChevronDown className="w-8 h-8 animate-bounce-gentle" />
      </a>
    </section>
  );
}

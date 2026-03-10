import { ChevronDown } from 'lucide-react';
import GlitchText from './GlitchText';
import { useEffect, useState } from 'react';

function scrollToIDE() {
  document.getElementById('ide')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


export default function Hero() {
  const fullText = 'HELLO, WORLD!';
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let i = 0;
    setTyped('');
    const interval = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 150); 
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden scanline-bg">
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Glitch title with typing animation */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight mb-6 drop-shadow-[0_0_30px_rgba(0,245,255,0.3)]">
          <GlitchText text={typed} />
          <span className="inline-block w-1 h-[0.85em] bg-accent-cyan ml-2 align-middle animate-blink" />
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-xl md:text-xl text-text-muted font-mono mb-6">
          This is the first line of code most programmers learn. Explore how different programming languages display the same text.
        </p>

        {/* Body text */}
        <p className="font-mono text-sm sm:text-base text-text-muted/80 max-w-3xl mx-auto leading-relaxed mb-8">
        </p>

        {/* CTA button */}
        <button
          onClick={scrollToIDE}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan font-mono font-semibold text-sm sm:text-base hover:bg-accent-cyan/20 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan mb-12 cursor-pointer"
          aria-label="Open the interactive IDE explorer"
        >
          Open the Explorer
        </button>
      </div>

      {/* Scroll-down arrow */}
      <button
        onClick={scrollToIDE}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-accent-cyan/40 hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-full cursor-pointer"
        aria-label="Scroll down to the IDE section"
      >
        <ChevronDown className="w-6 h-6 animate-bounce-gentle" />
      </button>
    </section>
  );
}

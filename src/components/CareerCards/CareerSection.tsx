import { useRef, useState, useCallback } from 'react';
import { careers } from '@/data/careers';
import CareerCard from './CareerCard';

export default function CareerSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    // 85vw card + 1rem (16px) gap — approximate snap position
    const cardWidth = el.scrollWidth / careers.length;
    const index = Math.min(
      Math.round(el.scrollLeft / cardWidth),
      careers.length - 1
    );
    setActiveIndex(index);
  }, []);

  const scrollTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / careers.length;
    el.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
    setActiveIndex(i);
  };

  return (
    <section className="relative w-full py-16 md:py-24 scanline-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-text-primary mb-3">
            Where Can <span className="text-accent-cyan">Coding</span> Take{' '}You?
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-lg mx-auto">
            Programming opens doors to incredible career paths.
            Discover which languages power each field.
          </p>
        </div>

        {/* Desktop grid — 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {careers.map((career, index) => (
            <CareerCard key={career.id} career={career} index={index} />
          ))}
        </div>
      </div>

      {/* Mobile carousel — full-bleed with side peek */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide px-[7.5vw]"
      >
        {careers.map((career, index) => (
          <div
            key={career.id}
            className="snap-center shrink-0 w-[85vw]"
          >
            <CareerCard career={career} index={index} />
          </div>
        ))}
      </div>

      {/* Dot indicators — mobile only */}
      <div className="md:hidden flex justify-center gap-2 mt-5">
        {careers.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to card ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-200 ${
              i === activeIndex
                ? 'w-4 bg-accent-cyan'
                : 'w-2 bg-text-muted/40 hover:bg-text-muted'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

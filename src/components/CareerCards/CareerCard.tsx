import { motion } from 'framer-motion';
import type { CareerPath } from '@/types';
import { languages } from '@/data/languages';

interface CareerCardProps {
  career: CareerPath;
  index: number;
}

const ACCENT_CLASSES: Record<string, { text: string; border: string }> = {
  'lang-yellow': { text: 'text-lang-yellow', border: 'border-lang-yellow/40' },
  'lang-indigo': { text: 'text-lang-indigo', border: 'border-lang-indigo/40' },
  'lang-orange': { text: 'text-lang-orange', border: 'border-lang-orange/40' },
  'lang-blue':   { text: 'text-lang-blue',   border: 'border-lang-blue/40'   },
  'lang-red':    { text: 'text-lang-red',    border: 'border-lang-red/40'    },
  'lang-cyan':   { text: 'text-accent-cyan', border: 'border-accent-cyan/40' },
};

export default function CareerCard({ career, index }: CareerCardProps) {
  const linkedLanguages = career.languages
    .map((id) => languages.find((l) => l.id === id))
    .filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative rounded-2xl overflow-hidden h-[380px] cursor-default"
      style={{ willChange: 'transform' }}
    >
      {/* Background image */}
      <img
        src={career.image}
        alt={career.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        draggable={false}
      />

      {/* Gradient overlay — darkens more on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-all duration-300 group-hover:from-black/92 group-hover:via-black/55" />

      {/* Glow ring on hover */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-accent-cyan/40 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]" />

      {/* Content anchored to bottom */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        {/* Title — always visible */}
        <h3 className="text-lg font-bold text-white font-mono mb-2 leading-snug">
          {career.title}
        </h3>

        {/* Description — hidden on desktop, revealed on hover; always shown on mobile */}
        <p className="
          text-sm text-white/80 leading-relaxed mb-3
          max-md:block
          md:max-h-0 md:opacity-0 md:overflow-hidden
          md:group-hover:max-h-24 md:group-hover:opacity-100
          transition-all duration-300 ease-in-out
        ">
          {career.description}
        </p>

        {/* Language tags — hidden on desktop, revealed on hover; always shown on mobile */}
        <div className="
          flex flex-wrap gap-1.5
          max-md:flex
          md:max-h-0 md:opacity-0 md:overflow-hidden
          md:group-hover:max-h-16 md:group-hover:opacity-100
          transition-all duration-300 ease-in-out
        ">
          {linkedLanguages.map((lang) => {
            if (!lang) return null;
            const colors = ACCENT_CLASSES[lang.accentColor] ?? {
              text: 'text-white',
              border: 'border-white/30',
            };
            return (
              <span
                key={lang.id}
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-medium border bg-black/40 backdrop-blur-sm ${colors.text} ${colors.border}`}
              >
                {lang.label}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

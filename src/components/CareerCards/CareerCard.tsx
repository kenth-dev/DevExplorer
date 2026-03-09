import { motion } from 'framer-motion';
import type { CareerPath } from '@/types';
import { languages } from '@/data/languages';

interface CareerCardProps {
  career: CareerPath;
  index: number;
}

const ACCENT_CLASSES: Record<string, { bg: string; text: string; border: string }> = {
  'lang-yellow': { bg: 'bg-lang-yellow/10', text: 'text-lang-yellow', border: 'border-lang-yellow/30' },
  'lang-indigo': { bg: 'bg-lang-indigo/10', text: 'text-lang-indigo', border: 'border-lang-indigo/30' },
  'lang-orange': { bg: 'bg-lang-orange/10', text: 'text-lang-orange', border: 'border-lang-orange/30' },
  'lang-blue':   { bg: 'bg-lang-blue/10',   text: 'text-lang-blue',   border: 'border-lang-blue/30' },
  'lang-red':    { bg: 'bg-lang-red/10',     text: 'text-lang-red',    border: 'border-lang-red/30' },
  'lang-cyan':   { bg: 'bg-accent-cyan/10',  text: 'text-accent-cyan', border: 'border-accent-cyan/30' },
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
      className="group relative rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-cyan/40 hover:shadow-[0_0_20px_rgba(0,245,255,0.08)]"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl" role="img" aria-label={career.title}>
          {career.icon}
        </span>
        <h3 className="text-lg font-semibold text-text-primary">
          {career.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-text-muted mb-4 leading-relaxed">
        {career.description}
      </p>

      {/* Language tag pills */}
      <div className="flex flex-wrap gap-2">
        {linkedLanguages.map((lang) => {
          if (!lang) return null;
          const colors = ACCENT_CLASSES[lang.accentColor] ?? {
            bg: 'bg-text-muted/10',
            text: 'text-text-muted',
            border: 'border-text-muted/30',
          };

          return (
            <span
              key={lang.id}
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${colors.bg} ${colors.text} ${colors.border}`}
            >
              {lang.label}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}

import { careers } from '@/data/careers';
import CareerCard from './CareerCard';

export default function CareerSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* Section heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-text-primary mb-3">
          Where Can Code Take{' '}
          <span className="text-accent-purple">You</span>?
        </h2>
        <p className="text-text-muted text-sm sm:text-base max-w-lg mx-auto">
          Programming opens doors to incredible career paths.
          Discover which languages power each field.
        </p>
      </div>

      {/* Responsive grid: 1 col mobile, 2 tablet, 3 desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {careers.map((career, index) => (
          <CareerCard key={career.id} career={career} index={index} />
        ))}
      </div>
    </section>
  );
}

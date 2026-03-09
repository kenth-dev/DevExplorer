import Hero from '@/components/Hero/Hero';
import IDE from '@/components/IDE/IDE';
import CareerSection from '@/components/CareerCards/CareerSection';
import Footer from '@/components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary dot-grid-bg">
      <Hero />
      <div className="relative py-16 md:py-24 scanline-bg overflow-hidden">
        <IDE />
      </div>
      <CareerSection />
      <Footer />
    </div>
  );
}

export default App;

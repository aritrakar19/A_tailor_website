import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { DressFromSaree } from './components/DressFromSaree';
import { HowItWorks } from './components/HowItWorks';
import { Gallery } from './components/Gallery';
import { Craftsmanship } from './components/Craftsmanship';
import { Testimonials } from './components/Testimonials';
import { Statistics } from './components/Statistics';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { GalleryPage } from './components/GalleryPage';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-sans)' }}>
      <Header currentPath={currentPath} navigate={navigate} onOpenBooking={handleOpenBooking} />
      <main>
        {currentPath === '/gallery' ? (
          <GalleryPage />
        ) : (
          <>
            <Hero onOpenBooking={handleOpenBooking} />
            <WhyChooseUs />
            <Services />
            <DressFromSaree />
            <HowItWorks />
            <Gallery />
            <Craftsmanship />
            <Testimonials />
            <Statistics />
            <FAQ />
            <FinalCTA />
          </>
        )}
      </main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

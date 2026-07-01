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

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-sans)' }}>
      <Header />
      <main>
        <Hero />
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
      </main>
      <Footer />
    </div>
  );
}

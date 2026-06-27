import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Scissors, Ruler } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1753161021164-b075e15e91b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0YWlsb3IlMjBtZWFzdXJpbmclMjBjbGllbnQlMjBib3V0aXF1ZXxlbnwxfHx8fDE3ODI1NDEwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Professional tailor measuring client in boutique"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-40 right-20 hidden lg:block"
        style={{ color: '#D4AF37' }}
      >
        <Scissors size={120} strokeWidth={1} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-32 left-20 hidden lg:block"
        style={{ color: '#D4AF37' }}
      >
        <Ruler size={100} strokeWidth={1} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full border-2" style={{ borderColor: '#D4AF37' }}>
              <p className="text-sm tracking-widest" style={{ color: '#D4AF37', fontFamily: 'var(--font-sans)' }}>
                PREMIUM BESPOKE TAILORING
              </p>
            </div>

            <h1
              className="mb-6 leading-tight"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                color: 'white',
              }}
            >
              Bespoke Tailoring Crafted with Precision & Elegance
            </h1>

            <p className="text-lg sm:text-xl mb-8 leading-relaxed opacity-90" style={{ color: 'white' }}>
              Experience the finest in designer tailoring with our expert craftsmanship, premium fabrics, and doorstep
              service. We bring the atelier to your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-6 text-base sm:text-lg transition-all hover:scale-105 shadow-xl"
                style={{
                  backgroundColor: '#D4AF37',
                  color: '#1a1a1a',
                }}
              >
                Book Home Visit
              </Button>
              <Button
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="px-8 py-6 text-base sm:text-lg transition-all hover:scale-105 border-2"
                style={{
                  borderColor: '#D4AF37',
                  color: 'white',
                  backgroundColor: 'transparent',
                }}
              >
                Explore Services
              </Button>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-8 border-t flex flex-wrap gap-8"
            style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
          >
            <div>
              <p className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)', color: '#D4AF37' }}>
                15+
              </p>
              <p className="text-sm opacity-80" style={{ color: 'white' }}>
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)', color: '#D4AF37' }}>
                10,000+
              </p>
              <p className="text-sm opacity-80" style={{ color: 'white' }}>
                Happy Customers
              </p>
            </div>
            <div>
              <p className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)', color: '#D4AF37' }}>
                100%
              </p>
              <p className="text-sm opacity-80" style={{ color: 'white' }}>
                Perfect Fit Guarantee
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

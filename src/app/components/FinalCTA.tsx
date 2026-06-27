import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1636226570637-3fbda7ca09dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYm91dGlxdWUlMjB3b3Jrc3BhY2UlMjBzdHVkaW98ZW58MXx8fHwxNzgyNTQxMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury boutique workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full border-2 opacity-10" style={{ borderColor: '#D4AF37' }}></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full border-2 opacity-10" style={{ borderColor: '#D4AF37' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full border-2" style={{ borderColor: '#D4AF37' }}>
            <p className="text-sm tracking-widest" style={{ color: '#D4AF37' }}>
              GET STARTED TODAY
            </p>
          </div>

          <h2
            className="mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'white',
            }}
          >
            Let's Create Your Perfect Fit
          </h2>

          <p className="text-lg sm:text-xl mb-10 leading-relaxed opacity-90 max-w-2xl mx-auto" style={{ color: 'white' }}>
            Experience the art of bespoke tailoring. Book your home visit today and let our master tailors bring your
            vision to life with precision and elegance.
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="px-10 py-7 text-lg transition-all hover:scale-105 shadow-2xl"
            style={{
              backgroundColor: '#D4AF37',
              color: '#1a1a1a',
            }}
          >
            Book Your Appointment
          </Button>

          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
              <p className="text-sm" style={{ color: 'white' }}>Free Consultation</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
              <p className="text-sm" style={{ color: 'white' }}>Doorstep Service</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
              <p className="text-sm" style={{ color: 'white' }}>Perfect Fit Guaranteed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

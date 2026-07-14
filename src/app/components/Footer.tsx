import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import trailorLogo from '@/assets/trailorlogo.jpeg';

export function Footer() {
  const scrollToSection = (id: string) => {
    if (id === 'gallery') {
      window.history.pushState({}, '', '/gallery');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo(0, 0);
      return;
    }

    const targetId = id === 'home' ? 'hero' : id;

    if (window.location.pathname === '/gallery') {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact" className="pt-20 pb-10" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img
                src={trailorLogo}
                alt="Tailor On Call Logo"
                className="h-16 w-auto object-contain rounded border border-white/10"
              />
              <div>
                
              </div>
            </div>
            <p className="mb-6 leading-relaxed opacity-70" style={{ color: 'white', fontSize: '0.9rem' }}>
              Premium bespoke tailoring delivered to your doorstep. Experience luxury craftsmanship with every stitch.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#D4AF37' }}
                aria-label="Facebook"
              >
                <Facebook size={18} style={{ color: '#1a1a1a' }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#D4AF37' }}
                aria-label="Instagram"
              >
                <Instagram size={18} style={{ color: '#1a1a1a' }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#D4AF37' }}
                aria-label="Twitter"
              >
                <Twitter size={18} style={{ color: '#1a1a1a' }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#D4AF37' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} style={{ color: '#1a1a1a' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg" style={{ fontFamily: 'var(--font-serif)', color: '#D4AF37' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Gallery', 'Testimonials'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="opacity-70 hover:opacity-100 transition-opacity text-sm text-left cursor-pointer"
                    style={{ color: 'white' }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg" style={{ fontFamily: 'var(--font-serif)', color: '#D4AF37' }}>
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Men's Tailoring",
                "Women's Tailoring",
                'Bridal Wear',
                'Designer Blouse',
                'Alterations',
              ].map((service) => (
                <li key={service} className="opacity-70 text-sm" style={{ color: 'white' }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg" style={{ fontFamily: 'var(--font-serif)', color: '#D4AF37' }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <p className="text-sm opacity-70" style={{ color: 'white' }}>
                  +91 8910316410
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <p className="text-sm opacity-70" style={{ color: 'white' }}>
                  Khushbusingh78095@gmail.com
                </p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <p className="text-sm opacity-70" style={{ color: 'white' }}>
                  CE-23, JYANGRA CHOWMATHA,
                  <br />
                  RAJARHAT MAIN ROAD,
                  <br />
                  KOLKATA - 700059
                  <br />
                  (NEAR LOKENATH MANDIR, CHINARPARK)
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-1 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <div>
                  <p className="text-sm opacity-70" style={{ color: 'white' }}>
                    Mon - Sat: 10:00 AM - 8:00 PM
                  </p>
                  <p className="text-sm opacity-70" style={{ color: 'white' }}>
                    Sunday: By Appointment
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ backgroundColor: '#D4AF37', opacity: 0.2 }}></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60 text-center md:text-left" style={{ color: 'white' }}>
            © 2026 Tailor On Call - The Designer Boutique. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ color: 'white' }}>
              Privacy Policy
            </a>
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ color: 'white' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

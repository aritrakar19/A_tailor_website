import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

import trailorLogo from '@/assets/trailorlogo.jpeg';

export function Header({ currentPath, navigate, onOpenBooking }: { currentPath?: string; navigate?: (path: string) => void; onOpenBooking?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (id === 'gallery') {
      if (navigate) {
        navigate('/gallery');
      } else {
        window.history.pushState({}, '', '/gallery');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      setIsMobileMenuOpen(false);
      return;
    }

    if (currentPath === '/gallery' || window.location.pathname === '/gallery') {
      if (navigate) {
        navigate('/');
      } else {
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Craftsmanship', id: 'craftsmanship' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
      style={{ backgroundColor: '#D4AF37' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <img
              src={trailorLogo}
              alt="Tailor On Call Logo"
              className="h-15 w-auto object-contain rounded-md shadow-sm border border-black/10"
            />
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-wide transition-all duration-200 hover:opacity-70 ${
                  (item.id === 'gallery' && (currentPath === '/gallery' || window.location.pathname === '/gallery')) 
                    ? 'font-bold border-b border-black' 
                    : ''
                }`}
                style={{ color: '#1a1a1a', fontFamily: 'var(--font-sans)' }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={onOpenBooking || (() => handleNavClick('contact'))}
              className="px-6 py-2.5 text-sm tracking-wide transition-all hover:scale-105"
              style={{
                backgroundColor: '#1a1a1a',
                color: 'white',
              }}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            style={{ color: '#1a1a1a' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: '#D4AF37' }}>
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-2 text-base ${
                  (item.id === 'gallery' && (currentPath === '/gallery' || window.location.pathname === '/gallery')) 
                    ? 'font-bold text-[#D4AF37]' 
                    : ''
                }`}
                style={{ color: '#1a1a1a', fontFamily: 'var(--font-sans)' }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={onOpenBooking || (() => handleNavClick('contact'))}
              className="w-full mt-4 py-2.5"
              style={{
                backgroundColor: '#1a1a1a',
                color: 'white',
              }}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

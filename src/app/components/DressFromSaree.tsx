import { motion } from 'motion/react';
import { Button } from './ui/button';
import saree1 from '../../assets/dress-from-saree/saree-1.png';
import saree2 from '../../assets/dress-from-saree/saree-2.png';
import saree3 from '../../assets/dress-from-saree/saree-3.png';
import saree4 from '../../assets/dress-from-saree/saree-4.png';
import saree5 from '../../assets/dress-from-saree/saree-5.png';
import saree6 from '../../assets/dress-from-saree/saree-6.png';

const sareeTransformations = [
  {
    src: saree1,
    alt: 'Custom designer gown transformed from a red and gold silk saree',
    title: 'Elegant Designer Gown',
  },
  {
    src: saree2,
    alt: 'Luxury designer Anarkali suit transformed from a blue and gold Banarasi saree',
    title: 'Premium Anarkali Suit',
  },
  {
    src: saree3,
    alt: 'Designer Lehenga choli crafted from an emerald green Kanjeevaram silk saree',
    title: 'Stunning Lehenga Choli',
  },
  {
    src: saree4,
    alt: 'Modern Indo-Western outfit transformed from a magenta silk saree',
    title: 'Indo-Western Designer Wear',
  },
  {
    src: saree5,
    alt: 'Chic designer kurti transformed from a purple georgette saree',
    title: 'Custom Designer Kurti',
  },
  {
    src: saree6,
    alt: 'Elegant custom designer dress transformed from a mustard yellow silk saree',
    title: 'Modern Designer Dress',
  },
];

export function DressFromSaree() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="dress-from-saree" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ backgroundColor: '#D4AF37', opacity: 0.15 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border" style={{ borderColor: '#D4AF37' }}>
              <span className="text-xs tracking-widest font-semibold uppercase flex items-center gap-1.5" style={{ color: '#D4AF37' }}>
                ✨ Custom Designer Transformation
              </span>
            </div>
            
            <h2
              className="mb-6 leading-tight font-serif"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                color: '#1a1a1a',
              }}
            >
              Dress from Saree
            </h2>
            
            <p className="text-md sm:text-lg tracking-wide uppercase mb-6 font-semibold" style={{ color: '#D4AF37', letterSpacing: '0.05em' }}>
              Transform Your Precious Saree into a Beautiful Designer Outfit
            </p>

            <p className="text-base sm:text-lg max-w-3xl mx-auto opacity-80 leading-relaxed font-sans" style={{ color: '#1a1a1a' }}>
              Give your cherished sarees a new life with our expert tailoring and designer craftsmanship. 
              Whether it's a sentimental wedding saree, a family heirloom, or a favorite silk saree, 
              we create elegant gowns, Anarkalis, lehengas, Indo-Western outfits, kurtis, and custom 
              designer dresses while preserving the beauty and memories of the original fabric.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sareeTransformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-gray-50 border border-transparent group-hover:border-[#D4AF37] rounded-2xl transition-all duration-500">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Premium Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs uppercase tracking-widest mb-1.5" style={{ color: '#D4AF37' }}>Transformation</span>
                  <h4 className="text-white text-xl font-medium font-serif" style={{ fontFamily: 'var(--font-serif)' }}>
                    {item.title}
                  </h4>
                  <p className="text-white/80 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {item.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 text-center overflow-hidden border"
          style={{ borderColor: '#D4AF37', backgroundColor: '#FAFAFA' }}
        >
          {/* Subtle background luxury pattern lines */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3
              className="mb-4 font-serif text-3xl sm:text-4xl"
              style={{
                fontFamily: 'var(--font-serif)',
                color: '#1a1a1a',
              }}
            >
              Ready to Give Your Saree a New Life?
            </h3>
            
            <p className="text-base sm:text-lg mb-8 leading-relaxed opacity-75" style={{ color: '#1a1a1a' }}>
              Book a consultation today and let our expert designers transform your cherished saree into a stunning custom outfit crafted exclusively for you.
            </p>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="px-10 py-7 text-lg transition-all hover:scale-105 shadow-md hover:shadow-xl font-semibold"
              style={{
                backgroundColor: '#1a1a1a',
                color: 'white',
                border: '1px solid #D4AF37',
              }}
            >
              Book Free Consultation
            </Button>
          </div>
        </motion.div>

        {/* Decorative Divider */}
        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.15 }}></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-6 py-2 bg-white">
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

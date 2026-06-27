import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Men's Tailoring",
    description: 'Custom suits, shirts, and formal wear tailored to perfection',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwY3VzdG9tJTIwc3VpdCUyMHRhaWxvcmluZ3xlbnwxfHx8fDE3ODI1NDExMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: "Women's Tailoring",
    description: 'Designer sarees, suits, and ethnic wear stitched with elegance',
    image: 'https://images.unsplash.com/photo-1760532467646-b9e466403862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbnMlMjBkZXNpZ25lciUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3ODI1NDExMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Bridal Wear',
    description: 'Exquisite bridal lehengas and wedding outfits for your special day',
    image: 'https://images.unsplash.com/photo-1622277430358-f4d134452e2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYnJpZGFsJTIwd2VkZGluZyUyMGRyZXNzfGVufDF8fHx8MTc4MjU0MTEwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Designer Blouse',
    description: 'Intricate blouse designs with premium embellishments',
    image: 'https://images.unsplash.com/photo-1756267317751-3b740c2f6840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjBzZWxlY3Rpb24lMjBkZXNpZ25lcnxlbnwxfHx8fDE3ODI1NDEwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Custom Suits',
    description: 'Bespoke three-piece suits crafted for the modern gentleman',
    image: 'https://images.unsplash.com/photo-1521485878586-6b92b0c3641c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwYWx0ZXJhdGlvbnMlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgyNTQxMTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Alteration Services',
    description: 'Expert alterations to ensure your garments fit flawlessly',
    image: 'https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFzdXJpbmclMjB0YXBlJTIwc2Npc3NvcnMlMjB0YWlsb3IlMjB0b29sc3xlbnwxfHx8fDE3ODI1NDExMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Uniform Stitching',
    description: 'Professional corporate and school uniform tailoring',
    image: 'https://images.unsplash.com/photo-1578353022142-09264fd64295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXNwb2tlJTIwdGFpbG9yaW5nJTIwc2V3aW5nJTIwY3JhZnRzbWFuc2hpcHxlbnwxfHx8fDE3ODI1NDExMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Home Tailoring Service',
    description: 'Complete tailoring service at the comfort of your doorstep',
    image: 'https://images.unsplash.com/photo-1778731660238-f6abf7f436b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJvdXRpcXVlJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzgyNTQxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full border" style={{ borderColor: '#D4AF37' }}>
              <p className="text-sm tracking-widest" style={{ color: '#D4AF37' }}>
                OUR SERVICES
              </p>
            </div>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#1a1a1a',
              }}
            >
              Tailoring Excellence for Every Occasion
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-70" style={{ color: '#1a1a1a' }}>
              From bespoke suits to bridal couture, we offer comprehensive tailoring services crafted with precision
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 group-hover:opacity-95 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="mb-2 text-white"
                      style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-3">{service.description}</p>
                    <div
                      className="inline-flex items-center gap-2 text-sm group-hover:gap-3 transition-all"
                      style={{ color: '#D4AF37' }}
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

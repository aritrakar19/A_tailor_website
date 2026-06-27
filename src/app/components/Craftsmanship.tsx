import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Eye, Hand, Gem } from 'lucide-react';

const craftFeatures = [
  {
    icon: Sparkles,
    title: 'Precision',
    description: 'Every stitch is measured to perfection',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description: 'Meticulous care in every element',
  },
  {
    icon: Hand,
    title: 'Handmade Quality',
    description: 'Traditional techniques meet modern design',
  },
  {
    icon: Gem,
    title: 'Premium Fabrics',
    description: 'Only the finest materials selected',
  },
];

export function Craftsmanship() {
  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1578353022142-09264fd64295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXNwb2tlJTIwdGFpbG9yaW5nJTIwc2V3aW5nJTIwY3JhZnRzbWFuc2hpcHxlbnwxfHx8fDE3ODI1NDExMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional tailor at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Frame */}
              <div
                className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border-4 -z-10"
                style={{ borderColor: '#D4AF37' }}
              ></div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full border" style={{ borderColor: '#D4AF37' }}>
              <p className="text-sm tracking-widest" style={{ color: '#D4AF37' }}>
                OUR CRAFTSMANSHIP
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
              Excellence in Every Thread
            </h2>

            <p className="text-lg mb-8 opacity-70 leading-relaxed" style={{ color: '#1a1a1a' }}>
              With over 15 years of experience, our master tailors bring unparalleled expertise to every garment. We
              believe that true luxury lies in the details – from hand-picked fabrics to the final stitch.
            </p>

            <div className="space-y-6 mb-8">
              {craftFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F0E5C9' }}
                  >
                    <feature.icon size={24} style={{ color: '#D4AF37' }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#1a1a1a' }}>
                      {feature.title}
                    </h3>
                    <p className="opacity-70" style={{ color: '#1a1a1a' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t" style={{ borderColor: '#D4AF37', opacity: 0.2 }}>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)', color: '#D4AF37' }}>
                    100%
                  </p>
                  <p className="text-sm opacity-70" style={{ color: '#1a1a1a' }}>
                    Customer Satisfaction
                  </p>
                </div>
                <div className="h-12 w-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}></div>
                <div>
                  <p className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)', color: '#D4AF37' }}>
                    15+
                  </p>
                  <p className="text-sm opacity-70" style={{ color: '#1a1a1a' }}>
                    Years Expertise
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

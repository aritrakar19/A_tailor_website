import { motion } from 'motion/react';
import { Award, Home, Sparkles, Ruler, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Tailors',
    description: 'Highly skilled craftsmen with decades of experience in bespoke tailoring',
  },
  {
    icon: Home,
    title: 'Home Measurement',
    description: 'We come to your doorstep for convenient, professional measurements',
  },
  {
    icon: Sparkles,
    title: 'Premium Stitching',
    description: 'Finest quality fabrics and meticulous attention to every detail',
  },
  {
    icon: Ruler,
    title: 'Perfect Fit',
    description: 'Custom-fitted garments tailored precisely to your measurements',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'On-time delivery guaranteed without compromising on quality',
  },
  {
    icon: Users,
    title: 'Designer Consultation',
    description: 'Personal styling advice and design guidance from experts',
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 sm:py-32" style={{ backgroundColor: '#FAFAFA' }}>
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
                WHY CHOOSE US
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
              The Tailor On Call Difference
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-70" style={{ color: '#1a1a1a' }}>
              Experience luxury tailoring redefined with our commitment to excellence, craftsmanship, and personalized
              service
            </p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-transparent hover:border-[#D4AF37]"
                style={{ borderWidth: '1px' }}
              >
                <div
                  className="w-16 h-16 rounded-full mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: '#F0E5C9' }}
                >
                  <feature.icon size={28} style={{ color: '#D4AF37' }} strokeWidth={1.5} />
                </div>
                <h3 className="mb-3" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#1a1a1a' }}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed opacity-70" style={{ color: '#1a1a1a' }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.2 }}></div>
      </div>
    </section>
  );
}

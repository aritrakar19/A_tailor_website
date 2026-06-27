import { motion } from 'motion/react';
import { Calendar, Home, Ruler, Scissors, CheckCircle, Package } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Book Appointment',
    description: 'Schedule a convenient time for your home visit',
  },
  {
    icon: Home,
    title: 'Home Visit',
    description: 'Our expert tailor visits your location',
  },
  {
    icon: Ruler,
    title: 'Measurement',
    description: 'Precise measurements taken professionally',
  },
  {
    icon: Scissors,
    title: 'Stitching',
    description: 'Expert craftsmanship brings your garment to life',
  },
  {
    icon: CheckCircle,
    title: 'Quality Check',
    description: 'Rigorous quality inspection before delivery',
  },
  {
    icon: Package,
    title: 'Delivery',
    description: 'Your perfect garment delivered on time',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full border" style={{ borderColor: '#D4AF37' }}>
              <p className="text-sm tracking-widest" style={{ color: '#D4AF37' }}>
                HOW IT WORKS
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
              Your Journey to Perfect Fit
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-70" style={{ color: '#1a1a1a' }}>
              Experience seamless tailoring with our simple 6-step process
            </p>
          </motion.div>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div
              className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2"
              style={{ backgroundColor: '#D4AF37', opacity: 0.2 }}
            ></div>

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center">
                    {/* Icon Circle */}
                    <div
                      className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 border-4 relative z-10"
                      style={{ borderColor: '#D4AF37' }}
                    >
                      <step.icon size={32} style={{ color: '#D4AF37' }} strokeWidth={1.5} />
                    </div>

                    {/* Step Number */}
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs z-20"
                      style={{ backgroundColor: '#1a1a1a', color: 'white' }}
                    >
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: '#1a1a1a' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm opacity-70" style={{ color: '#1a1a1a' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4 items-start"
            >
              {/* Icon Circle */}
              <div className="flex-shrink-0">
                <div
                  className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border-4 relative"
                  style={{ borderColor: '#D4AF37' }}
                >
                  <step.icon size={24} style={{ color: '#D4AF37' }} strokeWidth={1.5} />
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                    style={{ backgroundColor: '#1a1a1a', color: 'white' }}
                  >
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="mb-1" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#1a1a1a' }}>
                  {step.title}
                </h3>
                <p className="opacity-70" style={{ color: '#1a1a1a' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    rating: 5,
    text: 'The bridal lehenga they created for my wedding was beyond my dreams. The attention to detail and craftsmanship was exceptional. Highly recommend Tailor On Call!',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Business Executive',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    rating: 5,
    text: 'Their bespoke suits are impeccable. The home measurement service is so convenient, and the fit is always perfect. Best tailoring experience in the city.',
  },
  {
    name: 'Anita Desai',
    role: 'Fashion Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    rating: 5,
    text: 'As a designer myself, I appreciate their dedication to quality. They understand fabric, fit, and fashion. My go-to for all custom tailoring needs.',
  },
  {
    name: 'Vikram Singh',
    role: 'Groom',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    rating: 5,
    text: 'The wedding sherwani they tailored was stunning. Everyone complimented the fit and design. Professional service from start to finish.',
  },
  {
    name: 'Meera Patel',
    role: 'Corporate Professional',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    rating: 5,
    text: 'Their designer blouses are works of art. The consultation helped me choose the perfect design, and the execution was flawless. Truly premium service.',
  },
  {
    name: 'Arjun Mehta',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    rating: 5,
    text: 'The doorstep service is a game-changer for busy professionals like me. Quality is top-notch, and they always deliver on time. Excellent work!',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white">
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
                TESTIMONIALS
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
              What Our Clients Say
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-70" style={{ color: '#1a1a1a' }}>
              Join thousands of satisfied customers who trust us for their tailoring needs
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#D4AF37] h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote size={40} style={{ color: '#D4AF37', opacity: 0.3 }} strokeWidth={1.5} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#D4AF37" stroke="#D4AF37" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-6 leading-relaxed opacity-80 flex-grow" style={{ color: '#1a1a1a' }}>
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: '#1a1a1a' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm opacity-70" style={{ color: '#1a1a1a' }}>
                      {testimonial.role}
                    </p>
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

function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={className} />;
}

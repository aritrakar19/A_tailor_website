import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience', duration: 2000 },
  { value: 10000, suffix: '+', label: 'Happy Customers', duration: 2500 },
  { value: 50000, suffix: '+', label: 'Garments Delivered', duration: 3000 },
  { value: 25, suffix: '+', label: 'Professional Tailors', duration: 2000 },
];

function Counter({ value, duration }: { value: number; duration: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref}>
      {count.toLocaleString()}
    </div>
  );
}

export function Statistics() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#D4AF37' }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#D4AF37' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-3">
                <span
                  className="inline-block"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    color: '#D4AF37',
                  }}
                >
                  <Counter value={stat.value} duration={stat.duration} />
                  {stat.suffix}
                </span>
              </div>
              <p className="text-base sm:text-lg tracking-wide opacity-80" style={{ color: 'white' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

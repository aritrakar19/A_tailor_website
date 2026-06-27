import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1753161021164-b075e15e91b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0YWlsb3IlMjBtZWFzdXJpbmclMjBjbGllbnQlMjBib3V0aXF1ZXxlbnwxfHx8fDE3ODI1NDEwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Tailor measuring client',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1756267317751-3b740c2f6840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjBzZWxlY3Rpb24lMjBkZXNpZ25lcnxlbnwxfHx8fDE3ODI1NDEwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Premium fabric selection',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1606501126768-b78d4569d3f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBtYWNoaW5lJTIwdGhyZWFkJTIwY3JhZnRzbWFuc2hpcHxlbnwxfHx8fDE3ODI1NDExMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Sewing craftsmanship',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1622277430358-f4d134452e2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYnJpZGFsJTIwd2VkZGluZyUyMGRyZXNzfGVufDF8fHx8MTc4MjU0MTEwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Bridal wear',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1778731660238-f6abf7f436b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJvdXRpcXVlJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzgyNTQxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Boutique interior',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1760532467646-b9e466403862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbnMlMjBkZXNpZ25lciUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3ODI1NDExMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Designer dress',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwY3VzdG9tJTIwc3VpdCUyMHRhaWxvcmluZ3xlbnwxfHx8fDE3ODI1NDExMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Custom suits',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1636226570637-3fbda7ca09dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYm91dGlxdWUlMjB3b3Jrc3BhY2UlMjBzdHVkaW98ZW58MXx8fHwxNzgyNTQxMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Boutique workspace',
    span: '',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white">
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
                OUR GALLERY
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
              Showcasing Our Craftsmanship
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-70" style={{ color: '#1a1a1a' }}>
              A glimpse into our world of precision tailoring and designer excellence
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group cursor-pointer overflow-hidden rounded-xl ${image.span}`}
            >
              <div className="relative w-full h-full">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.2 }}></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-6 py-2" style={{ backgroundColor: 'white' }}>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHJZQ_m_xWVgsDZk0IBprsZXGZfPP-hcFolYpLqlXHQ&s=10',
    alt: 'Tailor measuring client',
    span: 'row-span-2',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44PqxzbyqFfebMb-iQaQ4seBB1XFWI3F9t229dLi1pw&s',
    alt: 'Premium fabric selection',
    span: '',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9E98uoVbvhBWUBJRIxVJgEkdttn-fVuIzCRiw5N2owQ&s=10',
    alt: 'Sewing craftsmanship',
    span: '',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmk5CZrO4cboUiw2Pn9vwgNKY44FWlbeVAKXpcqjW4g&s=10',
    alt: 'Bridal wear',
    span: 'row-span-2',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSnjDuzGuvWehzi1ff8rtk6Mb_PREzWT6MYlQEVXWLQ&s=10',
    alt: 'Boutique interior',
    span: '',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yIjQBUZBRp--uo31mjNBEXX_CDyj5kgusfJ2fnIYDg&s=10',
    alt: 'Designer dress',
    span: '',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDr8M_BQ8BBJGOWz_AQk-VIXxvcqI77GAJgB0zvHdm3g&s=10',
    alt: 'Custom suits',
    span: 'col-span-2',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYqb6bC8U7GtbG7zGuS726pwCjmPaA0vuPO1RmDib6g&s=10',
    alt: 'Boutique workspace',
    span: '',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUGexbb4QSuJaHjqTzU2AJaTeGArgbntYL6ZWnUuQag&s=10',
    alt: 'Premium stitching details',
    span: '',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwVDCdQjwbHXR1mLse3FAkcmPSFgaX8Le7xj1Zijh7g&s=10',
    alt: 'Tailoring finishing touches',
    span: '',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_sXpYZ4gp3xnurGVT7pFEUvBPp-Im7yscd21NXI_Uxg&s=10',
    alt: 'Bespoke design creation',
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

import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Designer Blouse Stitching',
    description: 'Custom-designed blouses crafted with precision, perfect fitting, and premium finishing for every occasion.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1mKbkNzxKSDGcLExI7zg--Oab52hxd6Ovn5ogcqh1TFwydUb',
    alt: 'Elegant designer blouse stitching with premium detailing'
  },
  {
    title: 'Bridal Lehenga Tailoring',
    description: 'Luxury bridal lehenga stitching with handcrafted detailing and flawless finishing.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZueeqe9FUGvEbcbNcTCx3KPhwWpoY_CnKSpKLcYX_tF0TbO54',
    alt: 'Luxury bridal lehenga tailoring showing handcrafted embroidery'
  },
  {
    title: 'Indo-Western Designer Wear',
    description: 'Elegant Indo-Western outfits tailored with modern silhouettes and premium craftsmanship.',
    image: 'https://images.cbazaar.com/images/yellow-chinon-silk-zari-embroidered-sequins-with-beads-work-indowestern-jacket-palazzo-set-iwsuscc573910051-u.jpg',
    alt: 'Modern Indo-Western designer jacket and palazzo outfit'
  },
  {
    title: 'Custom Kurta & Jacket Set',
    description: 'Premium kurta and jacket tailoring for weddings, festivals, and special occasions.',
    image: 'https://asopalav.com/cdn/shop/files/pmnel2186d-off-white-silk-jodhpuri-kurta-set-with-multi-colored-thread-embroidery-work-jacket-set_25fcf939-97bc-4d8d-a000-618215ce406a.webp?v=1748348995',
    alt: 'Custom tailored off-white silk Jodhpuri kurta set and embroidered jacket'
  },
  {
    title: 'Luxury Bridal Gown Stitching',
    description: 'Exclusive bridal gowns tailored with elegance, comfort, and attention to every detail.',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGzB72GiM2_95c4f82aIZ4l7770T4Oydzth9Xstw3__alXR95L',
    alt: 'Stunning luxury bridal gown with customized styling and veil'
  },
  {
    title: 'Designer Palazzo Suit',
    description: 'Beautiful palazzo suit stitching with contemporary cuts and premium finishing.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2026/6/616983521/YB/CY/SF/102721331/megha-fashion-plazzo-set-1.png',
    alt: 'Chic designer palazzo suit with matching pattern and premium fabric'
  },
  {
    title: 'Designer Anarkali Dress',
    description: 'Elegant Anarkali tailoring with luxurious fabrics and handcrafted finishing.',
    image: 'https://folksana.in/wp-content/uploads/2024/03/MAHOGANY-3-scaled.jpeg',
    alt: 'Premium designer Anarkali suit with gold work and elegant flow'
  },
  {
    title: "Men's Kurta & Ethnic Wear",
    description: 'Premium ethnic wear tailored for weddings, festivals, and formal celebrations.',
    image: 'https://rukminim2.flixcart.com/image/1536/1536/xif0q/ethnic-set/d/o/b/44-punjabi-03-riddhiman-fashion-original-imahhxu6suwtjwjb.jpeg?q=90',
    alt: "Bespoke men's traditional ethnic wear and kurta set"
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
              <p className="text-sm tracking-widest font-semibold" style={{ color: '#D4AF37' }}>
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
              Redefining luxury fashion through bespoke stitching, customized bridal wear, and premium ethnic tailoring.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group cursor-pointer h-full flex"
            >
              <div className="flex flex-col w-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-md hover:shadow-xl hover:border-[#D4AF37]/45 transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 rounded-t-2xl">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3
                      className="mb-2 text-[#1a1a1a] group-hover:text-[#D4AF37] transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600 }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#1a1a1a]/70 line-clamp-3 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div
                    className="inline-flex items-center gap-2 text-sm mt-5 font-semibold transition-all group-hover:text-[#D4AF37]"
                    style={{ color: '#1a1a1a' }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
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

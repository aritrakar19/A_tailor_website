import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ZoomIn, Info } from 'lucide-react';

import saree1 from '../../assets/dress-from-saree/saree-1.png';
import saree2 from '../../assets/dress-from-saree/saree-2.png';
import saree3 from '../../assets/dress-from-saree/saree-3.png';
import saree4 from '../../assets/dress-from-saree/saree-4.png';
import saree5 from '../../assets/dress-from-saree/saree-5.png';
import saree6 from '../../assets/dress-from-saree/saree-6.png';
// import trailorLogo from '../../assets/trailorlogo.jpeg';

import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';
import img6 from '../../assets/img6.jpeg';
import img7 from '../../assets/img7.jpeg';
import img8 from '../../assets/img8.jpeg';
import img9 from '../../assets/img9.jpeg';
import img10 from '../../assets/img10.jpeg';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: 'Bespoke Suits' | 'Bridal & Gowns' | 'Saree Transformations' | 'Craftsmanship';
}

const galleryImages: GalleryImage[] = [
  // Saree Transformations
  {
    src: saree1,
    alt: 'Custom designer gown transformed from a red and gold silk saree, showing intricate embroidery details.',
    title: 'Elegant Silk Gown',
    category: 'Saree Transformations',
  },
  {
    src: saree2,
    alt: 'Luxury designer Anarkali suit transformed from a blue and gold Banarasi saree, featuring premium border stitching.',
    title: 'Premium Anarkali Suit',
    category: 'Saree Transformations',
  },
  {
    src: saree3,
    alt: 'Designer Lehenga choli crafted from an emerald green Kanjeevaram silk saree with traditional zari work.',
    title: 'Stunning Lehenga Choli',
    category: 'Saree Transformations',
  },
  {
    src: saree4,
    alt: 'Modern Indo-Western outfit transformed from a magenta silk saree, combining traditional patterns with a contemporary silhouette.',
    title: 'Indo-Western Designer Wear',
    category: 'Saree Transformations',
  },
  {
    src: saree5,
    alt: 'Chic designer kurti transformed from a purple georgette saree, featuring elegant drapery and pleats.',
    title: 'Custom Designer Kurti',
    category: 'Saree Transformations',
  },
  {
    src: saree6,
    alt: 'Elegant custom designer dress transformed from a mustard yellow silk saree, with a modern neckline.',
    title: 'Modern Designer Dress',
    category: 'Saree Transformations',
  },
  {
    src: img3,
    alt: 'A modern, sophisticated shirt-style long dress with a matching belt, tailored from rich purple silk featuring gold floral motifs.',
    title: 'Amethyst Silk Shirt Dress',
    category: 'Saree Transformations',
  },
  {
    src: img7,
    alt: 'Traditional-style red and gold Banarasi flared dress with a rich green border and a classic V-neckline.',
    title: 'Traditional Banarasi Flare Dress',
    category: 'Saree Transformations',
  },
  {
    src: img8,
    alt: 'Elegant cream and ivory silk long jacket dress with rich red and gold borders, perfect for contemporary festive styling.',
    title: 'Ivory Silk Cape & Jacket Dress',
    category: 'Saree Transformations',
  },
  {
    src: img10,
    alt: 'Beautiful emerald green three-piece sharara set featuring detailed gold embroidery on the neck and sleeves with a matching dupatta.',
    title: 'Emerald Green Embroidered Sharara Set',
    category: 'Saree Transformations',
  },
  
  // Premium Bespoke Suits
  {
    src: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop',
    alt: 'Charcoal grey three-piece bespoke wool suit with immaculate shoulder structure and a classic peak lapel.',
    title: 'Executive Three-Piece Suit',
    category: 'Bespoke Suits',
  },
  {
    src: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop',
    alt: 'Midnight blue double-breasted tuxedo with black satin peak lapels, tailored for formal excellence.',
    title: 'Midnight Tuxedo',
    category: 'Bespoke Suits',
  },
  {
    src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
    alt: 'Precision fitting session showcasing the hand-canvased construction of a custom blazer jacket.',
    title: 'Hand-Canvased Jacket',
    category: 'Bespoke Suits',
  },
  {
    src: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1000&auto=format&fit=crop',
    alt: 'Close-up of a double-breasted camel overcoat showing impeccable pick stitching and premium horn buttons.',
    title: 'Tailored Wool Overcoat',
    category: 'Bespoke Suits',
  },
  {
    src: img9,
    alt: "Modern women's bespoke pantsuit crafted from rich magenta and gold floral brocade fabric, featuring sharp tailoring and flared trousers.",
    title: 'Pink Brocade Blazer Pantsuit',
    category: 'Bespoke Suits',
  },

  // Bridal & Gowns
  {
    src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
    alt: 'Stunning crimson velvet bridal gown adorned with hand-stitched gold zardozi detailing and gemstones.',
    title: 'Royal Bridal Velvet Gown',
    category: 'Bridal & Gowns',
  },
  {
    src: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop',
    alt: 'Graceful emerald green satin evening dress featuring a custom draped corset waistline.',
    title: 'Draped Corset Evening Dress',
    category: 'Bridal & Gowns',
  },
  {
    src: img1,
    alt: 'Back view of a custom bridal blouse in rich red silk, showcasing detailed hand-embroidered gold zardozi work and an elegant cutout back pattern.',
    title: 'Royal Crimson Bridal Blouse (Back View)',
    category: 'Bridal & Gowns',
  },
  {
    src: img2,
    alt: 'Elegant blossom pink and gold halter neck gown with beautiful floral brocade patterns and a tailored silhouette.',
    title: 'Blossom Pink Halter Gown',
    category: 'Bridal & Gowns',
  },
  {
    src: img4,
    alt: 'Front view of a custom crimson silk bridal blouse, featuring intricate gold hand-embroidery along the neck and sleeves.',
    title: 'Royal Crimson Bridal Blouse (Front View)',
    category: 'Bridal & Gowns',
  },
  {
    src: img6,
    alt: 'Royal blue and gold embroidered long jacket style gown featuring rich zari embroidery and sophisticated detailing.',
    title: 'Royal Blue & Gold Indo-Western Gown',
    category: 'Bridal & Gowns',
  },

  // Craftsmanship
  {
    src: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=1000&auto=format&fit=crop',
    alt: 'Master tailor hand-chalking chalk lines on premium wool fabric on a wooden workbench.',
    title: 'Precision Pattern Chalking',
    category: 'Craftsmanship',
  },
  {
    src: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop',
    alt: 'Heavy-duty vintage sewing machine executing a precise line on premium fabric.',
    title: 'Exquisite Stitching Work',
    category: 'Craftsmanship',
  }
];

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Saree Transformations', 'Bespoke Suits', 'Bridal & Gowns', 'Craftsmanship'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  // Touch Swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white pt-24 pb-20 selection:bg-[#D4AF37] selection:text-black">
      {/* Premium Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-[#D4AF37]/10 bg-gradient-to-b from-[#121212] via-[#0e0e0e] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5">
              <span className="text-xs tracking-widest font-semibold uppercase text-[#D4AF37] flex items-center gap-1.5 font-sans">
                ✨ The Atelier Showcase
              </span>
            </div>
            
            <h1
              className="text-4xl sm:text-6xl font-serif mb-6 leading-tight text-white tracking-wide"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our <span className="text-[#D4AF37]">Gallery</span>
            </h1>
            
            <p className="text-md sm:text-xl font-serif italic text-[#D4AF37]/80 tracking-widest mb-4">
              "Craftsmanship in Every Stitch"
            </p>
            
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto my-6" />

            <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-400 font-sans leading-relaxed">
              Explore our curated portfolio of exquisite transformations, masterfully tailored suits, 
              magnificent custom gowns, and the delicate hand-craftsmanship that defines our boutique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Gallery Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 font-semibold'
                  : 'bg-black/40 text-gray-400 border-white/10 hover:text-white hover:border-[#D4AF37]/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => {
              return (
                <motion.div
                  layout
                  key={image.src}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-neutral-900 shadow-md hover:shadow-2xl hover:shadow-[#D4AF37]/5 transition-all duration-500"
                  onClick={() => setLightboxIndex(index)}
                >
                  {/* Image container */}
                  <div className="relative overflow-hidden w-full h-full bg-[#121212]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 select-none"
                    />
                    
                    {/* Dark/Gold Premium Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 border-b-2 border-transparent group-hover:border-[#D4AF37]">
                      {/* Zoom Indicator */}
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full border border-[#D4AF37]/20 text-[#D4AF37]">
                        <ZoomIn size={16} />
                      </div>

                      <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#D4AF37] mb-1">
                        {image.category}
                      </span>
                      <h4 className="text-white text-base sm:text-lg font-serif mb-1 leading-tight">
                        {image.title}
                      </h4>
                      <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed font-sans">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/98 backdrop-blur-md select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar controls */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/30 backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D4AF37] font-semibold font-sans">
                  {filteredImages[lightboxIndex].category}
                </span>
                <span className="text-white text-sm sm:text-base font-serif font-medium mt-0.5">
                  {filteredImages[lightboxIndex].title}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500 font-mono">
                  {lightboxIndex + 1} / {filteredImages.length}
                </span>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] text-white transition-colors duration-200 cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Lightbox Content Area */}
            <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 z-10 p-3 rounded-full bg-black/60 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-all duration-200 cursor-pointer hover:scale-105 hidden md:block"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Image Frame */}
              <div className="relative max-w-full max-h-[75vh] flex items-center justify-center">
                <motion.img
                  key={lightboxIndex}
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].alt}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/5 shadow-2xl"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 z-10 p-3 rounded-full bg-black/60 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-all duration-200 cursor-pointer hover:scale-105 hidden md:block"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption and Mobile Controls */}
            <div className="px-6 py-6 border-t border-white/5 bg-black/40 text-center flex flex-col items-center justify-center gap-4">
              <div className="max-w-2xl flex gap-3 text-left bg-[#D4AF37]/5 border border-[#D4AF37]/15 p-4 rounded-xl">
                <Info className="text-[#D4AF37] shrink-0" size={18} />
                <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed">
                  {filteredImages[lightboxIndex].alt}
                </p>
              </div>

              {/* Mobile Only Navigation Buttons */}
              <div className="flex md:hidden gap-6 mt-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white active:bg-[#D4AF37] active:text-black transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white active:bg-[#D4AF37] active:text-black transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

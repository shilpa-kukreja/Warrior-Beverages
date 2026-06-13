"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import QuoteModal from "./QuoteModal";   // <-- import the shared modal
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Water Bottle 1L Round",
    volume: "1L",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Water Bottle 250ML",
    volume: "250ML",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&h=500&q=80",
  },
  {
    id: 3,
    name: "Water Bottle 500ML",
    volume: "500ML",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&h=600&q=80",
  },
  {
    id: 4,
    name: "Water Bottle 750ML",
    volume: "750ML",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Water Bottle 1.5L",
    volume: "1.5L",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  // Modal states
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(3);
      else setVisibleCount(2);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxStartIndex = Math.max(0, products.length - visibleCount);
  const canScrollLeft = currentStartIndex > 0;
  const canScrollRight = currentStartIndex < maxStartIndex;

  const nextSlide = () => {
    if (canScrollRight) {
      setCurrentStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
    }
  };

  const prevSlide = () => {
    if (canScrollLeft) {
      setCurrentStartIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
    setIsSwiping(false);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;
    const diffX = Math.abs(e.touches[0].clientX - touchStartX);
    const diffY = Math.abs(e.touches[0].clientY - touchStartY);
    if (diffX > diffY && diffX > 10) {
      e.preventDefault();
      setIsSwiping(true);
    }
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX || !isSwiping) {
      setTouchStartX(0);
      setTouchStartY(0);
      setIsSwiping(false);
      return;
    }
    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setTouchStartX(0);
    setTouchStartY(0);
    setIsSwiping(false);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.addEventListener("touchstart", handleTouchStart, { passive: false });
    carousel.addEventListener("touchmove", handleTouchMove, { passive: false });
    carousel.addEventListener("touchend", handleTouchEnd);
    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartX, isSwiping, currentStartIndex, maxStartIndex]);

  const visibleProducts = products.slice(currentStartIndex, currentStartIndex + visibleCount);

  // Open modal with product info
  const openQuoteModalForProduct = (product) => {
    setSelectedProduct(product);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-8 sm:py-10 md:py-12">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover" poster="...">
          <source src="/video/Water-Drop-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[30%_70%] lg:gap-16">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h2 className="mt-2 text-3xl font-bold tracking-tight leading-tight text-white sm:text-4xl md:text-5xl">
              Our Range of <br />
              <span className="text-[#304869]">Premium Water</span>
            </h2>
            <p className="mt-3 text-sm text-white/90 sm:text-base md:text-lg">
              Thoughtfully Packaged to Keep You Revitalised Throughout the Day.
            </p>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#304869] lg:mx-0" />
            <p className="mt-5 text-xs italic text-white/80 sm:text-sm">
              Choose Purity, Choose Quality –{" "}
              <strong className="text-[#304869]">Choose AQTIVE Water</strong>
            </p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#304869] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl active:scale-95 sm:w-auto sm:px-8 lg:inline-flex"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* RIGHT COLUMN - Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div
              ref={carouselRef}
              className="overflow-hidden rounded-xl touch-pan-y"
              style={{ touchAction: "pan-y" }}
            >
              <div
                className="grid transition-all duration-500 ease-out"
                style={{
                  gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
                  gap: "1rem",
                }}
              >
                {visibleProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/90 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/95 hover:shadow-2xl sm:p-5"
                  >
                    <div className="relative z-10">
                      <div className="mb-3 flex justify-center sm:mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-40 w-auto object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105 sm:h-52 md:h-64"
                        />
                      </div>
                      <h3 className="mb-1 text-center text-base font-bold text-gray-800 sm:text-lg">
                        {product.name}
                      </h3>
                      <div className="mb-3 flex justify-center sm:mb-4">
                        <span className="rounded-full bg-[#304869]/10 px-2 py-0.5 text-xs font-semibold text-[#304869] sm:px-3">
                          {product.volume}
                        </span>
                      </div>
                      <div className="flex justify-center">
                        <button
                          onClick={() => openQuoteModalForProduct(product)}
                          className="group/btn flex items-center gap-1 rounded-md bg-[#304869] px-3 py-1.5 text-xs font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95 sm:px-4 sm:py-2"
                        >
                          {/* <ShoppingBag className="h-3 w-3" /> */}
                          Enquiry Now
                          {/* <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" /> */}
                        </button>
                        <Link href={`/products/${product.id}`}>
                          <button className="group/btn flex items-center gap-1 rounded-md bg-white/20 px-3 py-1.5 text-xs font-semibold text-[#304869] shadow-md transition-all hover:shadow-lg active:scale-95 sm:px-4 sm:py-2">
                            View Details
                            {/* <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" /> */}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {products.length > visibleCount && visibleCount > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={!canScrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-black/40 p-1.5 backdrop-blur-md transition-all hover:bg-black/60 disabled:opacity-30 disabled:cursor-not-allowed sm:p-2"
                  aria-label="Previous product"
                >
                  <ChevronLeft className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={!canScrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-black/40 p-1.5 backdrop-blur-md transition-all hover:bg-black/60 disabled:opacity-30 disabled:cursor-not-allowed sm:p-2"
                  aria-label="Next product"
                >
                  <ChevronRight className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </button>
              </>
            )}

            {/* Dots indicator remains unchanged */}
            {maxStartIndex > 0 && (
              <div className="mt-4 flex justify-center gap-2">
                {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStartIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${idx === currentStartIndex
                      ? "w-5 bg-[#304869]"
                      : "w-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Shared Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
        productName={selectedProduct?.name}
        productVolume={selectedProduct?.volume}
      />
    </section>
  );
}
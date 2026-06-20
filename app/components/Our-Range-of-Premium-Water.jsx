"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import QuoteModal from "./QuoteModal";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Premium Water 1L",
    volume: "1L",
    price: "₹30",
    image: "/productimage/1000ml.png",
  },
  {
    id: 2,
    name: "Premium Water 500ML",
    volume: "500ML",
    price: "₹20",
    image: "/productimage/500ml.png",
  },
  {
    id: 3,
    name: "Premium Water 250ML",
    volume: "250ML",
    price: "₹10",
    image: "/productimage/250ml.png",
  },
];

export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [containerWidth, setContainerWidth] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  // Modal states
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Responsive breakpoints
  const updateVisibleCount = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setVisibleCount(1);
    else if (width < 1024) setVisibleCount(2);
    else setVisibleCount(3);
  }, []);

  // Recalculate container width on resize
  const updateContainerWidth = useCallback(() => {
    if (carouselContainerRef.current) {
      setContainerWidth(carouselContainerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    updateVisibleCount();
    updateContainerWidth();
    window.addEventListener("resize", () => {
      updateVisibleCount();
      updateContainerWidth();
    });
    return () => window.removeEventListener("resize", () => {});
  }, [updateVisibleCount, updateContainerWidth]);

  // Reset index when visibleCount changes (to avoid out-of-bounds)
  useEffect(() => {
    const maxStart = Math.max(0, products.length - visibleCount);
    if (currentIndex > maxStart) setCurrentIndex(maxStart);
  }, [visibleCount, currentIndex]);

  const gap = 16; // 1rem in px
  const itemWidth = containerWidth > 0
    ? (containerWidth - (visibleCount - 1) * gap) / visibleCount
    : 0;
  const translateX = -currentIndex * (itemWidth + gap);

  const maxStartIndex = Math.max(0, products.length - visibleCount);
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < maxStartIndex;

  const nextSlide = () => {
    if (canScrollRight) {
      setCurrentIndex((prev) => Math.min(prev + 1, maxStartIndex));
    }
  };

  const prevSlide = () => {
    if (canScrollLeft) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
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
    const carousel = carouselContainerRef.current;
    if (!carousel) return;
    carousel.addEventListener("touchstart", handleTouchStart, { passive: false });
    carousel.addEventListener("touchmove", handleTouchMove, { passive: false });
    carousel.addEventListener("touchend", handleTouchEnd);
    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartX, isSwiping, currentIndex, maxStartIndex]);

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
      {/* Video Background with better overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="..."
        >
          <source src="/video/Sequence 02.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
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
            <p className="mt-3 text-sm text-white/90 text-justify sm:text-base md:text-lg">
              From quick refreshment on the go to everyday hydration at home,
              Neysa offers thoughtfully sized bottles designed to suit different
              lifestyles, occasions, and consumption needs. Every pack delivers
              the same trusted quality, refreshing taste, and premium experience.
            </p>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#304869] lg:mx-0" />
            <p className="mt-5 text-xs italic text-white/80 sm:text-sm">
              Choose Purity, Choose Quality –{" "}
              <strong className="text-[#304869]">Choose Neysa Water</strong>
            </p>
         <Link href="/contact-us" target="_blank">   <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#304869] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl active:scale-95 sm:w-auto sm:px-8 lg:inline-flex"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button></Link> 
          </motion.div>

          {/* RIGHT COLUMN - Carousel with sliding */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div
              ref={carouselContainerRef}
              className="overflow-hidden rounded-xl touch-pan-y"
              style={{ touchAction: "pan-y" }}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(${translateX}px)`,
                  gap: `${gap}px`,
                }}
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 rounded-xl border border-white/20 bg-white/90 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/95 hover:shadow-2xl sm:p-5"
                    style={{
                      width: itemWidth > 0 ? `${itemWidth}px` : "auto",
                    }}
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
                      <div className="mb-4 text-center">
                        <span className="text-2xl font-bold text-[#304869]">
                          {product.price}
                        </span>
                        <p className="text-xs text-gray-500">Starting Price</p>
                      </div>
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => openQuoteModalForProduct(product)}
                          className="group/btn flex items-center gap-1 rounded-md bg-[#304869] px-3 py-1.5 text-xs font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105 active:scale-95 sm:px-4 sm:py-2"
                        >
                          Enquiry Now
                        </button>
                        <Link href={`/products/${product.id}`}>
                          <button className="group/btn flex items-center gap-1 rounded-md border border-[#304869] bg-transparent px-3 py-1.5 text-xs font-semibold text-[#304869] shadow-md transition-all hover:bg-[#304869]/10 hover:scale-105 active:scale-95 sm:px-4 sm:py-2">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows (only if more than visibleCount) */}
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

            {/* Dots indicator */}
            {maxStartIndex > 0 && (
              <div className="mt-4 flex justify-center gap-2">
                {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentIndex
                        ? "w-6 bg-[#304869]"
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
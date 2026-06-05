"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Droplets } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, EcoLife",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Wather's branded water bottles transformed our corporate events. The quality is exceptional, and the customisation options are endless. Our clients still use them daily – that's real brand recall!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, HydrateCo",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "The geo-mapping insights helped us track engagement across multiple campaigns. A game-changer for understanding our audience. Plus, the bottles look stunning.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Event Manager, Summit Events",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "We've tried many promotional products, but nothing beats Wather. Their bottles create social media buzz organically – attendees love sharing them. Highly recommended!",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CEO, PureBrands",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
    text: "Cost-effective and durable. The customisation team brought our vision to life perfectly. Will definitely order again.",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    role: "Sustainability Lead, GreenFuture",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    rating: 5,
    text: "Aligning with our eco-values was seamless. Wather's commitment to sustainability matches ours. A partnership we're proud of.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxStartIndex = Math.max(0, testimonials.length - visibleCount);
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

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  const StarRating = ({ rating }) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-300 text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-10 md:py-12"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
    >
      {/* Subtle wave pattern overlay (optional, light) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Cpath fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2\' d=\'M0 400 L200 350 L400 420 L600 380 L800 440 L1000 370 L1200 410\' /%3E%3C/svg%3E')] bg-repeat" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading Section with improved animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-center md:mb-10"
        >
          {/* <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm"
          >
            <Droplets className="h-4 w-4 text-sky-300" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/80">
              Client Stories
            </span>
          </motion.div> */}

          <motion.h2
            className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>

          <motion.div
            className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#861981]"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "6rem", opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Trusted by leading brands – hear how Wather is transforming their marketing.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="grid transition-all duration-500 ease-out"
              style={{
                gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
                gap: "2rem",
              }}
            >
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                  
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  
                  }}
                //   whileHover={{
                //     y: -8,
                //     transition: { duration: 0.2 },
                //   }}
                  className="group relative overflow-hidden rounded-xl bg-white/95 p-6 shadow-xl  duration-300 hover:shadow-2xl"
                >
                  {/* Decorative gradient blob */}
                  {/* <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-sky-200/30 to-emerald-200/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}

                  <div className="relative z-10">
                    {/* Client info with image */}
                    <div className="mb-3 flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-[#861981] ring-offset-400/50"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="mb-3">
                      <StarRating rating={testimonial.rating} />
                    </div>

                    {/* Quote icon */}
                    <div className="absolute -right-2 -top-2 text-sky-200/20">
                      <Quote className="h-16 w-16" />
                    </div>

                    <p className="relative text-gray-600 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows with better styling */}
          {testimonials.length > visibleCount && (
            <>
              <button
                onClick={prevSlide}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-200 ${
                  canScrollLeft
                    ? "hover:bg-white/40 hover:scale-110 cursor-pointer border-2 border-[#861981]"
                    : "opacity-30 cursor-not-allowed"
                }`}
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6 text-[#861981]" />
              </button>
              <button
                onClick={nextSlide}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 backdrop-blur-sm transition-all duration-200 ${
                  canScrollRight
                    ? "hover:bg-white/40 hover:scale-110 cursor-pointer border-2 border-[#861981]"
                    : "opacity-30 cursor-not-allowed"
                }`}
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6 text-[#861981]" />
              </button>
            </>
          )}

          {/* Dots indicator with smooth transition */}
          {maxStartIndex > 0 && (
            <div className="mt-10 flex justify-center gap-3">
              {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex
                      ? "w-8 h-2 bg-[#861981]"
                      : "w-2 h-2 bg-[#861981]/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
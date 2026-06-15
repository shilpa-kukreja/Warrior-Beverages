"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets } from "lucide-react";

// Left side features (3 items) - using image URLs instead of icons
const leftFeatures = [
  {
    imageUrl: "/why-choose/1.png",
    title: "Consistent Quality",
    subheading: "Eco-conscious Impact",
    description:
      "Every bottle is produced with strict quality checks to ensure a clean, refreshing taste and a dependable experience every time.",
  },
  {
    imageUrl: "/why-choose/advertising.png",
    title: "Advanced Purification",
    subheading: "Undisturbed Engagement",
    description:
      "Processed through a multi-stage purification system to deliver water that meets high standards of safety, hygiene, and freshness.",
  },
  {
    imageUrl: "/why-choose/branding.png",
    title: "Premium Presentation",
    subheading: "Your Vision, Our Craft",
    description:
      "Designed with modern packaging that reflects the quality inside, making Neysa the perfect choice for homes, workplaces, travel, and events.",
  },
];

// Right side features (3 items)
const rightFeatures = [
  {
    imageUrl: "/why-choose/social-media.png",
    title: "Everyday Affordability",
    subheading: "Shareable Experience",
    description:
      "Enjoy a premium drinking water experience without paying a premium price, making better hydration accessible to everyone.",
  },
  {
    imageUrl: "/why-choose/cost-effectiveness.png",
    title: "Trusted Manufacturing",
    subheading: "High ROI",
    description:
      "Produced in hygienic facilities with a strong focus on quality control, consistency, and consumer confidence.",
  },
  {
    imageUrl: "/why-choose/insight.png",
    title: "Made for Modern Lifestyles",
    subheading: "Actionable Analytics",
    description:
      "Whether you're working, travelling, exercising, or spending time with family, Neysa is crafted to keep pace with your day.",
  },
];

// Different gradient backgrounds for each card (total 6 distinct)
const cardGradients = [
  "from-sky-50 to-blue-50 border border-sky-200 ",
  "from-emerald-50 to-teal-50  border border-emerald-200",
  "from-amber-50 to-yellow-50 border border-amber-200",
  "from-purple-50 to-indigo-50 border border-purple-200",
  "from-rose-50 to-pink-50 border border-rose-200",
  "from-indigo-50 to-violet-50 border border-indigo-200",
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

// Central bottle image floating animation
const floatAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

export default function WhyChooseWather() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  // Combine left and right features for easy gradient indexing
  const allFeatures = [...leftFeatures, ...rightFeatures];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-cover bg-center py-10 md:py-12"
      style={{
        backgroundImage:
          "url('/why-choose/bg-why.png')",
      }}
    >
      {/* Dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/50 to-white/50" /> */}

      {/* Subtle wave pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\' opacity=\'0.05\'%3E%3Cpath fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'1\' d=\'M0 400 L200 350 L400 420 L600 380 L800 440 L1000 370 L1200 410\' /%3E%3C/svg%3E')] bg-repeat bg-cover" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 text-center md:mb-10"
        >
          {/* <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md"
          >
            <Droplets className="h-4 w-4 text-sky-300" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/80">
              Sustainable Impact
            </span>
          </motion.div> */}

          <motion.h1
            className="mt-4 text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Why Choose <span className="text-[#304869]">Neysa</span>
          </motion.h1>

          {/* <motion.h2
            className="mt-4 text-2xl font-semibold text-white/90 md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            As Your Branding Medium?
          </motion.h2> */}

          <motion.div
            className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-[#304869] to-[#304869]"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "8rem", opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          {/* <motion.p
            className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Elevate your brand with sustainable, eye-catching hydration — where
            every bottle becomes a powerful marketing statement.
          </motion.p> */}
        </motion.div>

        {/* Three Column Layout: Left Cards | Bottle Image | Right Cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {/* LEFT COLUMN - 3 Feature Cards */}
          <div className="flex flex-col gap-7">
            {leftFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className={`group flex items-start gap-5 rounded-2xl bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 ${cardGradients[idx]}`}
              >
                {/* Image Icon */}
                <div className="flex-shrink-0">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="h-12 w-12 rounded-xl object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Text content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  {/* <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-sky-600">
                    {feature.subheading}
                  </p> */}
                  <p className="mt-2 text-sm text-justify leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER COLUMN - Bottle Image (Larger) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 120 }}
            className="flex items-center justify-center py-8"
          >
            <div className="relative">
              {/* Enhanced glow effect behind the bottle */}
              <div className="absolute inset-0 rounded-full  blur-3xl" />
              <div className="absolute -inset-4 rounded-full bg-white/5 blur-xl" />
              <motion.div animate={floatAnimation}>
                <img
                  src="/why-choose/12.png"
                  alt="Premium branded water bottle"
                  className="relative z-10 h-[380px] w-auto max-w-none drop-shadow-2xl lg:h-[460px]"
                />
              </motion.div>
              {/* Decorative water droplets around bottle */}
              <div className="absolute -left-6 top-12 h-3 w-3 rounded-full bg-sky-300/70 blur-[1px]" />
              <div className="absolute -right-4 bottom-16 h-4 w-4 rounded-full bg-emerald-300/70 blur-[1px]" />
              <div className="absolute left-1/2 -top-6 h-2 w-2 -translate-x-1/2 rounded-full bg-white/50 blur-[0.5px]" />
              <div className="absolute bottom-0 left-8 h-2 w-2 rounded-full bg-sky-200/50" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN - 3 Feature Cards (indices 3,4,5) */}
          <div className="flex flex-col gap-7">
            {rightFeatures.map((feature, idx) => {
              const cardIndex = idx + 3; // right side starts at index 3
              return (
                <motion.div
                  key={idx}
                  custom={cardIndex}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className={`group flex items-start gap-5 rounded-2xl bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 ${cardGradients[cardIndex]}`}
                >
                  {/* Image Icon */}
                  <div className="flex-shrink-0">
                    <img
                      src={feature.imageUrl}
                      alt={feature.title}
                      className="h-12 w-12 rounded-xl object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Text content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">
                      {feature.title}
                    </h3>
                    {/* <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-sky-600">
                      {feature.subheading}
                    </p> */}
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 w-full overflow-hidden opacity-25">
          <svg
            className="absolute bottom-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C45.25,91.86,88.48,88.86,132,85.21Z"
              fill="currentColor"
              className="text-white/40"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
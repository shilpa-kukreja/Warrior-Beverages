"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import {
  Factory,
  Shield,
  Recycle,
  Gauge,
  Truck,
  Award,
  Leaf,
  Droplets,
  CheckCircle2,
  Zap,
  Settings,
  Package,
  Building2,
  BadgeCheck,
  MapPin,
  Calendar,
  Users,
  Globe,
  TrendingUp,
  Cpu,
  Microscope,
  Clock,
  Sparkles,
  Verified,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const manufacturingSteps = [
  {
    id: 1,
    title: "Raw Material Sourcing",
    description:
      "Premium 18/8 stainless steel from certified mills & recycled ocean plastic from coastal communities.",
    icon: Package,
    qualityMetric: "100% traceable",
  },
  {
    id: 2,
    title: "Precision Molding",
    description:
      "State-of-the-art injection molding with robotic arms ensures ±0.01mm tolerance on every bottle.",
    icon: Factory,
    qualityMetric: "±0.01mm precision",
  },
  {
    id: 3,
    title: "Quality Testing",
    description:
      "100% leak test, pressure test (up to 200 PSI), and thermal shock test before moving forward.",
    icon: Gauge,
    qualityMetric: "200 PSI tested",
  },
  {
    id: 4,
    title: "Custom Printing",
    description:
      "UV digital printing + 360° wrap technology. Eco-inks, fade-resistant, scratch-proof finish.",
    icon: Settings,
    qualityMetric: "5-year fade warranty",
  },
  {
    id: 5,
    title: "Final Assembly",
    description:
      "Hand-assembled caps, lids, and accessories. Each bottle sanitized with UV-C light.",
    icon: Zap,
    qualityMetric: "UV-C sanitized",
  },
  {
    id: 6,
    title: "Packaging & Shipping",
    description:
      "100% recycled cardboard boxes, no plastic. Carbon-neutral shipping via DHL & FedEx.",
    icon: Truck,
    qualityMetric: "Carbon-neutral",
  },
];

// Certifications now include an image path
const certifications = [
  {
    name: "ISO 9001:2024",
    desc: "Quality Management",
    imageSrc: "/certifications/Affiliations.webp", 
    badge: "✓ Certified",
  },
  {
    name: "B Corp Certified",
    desc: "Social & Environmental",
    imageSrc: "/certifications/glp-3-page-0001-500x500.webp",
    badge: "✓ Verified",
  },
  {
    name: "Carbon Neutral",
    desc: "Net Zero Emissions",
    imageSrc: "/certifications/bvcv-1000x1000.webp",
    badge: "✓ Offset",
  },
  {
    name: "FDA Approved",
    desc: "Food Contact Safe",
    imageSrc: "/certifications/ezzus-iso-9001-2015-500x501.webp",
    badge: "✓ Compliant",
  },
];

const capabilities = [
  { label: "Annual Production Capacity", value: "18M+ units", icon: TrendingUp },
  { label: "Quality Control Points", value: "127 checks", icon: Microscope },
  { label: "Avg. Production Lead Time", value: "14 days", icon: Clock },
  { label: "R&D Engineers", value: "45+ experts", icon: Cpu },
];

const indianManufacturers = [
  {
    name: "Delhi NCR Facility",
    location: "Ghaziabad, UP",
    icon: Building2,
    capacity: "25,000 units/day",
    specialties: ["Stainless Steel", "Vacuum Insulation"],
    cert: "ISO 9001 | BSCI",
    imageBg: "from-amber-50 to-orange-50",
  },
  {
    name: "Mumbai Plant",
    location: "Navi Mumbai, MH",
    icon: Factory,
    capacity: "30,000 units/day",
    specialties: ["Recycled Plastic", "Eco-coating"],
    cert: "ISO 14001 | GRS",
    imageBg: "from-sky-50 to-blue-50",
  },
  {
    name: "Gujarat Hub",
    location: "Ahmedabad, GJ",
    icon: Recycle,
    capacity: "22,000 units/day",
    specialties: ["Glass Bottles", "Bamboo Lids"],
    cert: "SA8000 | B Corp",
    imageBg: "from-emerald-50 to-teal-50",
  },
];

export default function ManufacturingPage() {
  const [lightboxImage, setLightboxImage] = useState(null);
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
    

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {/* Manufacturer Profile Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="relative mb-12 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#304869]" />
          <div className="bg-[#304869] px-8 py-5">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-white" />
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Manufacturer Profile
              </h2>
              <span className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                Trusted Partner Since 2015
              </span>
            </div>
          </div>
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#304869]/10 p-2 text-[#304869]">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                    Company Name
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    Wather Manufacturing Co., Ltd.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#304869]/10 p-2 text-[#304869]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                    Global Headquarters
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    123 Water Avenue, Eco-City, California, CA 90210, USA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#304869]/10 p-2 text-[#304869]">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                    Established
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    2015 | 10+ years of industry leadership
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#304869]/10 p-2 text-[#304869]">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                    Workforce
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    350+ skilled technicians & engineers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#304869]/10 p-2 text-[#304869]">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                    Global Footprint
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    Production facilities in USA, Netherlands, Vietnam, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#304869]/10 p-2 text-[#304869]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                    Key Certifications
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    ISO 9001, B Corp, FDA, BSCI, SMETA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4"
        >
          {[
            { label: "Daily Production", value: "50,000+", icon: TrendingUp, trend: "+12% YoY" },
            { label: "Quality Checks", value: "12 Points", icon: Gauge, trend: "Zero defects" },
            { label: "Recycled Content", value: "85%", icon: Recycle, trend: "Target 95% by 2026" },
            { label: "Happy Partners", value: "500+", icon: Users, trend: "Global reach" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative rounded-xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl ring-1 ring-gray-100"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-px w-12 rounded-full bg-[#304869] opacity-0 transition-all group-hover:opacity-100" />
              <div className="inline-flex rounded-xl bg-[#304869]/10 p-3 text-[#304869]">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900">{stat.value}</p>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="mt-1 text-xs font-medium text-[#304869]">{stat.trend}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced Manufacturing Capabilities */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="mb-10 text-center">
            <span className="rounded-full bg-[#304869]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#304869]">
              Core Strengths
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advanced Manufacturing Capabilities
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#304869] to-[#304869]" />
            <p className="mx-auto mt-5 max-w-2xl text-gray-600">
              State-of-the-art infrastructure and industry-leading expertise
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mx-auto rounded-full bg-[#304869]/10 p-3 text-[#304869] w-fit">
                  <cap.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-2xl font-bold text-gray-900">{cap.value}</p>
                <p className="text-sm text-gray-500">{cap.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Indian Manufacturing Hubs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <div className="mb-10 text-center">
            <span className="rounded-full bg-[#304869]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#304869]">
              Made in India
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Indian Manufacturing Hubs
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#304869]" />
            <p className="mx-auto mt-5 max-w-2xl text-gray-600">
              Strategic facilities across Delhi NCR, Mumbai, and Gujarat – delivering excellence locally
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {indianManufacturers.map((facility, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl ring-1 ring-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.imageBg} opacity-0 transition-opacity group-hover:opacity-30`} />
                <div className="relative p-6">
                  <div className="inline-flex rounded-xl bg-[#304869]/10 p-3 text-[#304869]">
                    <facility.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">{facility.name}</h3>
                  <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{facility.location}</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Capacity</span>
                      <span className="font-semibold text-gray-900">{facility.capacity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Specialties</span>
                      <span className="font-semibold text-gray-900">{facility.specialties.join(", ")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Certifications</span>
                      <span className="font-semibold text-[#304869]">{facility.cert}</span>
                    </div>
                  </div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#304869]">✓ Partner Facility</span>
                    <BadgeCheck className="h-4 w-4 text-[#304869]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


         {/* Manufacturing Process */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="mb-12 text-center">
            <span className="rounded-full bg-[#304869]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#304869]">
              From Vision to Reality
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Wather Manufacturing Process
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#304869]" />
            <p className="mx-auto mt-5 max-w-2xl text-gray-600">
              Six precision-driven steps ensuring uncompromising quality at every stage
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {manufacturingSteps.map((step) => (
              <motion.div
                key={step.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-xl ring-1 ring-gray-100"
              >
                {/* <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white shadow-lg">
                  {step.id}
                </div> */}
                <div className="absolute top-4 right-4 rounded-full bg-[#304869]/10 px-2 py-0.5 text-xs font-medium text-[#304869]">
                  {step.qualityMetric}
                </div>
                <div className="mb-4 mt-2 inline-flex rounded-xl bg-[#304869]/10 p-3 text-[#304869]">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{step.description}</p>
                <div className="mt-4 h-0.5 w-12 rounded-full bg-[#304869]/10 transition-all group-hover:w-16" />
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Manufacturing Process */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-xl ring-1 ring-gray-100 md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/40 via-transparent to-transparent" />

          <div className="relative">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Industry Certifications
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                Meeting the highest global standards for quality, safety, and sustainability
              </p>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#304869]" />
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-md transition-all hover:shadow-xl ring-1 ring-gray-100"
                >
                  {/* Ribbon / Badge */}
                  <div className="absolute -top-3 right-4">
                    <div className="flex items-center gap-1 rounded-full bg-[#304869] px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                      <Verified className="h-3 w-3" />
                      <span>{cert.badge}</span>
                    </div>
                  </div>

                  {/* Larger Certificate Image - Clickable */}
                  <button
                    onClick={() => setLightboxImage(cert.imageSrc)}
                    className="relative flex h-40 w-40 items-center justify-center rounded-xl bg-white p-3 shadow-md transition-all hover:shadow-lg hover:scale-105 focus:outline-none"
                  >
                    <Image
                      src={cert.imageSrc}
                      alt={`${cert.name} certificate`}
                      width={150}
                      height={150}
                      className="object-contain"
                      unoptimized // remove if you have proper image optimization
                    />
                  </button>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">{cert.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{cert.desc}</p>

                  {/* Decorative line */}
                  <div className="mt-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-emerald-200 to-teal-200 transition-all group-hover:w-12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lightbox Modal */}
          {lightboxImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={() => setLightboxImage(null)}
              onKeyDown={(e) => e.key === "Escape" && setLightboxImage(null)}
            >
              <div
                className="relative max-h-[90vh] max-w-[90vw] rounded-2xl bg-white p-4 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-colors"
                >
                  ✕
                </button>
                <img
                  src={lightboxImage}
                  alt="Certificate full view"
                  className="h-auto w-full max-h-[80vh] object-contain rounded-xl"
                />
              </div>
            </div>
          )}
        </motion.div>

      

        {/* Industry Certifications - WITH CERTIFICATE IMAGES */}


        {/* Materials & Sustainability */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-12 grid gap-8 lg:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="rounded-xl bg-white border border-gray-200 p-8 shadow-lg transition-all hover:shadow-xl ring-1 ring-gray-100"
          >
            <div className="mb-4 inline-flex rounded-xl bg-[#861981]/10 p-3 text-[#304869]">
              <Droplets className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Premium Materials</h3>
            <p className="mt-2 text-gray-500">
              Only the finest, sustainably sourced materials make it into our products
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "18/8 Food-grade stainless steel (304 grade)",
                "Recycled ocean-bound plastic (rPET, rHDPE)",
                "Eco-friendly silicone sleeves (100% recyclable)",
                "UV-cured inks (VOC-free, non-toxic)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#304869]" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl ring-1 ring-gray-100"
          >
            <div className="mb-4 inline-flex rounded-xl bg-[#304869]/10 p-3 text-[#304869]">
              <Leaf className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Sustainability Commitments</h3>
            <p className="mt-2 text-gray-500">
              Our roadmap to a greener, more responsible future
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "100% renewable energy in all factories by 2026",
                "Closed-loop water recycling system",
                "Zero single-use plastic in packaging",
                "Carbon offset program for all shipments",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#304869]" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        
      </div>
    </main>
    <Footer />
    </>
  );
}
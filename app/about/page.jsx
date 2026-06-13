// app/about/page.js
"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Target,
  Eye,
  Clock,
  Users,
  Award,
  Globe,
  Heart,
  Shield,
  Sparkles,
  TrendingUp,
  Leaf,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // Stats data
  const stats = [
    { icon: Users, value: "50K+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Industry Awards" },
    { icon: Globe, value: "30+", label: "Countries Served" },
    { icon: Heart, value: "100%", label: "Eco-Friendly" },
  ];

  // Why Choose Us data
  const whyChoose = [
    { icon: Leaf, title: "Sustainable Materials", description: "100% BPA-free, recyclable, and reusable bottles." },
    { icon: TrendingUp, title: "High ROI", description: "Cost-effective branding with long-term visibility." },
    { icon: Sparkles, title: "Custom Designs", description: "Full customization to match your brand identity." },
    { icon: Shield, title: "Premium Quality", description: "Durable, leak-proof, and built to last." },
  ];

  // Core Values data
  const values = [
    { icon: Shield, title: "Premium Quality", description: "Every bottle meets strict standards for durability and safety." },
    { icon: Sparkles, title: "Sustainable Impact", description: "Committed to reducing plastic waste, one bottle at a time." },
    { icon: Users, title: "Client First", description: "Your vision is our mission – tailored solutions guaranteed." },
  ];

  // Team data
  const team = [
    { name: "Sarah Johnson", role: "Founder & CEO", image: "https://randomuser.me/api/portraits/women/68.jpg", bio: "Sustainability advocate with 15+ years in branding." },
    { name: "Michael Chen", role: "Creative Director", image: "https://randomuser.me/api/portraits/men/32.jpg", bio: "Award-winning designer, passionate about eco-innovation." },
    { name: "Emma Rodriguez", role: "Head of Operations", image: "https://randomuser.me/api/portraits/women/44.jpg", bio: "Ensures seamless delivery and client satisfaction." },
  ];

  return (
    <>
    <Navbar/>
       <img
          src="/about/about.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover "
        />
 
    <main className="bg-white overflow-hidden">
     
      {/* ========== HERO SECTION ========== */}
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/home/about.png"
      alt="About Wather"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-bold text-white"
    >
      About <span className="text-[#304869]">Wather</span>
    </motion.h1>

    <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#304869]" />

    <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-white/90">
      Pure hydration. Sustainable innovation. Powerful branding
      solutions that help businesses leave a lasting impression.
    </p>
  </div>
</section>
      {/* ========== MISSION & VISION ========== */}
      <section className="relative py-12 md:py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={fadeLeft}
              className="group relative overflow-hidden rounded-xl  bg-white p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200"
            >
              <Target className="h-12 w-12 text-[#304869] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                To empower brands with sustainable, high-quality water bottles that leave a positive impact on the planet while delivering unforgettable marketing experiences.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={fadeRight}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200"
            >
              <Eye className="h-12 w-12 text-[#304869] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                A world where every brand chooses eco-friendly promotional products, and every bottle tells a story of purity, quality, and responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== OUR JOURNEY ========== */}
      <section className="relative py-12 md:py-12 bg-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeLeft}
              className="rounded-xl overflow-hidden shadow-xl group"
            >
              <img
                src="/about/about-page-3.jpg"
                alt="Wather team"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeRight}
              className="space-y-4"
            >
              <Clock className="h-10 w-10 text-[#304869]" />
              <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                Founded in 2020, Wather was born from a simple idea: combine premium reusable water bottles with powerful branding solutions. We saw an opportunity to help businesses stand out while reducing single‑use plastic waste.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Today, we partner with eco‑conscious startups and global enterprises alike. Every bottle we produce is BPA‑free, durable, and fully customisable. Our mission is to make sustainable branding effortless and impactful.
              </p>
              <div className="flex items-center gap-2 pt-2 text-[#304869]">
                <Heart className="h-5 w-5 fill-sky-100" />
                <span className="font-semibold">Certified B Corp & Carbon Neutral</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="relative py-12 bg-gray-50 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="text-center p-6 rounded-xl bg-white shadow-md border border-gray-200 hover:shadow-lg transition-all group"
              >
                <stat.icon className="h-10 w-10 text-[#304869] mx-auto mb-3 group-hover:scale-110 transition" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="relative py-12 md:py-12 bg-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Wather</h2>
            <div className="mx-auto mt-2 h-0.5 w-16 rounded-full bg-[#304869]" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              What makes us the trusted partner for brands worldwide.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <item.icon className="h-10 w-10 text-[#304869] mb-4" />
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== CORE VALUES ========== */}
      <section className="relative py-12 md:py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <div className="mx-auto mt-2 h-0.5 w-16 rounded-full bg-[#304869]" />
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <value.icon className="h-10 w-10 text-[#304869] mb-4" />
                <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
                <p className="text-gray-600 mt-2">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section className="relative py-10 md:py-12 bg-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
            <div className="mx-auto mt-2 h-0.5 w-16 rounded-full bg-[#304869]" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Passionate people behind Wather – dedicated to your brand’s success.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group rounded-xl bg-gray-50 p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="relative inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-32 w-32 rounded-full object-cover mx-auto ring-4 ring-[#304869]/10 group-hover:ring-[#304869]/20 transition"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-4">{member.name}</h3>
                <p className="text-[#304869] text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== PREMIUM CTA SECTION ========== */}
      <section className="relative py-10 md:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center  border border-gray-200 rounded-xl p-8 md:p-12 shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black">Ready to make a splash?</h3>
            <p className="text-gray-600 mt-2 max-w-lg mx-auto">
              Join hundreds of brands that trust Wather for premium branded hydration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#304869] px-8 py-3 text-white font-semibold shadow-md hover:shadow-lg hover:scale-100 transition-all">
                Start Your Journey
                <ChevronRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-gray-700 font-semibold shadow-sm hover:shadow-md hover:bg-gray-50 transition-all">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

   
    </main>
    <Footer/>
       </>
  );
}
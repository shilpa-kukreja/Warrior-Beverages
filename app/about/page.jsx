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
    { icon: Users, value: "50,000+", label: "Bottles Delivered Daily" },
    { icon: Award, value: "100+", label: "Retail & Business Partners" },
    { icon: Globe, value: "3+", label: "Pack Sizes Available" },
    { icon: Heart, value: "100%", label: "Quality Focused" },
  ];

  // Why Choose Us data
  const whyChoose = [
    { icon: Leaf, title: "Premium Experience", description: "Thoughtfully designed packaging that complements today's lifestyle while reflecting the quality inside." },
    { icon: TrendingUp, title: "Consistent Quality", description: "Every bottle is produced with a focus on maintaining the same refreshing taste and dependable standards." },
    { icon: Sparkles, title: "Trusted Purity", description: "Carefully purified water that delivers confidence, freshness, and peace of mind with every sip." },
    { icon: Shield, title: "Customer First", description: "Driven by a commitment to reliability, service excellence, and long-term relationships." },
  ];

  // Core Values data
  const values = [
    { icon: Shield, title: "Quality Without Compromise", description: "We believe every bottle should deliver the same standard of purity, freshness, and reliability. Quality is not just a promise, it's the foundation of everything we do." },
    { icon: Sparkles, title: "Trust in Every Drop", description: "From purification to packaging, every step is guided by transparency, consistency, and a commitment to earning consumer confidence every day." },
    { icon: Users, title: "Customer-Centric Approach", description: "Neysa serving individuals, retailers, hospitality partners, or businesses, we focus on understanding needs and delivering an experience that exceeds expectations." },
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
       {/* <img
          src="/about/Aboutsus.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover "
        /> */}
 
    <main className="bg-white overflow-hidden sm:my-20 my-16">
     
      {/* ========== HERO SECTION ========== */}
  <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/about/Aboutsus.png"
      alt="About Wather"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Content */}
  {/* <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
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
  </div> */}
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
              <p className="mt-3 text-gray-600 leading-relaxed text-justify">
               To make premium-quality packaged drinking water accessible to everyone by delivering trusted purity, consistent standards, and a refreshing experience in every bottle. We are committed to combining modern manufacturing practices, dependable quality control, and customer-focused service to keep individuals, businesses, and communities confidently hydrated every day.
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
              <p className="mt-3 text-gray-600 leading-relaxed text-justify">
                To become one of India's most trusted premium water brands by setting new benchmarks in quality, reliability, and consumer experience. We envision a future where every bottle of Neysa represents confidence, freshness, and a commitment to better hydration for modern lifestyles.
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
                src="/about/ourjourney.jpeg"
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
              {/* <Clock className="h-10 w-10 text-[#304869]" /> */}
              <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                Neysa Premium Water began with a clear purpose: to redefine everyday hydration through quality, trust, and accessibility.Recognizing the growing demand for drinking water that delivers both dependable standards and a premium experience, we set out to create a brand that consumers could confidently choose every day. From the beginning, our focus has been on combining advanced purification, modern packaging, and consistent quality in every bottle.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Today, Neysa serves homes, businesses, retailers, hospitality establishments, and events with the same commitment that inspired our journey. Every bottle reflects our dedication to purity, reliability, and customer satisfaction.
              </p>
              <div className="flex items-center gap-2 pt-2 text-[#304869]">
                <Heart className="h-5 w-5 fill-sky-100" />
                <span className="font-semibold"> Built on Quality, Driven by Trust</span>
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
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Neysa</h2>
            <div className="mx-auto mt-2 h-0.5 w-16 rounded-full bg-[#304869]" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Crafted for Quality. Trusted for Consistency.
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
                <p className="text-gray-600 mt-2 text-justify">{value.description}</p>
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
            <h3 className="text-2xl md:text-3xl font-bold text-black">Stay Refreshed with Neysa</h3>
            <p className="text-gray-600 mt-2 max-w-lg mx-auto text-justify">
                Experience premium-quality packaged drinking water crafted for modern lifestyles. Whether you're a retailer, distributor, business, or individual consumer, we're here to deliver trusted hydration you can rely on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#304869] px-8 py-3 text-white font-semibold shadow-md hover:shadow-lg hover:scale-100 transition-all">
                Get in Touch
                <ChevronRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-gray-700 font-semibold shadow-sm hover:shadow-md hover:bg-gray-50 transition-all">
               Contact Our Team
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
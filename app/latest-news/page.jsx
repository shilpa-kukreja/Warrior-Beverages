"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  TrendingUp,
  Leaf,
  Recycle,
  Droplets,
  Users,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const newsArticles = [
  {
    id: 1,
    title: "Wather Launches 100% Ocean-Bound Plastic Bottle",
    excerpt:
      "Our new EcoCollect series turns ocean waste into premium branded bottles, reducing marine plastic by 2 million kg annually.",
    date: "May 28, 2025",
    category: "Sustainability",
    image:
      "/news/2.webp",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: 2,
    title: "How Hydration Branding Boosts Employee Wellness",
    excerpt:
      "Latest study shows companies using custom water bottles see 34% higher engagement in wellness programs.",
    date: "May 22, 2025",
    category: "Insights",
    image:
      "/news/3.webp",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Wather Partners with Global Climate Summit 2025",
    excerpt:
      "Providing 50,000 reusable bottles to delegates, eliminating single-use plastic at the world's largest climate event.",
    date: "May 18, 2025",
    category: "Partnership",
    image:
      "/news/4.webp",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    title: "New Customization Tech: Full-Color Wrap Printing",
    excerpt:
      "Revolutionary 360° printing allows unlimited color designs with zero waste – perfect for complex brand identities.",
    date: "May 10, 2025",
    category: "Innovation",
    image:
      "/news/6.webp",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Case Study: How a Startup Gained 10k Instagram Followers",
    excerpt:
      "One branded bottle campaign generated over 5,000 user-generated posts and a 240% ROI for a fitness brand.",
    date: "May 5, 2025",
    category: "Success Stories",
    image:
      "/news/marketing-case-study.webp",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Wather Receives B Corp Certification",
    excerpt:
      "Recognized for meeting highest standards of social and environmental performance, transparency, and accountability.",
    date: "April 28, 2025",
    category: "Company News",
    image:
      "/news/2.webp",
    readTime: "2 min read",
    featured: false,
  },
];

const categories = ["All", "Sustainability", "Insights", "Innovation", "Partnership", "Success Stories"];

// Animation variants
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

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -8, transition: { duration: 0.2, type: "tween" } },
};

export default function LatestNewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredArticles =
    activeCategory === "All"
      ? newsArticles
      : newsArticles.filter((a) => a.category === activeCategory);

  const featuredArticle = filteredArticles.find((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured);

  if (!mounted) return null;

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden  py-20 md:py-28">
        <div className="absolute inset-0 bg-[#861981]  bg-cover bg-center " />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent" /> */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* <span className="inline-block rounded-full  px-3 py-1 text-xs font-semibold uppercase tracking-wider ">
              Wather Newsroom
            </span> */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">
              Latest <span className="text-gray-900">News</span> & Insights
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Stay updated with the latest trends in sustainable branding,
              hydration innovation, and Wather company announcements.
            </p>
          </motion.div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" /> */}
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Category Pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#861981] text-white shadow-md"
                  : "bg-white text-gray-700 shadow-sm hover:bg-[#861981]/10 hover:text-[#861981]/80 hover:shadow-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="group relative mb-16 overflow-hidden border border-gray-200 rounded-xl bg-white shadow-xl transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-[400px]">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="p-8 md:p-12">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#861981]/10 px-3 py-1 text-[#861981]">
                    <TrendingUp className="h-3 w-3" />
                    Featured
                  </span>
                  <span className="inline-flex items-center gap-1 text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {featuredArticle.date}
                  </span>
                  <span className="text-gray-500">{featuredArticle.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <Link
                  href={`/news/${featuredArticle.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-medium text-[#861981] transition-all hover:gap-3 hover:text-[#861981]/80"
                >
                  Read full story <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* News Grid */}
        {regularArticles.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {regularArticles.map((article) => (
              <motion.article
                key={article.id}
                variants={fadeUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group flex flex-col overflow-hidden border border-gray-200 rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-gray-800 backdrop-blur-sm">
                    {article.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                    <span className="mx-1">•</span>
                    {article.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-[#861981]">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-gray-600 line-clamp-3">{article.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link
                      href={`/news/${article.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#861981] transition-all hover:gap-2"
                    >
                      Read more <ArrowRight className="h-3 w-3" />
                    </Link>
                    {/* <button className="text-gray-400 transition-colors hover:text-[#861981]">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <div className="py-20 text-center text-gray-500">
            No articles found in this category.
          </div>
        )}

     
      </div>
    </main>
    <Footer />
      </>
  );
}
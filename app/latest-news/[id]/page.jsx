"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Link as LinkIcon,
  Heart,
  MessageCircle,
  Bookmark,
  ChevronRight,
  Tag,
  Share2,
  Eye,
  ThumbsUp,
  List,
  X,
} from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { newsArticles, getRelatedArticles } from "@/app/data/newsData";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export default function NewsDetailPage() {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showToc, setShowToc] = useState(false);
  const [headings, setHeadings] = useState([]);
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const id = params?.id;
    if (id) {
      const found = newsArticles.find((a) => a.id === parseInt(id));
      if (found) {
        setArticle(found);
        setRelatedArticles(getRelatedArticles(id, 4));
      } else {
        notFound();
      }
    }
  }, [params?.id]);

  // Extract headings from article content
  useEffect(() => {
    if (article && contentRef.current) {
      const elements = contentRef.current.querySelectorAll("h2, h3");
      const tocHeadings = Array.from(elements).map((el) => ({
        text: el.textContent,
        level: el.tagName.toLowerCase(),
        id: el.id || el.textContent.toLowerCase().replace(/\s+/g, "-"),
      }));
      setHeadings(tocHeadings);
    }
  }, [article]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = async (platform) => {
    let shareLink = "";
    const text = `Check out this article: ${article?.title}`;
    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(article?.title)}`;
        break;
      case "copy":
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      default:
        return;
    }
    window.open(shareLink, "_blank", "width=600,height=400");
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#861981] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Reading Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#861981] z-50 origin-left"
          style={{ scaleX: progressBar }}
        />

        {/* Back Button (sticky on mobile) */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 md:hidden">
          <div className="px-4 py-3">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#861981]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all news
            </Link>
          </div>
        </div>

        {/* Hero: Featured Image + Title + Meta (clean layout) */}
        <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-24">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-xl mb-8"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 568px) 100vw, 1000px"
            />
            {/* Category badge overlay */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#861981] px-3 py-1 text-xs font-semibold text-white shadow-md">
                {article.category}
              </span>
            </div>
          </motion.div>

          {/* Title & Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
              {article.author && (
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {article.author.name}
                </div>
              )}
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                1.2k views
              </div>
            </div>
          </motion.div>

          {/* Mobile Table of Contents Toggle */}
          {headings.length > 0 && (
            <div className="md:hidden mt-6">
              <button
                onClick={() => setShowToc(!showToc)}
                className="flex items-center gap-2 text-sm text-[#861981] bg-[#861981]/10 px-4 py-2 rounded-full"
              >
                <List className="h-4 w-4" />
                Table of Contents
                {showToc ? <X className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
              {showToc && (
                <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <nav className="space-y-2">
                    {headings.map((heading, idx) => (
                      <a
                        key={idx}
                        href={`#${heading.id}`}
                        className={`block text-sm ${
                          heading.level === "h2"
                            ? "font-semibold text-gray-800"
                            : "ml-4 text-gray-600"
                        } hover:text-[#861981] transition`}
                        onClick={() => setShowToc(false)}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          )}

          {/* Content Grid: Main + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Author Bio */}
              {article.author && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#861981] to-[#5a0f56] flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {article.author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{article.author.name}</p>
                    <p className="text-sm text-gray-500">{article.author.title || "Contributor"}</p>
                    <div className="flex gap-2 mt-1">
                      <a href="#" className="text-gray-400 hover:text-[#1877f2]">
                        <FaFacebookF className="h-3 w-3" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-sky-500">
                        <FaTwitter className="h-3 w-3" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-700">
                        <FaLinkedinIn className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Article Body */}
              <div
                ref={contentRef}
                className="prose prose-lg prose-slate max-w-none
                  prose-headings:scroll-mt-20
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-[#861981] prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900
                  prose-ul:list-disc prose-ul:pl-6
                  prose-li:text-gray-700
                  prose-blockquote:border-l-4 prose-blockquote:border-[#861981] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                  prose-img:rounded-xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: article.fullContent }}
              />

              {/* Share & Engagement */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-600">Share this article:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#1877f2] hover:text-white transition-all"
                      aria-label="Share on Facebook"
                    >
                      <FaFacebookF className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-sky-500 hover:text-white transition-all"
                      aria-label="Share on Twitter"
                    >
                      <FaTwitter className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-700 hover:text-white transition-all"
                      aria-label="Share on LinkedIn"
                    >
                      <FaLinkedinIn className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-300 transition-all relative"
                      aria-label="Copy link"
                    >
                      {copied && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                          Copied!
                        </span>
                      )}
                      <LinkIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
              </div>

             
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
             

              {/* Related Articles (Horizontal carousel on mobile, grid on desktop) */}
              {relatedArticles.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                    <Tag className="h-5 w-5 text-[#861981]" />
                    You Might Also Like
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.id}
                        href={`/news/${related.id}`}
                        className="group flex gap-3 transition-all hover:translate-x-1"
                      >
                        <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#861981] transition line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{related.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

             
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
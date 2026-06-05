"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Search,
  ChevronDown,
  Droplets,
  Package,
  Truck,
  CreditCard,
  RefreshCw,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqCategories = [
  { id: "all", name: "All Questions", icon: HelpCircle },
  { id: "ordering", name: "Ordering", icon: Package },
  { id: "shipping", name: "Shipping & Delivery", icon: Truck },
  { id: "payment", name: "Payment", icon: CreditCard },
  { id: "returns", name: "Returns & Warranty", icon: RefreshCw },
  { id: "sustainability", name: "Sustainability", icon: Droplets },
];

const faqs = [
  {
    id: 1,
    question: "What is the minimum order quantity for custom bottles?",
    answer:
      "Our minimum order quantity is 100 bottles. However, we offer special pricing and sample programs for smaller quantities. Contact our sales team for custom orders.",
    category: "ordering",
  },
  {
    id: 2,
    question: "How long does it take to produce and ship my order?",
    answer:
      "Standard production takes 10-14 business days after artwork approval. Shipping adds 3-7 business days depending on your location. Expedited options are available.",
    category: "shipping",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, bank transfers, and wire payments. For large orders, we offer net-30 terms to qualified businesses.",
    category: "payment",
  },
  {
    id: 4,
    question: "Can I get a sample bottle before placing a bulk order?",
    answer:
      "Yes! We offer sample bottles with your custom branding for a small fee. The sample fee is fully refundable when you place a bulk order of 500+ units.",
    category: "ordering",
  },
  {
    id: 5,
    question: "What is your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you're not happy with your bottles, contact us for a replacement or refund. Custom-printed items must be unused and in original packaging.",
    category: "returns",
  },
  {
    id: 6,
    question: "Are your bottles eco-friendly and BPA-free?",
    answer:
      "Absolutely. All Wather bottles are made from 100% food-grade, BPA-free stainless steel or recycled ocean-bound plastic. We are a certified B Corp and carbon-neutral company.",
    category: "sustainability",
  },
  {
    id: 7,
    question: "Can I track my order?",
    answer:
      "Yes. Once your order ships, you'll receive a tracking number via email. You can also log into your account to view real-time shipping status.",
    category: "shipping",
  },
  {
    id: 8,
    question: "Do you offer design assistance?",
    answer:
      "Our in-house design team is ready to help! We provide free mockups and artwork optimization to ensure your branding looks perfect on the bottles.",
    category: "ordering",
  },
  {
    id: 9,
    question: "What is your warranty on bottles?",
    answer:
      "All bottles come with a 2-year warranty against manufacturing defects. We'll replace any faulty bottle at no cost.",
    category: "returns",
  },
  {
    id: 10,
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 50 countries worldwide. Shipping rates and delivery times vary by destination. Duties and taxes may apply.",
    category: "shipping",
  },
  {
    id: 11,
    question: "Can I customize the bottle shape and color?",
    answer:
      "Yes. We offer a wide range of bottle shapes (sport, slim, wide-mouth) and over 20 colors. Full-color wrap printing is also available for complex designs.",
    category: "sustainability",
  },
  {
    id: 12,
    question: "How do I care for my Wather bottle?",
    answer:
      "Hand wash with mild soap and warm water. Do not microwave. The bottle is dishwasher-safe (top rack only) but hand washing preserves the print quality longer.",
    category: "sustainability",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqs, setOpenFaqs] = useState(new Set());

  const toggleFaq = (id) => {
    const newOpen = new Set(openFaqs);
    if (newOpen.has(id)) {
      newOpen.delete(id);
    } else {
      newOpen.add(id);
    }
    setOpenFaqs(newOpen);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#861981] py-20 md:py-28">
        {/* <div className="absolute inset-0 bg-[url('/news/about.webp')] bg-cover bg-center opacity-20 mix-blend-overlay" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent" /> */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              Got Questions?
            </span> */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">
              Frequently Asked <span className="text-gray-900">Questions</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Everything you need to know about ordering, shipping, sustainability, and more.
            </p>
          </motion.div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" /> */}
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        {/* Search Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-10"
        >
          <div className="relative mx-auto max-w-md">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-gray-900 shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-[#861981]/50 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Category Pills */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {faqCategories.map((cat) => (
            <motion.button
              key={cat.id}
              variants={fadeUp}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#861981] text-white shadow-md"
                  : "bg-white text-gray-700 shadow-sm hover:bg-[#861981]/10 hover:text-[#861981]/80"
              }`}
            >
              <cat.icon className="h-4 w-4" />
              {cat.name}
            </motion.button>
          ))}
        </motion.div> */}

        {/* FAQ Accordion */}
        {filteredFaqs.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {filteredFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                variants={fadeUp}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-[#861981] transition-transform duration-300 ${
                      openFaqs.has(faq.id) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaqs.has(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-t border-gray-100 px-6 pb-6"
                    >
                      <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="py-20 text-center"
          >
            <HelpCircle className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">No results found</h3>
            <p className="mt-2 text-gray-500">
              Try a different search term or browse all categories.
            </p>
          </motion.div>
        )}

        
       
      </div>
    </main>
    <Footer />
    </>
  );
}
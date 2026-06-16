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
    question: "What is Neysa Premium Water?",
    answer:
      "Neysa Premium Water is a premium packaged drinking water brand committed to delivering purity, consistency, and refreshment through advanced purification processes and high-quality packaging.",
    category: "ordering",
  },
  {
    id: 2,
    question: " How is Neysa Premium Water purified?",
    answer:
      "Our water undergoes a multi-stage purification process that may include filtration, Reverse Osmosis (RO), UV treatment, and other quality-control procedures to ensure a clean and refreshing drinking experience.",
    category: "shipping",
  },
  {
    id: 3,
    question: " Is Neysa suitable for everyday consumption?",
    answer:
      "Yes. Neysa Premium Water is designed for daily hydration and is suitable for home, office, travel, hospitality, and event consumption.",
    category: "payment",
  },
  {
    id: 4,
    question: "What bottle sizes are available?",
    answer:
      "Neysa Premium Water is available in multiple pack sizes, including 250ml, 500ml, and 1L bottles, catering to different hydration needs and occasions.",
    category: "ordering",
  },
  {
    id: 5,
    question: "Where can I buy Neysa Premium Water?",
    answer:
      "Neysa Premium Water is available through authorized retailers, distributors, supermarkets, convenience stores, hospitality partners, and selected business channels.",
    category: "returns",
  },
  {
    id: 6,
    question: "Does Neysa supply water for offices and businesses?",
    answer:
      "Yes. We provide packaged drinking water solutions for corporate offices, institutions, retail chains, hospitality businesses, and various commercial establishments.",
    category: "sustainability",
  },
  {
    id: 7,
    question: "Can Neysa provide water for events and gatherings?",
    answer:
      "Absolutely. We offer reliable supply solutions for conferences, weddings, exhibitions, corporate events, social gatherings, and other large-scale occasions.",
    category: "shipping",
  },
  {
    id: 8,
    question: "What makes Neysa different from other bottled water brands?",
    answer:
      "Neysa combines dependable quality, modern packaging, consistent standards, and everyday affordability to deliver a premium hydration experience without a premium price tag.",
    category: "ordering",
  },
  {
    id: 9,
    question: "How does Neysa maintain product quality?",
    answer:
      "We follow strict quality-control measures throughout purification, packaging, storage, and distribution to ensure consistency and reliability in every bottle.",
    category: "returns",
  },
  {
    id: 10,
    question: "Does Neysa offer distributorship opportunities?",
    answer:
      "Yes. We welcome distribution partners who are interested in growing with a trusted premium packaged drinking water brand. Please contact our team for partnership details.",
    category: "shipping",
  },
  {
    id: 11,
    question: "How can retailers partner with Neysa?",
    answer:
      "Retailers interested in stocking Neysa Premium Water can connect with our sales team to discuss product availability, supply requirements, and partnership opportunities.",
    category: "sustainability",
  },
  {
    id: 12,
    question: "How can I contact Neysa Premium Water?",
    answer:
      "You can reach our team through the Contact Us page, phone number, email address, or enquiry form available on our website. We are always happy to assist with product, partnership, and business-related queries.",
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
      <section className="relative overflow-hidden bg-[#304869] py-20 md:py-28">
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
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-gray-900 shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-[#304869]/50 transition-all duration-300"
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
                    className={`h-5 w-5 flex-shrink-0 text-[#304869] transition-transform duration-300 ${
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
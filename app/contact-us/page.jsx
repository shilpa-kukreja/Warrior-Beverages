"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  XCircle,
  Droplets,
} from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success, error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const res = await fetch("/api/contact-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact-page",
          ...formData,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 4000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 4000);
      }
    } catch (error) {
      console.error("Form submit error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#304869] py-20 md:py-28">
          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">
                Let's <span className="text-gray-900">Create</span> Together
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Have a project in mind? We'd love to hear from you. Our team is ready to bring your branding vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column: Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-xl md:p-10"
            >
              <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
              <p className="mt-2 text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-[#304869] focus:outline-none focus:ring-2 focus:ring-[#304869]/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-[#304869]/50 focus:outline-none focus:ring-2 focus:ring-[#304869]/20"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-[#304869]/50 focus:outline-none focus:ring-2 focus:ring-[#304869]/20"
                    placeholder="Your brand"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-[#304869]/50 focus:outline-none focus:ring-2 focus:ring-[#304869]/20"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#304869] to-[#304869] px-6 py-3 font-semibold text-white transition-all hover:from-[#304869] hover:to-[#304869] disabled:opacity-70"
                >
                  {formStatus === "sending" && (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  )}
                  {formStatus === "success" && <CheckCircle className="h-5 w-5" />}
                  {formStatus === "error" && <XCircle className="h-5 w-5" />}
                  {formStatus === "idle" && <Send className="h-5 w-5" />}
                  {formStatus === "sending" && "Sending..."}
                  {formStatus === "success" && "Sent!"}
                  {formStatus === "error" && "Error!"}
                  {formStatus === "idle" && "Send Message"}
                </button>

                {formStatus === "success" && (
                  <p className="text-center text-sm text-green-600">
                    ✓ Message sent! We'll reply shortly.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-center text-sm text-red-600">
                    ❌ Failed to send. Please try again or call us.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Right Column: Contact Info & Social */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeUp} className="rounded-xl border border-gray-200 bg-white p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900">Visit us</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-[#304869] mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Headquarters</p>
                      <p className="text-gray-600">
                        123 Water Avenue, Eco-City,<br />
                        California, CA 90210, USA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-[#304869] mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm PST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-[#304869] mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">hello@wather.com</p>
                      <p className="text-gray-600">support@wather.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-[#304869] mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Monday – Friday: 9:00 AM – 6:00 PM</p>
                      <p className="text-gray-600">Saturday – Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-xl border border-gray-200 bg-white p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900">Connect with us</h3>
                <p className="mt-1 text-gray-600">Follow us for updates, tips, and inspiration.</p>
                <div className="mt-6 flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-100 p-3 text-gray-600 transition-all hover:bg-[#304869] hover:text-white"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-100 p-3 text-gray-600 transition-all hover:bg-[#304869] hover:text-white"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-100 p-3 text-gray-600 transition-all hover:bg-[#304869] hover:text-white"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-100 p-3 text-gray-600 transition-all hover:bg-[#304869] hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Google Map */}
          <div className="mt-12 grid grid-cols-1 gap-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="overflow-hidden rounded-xl shadow-xl">
                <div className="relative h-80 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.893396943399!2d-118.2460523!3d34.0546227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full"
                    title="Wather Office Location"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
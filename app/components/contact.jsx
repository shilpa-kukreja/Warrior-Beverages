"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-100px",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "homepage", // tells the API which form
          ...formData,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          state: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to send. Please try again or call us.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-10 lg:py-12"
    >
      <div className="mx-auto max-w-[1800px] px-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-[#304869] md:text-5xl">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid items-stretch overflow-hidden lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center bg-white"
          >
            <img
              src="/home/homeabout.png"
              alt="AQTIVE Water"
              className="sm:h-[700px] h-[500px] w-full "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="bg-[#304869] p-6 shadow-[#304869] md:p-10 lg:p-10"
          >
            <h3 className="mb-5 text-3xl font-bold text-white md:text-4xl">
              Get In Touch
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-[#304869] bg-white px-5 py-4 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#304869]/20"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-[#304869] bg-white px-5 py-4 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#304869]/20"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-[#304869] bg-white px-5 py-4 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#304869]/20"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="border border-[#304869] bg-white px-5 py-4 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#304869]/20"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    className="border border-[#304869] bg-white px-5 py-4 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#304869]/20"
                  />
                </div>

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border border-[#304869] bg-white px-5 py-4 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#304869]/20"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#18BDCD] px-14 py-4 text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-[#18BDCD] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : submitted ? "Submitted ✓" : "Submit"}
                </button>

                {submitted && (
                  <p className="font-medium text-green-600">
                    Thank you! We'll contact you shortly.
                  </p>
                )}
                {error && <p className="font-medium text-red-600">{error}</p>}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
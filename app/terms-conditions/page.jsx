"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function TermsConditions() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Terms & Conditions</h1>
            <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="mt-8 space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">1. Acceptance of Terms</h2>
                <p className="mt-2 leading-relaxed">
                  By accessing or using the Warrior Beverages website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">2. Products & Pricing</h2>
                <p className="mt-2 leading-relaxed">
                  We offer premium spring water and custom‑branded bottles. All product descriptions, prices, and availability are subject to change without notice. We reserve the right to correct any errors or inaccuracies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">3. Orders & Payments</h2>
                <p className="mt-2 leading-relaxed">
                  When you place an order, you agree to provide accurate and complete information. We may refuse or cancel any order at our discretion. Payment terms are as specified on your invoice or quote. All payments must be made in full before dispatch unless otherwise agreed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">4. Custom Branding & Intellectual Property</h2>
                <p className="mt-2 leading-relaxed">
                  You retain ownership of any logos or designs you provide for custom branding. By submitting artwork, you grant us the right to reproduce it on our products solely for your order. You warrant that you have the necessary rights to use and reproduce the artwork.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">5. Shipping & Delivery</h2>
                <p className="mt-2 leading-relaxed">
                  Delivery times are estimates and not guaranteed. We are not liable for delays caused by carriers, weather, or other circumstances beyond our control. Risk of loss passes to you upon delivery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">6. Returns & Refunds</h2>
                <p className="mt-2 leading-relaxed">
                  Due to the nature of our products (beverages and custom‑branded items), we do not accept returns unless the product is defective or damaged. Refunds for defective items will be processed within 14 days of return approval.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">7. Limitation of Liability</h2>
                <p className="mt-2 leading-relaxed">
                  To the maximum extent permitted by law, Warrior Beverages shall not be liable for any indirect, incidental, or consequential damages arising from your use of our products or website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">8. Governing Law</h2>
                <p className="mt-2 leading-relaxed">
                  These Terms & Conditions are governed by the laws of India. Any disputes shall be resolved in the courts of [Your City, State].
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">9. Changes to Terms</h2>
                <p className="mt-2 leading-relaxed">
                  We may update these Terms from time to time. Continued use of the website after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">10. Contact Information</h2>
                <p className="mt-2 leading-relaxed">
                  For any questions regarding these Terms, please contact us at:<br />
                  Email: <a href="mailto:legal@warriorbev.com" className="text-[#304869] underline">legal@warriorbev.com</a><br />
                  Phone: +91 75288 75288
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
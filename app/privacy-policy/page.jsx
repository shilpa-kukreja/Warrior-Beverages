"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Privacy Policy</h1>
            <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="mt-8 space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">1. Introduction</h2>
                <p className="mt-2 leading-relaxed">
                  Welcome to Warrior Beverages ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">2. Information We Collect</h2>
                <p className="mt-2 leading-relaxed">We may collect the following types of information:</p>
                <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                  <li>Personal identification information (name, email address, phone number, company name)</li>
                  <li>Business information (order preferences, custom branding requirements)</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">3. How We Use Your Information</h2>
                <p className="mt-2 leading-relaxed">We use the information we collect to:</p>
                <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                  <li>Process and fulfill your orders for premium spring water and branded bottles</li>
                  <li>Respond to your inquiries, quote requests, and customer service needs</li>
                  <li>Improve our website, products, and marketing efforts</li>
                  <li>Send you promotional offers (you may opt out at any time)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">4. Sharing Your Information</h2>
                <p className="mt-2 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website or fulfilling orders (e.g., delivery partners, email services), under strict confidentiality agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">5. Data Security</h2>
                <p className="mt-2 leading-relaxed">
                  We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">6. Your Rights</h2>
                <p className="mt-2 leading-relaxed">
                  You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:privacy@warriorbev.com" className="text-[#304869] underline">privacy@warriorbev.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">7. Cookies</h2>
                <p className="mt-2 leading-relaxed">
                  Our website uses cookies to enhance user experience. You can set your browser to refuse cookies, but some features may not function properly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">8. Changes to This Policy</h2>
                <p className="mt-2 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">9. Contact Us</h2>
                <p className="mt-2 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:<br />
                  Email: <a href="mailto:support@warriorbev.com" className="text-[#304869] underline">support@warriorbev.com</a><br />
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
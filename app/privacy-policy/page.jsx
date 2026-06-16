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
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Last Updated: June 2026
            </p>

            <div className="mt-8 space-y-6 text-gray-700">

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Privacy Policy for Neysa Premium Water
                </h2>
                <p className="mt-2 leading-relaxed">
                  At Neysa Premium Water, we value your privacy and are committed
                  to protecting the personal information you share with us. This
                  Privacy Policy explains how we collect, use, store, and
                  safeguard your information when you visit our website, submit
                  an enquiry, or interact with our services. By using our
                  website, you agree to the terms outlined in this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Information We Collect
                </h2>
                <p className="mt-2 leading-relaxed">
                  We may collect information that you voluntarily provide, including:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Company Name</li>
                  <li>Business Information</li>
                  <li>Enquiry Details</li>
                  <li>Contact form or partnership request data</li>
                </ul>
                <p className="mt-3 leading-relaxed">
                  We may also collect non-personal information such as IP address,
                  browser type, device information, website usage data, cookies,
                  and analytics data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  How We Use Your Information
                </h2>
                <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                  <li>Respond to enquiries and requests</li>
                  <li>Provide product and service information</li>
                  <li>Process distributorship and partnership applications</li>
                  <li>Improve website and user experience</li>
                  <li>Send important updates and communications</li>
                  <li>Maintain website security and functionality</li>
                  <li>Comply with legal requirements</li>
                </ul>
                <p className="mt-3 leading-relaxed">
                  We use your information only for legitimate business purposes
                  and do not sell personal data to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Cookies and Tracking Technologies
                </h2>
                <p className="mt-2 leading-relaxed">
                  Our website uses cookies to enhance user experience and analyze
                  performance. Cookies help us understand visitor behavior,
                  improve functionality, personalize experience, and measure traffic.
                  You may disable cookies in your browser settings, but some features
                  may not function properly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Information Sharing
                </h2>
                <p className="mt-2 leading-relaxed">
                  Neysa Premium Water does not sell, rent, or trade personal information.
                  We may share data only with authorized service providers, technology
                  partners, legal authorities when required, or business partners
                  involved in fulfilling customer requests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Data Security
                </h2>
                <p className="mt-2 leading-relaxed">
                  We implement reasonable security measures to protect your data.
                  However, no online system is 100% secure, and users share information
                  at their own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Third-Party Links
                </h2>
                <p className="mt-2 leading-relaxed">
                  Our website may contain links to external websites. We are not
                  responsible for their privacy practices and encourage users to
                  review their policies separately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Your Rights
                </h2>
                <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                  <li>Access your personal data</li>
                  <li>Request correction of information</li>
                  <li>Request deletion of data</li>
                  <li>Withdraw consent</li>
                  <li>Object to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Children's Privacy
                </h2>
                <p className="mt-2 leading-relaxed">
                  Our services are not intended for children under 18, and we do
                  not knowingly collect data from minors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Changes to This Privacy Policy
                </h2>
                <p className="mt-2 leading-relaxed">
                  We may update this policy at any time. Changes will be posted
                  on this page with a revised date. Continued use of the website
                  indicates acceptance of changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Contact Us
                </h2>
                <p className="mt-2 leading-relaxed">
                  Neysa Premium Water<br />
                  Email: info@neysapremiumwater.com<br />
                  Phone: +91 XXXXX XXXXX<br />
                  Website: www.neysapremiumwater.com
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
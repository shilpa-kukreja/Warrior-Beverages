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
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Terms & Conditions
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Last Updated: June 2026
            </p>

            <div className="mt-8 space-y-6 text-gray-700">

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Terms and Conditions for Neysa Premium Water
                </h2>
                <p className="mt-2 leading-relaxed">
                  Welcome to Neysa Premium Water. These Terms and Conditions govern
                  your use of our website and services. By accessing or using this
                  website, you agree to comply with and be bound by these terms. If
                  you do not agree, please refrain from using our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Acceptance of Terms
                </h2>
                <p className="mt-2 leading-relaxed">
                  By accessing this website, you acknowledge that you have read,
                  understood, and agreed to be bound by these Terms and Conditions,
                  our Privacy Policy, and applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  About Neysa Premium Water
                </h2>
                <p className="mt-2 leading-relaxed">
                  Neysa Premium Water is engaged in the manufacturing, marketing,
                  distribution, and supply of packaged drinking water products.
                  The information provided on this website is for general informational
                  and business purposes only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Use of Website
                </h2>
                <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon rights of others</li>
                  <li>Disrupt website functionality</li>
                  <li>Attempt unauthorized system access</li>
                  <li>Transmit harmful software or malicious code</li>
                </ul>
                <p className="mt-3 leading-relaxed">
                  We reserve the right to restrict access to users who violate these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Product Information
                </h2>
                <p className="mt-2 leading-relaxed">
                  We aim to ensure product details are accurate and updated.
                  However, we do not guarantee that all content is error-free.
                  Product availability, packaging, and specifications may change
                  without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Distributor & Business Enquiries
                </h2>
                <p className="mt-2 leading-relaxed">
                  Submitting distributorship or partnership enquiries does not
                  create a binding agreement. All applications are subject to
                  internal review, business evaluation, and approval by Neysa
                  Premium Water.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Intellectual Property Rights
                </h2>
                <p className="mt-2 leading-relaxed">
                  All website content including text, logos, graphics, product images,
                  design elements, and brand assets are the property of Neysa Premium Water.
                  No content may be copied or used without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Third-Party Links
                </h2>
                <p className="mt-2 leading-relaxed">
                  Our website may contain links to external websites. We are not
                  responsible for their content, policies, or any damages arising
                  from their use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Limitation of Liability
                </h2>
                <p className="mt-2 leading-relaxed">
                  We are not liable for website interruptions, technical issues,
                  data loss, inaccuracies, delays, or indirect damages arising
                  from the use of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  User Submissions
                </h2>
                <p className="mt-2 leading-relaxed">
                  By submitting enquiries or feedback, you confirm that the
                  information is accurate, lawful, and does not violate any rights.
                  We may remove or ignore inappropriate submissions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Privacy
                </h2>
                <p className="mt-2 leading-relaxed">
                  Your use of this website is also governed by our Privacy Policy,
                  which explains how we collect and use your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Changes to Terms
                </h2>
                <p className="mt-2 leading-relaxed">
                  We may update these Terms at any time without prior notice.
                  Continued use of the website means acceptance of updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Governing Law
                </h2>
                <p className="mt-2 leading-relaxed">
                  These Terms are governed by the laws of India. Any disputes
                  shall fall under the jurisdiction of competent courts in India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#304869]">
                  Contact Information
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
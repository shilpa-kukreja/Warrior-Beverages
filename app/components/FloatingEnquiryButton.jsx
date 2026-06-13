"use client";

import { useState, useEffect } from "react";
import { HelpCircle } from "lucide-react";
import QuoteModal from "./QuoteModal";  // reuse the same modal

export default function FloatingEnquiryButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className={`fixed right-4 top-1/2 z-50 -translate-y-1/2 transition-all duration-500 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <button
          onClick={openModal}
          className="group relative flex items-center justify-center rounded-full bg-gradient-to-r from-[#304869] to-[#304869] p-4 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#304869]/50"
          aria-label="Enquiry Now"
        >
          <HelpCircle className="h-6 w-6 text-white" />
          <span className="absolute right-full mr-2 hidden whitespace-nowrap rounded-lg bg-gray-800 px-3 py-1.5 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100 md:block">
            Enquiry Now
          </span>
          {/* Pulsing ring animation */}
          <span className="absolute inset-0 animate-ping rounded-full bg-[#304869]/50 opacity-75"></span>
        </button>
      </div>
      <QuoteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        productName={null}      // no product prefill
        productVolume={null}
      />
    </>
  );
}
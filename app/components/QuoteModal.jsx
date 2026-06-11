// "use client";

// import { useState } from "react";
// import { createPortal } from "react-dom";

// const CloseIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//   </svg>
// );

// export default function QuoteModal({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState(null); // 'success', 'error'

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setStatus(null);

//     try {
//       const res = await fetch("/api/send-quote", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (data.success) {
//         setStatus("success");
//         setFormData({ name: "", email: "", phone: "", message: "" });
//         setTimeout(() => onClose(), 2000);
//       } else {
//         setStatus("error");
//       }
//     } catch (error) {
//       setStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!isOpen) return null;

//   return createPortal(
//     <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
//       {/* Modal */}
//       <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
//         <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
//           <h3 className="text-xl font-bold text-gray-800">Request a Quote</h3>
//           <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
//             <CloseIcon />
//           </button>
//         </div>
//         <form onSubmit={handleSubmit} className="p-6 space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#861981] focus:border-transparent outline-none"
//               placeholder="John Doe"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#861981] focus:border-transparent outline-none"
//               placeholder="john@example.com"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#861981] focus:border-transparent outline-none"
//               placeholder="+91 98765 43210"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements *</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows="4"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#861981] focus:border-transparent outline-none resize-none"
//               placeholder="Tell us about your water bottle needs..."
//             />
//           </div>

//           {status === "success" && (
//             <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm">
//               ✅ Quote request sent successfully! We'll get back to you soon.
//             </div>
//           )}
//           {status === "error" && (
//             <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
//               ❌ Failed to send. Please try again or call us directly.
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-[#861981] text-white font-semibold py-3 rounded-lg hover:bg-[#6e1569] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//           >
//             {isSubmitting ? (
//               <>
//                 <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
//                 </svg>
//                 Sending...
//               </>
//             ) : (
//               "Send Quote Request"
//             )}
//           </button>
//         </form>
//       </div>
//     </div>,
//     document.body
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


export default function QuoteModal({ isOpen, onClose, productName, productVolume }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  // Prefill message when a product is provided (from ProductShowcase)
  useEffect(() => {
    if (productName && productVolume) {
      const prefilledMessage = `I'm interested in ${productName} (${productVolume}) for bulk order. Please share pricing and details.`;
      setFormData(prev => ({ ...prev, message: prefilledMessage }));
    } else {
      // When opened from Navbar, keep message empty
      setFormData(prev => ({ ...prev, message: "" }));
    }
  }, [productName, productVolume, isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setStatus(null);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    let finalMessage = formData.message;
    // Ensure product info is included even if user deleted prefilled text
    if (productName && productVolume && !finalMessage.includes(productName)) {
      finalMessage = `Product: ${productName} (${productVolume})\n\n${finalMessage}`;
    }

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, message: finalMessage }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setTimeout(() => onClose(), 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">
            {productName ? `Enquiry: ${productName}` : "Request a Quote"}
          </h3>
          <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
            <CloseIcon />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#861981] focus:border-transparent outline-none"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#861981] focus:border-transparent outline-none"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#861981] focus:border-transparent outline-none"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#861981] focus:border-transparent outline-none resize-none"
            />
          </div>

          {status === "success" && (
            <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm">
              ✅ Enquiry sent successfully! We'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
              ❌ Failed to send. Please try again or call us directly.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#861981] text-white font-semibold py-3 rounded-lg hover:bg-[#6e1569] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              "Send Enquiry"
            )}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
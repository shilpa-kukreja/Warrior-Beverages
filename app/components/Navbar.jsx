// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// // Simple SVG icons
// const MenuIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//   </svg>
// );

// const CloseIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//   </svg>
// );

// const PhoneIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-2.25a2.25 2.25 0 0 0-2.25-2.25h-2.25a9 9 0 0 1-9-9V2.25A2.25 2.25 0 0 0 2.25 0h-2.25a2.25 2.25 0 0 0-2.25 2.25v2.25Z" />
//   </svg>
// );

// // Navigation items – simple, no dropdowns
// const navItems = [
//   { name: "HOME", href: "/" },
//   { name: "ABOUT US", href: "/about" },
//   { name: "LATEST NEWS", href: "/latest-news" },
//   { name: "CONTACT US", href: "/contact-us" },
//   { name: "FAQ", href: "/faq" },
// ];

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const pathname = usePathname();
//   const isHomePage = pathname === "/";

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrolled]);

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//   };

//   // Prevent scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [mobileMenuOpen]);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${!isHomePage
//             ? "bg-white shadow-md"
//             : scrolled
//               ? "bg-white shadow-md"
//               : "bg-transparent backdrop-blur-sm"
//           }`}
//       >
//         <div className="max-w-7xl mx-auto px-5 md:px-8">
//           <div className="flex items-center justify-between h-20 rounded-b-3xl px-6 mt-4">
//             {/* Logo – Warrior Beverages */}
//             <div className="flex flex-col leading-none">
//               <span className="text-2xl md:text-3xl font-black tracking-tight text-gray-800 font-sans">
//                 Warrior
//                 <span className="text-[#861981]"> Beverages</span>
//               </span>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:block">
//               <ul className="flex items-center space-x-1 xl:space-x-2">
//                 {navItems.map((item, idx) => (
//                   <li key={idx}>
//                     <Link
//                       href={item.href}
//                       className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#861981] rounded-xl transition-all duration-200 hover:bg-gray-50"
//                     >
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             {/* Call to Action – Desktop with Shining Effect */}
//             <Link
//               href="/contact-us"
//               className="hidden lg:flex items-center gap-2 rounded-md bg-[#861981] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#861981]/30 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
//             >
//               <span className="relative z-10">Get Quote</span>
//               {/* Shining effect overlay */}
//               <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></span>
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-[#861981] hover:bg-blue-50 transition-colors duration-200"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Overlay */}
//         <div
//           className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-40 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//             }`}
//           onClick={closeMobileMenu}
//         />
//         <div
//           className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//         >
//           <div className="flex flex-col h-full overflow-y-auto">
//             <div className="flex items-center justify-between p-5 border-b border-gray-100">
//               <div className="flex flex-col">
//                 <span className="text-xl font-bold text-gray-800">Warrior Beverages</span>
//                 <span className="text-[10px] text-gray-400 tracking-wider">PREMIUM SPRING WATER</span>
//               </div>
//               <button
//                 onClick={closeMobileMenu}
//                 className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
//               >
//                 <CloseIcon />
//               </button>
//             </div>
//             <nav className="flex-1 py-6 px-5">
//               <ul className="space-y-4">
//                 {navItems.map((item, idx) => (
//                   <li key={idx}>
//                     <Link
//                       href={item.href}
//                       onClick={closeMobileMenu}
//                       className="block py-2 text-gray-800 font-semibold hover:text-[#861981] transition text-lg"
//                     >
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-8 pt-4 border-t border-gray-100">
//                 <div className="flex items-center gap-3 bg-[#861981]/10 rounded-xl p-4">
//                   <PhoneIcon />
//                   <div>
//                     <p className="text-xs text-gray-500 font-medium">CALL US ANYTIME</p>
//                     <a
//                       href="tel:+917528875288"
//                       onClick={closeMobileMenu}
//                       className="text-base font-bold text-[#861981]"
//                     >
//                       +91 75288 75288
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Global style to ensure all pages have white background */}
//       <style jsx global>{`
//         body {
//           background-color: white;
//         }
//         /* Optional: smooth scroll behavior */
//         html {
//           scroll-behavior: smooth;
//         }
//       `}</style>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import QuoteModal from "./QuoteModal";

// Simple SVG icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-2.25a2.25 2.25 0 0 0-2.25-2.25h-2.25a9 9 0 0 1-9-9V2.25A2.25 2.25 0 0 0 2.25 0h-2.25a2.25 2.25 0 0 0-2.25 2.25v2.25Z" />
  </svg>
);

// Navigation items
const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "LATEST NEWS", href: "/latest-news" },
  { name: "CONTACT US", href: "/contact-us" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Set mounted for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when mobile menu or modal is open
  useEffect(() => {
    if (mobileMenuOpen || isQuoteModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen, isQuoteModalOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (isQuoteModalOpen) setIsQuoteModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [mobileMenuOpen, isQuoteModalOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const openQuoteModal = () => {
    closeMobileMenu();
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  // Helper to check if link is active
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Mobile drawer component
  const MobileDrawer = () => {
    if (!mounted) return null;
    return createPortal(
      <>
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-[100] ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-[101] transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div className="flex flex-col">
                <img src="/logos/lOGO4.png" alt="Warrior Beverages Logo" className="w-8 h-8 mb-1" />
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>
            <nav className="flex-1 py-8 px-6">
              <ul className="space-y-5">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`block py-2 text-lg font-semibold transition-colors ${
                          active
                            ? "text-[#304869] border-r-4 border-[#304869] pr-4"
                            : "text-gray-700 hover:text-[#304869]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-10 pt-6 border-t border-gray-100">
                <div className="bg-gradient-to-br from-[#304869]/5 to-[#304869]/10 rounded-2xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#304869] p-3 rounded-full text-white shadow-md">
                      <PhoneIcon />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">24/7 Support</p>
                      <a
                        href="tel:+917528875288"
                        onClick={closeMobileMenu}
                        className="text-lg font-bold text-[#304869] hover:underline"
                      >
                        +91 75288 75288
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 text-sm text-gray-500">
                    <p className="flex items-center gap-1">
                      <span>📧</span> sales@warriorbev.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={openQuoteModal}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#304869] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#304869]/30 transition-all hover:scale-[1.02] active:scale-95"
                >
                  Get a Quote
                </button>
              </div>
            </nav>
          </div>
        </div>
      </>,
      document.body
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          !isHomePage
            ? "bg-white shadow-md"
            : scrolled
            ? "bg-white shadow-md"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-tight">
                <img src="/lOgos/lOGO4.png" alt="Warrior Beverages Logo" className="w-28  mb-1" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-1 xl:space-x-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                          active
                            ? "text-[#304869] bg-[#304869]/10"
                            : "text-gray-700 hover:text-[#304869] hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop CTA Button - opens modal */}
            <button
              onClick={openQuoteModal}
              className="hidden lg:flex items-center gap-2 rounded-md bg-[#304869] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#304869]/30 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Quote</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></span>
            </button>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-[#304869] hover:bg-[#304869]/10 transition-colors duration-200"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />

      <style jsx global>{`
        body {
          background-color: white;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
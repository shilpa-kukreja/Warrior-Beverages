// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   Droplets,
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   ChevronRight,
//   Heart,
//   ChevronDown,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

// export default function Footer() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);
//   const [openSections, setOpenSections] = useState({ quickLinks: false, services: false });
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email) {
//       setSubscribed(true);
//       setEmail("");
//       setTimeout(() => setSubscribed(false), 3000);
//     }
//   };

//   const toggleSection = (section) => {
//     if (isMobile) {
//       setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
//     }
//   };

//   const fadeUpVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "Why Choose Us", href: "/why-choose-us" },
//     { name: "Our Products", href: "/products" },
//     { name: "Testimonials", href: "/testimonials" },
//     { name: "Contact", href: "/contact-us" },
//   ];

//   const services = [
//     { name: "Privacy Policy", href: "/privacy-policy" },
//     { name: "Terms & Conditions", href: "/terms-conditions" },
//     { name: "Shipping Policy", href: "/shipping-policy" },
//   ];

//   return (
//     <footer
//       ref={sectionRef}
//       className="relative w-full overflow-hidden pt-12 pb-8 md:pt-20"
//       style={{ background: "linear-gradient(135deg, #0f172a 0%, #0a0f1a 100%)" }}
//     >
//       {/* Water ripple overlay */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Cpath fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2\' d=\'M0 400 L200 350 L400 420 L600 380 L800 440 L1000 370 L1200 410\' /%3E%3C/svg%3E')] bg-repeat" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
//         >
//           {/* Brand Column */}
//           <motion.div variants={fadeUpVariants} className="space-y-4 text-center md:text-left">
//             <div className="flex items-center justify-center md:justify-start gap-2">
//               <Droplets className="h-7 w-7 md:h-8 md:w-8 text-sky-400" />
//               <span className="text-xl md:text-2xl font-bold text-white">
//                 W<span className="text-sky-400">a</span>ther
//               </span>
//             </div>
//             <p className="text-xs md:text-sm text-white/60 leading-relaxed">
//               Pure hydration, powerful branding. Sustainable bottles that make your brand unforgettable.
//             </p>
//             <div className="flex justify-center md:justify-start gap-3 pt-2">
//               {[
//                 { icon: FaFacebookF, hover: "hover:bg-[#861981]", label: "Facebook" },
//                 { icon: FaTwitter, hover: "hover:bg-sky-500", label: "Twitter" },
//                 { icon: FaInstagram, hover: "hover:bg-pink-500", label: "Instagram" },
//                 { icon: FaLinkedinIn, hover: "hover:bg-blue-600", label: "LinkedIn" },
//               ].map((Social, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className={`rounded-full bg-white/10 p-2 text-white/70 transition-all ${Social.hover} hover:text-white hover:scale-110 active:scale-95`}
//                   aria-label={Social.label}
//                 >
//                   <Social.icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
//                 </a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links - accordion on mobile */}
//           <motion.div variants={fadeUpVariants} className="space-y-3">
//             <button
//               onClick={() => toggleSection("quickLinks")}
//               className="flex w-full items-center justify-between md:cursor-default"
//             >
//               <h3 className="text-base md:text-lg font-semibold text-white">Quick Links</h3>
//               {isMobile && (
//                 <ChevronDown
//                   className={`h-5 w-5 text-white/70 transition-transform duration-300 ${
//                     openSections.quickLinks ? "rotate-180" : ""
//                   }`}
//                 />
//               )}
//             </button>
//             <ul
//               className={`space-y-2 overflow-hidden transition-all duration-300 ${
//                 isMobile && !openSections.quickLinks ? "max-h-0" : "max-h-96"
//               }`}
//             >
//               {quickLinks.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="group flex items-center gap-1 text-xs md:text-sm text-white/60 transition-all hover:text-[#861981] py-1"
//                   >
//                     <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services - accordion on mobile */}
//           <motion.div variants={fadeUpVariants} className="space-y-3">
//             <button
//               onClick={() => toggleSection("services")}
//               className="flex w-full items-center justify-between md:cursor-default"
//             >
//               <h3 className="text-base md:text-lg font-semibold text-white">Services</h3>
//               {isMobile && (
//                 <ChevronDown
//                   className={`h-5 w-5 text-white/70 transition-transform duration-300 ${
//                     openSections.services ? "rotate-180" : ""
//                   }`}
//                 />
//               )}
//             </button>
//             <ul
//               className={`space-y-2 overflow-hidden transition-all duration-300 ${
//                 isMobile && !openSections.services ? "max-h-0" : "max-h-96"
//               }`}
//             >
//               {services.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="group flex items-center gap-1 text-xs md:text-sm text-white/60 transition-all hover:text-[#861981] py-1"
//                   >
//                     <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Newsletter & Contact */}
//           <motion.div variants={fadeUpVariants} className="space-y-4 text-center md:text-left">
//             <h3 className="text-base md:text-lg font-semibold text-white">Stay Hydrated</h3>
//             <p className="text-xs md:text-sm text-white/60">
//               Subscribe for exclusive offers and branding tips.
//             </p>
//             <form onSubmit={handleSubscribe} className="flex gap-2 max-w-xs mx-auto md:mx-0">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your email"
//                 required
//                 className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-1 focus:ring-[#861981] transition-all"
//               />
//               <button
//                 type="submit"
//                 className="rounded-full bg-[#861981] p-3 text-white transition-all hover:scale-105 active:scale-95"
//               >
//                 <Send className="h-4 w-4" />
//               </button>
//             </form>
//             {subscribed && (
//               <p className="text-xs text-emerald-400">Thanks for subscribing!</p>
//             )}
//             <div className="pt-2 space-y-2">
//               <div className="flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm text-white/60">
//                 <Phone className="h-3 w-3 text-[#861981]" />
//                 <span>+1 (800) 123-4567</span>
//               </div>
//               <div className="flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm text-white/60">
//                 <Mail className="h-3 w-3 text-[#861981]" />
//                 <span>hello@wather.com</span>
//               </div>
//               <div className="flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm text-white/60">
//                 <MapPin className="h-3 w-3 text-[#861981]" />
//                 <span>123 Water Ave, Eco-City</span>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Bottom Bar */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="mt-10 md:mt-12 border-t border-white/10 pt-6 text-center"
//         >
//           <p className="text-[10px] md:text-xs text-white/40">
//             &copy; {new Date().getFullYear()} Wather. All rights reserved. Made with{" "}
//             <Heart className="inline h-2.5 w-2.5 md:h-3 md:w-3 text-rose-400" /> for a sustainable future.
//           </p>
//           <div className="mt-2 flex flex-wrap justify-center gap-3 md:gap-4 text-[10px] md:text-xs text-white/30">
//             <Link href="/privacy-policy" className="hover:text-white/60 transition">
//               Privacy Policy
//             </Link>
//             <Link href="/terms-conditions" className="hover:text-white/60 transition">
//               Terms of Service
//             </Link>
//             <Link href="/shipping-policy" className="hover:text-white/60 transition">
//               Shipping Policy
//             </Link>
//           </div>
//         </motion.div>
//       </div>

//       {/* Floating action buttons (call & WhatsApp) */}
//       <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
//         {/* CALL BUTTON */}
//         <a
//           href="tel:+971526806400"
//           aria-label="Call Us"
//           className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1b3163] shadow-[0_12px_30px_rgba(27,49,99,0.35)] transition-all duration-300 hover:scale-110"
//         >
//           <span className="absolute inset-0 rounded-full animate-ping bg-[#1b3163]/30"></span>
//           <img
//             src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
//             alt="call"
//             className="relative w-5 h-5"
//           />
//         </a>

//         {/* WHATSAPP BUTTON */}
//         <a
//           href="https://wa.me/971526806400?text=Hello%20Insight%20Integrators,%20I%20would%20like%20to%20discuss%20compliance%20advisory."
//           aria-label="WhatsApp"
//           className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110"
//         >
//           <span className="absolute inset-0 rounded-full animate-ping bg-[#25d366]/30"></span>
//           <img
//             src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png"
//             alt="whatsapp"
//             className="relative w-5 h-5"
//           />
//         </a>
//       </div>
//     </footer>
//   );
// }

// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   Droplets,
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   ChevronRight,
//   Heart,
//   ChevronDown,
//   Loader2,
//   CheckCircle,
//   XCircle,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

// export default function Footer() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
//   const [email, setEmail] = useState("");
//   const [isSubscribing, setIsSubscribing] = useState(false);
//   const [subscribeStatus, setSubscribeStatus] = useState(null); // { type: 'success' | 'error', message: string }
//   const [openSections, setOpenSections] = useState({ quickLinks: false, services: false });
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Auto-dismiss status message after 5 seconds
//   useEffect(() => {
//     if (subscribeStatus) {
//       const timer = setTimeout(() => {
//         setSubscribeStatus(null);
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [subscribeStatus]);

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
    
//     // Validate email
//     if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setSubscribeStatus({
//         type: "error",
//         message: "Please enter a valid email address.",
//       });
//       return;
//     }

//     setIsSubscribing(true);
//     setSubscribeStatus(null);

//     try {
//       const response = await fetch("/api/subscribe", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSubscribeStatus({
//           type: "success",
//           message: data.message || "Successfully subscribed! Check your email for confirmation.",
//         });
//         setEmail(""); // Clear email field on success
//       } else {
//         setSubscribeStatus({
//           type: "error",
//           message: data.error || "Subscription failed. Please try again.",
//         });
//       }
//     } catch (error) {
//       console.error("Subscription error:", error);
//       setSubscribeStatus({
//         type: "error",
//         message: "Network error. Please check your connection and try again.",
//       });
//     } finally {
//       setIsSubscribing(false);
//     }
//   };

//   const toggleSection = (section) => {
//     if (isMobile) {
//       setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
//     }
//   };

//   const fadeUpVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "Latest News", href: "/latest-news" },
//     { name: "About Us", href: "/about" },
//     { name: "FAQ", href: "/faq" },
//     { name: "Contact", href: "/contact-us" },
//   ];

//   const services = [
//     { name: "Privacy Policy", href: "/privacy-policy" },
//     { name: "Terms & Conditions", href: "/terms-conditions" },
//   ];

//   return (
//     <footer
//       ref={sectionRef}
//       className="relative w-full overflow-hidden pt-12 pb-8 md:pt-20"
//       style={{ background: "linear-gradient(135deg, #0f172a 0%, #0a0f1a 100%)" }}
//     >
//       {/* Water ripple overlay */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Cpath fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2\' d=\'M0 400 L200 350 L400 420 L600 380 L800 440 L1000 370 L1200 410\' /%3E%3C/svg%3E')] bg-repeat" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
//         >
//           {/* Brand Column */}
//           <motion.div variants={fadeUpVariants} className="space-y-4 text-center md:text-left">
//             <div className="flex items-center justify-center md:justify-start gap-2">
//               {/* <Droplets className="h-7 w-7 md:h-8 md:w-8 text-sky-400" /> */}
//              <img src="/logos/Untitled-1.png" alt="Wather Logo" className="h-8 w-auto md:h-10" />
//             </div>
//             <p className="text-xs md:text-sm text-white/60 leading-relaxed">
//               Pure. Refreshing. Trusted.Crafted for modern lifestyles with dependable quality, thoughtful packaging, and a refreshing experience in every bottle.
//             </p>
//             <div className="flex justify-center md:justify-start gap-3 pt-2">
//               {[
//                 { icon: FaFacebookF, hover: "hover:bg-[#1877f2]", label: "Facebook" },
//                 { icon: FaTwitter, hover: "hover:bg-sky-500", label: "Twitter" },
//                 { icon: FaInstagram, hover: "hover:bg-pink-500", label: "Instagram" },
//                 { icon: FaLinkedinIn, hover: "hover:bg-blue-600", label: "LinkedIn" },
//               ].map((Social, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className={`rounded-full bg-white/10 p-2 text-white/70 transition-all ${Social.hover} hover:text-white hover:scale-110 active:scale-95`}
//                   aria-label={Social.label}
//                 >
//                   <Social.icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
//                 </a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links - accordion on mobile */}
//           <motion.div variants={fadeUpVariants} className="space-y-3">
//             <button
//               onClick={() => toggleSection("quickLinks")}
//               className="flex w-full items-center justify-between md:cursor-default"
//             >
//               <h3 className="text-base md:text-lg font-semibold text-white">Quick Links</h3>
//               {isMobile && (
//                 <ChevronDown
//                   className={`h-5 w-5 text-white/70 transition-transform duration-300 ${
//                     openSections.quickLinks ? "rotate-180" : ""
//                   }`}
//                 />
//               )}
//             </button>
//             <ul
//               className={`space-y-2 overflow-hidden transition-all duration-300 ${
//                 isMobile && !openSections.quickLinks ? "max-h-0" : "max-h-96"
//               }`}
//             >
//               {quickLinks.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="group flex items-center gap-1 text-xs md:text-sm text-white/60 transition-all hover:text-[#18BDCD] py-1"
//                   >
//                     <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services - accordion on mobile */}
//           <motion.div variants={fadeUpVariants} className="space-y-3">
//             <button
//               onClick={() => toggleSection("services")}
//               className="flex w-full items-center justify-between md:cursor-default"
//             >
//               <h3 className="text-base md:text-lg font-semibold text-white">Services</h3>
//               {isMobile && (
//                 <ChevronDown
//                   className={`h-5 w-5 text-white/70 transition-transform duration-300 ${
//                     openSections.services ? "rotate-180" : ""
//                   }`}
//                 />
//               )}
//             </button>
//             <ul
//               className={`space-y-2 overflow-hidden transition-all duration-300 ${
//                 isMobile && !openSections.services ? "max-h-0" : "max-h-96"
//               }`}
//             >
//               {services.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="group flex items-center gap-1 text-xs md:text-sm text-white/60 transition-all hover:text-[#18BDCD] py-1"
//                   >
//                     <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Newsletter & Contact - Enhanced with professional subscription */}
//           <motion.div variants={fadeUpVariants} className="space-y-4 text-center md:text-left">
//             <h3 className="text-base md:text-lg font-semibold text-white">Stay Hydrated</h3>
//             <p className="text-xs md:text-sm text-white/60">
//               Subscribe for exclusive offers and branding tips.
//             </p>
//             <form onSubmit={handleSubscribe} className="flex gap-2 max-w-xs mx-auto md:mx-0">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your email address"
//                 required
//                 disabled={isSubscribing}
//                 className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-50"
//               />
//               <button
//                 type="submit"
//                 disabled={isSubscribing}
//                 className="rounded-full bg-[#18BDCD] p-3 text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
//               >
//                 {isSubscribing ? (
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                 ) : (
//                   <Send className="h-4 w-4" />
//                 )}
//               </button>
//             </form>
            
//             {/* Professional status messages */}
//             {subscribeStatus && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className={`flex items-center justify-center md:justify-start gap-2 text-xs p-2 rounded-lg ${
//                   subscribeStatus.type === "success"
//                     ? "bg-emerald-500/20 text-emerald-400"
//                     : "bg-red-500/20 text-red-400"
//                 }`}
//               >
//                 {subscribeStatus.type === "success" ? (
//                   <CheckCircle className="h-3 w-3 flex-shrink-0" />
//                 ) : (
//                   <XCircle className="h-3 w-3 flex-shrink-0" />
//                 )}
//                 <span>{subscribeStatus.message}</span>
//               </motion.div>
//             )}
            
//             <div className="pt-2 space-y-2">
//               <div className="flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm text-white/60">
//                 <Phone className="h-3 w-3 text-[#18BDCD]" />
//                 <span>+1 (800) 123-4567</span>
//               </div>
//               <div className="flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm text-white/60">
//                 <Mail className="h-3 w-3 text-[#18BDCD]" />
//                 <span>hello@wather.com</span>
//               </div>
//               <div className="flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm text-white/60">
//                 <MapPin className="h-3 w-3 text-[#18BDCD]" />
//                 <span>123 Water Ave, Eco-City</span>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Bottom Bar */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="mt-10 md:mt-12 border-t border-white/10 pt-6 text-center"
//         >
//           <p className="text-[10px] md:text-xs text-white/40">
//             &copy; {new Date().getFullYear()} Neysa. All rights reserved. Made with{" "}
//             <Heart className="inline h-2.5 w-2.5 md:h-3 md:w-3 text-rose-400" /> for a sustainable future.
//           </p>
//           {/* <div className="mt-2 flex flex-wrap justify-center gap-3 md:gap-4 text-[10px] md:text-xs text-white/30">
//             <Link href="/privacy-policy" className="hover:text-white/60 transition">
//               Privacy Policy
//             </Link>
//             <Link href="/terms-conditions" className="hover:text-white/60 transition">
//               Terms of Service
//             </Link>
//             <Link href="/shipping-policy" className="hover:text-white/60 transition">
//               Shipping Policy
//             </Link>
//           </div> */}
//         </motion.div>
//       </div>

//       {/* Floating action buttons (call & WhatsApp) */}
//       <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
//         {/* CALL BUTTON */}
//         <a
//           href="tel:+971526806400"
//           aria-label="Call Us"
//           className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1b3163] shadow-[0_12px_30px_rgba(27,49,99,0.35)] transition-all duration-300 hover:scale-110"
//         >
//           <span className="absolute inset-0 rounded-full animate-ping bg-[#1b3163]/30"></span>
//           <img
//             src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
//             alt="call"
//             className="relative w-5 h-5"
//           />
//         </a>

//         {/* WHATSAPP BUTTON */}
//         <a
//           href="https://wa.me/971526806400?text=Hello%20Insight%20Integrators,%20I%20would%20like%20to%20discuss%20compliance%20advisory."
//           aria-label="WhatsApp"
//           className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110"
//         >
//           <span className="absolute inset-0 rounded-full animate-ping bg-[#25d366]/30"></span>
//           <img
//             src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png"
//             alt="whatsapp"
//             className="relative w-5 h-5"
//           />
//         </a>
//       </div>
//     </footer>
//   );
// }

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronRight,
  Heart,
  ChevronDown,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [openSections, setOpenSections] = useState({ quickLinks: false, services: false });
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (subscribeStatus) {
      const timer = setTimeout(() => {
        setSubscribeStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [subscribeStatus]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribeStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubscribing(true);
    setSubscribeStatus(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        setSubscribeStatus({
          type: "success",
          message: data.message || "Successfully subscribed! Check your email for confirmation.",
        });
        setEmail("");
      } else {
        setSubscribeStatus({
          type: "error",
          message: data.error || "Subscription failed. Please try again.",
        });
      }
    } catch (error) {
      setSubscribeStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const toggleSection = (section) => {
    if (isMobile) {
      setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Latest News", href: "/latest-news" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact-us" },
  ];

  const services = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ];

  const videoSrc = "/video/footer.mp4";

  return (
    <footer
      ref={sectionRef}
      className="relative w-full overflow-hidden min-h-[420px] md:min-h-[550px] pt-12 pb-8 md:pt-20 md:pb-12"
    >
      {/* VIDEO BACKGROUND - anchored to bottom, cropping from top */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-[center_bottom]"
            poster="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop"
            onError={() => setVideoError(true)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
        )}

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Main Footer Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-4"
        >
          {/* Brand Column */}
          <motion.div variants={fadeUpVariants} className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src="/logos/lOGO4.png" alt="Wather Logo" className="h-9 w-auto md:h-11 brightness-0 invert" />
            </div>
            <p className="text-sm md:text-base text-white/90 font-light leading-relaxed max-w-xs mx-auto md:mx-0">
              Pure. Refreshing. Trusted. Crafted for modern lifestyles with dependable quality,
              thoughtful packaging, and a refreshing experience in every bottle.
            </p>
            <div className="flex justify-center md:justify-start gap-3 pt-1">
              {[
                { icon: FaFacebookF, hover: "hover:bg-[#1877f2]", label: "Facebook" },
                { icon: FaTwitter, hover: "hover:bg-sky-500", label: "Twitter" },
                { icon: FaInstagram, hover: "hover:bg-pink-500", label: "Instagram" },
                { icon: FaLinkedinIn, hover: "hover:bg-blue-600", label: "LinkedIn" },
              ].map((Social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`rounded-full bg-white/10 p-2.5 text-white/80 transition-all ${Social.hover} hover:text-white hover:scale-110 hover:shadow-lg active:scale-95 backdrop-blur-sm border border-white/10`}
                  aria-label={Social.label}
                >
                  <Social.icon className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUpVariants} className="space-y-3">
            <button
              onClick={() => toggleSection("quickLinks")}
              className="flex w-full items-center justify-between md:cursor-default group"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                Quick Links
              </h3>
              {isMobile && (
                <ChevronDown
                  className={`h-5 w-5 text-white/70 transition-transform duration-300 ${
                    openSections.quickLinks ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>
            <ul
              className={`space-y-2.5 overflow-hidden transition-all duration-300 ${
                isMobile && !openSections.quickLinks ? "max-h-0" : "max-h-96"
              }`}
            >
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1.5 text-sm md:text-base text-white/70 transition-all hover:text-[#18BDCD] py-1"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#18BDCD]" />
                    <span className="transition-colors">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUpVariants} className="space-y-3">
            <button
              onClick={() => toggleSection("services")}
              className="flex w-full items-center justify-between md:cursor-default group"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                Legal
              </h3>
              {isMobile && (
                <ChevronDown
                  className={`h-5 w-5 text-white/70 transition-transform duration-300 ${
                    openSections.services ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>
            <ul
              className={`space-y-2.5 overflow-hidden transition-all duration-300 ${
                isMobile && !openSections.services ? "max-h-0" : "max-h-96"
              }`}
            >
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1.5 text-sm md:text-base text-white/70 transition-all hover:text-[#18BDCD] py-1"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#18BDCD]" />
                    <span className="transition-colors">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Contact */}
          <motion.div variants={fadeUpVariants} className="space-y-4 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
              Stay Hydrated
            </h3>
            <p className="text-sm md:text-base text-white/80 max-w-xs mx-auto md:mx-0">
              Subscribe for exclusive offers and wellness tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-xs mx-auto md:mx-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                disabled={isSubscribing}
                className="flex-1 rounded-full bg-white/10 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#18BDCD] focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 transition-all border border-white/10"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="rounded-full bg-gradient-to-r from-[#18BDCD] to-[#0f9aa8] p-3.5 text-white transition-all hover:scale-105 hover:shadow-[0_8px_25px_rgba(24,189,205,0.35)] active:scale-95 disabled:opacity-50 shadow-lg flex-shrink-0"
              >
                {isSubscribing ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </form>

            {subscribeStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center justify-center md:justify-start gap-2 text-sm p-2.5 rounded-xl backdrop-blur-sm ${
                  subscribeStatus.type === "success"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/20"
                    : "bg-red-500/20 text-red-300 border border-red-500/20"
                }`}
              >
                {subscribeStatus.type === "success" ? (
                  <CheckCircle className="h-4 w-4 flex-shrink-0" />
                ) : (
                  <XCircle className="h-4 w-4 flex-shrink-0" />
                )}
                <span>{subscribeStatus.message}</span>
              </motion.div>
            )}

            <div className="pt-2 space-y-2.5">
              <div className="flex items-center justify-center md:justify-start gap-2.5 text-sm md:text-base text-white/80">
                <span className="rounded-full bg-[#18BDCD]/20 p-1.5 text-[#18BDCD]">
                  <Phone className="h-4 w-4" />
                </span>
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2.5 text-sm md:text-base text-white/80">
                <span className="rounded-full bg-[#18BDCD]/20 p-1.5 text-[#18BDCD]">
                  <Mail className="h-4 w-4" />
                </span>
                <span>hello@neysa.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2.5 text-sm md:text-base text-white/80">
                <span className="rounded-full bg-[#18BDCD]/20 p-1.5 text-[#18BDCD]">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>123 Water Ave, Eco-City</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 md:mt-14 pt-6 border-t border-white/10 text-center"
        >
          <p className="text-xs md:text-sm text-white/50 tracking-wide">
            &copy; {new Date().getFullYear()} neysa. All rights reserved. Made with{" "}
            <Heart className="inline h-3 w-3 md:h-4 md:w-4 text-rose-400 animate-pulse" /> for a
            sustainable future.
          </p>
        </motion.div>
      </div>

      {/* Floating action buttons */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        <a
          href="tel:+971526806400"
          aria-label="Call Us"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1b3163] shadow-[0_12px_30px_rgba(27,49,99,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_40px_rgba(27,49,99,0.5)]"
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-[#1b3163]/30"></span>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
            alt="call"
            className="relative w-5 h-5"
          />
        </a>
        <a
          href="https://wa.me/971526806400?text=Hello%20Insight%20Integrators,%20I%20would%20like%20to%20discuss%20compliance%20advisory."
          aria-label="WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_40px_rgba(37,211,102,0.5)]"
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25d366]/30"></span>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png"
            alt="whatsapp"
            className="relative w-5 h-5"
          />
        </a>
      </div>
    </footer>
  );
}
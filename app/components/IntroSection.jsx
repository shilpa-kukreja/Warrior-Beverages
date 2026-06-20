// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// export default function IntroSection() {
//     const [displayText, setDisplayText] = useState("");
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [loopNum, setLoopNum] = useState(0);
//     const [typingSpeed, setTypingSpeed] = useState(150);

//     const contentRef = useRef(null);
//     const [isVisible, setIsVisible] = useState(false);

//     const words = ["Wahter"];

//     // =========================
//     // Typing Animation
//     // =========================
//     useEffect(() => {
//         const currentWord = words[loopNum % words.length];

//         const handleTyping = () => {
//             if (isDeleting) {
//                 setDisplayText(currentWord.substring(0, displayText.length - 1));
//                 setTypingSpeed(70);
//             } else {
//                 setDisplayText(currentWord.substring(0, displayText.length + 1));
//                 setTypingSpeed(120);
//             }

//             // Start deleting
//             if (!isDeleting && displayText === currentWord) {
//                 setTimeout(() => {
//                     setIsDeleting(true);
//                 }, 1500);
//             }

//             // Start typing again
//             if (isDeleting && displayText === "") {
//                 setIsDeleting(false);
//                 setLoopNum((prev) => prev + 1);
//             }
//         };

//         const timer = setTimeout(handleTyping, typingSpeed);

//         return () => clearTimeout(timer);
//     }, [displayText, isDeleting, loopNum]);

//     // =========================
//     // Scroll Animation
//     // =========================
//     // Scroll-triggered animation every time
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     // Animate when section comes into view
//                     setIsVisible(true);
//                 } else {
//                     // Reset when leaving viewport
//                     setIsVisible(false);
//                 }
//             },
//             {
//                 threshold: 0.3,
//             }
//         );

//         if (contentRef.current) {
//             observer.observe(contentRef.current);
//         }

//         return () => observer.disconnect();
//     }, []);

//     return (
//         <section className="relative w-full h-[500px] overflow-hidden">
//             {/* Background Image */}
//             <div className="fixed inset-0 -z-10">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="/about/about-bg.webp"
//                         alt="Water background"
//                         fill
//                         priority
//                         className="object-cover"
//                     />

//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-black/5"></div>
//                 </div>
//             </div>

//             {/* Content */}
//             <div className="relative z-10 flex items-start justify-end h-[500px] px-5  py-5">
//                 <div
//                     ref={contentRef}
//                     className={`
//   w-full md:w-[550px] lg:w-[700px] xl:w-[750px]



//   p-6 md:p-8 lg:p-10

//   transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]

//   ${isVisible
//                             ? "translate-x-0 opacity-100 scale-100"
//                             : "translate-x-40 opacity-0 scale-95"
//                         }
// `}
//                 >


//                     {/* Heading */}
//                     <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
//                         Introducing{" "}
//                         <span className="inline-block min-w-[180px] text-[#861981]">
//                             {displayText}
//                             <span className="animate-pulse">|</span>
//                         </span>
//                     </h1>

//                     {/* Description */}
//                     <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
//                         Wahter is founded by{" "}
//                         <strong className="text-[#861981]">
//                             Mrs. Kashish A Nenwani & Mr. Amitt Nenwani
//                         </strong>
//                         , Global Indian of the Year 2020-21 recognised by AsiaOne Magazine.
//                         Wahter is a division of the renowned Shiva Group, originally founded
//                         in 1987 by{" "}
//                         <strong className="text-[#861981]">
//                             Mr. Shiv Kumar Nenwani
//                         </strong>
//                         , a 1972 Electrical Engineer from MACT Bhopal and double Post
//                         graduate gold medalist from Punjab University, an enduring legacy in
//                         the making...
//                     </p>

//                     {/* Features */}
//                     <div className="mt-5 grid grid-cols-3 gap-4">
//                         {[
//                             "Innovative",
//                             "Targeted",
//                             "Transparent",
//                             "High Efficacy",
//                         ].map((item, idx) => (
//                             <div
//                                 key={idx}
//                                 className="
//                   flex items-center gap-3
//                   rounded-xl
//                   border border-gray-100
//                   bg-gray-50
//                   hover:bg-[#861981]/10
//                   px-4 py-2

//                   transition-all duration-300
//                   hover:-translate-y-1
//                   hover:shadow-lg
//                 "
//                             >
//                                 <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#861981]/10">
//                                     <svg
//                                         className="w-4 h-4 text-[#861981]"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M5 13l4 4L19 7"
//                                         />
//                                     </svg>
//                                 </div>

//                                 <span className="text-gray-700 font-medium text-sm md:text-base">
//                                     {item}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Button */}
//                     <div className="mt-5">
//                         <button
//                             className="
//                 px-7 py-3
//                 rounded-xl
//                 bg-[#861981]
//                 text-white
//                 font-semibold

//                 hover:bg-[#861981]/80
//                 hover:scale-100

//                 transition-all duration-300


//               "
//                         >
//                             Discover More
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const contentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const words = ["Neysa"];

    // Typing Animation
    useEffect(() => {
        const currentWord = words[loopNum % words.length];

        const handleTyping = () => {
            if (isDeleting) {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
                setTypingSpeed(70);
            } else {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
                setTypingSpeed(120);
            }

            if (!isDeleting && displayText === currentWord) {
                setTimeout(() => {
                    setIsDeleting(true);
                }, 1500);
            }

            if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setLoopNum((prev) => prev + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum, typingSpeed, words]);

    // Scroll Animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.2 }
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Fixed background image */}
            <div className="fixed inset-0 -z-10">
                <div className="relative w-full h-full">
                    <Image
                        src="/about/25444.jpeg"
                        alt="Water background"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5"></div>
                </div>
            </div>

            {/* Scrollable content - always centered */}
            <div className="relative z-10 flex items-center  justify-center h-full min-h-screen px-4 sm:px-5 py-8 md:py-5">
                <div
                    ref={contentRef}
                    className={`
                        w-full 
                        max-w-full md:max-w-[550px] lg:max-w-[750px] 
                        p-5 sm:p-6 md:p-8 lg:p-10
                        bg-white/90 backdrop-blur-sm
                        rounded-2xl
                        shadow-lg
                        transition-all duration-700 ease-out
                        ${
                            isVisible
                                ? "translate-x-0 opacity-100 scale-100"
                                : "translate-x-0 opacity-100 scale-100"  // no slide, just fade
                        }
                    `}
                >
                    <h1 className="text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                        Introducing{" "}
                        <span className="inline-flex flex-wrap items-center gap-1 text-[#304869]">
                            <span className="inline-block min-w-[120px] sm:min-w-[150px] md:min-w-[180px]">
                                {displayText}
                            </span>
                            <span className="animate-pulse text-2xl sm:text-3xl md:text-4xl">|</span>
                        </span>
                    </h1>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 text-left leading-relaxed">
                        Neysa is a{" "}
                        <span className="font-semibold text-[#304869]">Premium Water</span> brand
                        that prioritizes{" "}
                        <span className="font-semibold text-[#304869]">
                            quality, taste, and convenience
                        </span>
                        . Our Premium Water was created to bring together what consumers value most:{" "}
                        <span className="font-semibold text-[#304869]">dependable quality</span>,{" "}
                        <span className="font-semibold text-[#304869]">refreshing taste</span>, and a{" "}
                        <span className="font-semibold text-[#304869]">premium experience</span> that
                        fits effortlessly into everyday life.
                        <br />
                        Every bottle is{" "}
                        <span className="font-semibold text-[#304869]">carefully purified</span> and{" "}
                        <span className="font-semibold text-[#304869]">thoughtfully packaged</span> to
                        meet the expectations of{" "}
                        <span className="font-semibold text-[#304869]">modern consumers</span> who
                        seek more than just drinking water. Whether you're{" "}
                        <span className="font-semibold text-[#304869]">at work</span>,{" "}
                        <span className="font-semibold text-[#304869]">on the move</span>,{" "}
                        <span className="font-semibold text-[#304869]">hosting guests</span>, or
                        simply{" "}
                        <span className="font-semibold text-[#304869]">
                            staying refreshed throughout the day
                        </span>
                        , Neysa delivers{" "}
                        <span className="font-bold text-[#304869]">
                            consistency you can trust
                        </span>{" "}
                        and{" "}
                        <span className="font-bold text-[#304869]">
                            quality you can feel in every sip.
                        </span>
                    </p>

                    <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        {["Pure & Refreshing", "Premium Packaging", "Quality Assured", "Everyday Value"].map(
                            (item, idx) => (
                                <div
                                    key={idx}
                                    className="
                                        flex items-center gap-2 sm:gap-3
                                        rounded-xl
                                        border border-gray-100
                                        bg-white/80 backdrop-blur-sm
                                        hover:bg-[#304869]/10
                                        px-3 sm:px-4 py-2 sm:py-2.5
                                        transition-all duration-300
                                        active:scale-95 md:hover:-translate-y-1 md:hover:shadow-lg
                                        cursor-pointer
                                    "
                                >
                                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#304869]/10">
                                        <svg
                                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#304869]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">
                                        {item}
                                    </span>
                                </div>
                            )
                        )}
                    </div>

                 <Link href="/about" className="mt-6 sm:mt-8">   <div className="mt-6 sm:mt-8">
                        <button
                            className="
                                w-full sm:w-auto
                                px-6 sm:px-7 py-3 sm:py-3.5
                                rounded-xl
                                bg-[#304869]
                                text-white
                                font-semibold
                                text-sm sm:text-base
                                hover:bg-[#304869]/80
                                active:scale-95
                                transition-all duration-300
                                shadow-md
                                cursor-pointer
                            "
                            aria-label="Discover Neysa"
                        >
                            Discover Neysa
                        </button>
                    </div>
                    </Link> 
                </div>
            </div>
        </section>
    );
}
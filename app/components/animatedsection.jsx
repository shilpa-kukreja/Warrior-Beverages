"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const bottleImages = [
  "/animated/2.png",
  "/animated/2.png",
  "/animated/2.png",

];

const logoImages = [
  "/animated/Group1.png",
  "/animated/Group2.png",
  "/animated/Group3.png",
  "/animated/Group4.png",
  "/animated/Group5.png",
  "/animated/Group6.png",
  "/animated/Group7.png",
  "/animated/Group8.png",
];

export default function AnimatedSection() {
  const [bottleIndex, setBottleIndex] = useState(0);

  const trackRef = useRef(null);
  const bottleRef = useRef(null);

  const logosRef = useRef([]);
  const animationRef = useRef(null);
  const startTimeRef = useRef(0);

  // Bottle Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setBottleIndex((prev) => (prev + 1) % bottleImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Orbit Animation
  useEffect(() => {
    if (!trackRef.current || !bottleRef.current) return;

    const track = trackRef.current;
    const bottle = bottleRef.current;

    const logos = logosRef.current.filter(Boolean);

    let trackRect = track.getBoundingClientRect();
    let bottleRect = bottle.getBoundingClientRect();

    let logoWidth = 85;
    let logoHeight = 85;

    const updateGeometry = () => {
      trackRect = track.getBoundingClientRect();
      bottleRect = bottle.getBoundingClientRect();

      if (logos[0]) {
        const rect = logos[0].getBoundingClientRect();
        logoWidth = rect.width;
        logoHeight = rect.height;
      }
    };

    const getControlPoints = () => {
      const startX = -120;
      const endX = trackRect.width + 120;

      const startY = trackRect.height - logoHeight - 40;
      const endY = trackRect.height - logoHeight - 40;

      const controlX = trackRect.width / 2;

      const bottleTopRelative = bottleRect.top - trackRect.top;

      const controlY =
        (4 * bottleTopRelative - startY - endY) / 2;

      return {
        startX,
        startY,
        endX,
        endY,
        controlX,
        controlY,
      };
    };

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const duration = 14000;

      const { startX, startY, endX, endY, controlX, controlY } =
        getControlPoints();

      logos.forEach((logo, idx) => {
        const phase = (idx * duration) / logos.length;

        let elapsedWithPhase =
          (timestamp - startTimeRef.current + phase) % duration;

        let tPhase = elapsedWithPhase / duration;

        // Quadratic Bezier Position
        const xPhase =
          Math.pow(1 - tPhase, 2) * startX +
          2 * (1 - tPhase) * tPhase * controlX +
          Math.pow(tPhase, 2) * endX;

        const yPhase =
          Math.pow(1 - tPhase, 2) * startY +
          2 * (1 - tPhase) * tPhase * controlY +
          Math.pow(tPhase, 2) * endY;

        // ===== PREMIUM FADE IN / OUT =====
        let opacity = 1;

        // Fade In
        if (tPhase < 0.12) {
          opacity = tPhase / 0.12;
        }

        // Fade Out
        else if (tPhase > 0.88) {
          opacity = (1 - tPhase) / 0.12;
        }

        // Optional Scale Effect
        let scale = 1;

        // if (tPhase > 0.35 && tPhase < 0.65) {
        //   scale = 1.08;
        // }

        logo.style.left = `${xPhase}px`;
        logo.style.top = `${yPhase}px`;
        logo.style.opacity = opacity;

        logo.style.transform = `
          translate(-50%, -50%)
          scale(${scale})
        `;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    updateGeometry();

    window.addEventListener("resize", updateGeometry);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      window.removeEventListener("resize", updateGeometry);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/animated/1.jpg"
          alt="mountain background"
          fill
          priority
          className="object-cover object-center brightness-[0.9]"
          sizes="100vw"
        />

        {/* Premium Dark Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" /> */}
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[1200px] h-[550px]   rounded-full pointer-events-none" />

      {/* Main Section */}
      <div className="absolute inset-0 flex items-end justify-center pb-[5%]">
        <div className="relative w-full max-w-[1450px] h-[700px] mx-auto">
          {/* Orbit Track */}
          <div
            ref={trackRef}
            className="relative w-full h-full"
          >
            {logoImages.map((src, idx) => (
              <div
                key={idx}
                ref={(el) => (logosRef.current[idx] = el)}
                className="absolute will-change-transform transition-opacity duration-300"
                style={{
                  left: 0,
                  top: 0,
                  opacity: 0,
                }}
              >
                <div className="group flex items-center justify-center">
                  <div className="relative w-[120px] h-[120px]">
                    <Image
                      src={src}
                      alt="brand logo"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                      sizes="120px"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Optional Arc Guide */}
            <svg
              className="absolute inset-0 pointer-events-none w-full h-full"
              style={{ zIndex: 1 }}
            >
              <path
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.5"
                strokeDasharray="6 10"
                fill="none"
                d="M 0 560 Q 720 20 1440 560"
              />
            </svg>
          </div>

          {/* Center Bottle */}
          <div
            ref={bottleRef}
            className="absolute left-1/2 top-[72%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center"
          >
            {/* Bottle Glow */}
            {/* <div className="absolute w-[420px] h-[420px] bg-[#1aa6a6] opacity-20 blur-3xl rounded-full" /> */}

            {/* Bottle */}
            <div className="relative">
              <img
                key={bottleIndex}
                src={bottleImages[bottleIndex]}
                alt="premium bottle"
                className="h-[560px] w-auto object-contain transition-all duration-700 ease-out drop-shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-card {
          width: 120px;
          height: 120px;

          background: rgba(255, 255, 255, 0.92);

          backdrop-filter: blur(14px);

          border-radius: 24px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(255, 255, 255, 0.3);

          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            background 0.35s ease;
        }

        .logo-card:hover {
          transform: translateY(-6px) scale(1.08);

          background: rgba(255, 255, 255, 0.98);

          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.35),
            0 0 0 2px rgba(26, 166, 166, 0.25);
        }

        @media (max-width: 1024px) {
          .logo-card {
            width: 120px;
            height: 120px;
          }
        }

        @media (max-width: 768px) {
          .logo-card {
            width: 60px;
            height: 60px;

            border-radius: 18px;
          }
        }
      `}</style>
    </div>
  );
}
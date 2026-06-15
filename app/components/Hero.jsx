"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[120vh] w-full overflow-hidden ">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/Sequence3.mp4" type="video/mp4" />
      </video>

    

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}


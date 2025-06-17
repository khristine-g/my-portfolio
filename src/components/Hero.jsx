'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/portfolio3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Digital Solutions That Do the Work for You
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          From smart websites to custom tools — we build fast, scalable digital products that make running your business easier.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full shadow-lg transition">
            Get Started
          </button>
          <button className="px-8 py-3 border border-gray-200 text-white hover:bg-white/10 rounded-full transition font-semibold">
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20" style={{ height: '100px' }}>
        <svg
          className="relative block w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            fill="rgba(255, 255, 255, 0.97)"
          />
        </svg>
      </div>
    </section>
  );
}

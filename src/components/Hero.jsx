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

      {/* Lighter Gradient Overlay for better video visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-5" />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Get a website that makes your life easier.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-100 max-w-xl drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          Professional web development tailored to your business needs — clean, fast, and reliable.
        </motion.p>

        <motion.button
          className="mt-10 px-8 py-3 bg-stone-900 hover:bg-indigo-700 rounded-full text-white font-semibold text-lg shadow-lg shadow-amber-500/50 transition-colors"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.button>
      </div>

      {/* Bottom SVG Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180" style={{ height: '100px', zIndex: 10 }}>
        <svg
          className="relative block w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            fill="rgba(255, 255, 255, 0.95)"
          />
        </svg>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-white overflow-hidden py-24 px-4 sm:px-8">
      {/* Top SVG Wave */}
      <div className="absolute top-0 left-0 right-0 -z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-24 text-blue-100">
          <path
            fill="currentColor"
            d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,90.7C672,75,768,85,864,117.3C960,149,1056,203,1152,197.3C1248,192,1344,128,1392,96L1440,64V0H0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/portfolio10.jpg"
            alt="About us"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Who We Are
          </motion.h2>

          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We are a team of passionate creatives, developers, and designers committed to building modern, high-performing digital experiences.
            Our approach is rooted in empathy, strategy, and pixel-perfect execution.
          </motion.p>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Whether you're launching a startup, refreshing your brand, or scaling a business, we partner with you every step of the way to bring your vision to life.
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-stone-900 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom SVG Shape */}
      <div className="absolute bottom-0 left-0 right-0 -z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-24 text-blue-100 rotate-180">
          <path
            fill="currentColor"
            d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,112C1200,85,1320,75,1380,69.3L1440,64V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

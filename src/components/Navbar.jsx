'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  const navLinks = ['Book a Call', 'Services', 'Portfolio', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-amber-600 cursor-pointer select-none">
          kode
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '')}`}
              className="relative text-amber-600 font-semibold hover:text-gray-300 transition-colors duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-200 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden bg-gray-800 shadow-lg px-6 py-4 space-y-4 border-t border-gray-700"
          >
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className="block text-gray-300 font-semibold hover:text-blue-400 transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

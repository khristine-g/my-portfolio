"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Replace this with actual newsletter logic
    setSuccess(true);
    setEmail("");

    // Hide success after 3 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-white px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">YourName.dev</h2>
          <p className="text-sm text-gray-400">
            I build digital solutions that empower modern businesses. Let's create something great together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#services" className="hover:text-white">Services</Link></li>
            <li><Link href="#portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link href="#expect" className="hover:text-white">Process</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-3">Subscribe to My Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">Get occasional insights, tips, and updates in your inbox.</p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
            >
              Subscribe
            </button>
          </form>

          {/* Animated Success Message */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="mt-3 text-green-400 text-sm"
              >
                🎉 You’ve successfully subscribed!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 border-t border-gray-700 pt-6 text-center"
      >
        <div className="flex justify-center gap-6 mb-4 text-gray-400">
          <a href="mailto:your@email.com"><Mail className="hover:text-white" /></a>
          <a href="https://linkedin.com" target="_blank"><Linkedin className="hover:text-white" /></a>
          <a href="https://twitter.com" target="_blank"><Twitter className="hover:text-white" /></a>
          <a href="https://facebook.com" target="_blank"><Facebook className="hover:text-white" /></a>
        </div>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} YourName.dev. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}

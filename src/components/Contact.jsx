"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  const socials = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <section id="contact" className="bg-white py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-[#0a1f44]">Get In Touch</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We'd love to hear about your project and how we can help.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {["Name", "Email", "Message"].map((label, i) => (
            <motion.div
              key={label}
              custom={i}
              variants={formVariants}
              className="relative"
            >
              <label className="text-[#0a1f44] text-sm font-medium absolute left-3 top-2 bg-white px-1 z-10">
                {label}
              </label>
              {label !== "Message" ? (
                <input
                  type={label.toLowerCase()}
                  required
                  className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              ) : (
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0a1f44] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-400 hover:text-[#0a1f44] transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-yellow-400" />
              <span className="text-[#0a1f44]">info@yourcompany.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-yellow-400" />
              <span className="text-[#0a1f44]">+1 234 567 8900</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-yellow-400" />
              <span className="text-[#0a1f44]">123 Modern Ave, City, Country</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socials.map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-yellow-400 hover:text-[#0a1f44] transition"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Google Map */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title="Google Map"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const accordionData = [
  {
    title: "Web Design & Development",
    content:
      "I design and develop custom, user-friendly websites built on Squarespace and Webflow, optimized for SEO, speed, and mobile responsiveness...",
  },
  {
    title: "Automation & Workflow Optimization",
    content:
      "Say goodbye to manual tasks and hello to efficiency. I set up automated workflows using Zapier, Airtable, and Make.com...",
  },
  {
    title: "Tech Consulting & Digital Strategy",
    content:
      "Not sure which tools, platforms, or strategies are right for your business? I provide tech consulting and digital strategy services...",
  },
  {
    title: "Business Data Analytics",
    content:
      "Get insights that drive smarter decisions. I set up dashboards and reports using Google Looker Studio, Airtable Interfaces, and Notion to track growth and performance metrics.",
  },
  {
    title: "Ongoing Support & Maintenance",
    content:
      "I offer continuous website support, regular updates, backups, and performance monitoring to ensure your digital systems remain secure and efficient.",
  },
];

export default function WorkTogether() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-[#F9FAFB]" id="work">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Images Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3, delayChildren: 0.2 },
            },
          }}
          className="relative w-full max-w-lg mx-auto md:mx-0"
          style={{ perspective: 1200 }}
        >
          {/* Bottom Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -80, scale: 0.9 },
              visible: { opacity: 1, x: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.03, rotate: -1, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/portfolio14.jpg"
              alt="Working together bottom"
              width={600}
              height={400}
              className="object-cover"
            />
          </motion.div>

          {/* Top Image */}
         
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className=""
        >
          <h2 className="text-4xl font-extrabold text-[#1E293B] mb-6">
            How We Can Work Together
          </h2>
          <p className="text-lg text-[#475569] mb-10">
            Websites, Automation & Custom Brand Assets
          </p>

          {accordionData.map((item, index) => (
            <div key={index} className="mb-5">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left bg-white p-5 rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-md transition"
              >
                <span className="font-semibold text-[#1E293B] text-lg">{item.title}</span>
                {activeIndex === index ? (
                  <Minus size={24} className="text-[#2563EB]" />
                ) : (
                  <Plus size={24} className="text-[#2563EB]" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 text-[#475569] bg-white p-5 rounded-b-lg border-t border-[#E2E8F0] text-base leading-relaxed">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.07,
              boxShadow: "0 8px 20px rgba(37, 99, 235, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-10 px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Book a Discovery Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

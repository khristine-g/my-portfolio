'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { label: 'Projects Completed', value: 75 },
  { label: 'Years of Experience', value: 5 },
  { label: 'Happy Clients', value: 48 },
  { label: 'Tech Stacks Mastered', value: 12 },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
};

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Our Achievements
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map(({ label, value }, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 hover:rotate-1 transition-transform"
              variants={item}
            >
              <h3 className="text-5xl font-extrabold text-cyan-400 mb-2">
                <CountUp end={value} duration={2} enableScrollSpy />
              </h3>
              <p className="text-lg font-medium text-gray-300">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

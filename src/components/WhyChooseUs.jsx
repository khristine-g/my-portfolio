'use client';

import { motion } from 'framer-motion';
import {
  FaRocket,
  FaMobileAlt,
  FaCode,
  FaCogs,
  FaUserCheck,
  FaThumbsUp,
} from 'react-icons/fa';

const features = [
  {
    title: 'Fast Delivery',
    description: 'We prioritize fast turnaround without compromising quality.',
    icon: FaRocket,
    color: '#3b82f6', // blue-500
  },
  {
    title: 'Clean Code',
    description: 'We write readable, maintainable, and efficient code.',
    icon: FaCode,
    color: '#10b981', // green-500
  },
  {
    title: 'Mobile First',
    description: 'All designs and systems are built with mobile in mind.',
    icon: FaMobileAlt,
    color: '#ec4899', // pink-500
  },
  {
    title: 'Scalable Apps',
    description: 'Our architecture grows with your business.',
    icon: FaCogs,
    color: '#f59e0b', // amber-500
  },
  {
    title: 'Client-Centered',
    description: 'We collaborate closely to meet your vision.',
    icon: FaUserCheck,
    color: '#6366f1', // indigo-500
  },
  {
    title: 'Reliable Support',
    description: 'We’re here before, during, and after launch.',
    icon: FaThumbsUp,
    color: '#ef4444', // red-500
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 20,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map(({ title, description, icon: Icon, color }, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-4 rounded-full bg-opacity-10"
                  style={{ backgroundColor: color }}
                >
                  <Icon size={32} color={color} />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

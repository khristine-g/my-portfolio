'use client';

import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaPaintBrush,
  FaSearch,
  FaShoppingCart,
  FaMobileAlt,
} from 'react-icons/fa';

const services = [
  {
    title: 'Web Design',
    icon: FaPaintBrush,
    description: 'Creating visually stunning and user-friendly website designs that engage your audience.',
  },
  {
    title: 'Web App Development',
    icon: FaLaptopCode,
    description: 'Building scalable and performant web applications tailored to your business needs.',
  },
  {
    title: 'UI/UX Design',
    icon: FaMobileAlt,
    description: 'Designing intuitive and seamless user interfaces and experiences for better engagement.',
  },
  {
    title: 'SEO Optimization',
    icon: FaSearch,
    description: 'Improving your website’s visibility on search engines to attract more organic traffic.',
  },
  {
    title: 'E-commerce Solutions',
    icon: FaShoppingCart,
    description: 'Developing secure and scalable e-commerce platforms to grow your online business.',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 15 },
  },
};

const iconVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, 10, -10, 0],
    scale: 1.1,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We provide innovative solutions to help businesses grow and stand out online.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              className="group relative p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
              variants={card}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="w-14 h-14 mb-6 flex items-center justify-center rounded-full bg-indigo-50 text-amber-600 shadow-md"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <Icon size={28} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>

              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

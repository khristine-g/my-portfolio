'use client';

import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaPaintBrush,
  FaSearch,
  FaMobileAlt,
  FaChartLine,
  FaLightbulb,
} from 'react-icons/fa';

const services = [
  {
    title: 'Web Design',
    icon: FaPaintBrush,
    description:
      'Creating visually stunning and user-friendly website designs that engage your audience.',
  },
  {
    title: 'Web App Development',
    icon: FaLaptopCode,
    description:
      'Building scalable and performant web applications tailored to your business needs.',
  },
  {
    title: 'UI/UX Design',
    icon: FaMobileAlt,
    description:
      'Designing intuitive and seamless user interfaces and experiences for better engagement.',
  },
  {
    title: 'SEO Optimization',
    icon: FaSearch,
    description:
      'Improving your website’s visibility on search engines to attract more organic traffic.',
  },
  {
    title: 'Business Data Analytics',
    icon: FaChartLine,
    description:
      'Turning data into actionable insights with dashboards, analytics, and KPIs to guide your growth.',
  },
  {
    title: 'Tech Consulting',
    icon: FaLightbulb,
    description:
      'Providing expert advice on digital strategy, tools, and workflows to help scale your business.',
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
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 18 },
  },
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: [0, 15, -10, 0],
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-gray-900">
            What We Can Do for You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering businesses with beautiful design, powerful development, and strategic digital support.
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
              className="group relative p-8 bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl hover:shadow-indigo-200 transition duration-300"
              variants={card}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="w-14 h-14 mb-6 flex items-center justify-center rounded-full bg-indigo-100 text-amber-600 shadow-sm"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <Icon size={28} />
              </motion.div>

              <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-600">{description}</p>

              {/* Hover Ring */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-indigo-300 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

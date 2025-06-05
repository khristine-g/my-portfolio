'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiPython,
  SiRubyonrails,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
} from 'react-icons/si';

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Ruby on Rails', icon: SiRubyonrails, color: '#CC0000' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Tech Stack</h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center hover:bg-gray-700"
            >
              <Icon size={50} color={color} className="mb-4" />
              <span className="text-lg font-medium">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

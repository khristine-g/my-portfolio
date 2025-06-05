'use client';

import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Jane Doe',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    comment: 'Amazing service! The team delivered beyond expectations.',
  },
  {
    name: 'Michael Smith',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    comment: 'Fast, clean, and mobile-first. Great experience working with them.',
  },
  {
    name: 'Alice Johnson',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    comment: 'Super professional and scalable solutions. Highly recommended!',
  },
  {
    name: 'David Kim',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    rating: 5,
    comment: 'They brought our vision to life beautifully and quickly.',
  },
  {
    name: 'Fatima Mwangi',
    photo: 'https://randomuser.me/api/portraits/women/25.jpg',
    rating: 5,
    comment: 'They delivered the project ahead of time with clean code.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 120,
    },
  }),
};

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <Slider {...settings}>
          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              className="px-4"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="bg-gray-800 shadow-xl rounded-xl p-8 mb-4 h-full flex flex-col items-center text-center"
              >
                <img
                  src={client.photo}
                  alt={client.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-gray-700 shadow-md"
                />
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {client.name}
                </h4>
                <div className="flex justify-center mb-4 text-yellow-400">
                  {Array(client.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <p className="text-gray-300">{client.comment}</p>
              </motion.div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

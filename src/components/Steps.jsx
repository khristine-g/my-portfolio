"use client";

import { motion } from "framer-motion";
import {
  FileText,
  PhoneCall,
  ClipboardSignature,
  Rocket,
} from "lucide-react";

export default function ExpectSteps() {
  const steps = [
    {
      icon: <FileText className="w-10 h-10 text-blue-600" />,
      title: "Fill Out Our Client Inquiry Form",
      description:
        "We’ll ask you some basic questions to get started and schedule a discovery call.",
    },
    {
      icon: <PhoneCall className="w-10 h-10 text-blue-600" />,
      title: "Schedule A Discovery Call",
      description:
        "We’ll discuss your goals, timeline, and determine if we’re a good fit.",
    },
    {
      icon: <ClipboardSignature className="w-10 h-10 text-blue-600" />,
      title: "Sign Contract & Pay Deposit",
      description:
        "You’ll receive a detailed contract and an invoice to officially begin.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-blue-600" />,
      title: "Project Kick-Off",
      description:
        "We’ll define milestones, set expectations, and launch your project.",
    },
  ];

  return (
    <section className="py-20 bg-white px-4" id="expect">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Here's What You Can Expect</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">{step.title}</h3>
            <p className="mt-2 text-gray-600 text-sm text-center">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          Get In Touch
        </motion.a>
      </div>
    </section>
  );
}

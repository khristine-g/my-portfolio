"use client";

import { motion } from "framer-motion";
import {
  FileText,
  PhoneCall,
  ClipboardSignature,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: <FileText className="w-10 h-10 text-yellow-400" />,
    title: "Fill Out Our Client Inquiry Form",
    description:
      "We’ll ask you some basic questions to get started and schedule a discovery call.",
  },
  {
    icon: <PhoneCall className="w-10 h-10 text-yellow-400" />,
    title: "Schedule A Discovery Call",
    description:
      "We’ll discuss your goals, timeline, and determine if we’re a good fit.",
  },
  {
    icon: <ClipboardSignature className="w-10 h-10 text-yellow-400" />,
    title: "Sign Contract & Pay Deposit",
    description:
      "You’ll receive a detailed contract and an invoice to officially begin.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-yellow-400" />,
    title: "Project Kick-Off",
    description:
      "We’ll define milestones, set expectations, and launch your project.",
  },
];

export default function ExpectSteps() {
  return (
    <section className="py-24 px-4 bg-white" id="expect">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-[#0a1f44]"
        >
          Here's What You Can Expect
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          A seamless process from first contact to project launch — transparent, efficient, and stress-free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="relative p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all group"
          >
            <div className="absolute -top-4 -left-4 text-6xl font-bold text-gray-100 group-hover:text-yellow-100">
              {index + 1}
            </div>

            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 p-4 rounded-full shadow-sm">{step.icon}</div>
            </div>

            <h3 className="text-lg font-semibold text-[#0a1f44] text-center mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-14">
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(250, 204, 21, 0.4)", // yellow-400 glow
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-[#0a1f44] text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-[#0a1f44] transition-all duration-300"
        >
          Get In Touch
        </motion.a>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const approaches = [
    {
      title: 'Precision Engineering',
      description: 'Advanced 3D printing technology enables us to create custom, medical-grade devices with exceptional precision and quality.',
    },
    {
      title: 'Intelligent Software',
      description: 'Purpose-built applications that seamlessly integrate with our hardware, providing real-time insights and personalized guidance.',
    },
    {
      title: 'Complete Solutions',
      description: 'End-to-end ecosystems designed to work together, eliminating fragmentation and creating truly integrated healthcare experiences.',
    },
  ];

  return (
    <section id="approach" className="min-h-screen flex items-center bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-16 text-center">Our Approach</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {approaches.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-8 bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl border border-[#E8EAED] shadow-sm hover:shadow-xl hover:border-[#5B8C9E]/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#5B8C9E]/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-2xl font-bold text-[#5B8C9E]">{index + 1}</div>
                </div>
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">{item.title}</h3>
                <p className="text-[#4A5568] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;

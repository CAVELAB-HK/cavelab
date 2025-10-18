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
    <section id="approach" className="min-h-screen flex items-center bg-grey-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-grey-800 mb-16 text-center tracking-tight">Our Approach</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {approaches.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white border-2 border-grey-800 p-8 hover:bg-grey-800 hover:text-white transition-all duration-300 group relative"
              >
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-grey-800 group-hover:border-white transition-colors flex items-center justify-center">
                  <div className="text-3xl font-bold text-grey-800 group-hover:text-white transition-colors">{index + 1}</div>
                </div>
                <div className="mt-16">
                  <h3 className="text-xl font-bold text-grey-800 group-hover:text-white mb-4 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-grey-600 group-hover:text-grey-200 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;

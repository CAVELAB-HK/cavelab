'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="vision" className="min-h-screen flex items-center bg-grey-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-grey-800 mb-16 tracking-tight">Our Vision & Mission</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-12 bg-white border-2 border-grey-200 hover:border-grey-800 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-grey-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative">
                <div className="w-20 h-20 border-2 border-grey-800 flex items-center justify-center mb-8 mx-auto">
                  <div className="w-12 h-12 bg-grey-800"></div>
                </div>
                <h3 className="text-2xl font-bold text-grey-800 mb-6 uppercase tracking-wide">Vision</h3>
                <p className="text-lg text-grey-600 leading-relaxed">
                  A world where innovative technology makes healthy living effortless and accessible to all.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-12 bg-white border-2 border-grey-200 hover:border-grey-800 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-grey-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative">
                <div className="w-20 h-20 border-2 border-grey-800 flex items-center justify-center mb-8 mx-auto">
                  <div className="w-12 h-12 bg-grey-800"></div>
                </div>
                <h3 className="text-2xl font-bold text-grey-800 mb-6 uppercase tracking-wide">Mission</h3>
                <p className="text-lg text-grey-600 leading-relaxed">
                  We combine precision engineering with intelligent software to create comprehensive healthcare solutions that empower people to take control of their wellbeing.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;

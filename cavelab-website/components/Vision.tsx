'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="vision" className="min-h-screen flex items-center bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-16">Our Vision & Mission</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-[#E8EAED] shadow-sm hover:shadow-xl hover:border-[#5B8C9E]/30 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#5B8C9E]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#5B8C9E]/20 transition-colors">
                <div className="w-8 h-8 bg-[#5B8C9E] rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-6">Vision</h3>
              <p className="text-lg text-[#4A5568] leading-relaxed">
                A world where innovative technology makes healthy living effortless and accessible to all.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-10 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-[#E8EAED] shadow-sm hover:shadow-xl hover:border-[#5B8C9E]/30 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#546E7A]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#546E7A]/20 transition-colors">
                <div className="w-8 h-8 bg-[#546E7A] rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-6">Mission</h3>
              <p className="text-lg text-[#4A5568] leading-relaxed">
                We combine precision engineering with intelligent software to create comprehensive healthcare solutions that empower people to take control of their wellbeing.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;

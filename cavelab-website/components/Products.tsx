'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="products" className="min-h-screen flex items-center bg-[#F8F9FA] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-12">Our Products</h2>
          
          <div className="mb-16">
            <div className="aspect-video bg-white rounded-3xl flex items-center justify-center border border-[#E8EAED] shadow-lg overflow-hidden">
              <div className="text-center p-12">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#5B8C9E]/10 to-[#546E7A]/10 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-[#5B8C9E] border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="text-2xl font-semibold text-[#2B2B2B] mb-3">Innovation in Progress</p>
                <p className="text-[#4A5568]">Our first healthcare solutions are currently in development</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-white rounded-2xl border border-[#E8EAED] shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#5B8C9E]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#5B8C9E]/20 transition-colors">
                <svg className="w-6 h-6 text-[#5B8C9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-3">3D Printed Devices</h3>
              <p className="text-[#4A5568]">Custom-engineered healthcare gadgets designed for precision and comfort</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-white rounded-2xl border border-[#E8EAED] shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#546E7A]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#546E7A]/20 transition-colors">
                <svg className="w-6 h-6 text-[#546E7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-3">Companion Apps</h3>
              <p className="text-[#4A5568]">Intelligent applications that work seamlessly with our hardware</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;

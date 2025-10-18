'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="min-h-screen flex items-center bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-12">Get in Touch</h2>
          
          <p className="text-xl text-[#4A5568] mb-16 max-w-2xl mx-auto leading-relaxed">
            Interested in our mission? Want to learn more about our upcoming products? We&apos;d love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-[#E8EAED] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#5B8C9E]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#5B8C9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-3">Email</h3>
              <a 
                href="mailto:cavelabltd@outlook.com" 
                className="text-[#5B8C9E] hover:text-[#4A7A8C] transition-colors font-medium"
              >
                cavelabltd@outlook.com
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-10 bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-[#E8EAED] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#546E7A]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#546E7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-3">Location</h3>
              <p className="text-[#4A5568] font-medium">Hong Kong</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="min-h-screen flex items-center bg-grey-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-grey-800 mb-12 tracking-tight">Get in Touch</h2>
          
          <p className="text-xl text-grey-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Interested in our mission? Want to learn more about our upcoming products? We&apos;d love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 bg-white border-2 border-grey-800 hover:bg-grey-800 hover:text-white transition-all duration-300 group"
            >
              <div className="w-16 h-16 border-2 border-grey-800 group-hover:border-white flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-grey-800 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">Email</h3>
              <a 
                href="mailto:cavelabltd@outlook.com" 
                className="text-grey-600 group-hover:text-grey-200 transition-colors font-medium break-all"
              >
                cavelabltd@outlook.com
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-10 bg-white border-2 border-grey-800 hover:bg-grey-800 hover:text-white transition-all duration-300 group"
            >
              <div className="w-16 h-16 border-2 border-grey-800 group-hover:border-white flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-grey-800 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">Location</h3>
              <p className="text-grey-600 group-hover:text-grey-200 font-medium">Hong Kong</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

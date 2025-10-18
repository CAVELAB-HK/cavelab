'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="problem" className="min-h-screen flex items-center bg-white py-24 relative">
      <div className="absolute inset-0 tech-grid opacity-50"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-grey-800 mb-12 text-center tracking-tight">The Challenge</h2>
          
          <div className="bg-grey-800 p-12 border-4 border-grey-800 relative">
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-white"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-white"></div>
            
            <div className="space-y-8 text-white">
              <p className="text-xl leading-relaxed">
                Healthcare technology often falls short in accessibility and integration. Patients struggle with fragmented solutions that don&apos;t communicate with each other, creating barriers to proactive health management.
              </p>
              
              <p className="text-xl leading-relaxed">
                We believe healthcare should be seamless, intuitive, and personalized. That&apos;s why we&apos;re building integrated ecosystems where hardware and software work together to make wellness effortless.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;

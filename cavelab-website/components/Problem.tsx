'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="problem" className="min-h-screen flex items-center bg-[#F8F9FA] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-[#2B2B2B] mb-12 text-center">The Challenge</h2>
          
          <div className="space-y-8">
            <p className="text-xl text-[#4A5568] leading-relaxed">
              Healthcare technology often falls short in accessibility and integration. Patients struggle with fragmented solutions that don&apos;t communicate with each other, creating barriers to proactive health management.
            </p>
            
            <p className="text-xl text-[#4A5568] leading-relaxed">
              We believe healthcare should be seamless, intuitive, and personalized. That&apos;s why we&apos;re building integrated ecosystems where hardware and software work together to make wellness effortless.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;

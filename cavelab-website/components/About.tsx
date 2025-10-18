'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen flex items-center bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-grey-800 mb-12 tracking-tight">About CAVELAB</h2>
          
          <div className="space-y-6 mb-16 max-w-3xl mx-auto bg-grey-50 border-4 border-grey-800 p-12">
            <p className="text-xl text-grey-700 leading-relaxed">
              CAVELAB Ltd is a registered Hong Kong company founded by a team of passionate students from the University of Hong Kong, including both postgraduate and undergraduate researchers.
            </p>
            
            <p className="text-xl text-grey-700 leading-relaxed">
              We bring together expertise in engineering and technology to tackle real-world healthcare challenges. Our multidisciplinary approach enables us to design innovative solutions that bridge the gap between cutting-edge research and practical application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-white border-2 border-grey-800 hover:bg-grey-800 hover:text-white transition-all duration-300 group"
            >
              <div className="text-5xl font-bold mb-3 group-hover:text-white">HK</div>
              <p className="text-grey-600 group-hover:text-grey-200 font-medium uppercase text-sm tracking-wide">Based in Hong Kong</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-white border-2 border-grey-800 hover:bg-grey-800 hover:text-white transition-all duration-300 group"
            >
              <div className="text-5xl font-bold mb-3 group-hover:text-white">2025</div>
              <p className="text-grey-600 group-hover:text-grey-200 font-medium uppercase text-sm tracking-wide">Established June 18</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

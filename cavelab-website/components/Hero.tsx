'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-white tech-grid">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-grey-800 mb-6 tracking-widest">
            CAVELAB
          </h1>
          <p className="text-xl md:text-2xl text-grey-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Engineering the future of healthcare through precision design and intelligent technology
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#vision"
              className="px-8 py-4 bg-grey-800 text-white font-medium rounded-none hover:bg-grey-700 transition-all duration-300 border-2 border-grey-800"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white border-2 border-grey-800 text-grey-800 font-medium rounded-none hover:bg-grey-800 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

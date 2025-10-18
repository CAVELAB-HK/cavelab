'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-white via-[#F8F9FA] to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-[#2B2B2B] mb-6 tracking-widest">
            CAVELAB
          </h1>
          <p className="text-xl md:text-2xl text-[#4A5568] mb-12 max-w-3xl mx-auto font-light leading-relaxed">
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
              className="px-8 py-4 bg-[#5B8C9E] text-white font-medium rounded-lg hover:bg-[#4A7A8C] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white border-2 border-[#E8EAED] text-[#2B2B2B] font-medium rounded-lg hover:border-[#5B8C9E] hover:text-[#5B8C9E] hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
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

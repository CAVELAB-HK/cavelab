'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const milestones = [
    { phase: 'Foundation', status: 'completed', description: 'Company established, team assembled' },
    { phase: 'Development', status: 'current', description: 'Product design and prototyping underway' },
    { phase: 'Testing', status: 'upcoming', description: 'Beta testing and user feedback' },
  ];

  return (
    <section id="roadmap" className="min-h-screen flex items-center bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-16 text-center">Our Journey</h2>
          
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex items-start gap-6 group"
              >
                <div className="flex-shrink-0 w-32">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    milestone.status === 'completed' 
                      ? 'bg-[#5B8C9E] text-white shadow-md' 
                      : milestone.status === 'current'
                      ? 'bg-white text-[#5B8C9E] border-2 border-[#5B8C9E] shadow-sm'
                      : 'bg-[#F8F9FA] text-[#9AA5B1] border border-[#E8EAED]'
                  }`}>
                    {milestone.status === 'completed' ? 'Complete' : milestone.status === 'current' ? 'In Progress' : 'Upcoming'}
                  </span>
                </div>
                
                <div className="flex-1 pb-8 border-l-2 border-[#E8EAED] pl-8 group-hover:border-[#5B8C9E]/30 transition-colors">
                  <div className="bg-white rounded-2xl p-6 border border-[#E8EAED] shadow-sm group-hover:shadow-lg transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-2">{milestone.phase}</h3>
                    <p className="text-[#4A5568]">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;


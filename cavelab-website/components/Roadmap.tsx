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
    <section id="roadmap" className="min-h-screen flex items-center bg-grey-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-grey-800 mb-16 text-center tracking-tight">Our Journey</h2>
          
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
                  <span className={`inline-block px-4 py-2 text-sm font-bold uppercase tracking-wide border-2 transition-all duration-300 ${
                    milestone.status === 'completed' 
                      ? 'bg-grey-800 text-white border-grey-800' 
                      : milestone.status === 'current'
                      ? 'bg-white text-grey-800 border-grey-800'
                      : 'bg-grey-100 text-grey-500 border-grey-300'
                  }`}>
                    {milestone.status === 'completed' ? 'Complete' : milestone.status === 'current' ? 'In Progress' : 'Upcoming'}
                  </span>
                </div>
                
                <div className="flex-1 pb-8 border-l-4 border-grey-300 pl-8 group-hover:border-grey-800 transition-colors">
                  <div className="bg-white border-2 border-grey-800 p-6 hover:bg-grey-800 hover:text-white transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">{milestone.phase}</h3>
                    <p className="text-grey-600 group-hover:text-grey-200">{milestone.description}</p>
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


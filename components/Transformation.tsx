import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from './ui/Section';

const benefits = [
  "Kill distraction at the root source",
  "Build ruthless, unbreakable focus",
  "Finish every single project you start",
  "Execute without needing 'motivation'",
  "Train your mind like a lethal weapon",
  "Reclaim 4+ hours of wasted time daily"
];

const Transformation: React.FC = () => {
  return (
    <Section className="bg-black relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight mb-8">
            Become <span className="text-brand-red">Dangerous</span><br />
            With Your Focus
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            This isn't a self-help book filled with fluff. It is a tactical manual designed to re-wire your brain for execution. We strip away the noise until only the mission remains.
          </p>
          <div className="h-1 w-20 bg-brand-red mb-8"></div>
        </motion.div>

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-neutral-900 border-l-2 border-neutral-800 hover:border-brand-red transition-all"
            >
              <div className="mt-1 bg-brand-red/20 p-1 rounded-full">
                <Check className="w-4 h-4 text-brand-red" />
              </div>
              <p className="text-lg font-medium text-neutral-200">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Transformation;
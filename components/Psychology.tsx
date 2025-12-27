import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { AlertTriangle, Clock, Target, Skull } from 'lucide-react';

const painPoints = [
  {
    icon: <Target className="w-8 h-8 text-brand-red" />,
    title: "You're Not Lazy.",
    text: "You're distracted. There is a massive difference. You have the energy, but it's leaking out in a thousand meaningless directions."
  },
  {
    icon: <Skull className="w-8 h-8 text-brand-red" />,
    title: "Quietly Dying.",
    text: "Distraction is killing your future quietly. Every time you pick up your phone instead of doing the work, you vote for a mediocre life."
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-brand-red" />,
    title: "Loss of Control.",
    text: "Every unfinished goal is proof that you are not in charge of your own mind. If you can't command your attention, you command nothing."
  },
  {
    icon: <Clock className="w-8 h-8 text-brand-red" />,
    title: "Time is Running Out.",
    text: "You think you have time. You don't. The window of opportunity for your dreams is closing faster than you realize."
  }
];

const Psychology: React.FC = () => {
  return (
    <Section className="bg-brand-charcoal border-t border-neutral-900">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4"
        >
          The Brutal Truth
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-white uppercase"
        >
          Why You Are <span className="text-neutral-600 line-through">Stuck</span> Dying Slowly
        </motion.h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-neutral-900/50 p-8 border border-neutral-800 hover:border-brand-red/50 transition-colors duration-300 group rounded-sm"
          >
            <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
              {point.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-brand-red transition-colors">
              {point.title}
            </h4>
            <p className="text-neutral-400 leading-relaxed">
              {point.text}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Psychology;
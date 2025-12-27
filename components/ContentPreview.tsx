import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';

const chapters = [
  { id: "01", title: "The Distraction Kill Switch", desc: "How to instantly silence the noise." },
  { id: "02", title: "Mental Discipline Training", desc: "Hardening the mind against weakness." },
  { id: "03", title: "Execution Without Motivation", desc: "Why feelings don't matter." },
  { id: "04", title: "Deep Work Protocols", desc: "Achieving flow state on command." },
  { id: "05", title: "The Finish Line Framework", desc: "Closing loops and shipping work." },
  { id: "06", title: "Becoming Dangerous", desc: "Leveraging focus for dominance." },
];

const ContentPreview: React.FC = () => {
  return (
    <Section id="content" className="bg-brand-gray border-t border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="font-display font-bold text-4xl text-white uppercase mb-4">Inside The War Plan</h2>
           <p className="text-neutral-400">Tactics. Strategies. Zero fluff.</p>
        </div>

        <div className="grid gap-4">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex items-center gap-6 p-6 bg-neutral-900/50 border border-neutral-800 hover:border-brand-red hover:bg-neutral-900 transition-all cursor-default"
            >
              <span className="font-display text-4xl font-bold text-neutral-800 group-hover:text-brand-red transition-colors">
                {chapter.id}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-brand-red transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-neutral-500 text-sm mt-1">{chapter.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContentPreview;
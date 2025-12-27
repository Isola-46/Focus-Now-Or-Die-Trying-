import React from 'react';
import Section from './ui/Section';

const SocialProof: React.FC = () => {
  return (
    <Section className="bg-brand-charcoal py-10 md:py-10">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { quote: "I used to start five projects a month and finish zero. This book changed my entire operating system.", author: "Marcus R.", role: "Entrepreneur" },
          { quote: "Brutal. Honest. Necessary. If you need a hug, go elsewhere. If you need results, read this.", author: "Sarah K.", role: "Creator" },
          { quote: "The chapter on 'Deep Work Protocols' alone is worth 10x the price. I finally wrote my thesis.", author: "David L.", role: "PhD Student" }
        ].map((item, idx) => (
          <div key={idx} className="bg-neutral-900/30 p-6 border border-neutral-800 rounded">
            <p className="text-neutral-300 italic mb-4">"{item.quote}"</p>
            <div>
              <p className="text-white font-bold text-sm">{item.author}</p>
              <p className="text-brand-red text-xs uppercase tracking-wider">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SocialProof;
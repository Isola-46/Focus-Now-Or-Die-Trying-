import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToPurchase = () => {
    document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden bg-brand-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Copy Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-red/30 rounded-full bg-brand-red/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            <span className="text-brand-red text-xs font-bold tracking-widest uppercase">New Release 2025</span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl leading-[0.9] text-white tracking-tighter mb-6">
            FOCUS NOW <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">
              OR DIE TRYING
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-neutral-300 mb-6 max-w-xl border-l-4 border-brand-red pl-4">
            For people who start everything... <span className="text-white font-bold italic">and finish nothing.</span>
          </h2>

          <p className="text-neutral-400 text-lg mb-10 max-w-lg leading-relaxed">
            This book is your war plan to destroy distractions, kill procrastination, and execute like a monster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToPurchase} className="group">
              <Zap className="w-5 h-5 fill-current" />
              Get The Book Now
            </Button>
            <Button variant="outline" onClick={scrollToContent} className="group">
              Read What's Inside
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <p className="mt-6 text-xs text-neutral-500 uppercase tracking-widest">
            Available Instant Digital Download
          </p>
        </motion.div>

        {/* 3D Book Mockup Side */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end perspective-1000"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative group w-[300px] md:w-[400px] aspect-[2/3]"
          >
            {/* Glow behind book */}
            <div className="absolute inset-0 bg-brand-red blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-xl"></div>
            
            {/* The Book Container */}
            <div className="relative w-full h-full rounded-r-lg rounded-l-[2px] shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg] overflow-hidden bg-neutral-900 border-l border-neutral-800">
               
               {/* 
                 NOTE: Updated with the direct image link extracted from the provided code.
               */}
               <img 
                 src="https://i.ibb.co/rGkt5Hs6/FOCUS-NOW-OR-DUE-TRYING.png" 
                 alt="Focus Now Or Die Trying Book Cover" 
                 className="w-full h-full object-cover"
               />

               {/* Lighting/Texture Overlays */}
               {/* Spine Hinge/Fold */}
               <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-r from-white/30 to-transparent z-20"></div>
               <div className="absolute left-[6px] top-0 bottom-0 w-px bg-black/50 z-20"></div>
               
               {/* Surface Sheen */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none mix-blend-overlay z-10"></div>
            </div>
            
            {/* Shadow under book */}
            <div className="absolute -bottom-10 left-10 right-10 h-4 bg-black blur-xl opacity-60"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
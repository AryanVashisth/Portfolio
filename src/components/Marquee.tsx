import { SKILLS } from '../constants';
import { motion } from 'motion/react';

export default function Marquee() {
  return (
    <div className="bg-brand-surface border-y border-white/5 py-6 sm:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 flex justify-between items-end">
        <div>
          <h3 className="text-xs font-mono text-brand-primary mb-2 uppercase tracking-[0.2em]">Tech Stack</h3>
          <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight italic">Toolbox <span className="text-white/20">/</span> Mastery</h2>
        </div>
        <div className="hidden md:block text-xs font-mono text-white/30 lowercase">
          [ constantly evolving ]
        </div>
      </div>
      
      <div className="flex overflow-hidden relative">
        <motion.div 
          className="flex gap-6 sm:gap-12 items-center whitespace-nowrap"
          animate={{ x: [0, -1035] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Double the list to create infinite effect */}
          {[...SKILLS, ...SKILLS].map((skill, index) => (
            <div key={index} className="flex items-center gap-3 sm:gap-4">
              <span className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-white/20 uppercase tracking-tighter hover:text-brand-primary transition-colors cursor-default">
                {skill.name}
              </span>
              <div className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

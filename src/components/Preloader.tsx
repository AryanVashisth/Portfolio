import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../constants';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500; // 2.5 seconds
    const interval = 20;
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += (100 / (duration / interval));
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => setLoading(false), 500); // Wait 500ms at 100% before exiting
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Use the SKILLS array for the marquee
  const marqueeSkills = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] bg-brand-bg flex flex-col items-center justify-center overflow-hidden"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Rotating Text Marquee Background */}
          <div className="absolute top-1/2 left-1/2 w-[200vw] -translate-x-1/2 -translate-y-1/2 -rotate-[10deg] opacity-10 pointer-events-none">
            <motion.div 
              className="flex gap-8 items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {/* Double the array for seamless infinite looping */}
              {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
                <span key={idx} className="text-6xl md:text-9xl font-black uppercase text-transparent bg-clip-text bg-brand-primary/50 tracking-tighter whitespace-nowrap">
                  {skill.name}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Centered Progress Counter */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.h1 
              className="text-8xl md:text-[160px] font-black italic tracking-tighter text-white mb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {progress}%
            </motion.h1>
            <div className="flex items-center gap-3 text-brand-primary font-mono text-sm uppercase tracking-widest">
              <span className="w-2 h-2 bg-brand-primary rounded-full animate-ping"></span>
              Loading Assets
            </div>
          </div>
          
          {/* Progress Bar Line */}
          <div className="absolute bottom-0 left-0 h-1 bg-brand-primary z-10" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

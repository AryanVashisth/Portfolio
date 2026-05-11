import { motion } from 'motion/react';
import { ArrowDownRight, Terminal } from 'lucide-react';
import { useEffect, useRef } from 'react';
import NeuralCanvas from './NeuralCanvas';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const rect = heroRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        heroRef.current.style.setProperty('--mouse-x', `${x}px`);
        heroRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Neural Network Canvas Animation */}
      <div className="absolute inset-0 z-0">
        <NeuralCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/30 via-transparent to-brand-bg/80 pointer-events-none" />
      </div>

      {/* Dynamic Mouse Spotlight Background */}
      <div 
        className="pointer-events-none absolute inset-0 z-[2] transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 200, 255, 0.08), transparent 40%)`
        }}
      />
      
      {/* Background elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-xs font-mono mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
          </span>
          AVAILABLE FOR NEW PROJECTS
        </motion.div>

        <motion.h1 
          className="text-[100px] md:text-[140px] lg:text-[180px] font-black leading-[0.8] tracking-tighter mb-8 text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          AI / ML<br />
          <span className="text-brand-primary italic">ENGINEER</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row items-start md:items-end gap-12 mt-12 justify-between">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="max-w-md text-left text-lg md:text-xl text-[#F0F0F0] opacity-80 font-light leading-relaxed">
              AI/ML Engineer with experience building end-to-end systems in NLP and computer vision. Focused on practical problems involving real-world data and automation.
            </p>
            <div className="flex gap-4">
              <a 
                href="#projects"
                className="pointer-events-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-black font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
              >
                View Work <ArrowDownRight size={16} />
              </a>
              <a 
                href="/resume.pdf"
                download="Aryan_Vashisth_Resume.pdf"
                className="pointer-events-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-brand-primary/50 text-brand-primary font-black uppercase tracking-widest text-sm hover:bg-brand-primary/10 transition-colors"
              >
                <Terminal size={16} /> Resume
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-end gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-[#F0F0F0] text-black px-6 py-4 rotate-[-3deg] font-black uppercase text-xs tracking-widest">
              Available for Q4
            </div>
            <div className="opacity-20 text-[10px] font-mono text-left uppercase tracking-tighter leading-none hidden sm:block">
              GLOBAL<br />
              ARYAN VASHISTH
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simple down arrow */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-brand-primary" />
      </motion.div>
    </section>
  );
}

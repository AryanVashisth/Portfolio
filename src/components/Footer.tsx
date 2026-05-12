import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="h-16 sm:h-20 bg-[#F0F0F0] text-black flex items-center overflow-hidden border-t border-black/10">
      <div className="flex whitespace-nowrap gap-4 sm:gap-8 md:gap-12 px-4 sm:px-6 items-center w-full">
        <motion.div 
          className="flex items-center gap-4 sm:gap-8 md:gap-12 shrink-0"
          animate={{ x: [0, -1035] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 sm:gap-8 md:gap-12">
              <span className="text-base sm:text-2xl md:text-3xl font-black italic">PYTHON</span>
              <div className="h-2 w-2 rounded-full bg-black flex-shrink-0"></div>
              <span className="text-base sm:text-2xl md:text-3xl font-black italic opacity-10">TENSORFLOW</span>
              <div className="h-2 w-2 rounded-full bg-black flex-shrink-0"></div>
              <span className="text-base sm:text-2xl md:text-3xl font-black italic">OPENCV</span>
              <div className="h-2 w-2 rounded-full bg-black flex-shrink-0"></div>
              <span className="text-base sm:text-2xl md:text-3xl font-black italic opacity-10">YOLO</span>
              <div className="h-2 w-2 rounded-full bg-black flex-shrink-0"></div>
              <span className="text-base sm:text-2xl md:text-3xl font-black italic">DOCKER</span>
              <div className="h-2 w-2 rounded-full bg-black flex-shrink-0"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}

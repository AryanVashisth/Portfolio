import { CERTIFICATIONS } from '../constants';
import { motion } from 'motion/react';
import { Cloud, Layout, BarChart, ExternalLink, Award } from 'lucide-react';

const ICON_MAP = {
  Cloud: Cloud,
  Layout: Layout,
  BarChart: BarChart,
};

export default function Certifications() {
  return (
    <section className="section-padding bg-brand-bg border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xs font-mono text-brand-primary mb-4 uppercase tracking-[0.2em]">Validation</h3>
            <h2 className="text-4xl font-display uppercase tracking-tight italic">
              CREDENTIALS <br />
              <span className="text-white/20">& HONORS</span>
            </h2>
            <p className="mt-8 text-white/40 leading-relaxed">
              Continuous learning is at the core of my technical evolution. 
              Certified by industry leaders.
            </p>
          </motion.div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div 
                  key={cert.id} 
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-px w-8 bg-brand-primary group-hover:w-12 transition-all" />
                  <div className="flex flex-col">
                    <span className="text-xs font-mono uppercase tracking-tighter text-[#F0F0F0] group-hover:text-brand-primary transition-colors">
                      {cert.title}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-white/20">
                      {cert.issuer} // {cert.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="bg-brand-surface p-8 border border-white/10 flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-40">System Status</h3>
                <div className="flex items-center gap-3 text-[10px] font-mono text-brand-primary">
                  <div className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
                  ALL SERVERS OPERATIONAL
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest opacity-20 font-mono mt-8">
                Integrity Verified // 256-bit AES
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

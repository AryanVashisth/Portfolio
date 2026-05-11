import { EXPERIENCE } from '../constants';
import { motion } from 'motion/react';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-brand-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xs font-mono text-brand-primary mb-4 uppercase tracking-[0.2em]">Curriculum Vitae</h3>
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-none">
            PROFESSIONAL <br />
            <span className="text-white/20 italic">TIMELINE</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5 last:border-0 group"
            >
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <div className="flex items-center gap-2 text-brand-primary font-mono text-xs mb-2">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-brand-primary transition-colors">
                    {exp.company}
                  </h4>
                </div>
              </div>
              
              <div className="md:col-span-3">
                <div className="flex items-center gap-2 text-white/40 mb-4">
                  <Briefcase size={16} />
                  <span className="font-medium">{exp.role}</span>
                </div>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-4 text-white/60 leading-relaxed">
                      <span className="text-brand-primary font-mono mt-1">/</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Send, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-brand-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs font-mono text-brand-primary mb-4 uppercase tracking-[0.2em]">Contact</h3>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-display uppercase tracking-tighter leading-none mb-8 sm:mb-12">
              LET'S BUILD <br />
              <span className="text-white/20 italic">SOMETHING</span> <br />
              <span className="text-brand-primary">NEW</span>
            </h2>

            <div className="space-y-8 sm:space-y-12">
              <div className="flex gap-4 sm:gap-6 group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-sm bg-brand-surface border border-white/5 flex items-center justify-center text-brand-primary group-hover:border-brand-primary transition-colors flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10px] sm:text-xs font-mono text-white/30 uppercase tracking-widest mb-1">Email</h4>
                  <a href="mailto:aryanvashisth01@gmail.com" className="text-sm sm:text-xl font-bold border-b border-transparent hover:border-brand-primary transition-all break-all">
                    aryanvashisth01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-sm bg-brand-surface border border-white/5 flex items-center justify-center text-brand-primary group-hover:border-brand-primary transition-colors flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-mono text-white/30 uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-sm sm:text-xl font-bold italic">Global / Remote</p>
                </div>
              </div>

              <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 sm:gap-8">
                {[
                  { name: 'GITHUB', url: 'https://github.com' },
                  { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/aryan-vashisth/' },
                  { name: 'SCHOLAR', url: 'https://scholar.google.com/citations?user=yCqMnfwAAAAJ&hl=en' }
                ].map(social => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-[9px] sm:text-[10px] items-center gap-1 font-mono text-white/40 hover:text-brand-primary transition-colors flex">
                    {social.name} <ArrowUpRight size={10} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-12 border border-white/10 rounded-sm relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="relative">
                <input 
                  required 
                  type="text" 
                  placeholder="YOUR NAME"
                  className="w-full bg-transparent border-b border-white/20 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase focus:border-brand-primary outline-none transition-colors placeholder:text-white/20"
                />
              </div>

              <div className="relative">
                <input 
                  required 
                  type="email" 
                  placeholder="YOUR EMAIL"
                  className="w-full bg-transparent border-b border-white/20 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase focus:border-brand-primary outline-none transition-colors placeholder:text-white/20"
                />
              </div>

              <div className="relative">
                <textarea 
                  required 
                  placeholder="PROJECT DETAILS / MESSAGE"
                  rows={3}
                  className="w-full bg-transparent border-b border-white/20 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase focus:border-brand-primary outline-none transition-colors placeholder:text-white/20 resize-none"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between pt-4 gap-4">
                <div className="opacity-20 text-[9px] sm:text-[10px] font-mono leading-relaxed hidden sm:block">
                  BY SUBMITTING YOU AGREE TO SYSTEM PROTOCOLS. <br />
                  ENCRYPTION: AES-256-GCM.
                </div>
                
                <button 
                  type="submit"
                  disabled={formState === 'submitting' || formState === 'success'}
                  className="flex items-center justify-center gap-2 bg-brand-primary text-black px-4 sm:px-6 py-3 sm:py-4 font-black italic uppercase tracking-widest text-xs hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                >
                  {formState === 'idle' && <>SEND <ArrowUpRight size={14} /></>}
                  {formState === 'submitting' && "TRANSMITTING..."}
                  {formState === 'success' && "DELIVERED ✓"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

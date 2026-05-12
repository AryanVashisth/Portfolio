import { BLOG_POSTS } from '../constants';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-brand-bg relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
        <motion.div 
          className="md:col-span-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-brand-primary mb-4">Insights & Journal</h3>
          <h2 className="text-2xl sm:text-4xl font-black uppercase italic leading-none mb-6 sm:mb-8">
            SYSTEM <br />
            <span className="text-white/20">LOGS</span>
          </h2>
          <p className="text-white/40 text-xs sm:text-sm leading-relaxed max-w-xs font-light">
            An archive of technical explorations, architectural decisions, and experimental findings.
          </p>
        </motion.div>

        <div className="md:col-span-8 flex flex-col border-l border-white/10">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              className="p-4 sm:p-6 md:p-8 border-b border-white/10 last:border-0 group hover:bg-white/5 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2 sm:gap-0">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase bg-white text-black px-2 py-1 font-black w-fit">
                  {post.category}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono opacity-20 italic italic">01.10.23 // SCROLL-LOCK</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-6">
                <div className="max-w-xl min-w-0">
                  <h4 className="text-lg sm:text-2xl font-black italic group-hover:text-brand-primary transition-colors mb-2">
                    {post.title}
                  </h4>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-tighter line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <div className="text-brand-primary text-xs font-black italic shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  READ_LOG {"->"}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { PROJECTS } from '../constants';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title reveal animation
    gsap.from(".project-title", {
      scrollTrigger: {
        trigger: ".projects-header",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out"
    });

    // Project cards staggered reveal
    const projects = gsap.utils.toArray('.project-card');
    
    projects.forEach((project: any) => {
      // Fade and slide up the card
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "top 85%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Parallax effect on the image
      const img = project.querySelector('img');
      if (img) {
        gsap.to(img, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: project,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section id="projects" className="bg-brand-bg border-t border-white/10 overflow-hidden" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
        <div className="projects-header md:col-span-12 p-6 sm:p-12 lg:p-24 border-b border-white/10">
          <h3 className="project-title text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-brand-primary mb-4">Gallery // Artifacts</h3>
          <h2 className="project-title text-4xl sm:text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter">
            SELECTED <br />
            <span className="text-white/20">WORKS</span>
          </h2>
        </div>

        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card md:col-span-6 border-b border-white/10 ${index % 2 === 0 ? 'md:border-r' : ''} p-4 sm:p-8 lg:p-16 flex flex-col group`}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-brand-surface mb-8">
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute top-[-20%] left-0 w-full h-[140%] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 text-[10px] font-mono bg-white text-black px-2 py-1 font-black">
                PROJECT_REF_0{index + 1}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2 sm:gap-0">
                <h3 className="text-xl sm:text-3xl font-black italic group-hover:text-brand-primary transition-colors">{project.title}</h3>
                <span className="text-[9px] sm:text-[10px] font-mono opacity-20 uppercase">{project.tags[0]}</span>
              </div>
              <p className="text-white/50 leading-relaxed mb-6 sm:mb-8 max-w-md text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <a href={project.link} className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest border-b border-brand-primary py-1 w-fit">
                  View Full Case Study {"->"}
                </a>
                <a href={project.github} className="opacity-20 hover:opacity-100 transition-opacity w-fit">
                  <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="md:col-span-12 p-4 sm:p-8 bg-brand-primary text-black flex justify-start overflow-x-auto h-20 sm:h-24 items-center gap-8">
           {Array.from({length: 4}).map((_, i) => (
             <span key={i} className="text-xl sm:text-3xl md:text-4xl font-black italic tracking-tighter whitespace-nowrap opacity-100">COLLABORATE. BUILD. SCALE.</span>
           ))}
        </div>
      </div>
    </section>
  );
}

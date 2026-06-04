import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';

export default function Projects() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`py-section-gap px-margin-mobile md:px-gutter relative transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-container-max mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="font-mono text-xs text-primary mb-2 tracking-[0.2em] uppercase">SELECTED WORKS</p>
            <h2 className="font-display text-3xl md:text-5xl text-on-surface font-extrabold tracking-tight">Projects</h2>
          </div>
          <a
            href="https://github.com/ruhan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 font-sans text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 interactive font-semibold"
          >
            View Archive <ArrowRight size={16} />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            // Determine image gradient style based on project index
            const isEven = project.id === 'dsa-tracker';
            const gradientClass = isEven
              ? 'absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent z-10'
              : 'absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10';

            return (
              <div
                key={project.id}
                className="glass-card rounded-xl p-6 md:p-8 flex flex-col group interactive"
              >
                {/* Image Container */}
                <div className="w-full h-48 md:h-56 bg-surface-container rounded-lg mb-6 relative overflow-hidden">
                  <div className={gradientClass} />
                  <img
                    alt={project.imageAlt}
                    title={project.imageDesc}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 transform"
                    src={
                      project.id === 'securelink'
                        ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZoINmq7wX_XNObnZPvqyDV8MERpcohZL1N-5MkRxFN1m1AXEpWwvubV8XLh5n3MNZgeamPFLdMCIWBJcOcbb4psyNwyXwPPE4lBtREWPTTE9J455GGYkGJXrMO-RRe2bXDFT7T43DjhvbpAcr0uO0PzsWzFDNPcHYmO1gknIxuLxHEiZd98w2OIMh_xYJm1eMgTZB_WtIbkF-q2yWTM2EkXJo_8IbbHfPC-CnFKK9pCk0vgFL1r6qZt2pkXhOJWWrcOfMbljvSBnl'
                        : project.id === 'dsa-tracker'
                        ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvf1ASK6nb7DfKtI1A6te2cdGVk-kQzAAOV80eiDY4Bhwea-agB-_nKgbLKEVsrm8KrLYXOmNcaj950OY1bgaN3vnrHrdxMuaFIY48Cl8opjt63KYTrJ-uHdNrnqW-f94M8G_o-F8acXVXOswOtvhcqhAFPtLfDSsCLbQShVROKbQ395pVIXsUGuKIxAxQJg4GPzGI8_BC_TJAPhocaODAE1JCsr_C7meoNTxLqoLevWgzJM-Hb-NWkL72ibjoxYAFRZopoI_rC553'
                        : 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5mxx1WIQNu-DDhcbgilSEY8MCMuFvdjR0apF9qyywrClul2zAt8vK83sGDK6qnG2lepTu6pS18Ps4rHaZUM8DOKLtSuQ7zlhCNH5CAR9YUClDX4XQ8TdVfE8vXlx2YXhZ4vU9n41ISatnJ38d3VO4h5C-pGsKiOZEMQnyTxlvOh3Z8GxNdZ_xY9Tx_u4R2Apw5_aPUpZT5gqstk3TbCP9B49t-QN7GPFwAjdD046i7GB2cOrn3zT3vw0GEVionAdAyF6vOHquJMx_'
                    }
                  />
                </div>

                {/* Info */}
                <h3 className="font-display text-xl md:text-2xl text-on-surface mb-3 font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="font-sans text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => {
                    let pillStyle = 'bg-surface-variant text-on-surface';
                    if (i === 0) {
                      pillStyle = 'bg-primary/10 text-primary';
                    } else if (i === 1) {
                      pillStyle = 'bg-secondary/10 text-secondary';
                    }

                    return (
                      <span
                        key={tech}
                        className={`font-mono text-xs px-2.5 py-1 rounded ${pillStyle}`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-2 border-t border-white/5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-1.5 text-xs font-semibold"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon size={16} /> Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-1.5 text-xs font-semibold"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-1.5 text-xs font-semibold"
                      aria-label={`${project.title} course link`}
                    >
                      <ExternalLink size={16} /> Course Link
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

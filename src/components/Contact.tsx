import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-section-gap px-margin-mobile md:px-gutter relative transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-container-max mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl md:text-7xl text-on-surface mb-8 font-extrabold tracking-tighter">
          Let's build something.
        </h2>
        
        <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
          Currently open for internship opportunities, research collaborations, and software engineering projects. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href="mailto:ruhan.dev@gmail.com"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-sans text-button-text rounded hover:shadow-[0_0_30px_rgba(70,241,197,0.5)] transition-all duration-300 active:scale-95 interactive flex items-center justify-center gap-2 font-semibold"
          >
            <Mail size={18} /> Say Hello
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-20 flex justify-center gap-8">
          <a
            href="https://github.com/ruhan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 interactive p-2 rounded-full border border-white/5 bg-surface-container/50 hover:border-primary/30"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href="https://linkedin.com/in/ruhan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-300 interactive p-2 rounded-full border border-white/5 bg-surface-container/50 hover:border-secondary/30"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

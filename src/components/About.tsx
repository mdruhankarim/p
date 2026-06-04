import { MapPin, Terminal } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { allSkills } from '../data/skills';

export default function About() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-section-gap px-margin-mobile md:px-gutter relative transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Secondary Violet Halo */}
      <div className="halo-secondary absolute bottom-[-200px] right-[-200px] w-[800px] h-[800px] pointer-events-none opacity-60" />

      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
        
        {/* Left: Bio Card */}
        <div className="md:col-span-5 glass-card rounded-xl p-8 md:p-10 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Avatar Container */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 mb-8 relative group">
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm z-10 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
              <Terminal size={32} className="text-primary" />
            </div>
            <img
              alt="Ruhan Portrait"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-105"
              src="https://i.ibb.co.com/JFtYm6ks/photo-2026-06-04-06-17-09.jpg"
            />
          </div>

          <h3 className="font-display text-2xl md:text-3xl text-on-surface mb-4 font-bold">About Me</h3>
          
          <p className="font-sans text-sm md:text-base text-on-surface-variant mb-6 leading-relaxed">
            I am a computer science student with a passion for distributed systems, applied artificial intelligence, and secure communication protocols. I thrive in environments that demand precision and scalable problem-solving.
          </p>

          <div className="flex items-center gap-2 text-primary font-mono text-xs tracking-wider">
            <MapPin size={14} />
            <span>Almaty, Kazakhstan</span>
          </div>
        </div>

        {/* Right: Skills & Code Card */}
        <div className="md:col-span-7 glass-card rounded-xl p-8 md:p-10 flex flex-col justify-between" id="skills">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-on-surface mb-8 font-bold">Technical Arsenal</h3>
            
            {/* Skills pill container */}
            <div className="flex flex-wrap gap-3">
              {allSkills.map((skill) => {
                // Secondary design for Web Crypto API or similar special tags
                const isSpecial = skill === 'Web Crypto API' || skill === 'C++';
                const pillClass = isSpecial 
                  ? 'glowing-pill-secondary px-4 py-2 rounded-full font-mono text-xs text-on-surface interactive cursor-default'
                  : 'glowing-pill px-4 py-2 rounded-full font-mono text-xs text-on-surface interactive cursor-default';

                return (
                  <span key={skill} className={pillClass}>
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Interactive Code Window */}
          <div className="mt-8 bg-surface-container rounded-lg p-6 border border-white/5 relative overflow-hidden group">
            {/* Window control circles */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-error/80"></div>
              <div className="w-3 h-3 rounded-full bg-surface-variant"></div>
              <div className="w-3 h-3 rounded-full bg-primary/80"></div>
            </div>

            {/* Code */}
            <pre className="font-mono text-xs text-on-surface-variant mt-6 overflow-x-auto">
              <code>
                <span className="text-secondary">const</span> <span className="text-primary">developer</span> = &#123;{"\n"}
                {"    "}<span className="text-on-surface">status</span>: <span className="text-primary-container">'learning'</span>,{"\n"}
                {"    "}<span className="text-on-surface">focus</span>: [<span className="text-primary-container">'AI'</span>, <span className="text-primary-container">'Systems'</span>],{"\n"}
                {"    "}<span className="text-on-surface">coffeeIntake</span>: <span className="text-error">Infinity</span>,{"\n"}
                {"    "}<span className="text-on-surface">build</span>: <span className="text-secondary">async</span> () =&gt; &#123;{"\n"}
                {"        "}<span className="text-secondary">await</span> <span className="text-primary">changeTheWorld</span>();{"\n"}
                {"    "}&#125;{"\n"}
                &#125;;
              </code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
}

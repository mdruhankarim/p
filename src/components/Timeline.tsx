import { useScrollReveal } from '../hooks/useScrollReveal';

interface TimelineItem {
  role: string;
  institution: string;
  duration: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    role: 'B.S. Computer Science',
    institution: 'Satbayev University',
    duration: '2024 — Present',
    description:
      'Focusing on algorithms, data structures, and system architecture. Active member of the competitive programming team and lead developer for student engineering projects.',
  },
];

export default function Timeline() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`py-section-gap px-margin-mobile md:px-gutter relative transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <p className="font-mono text-xs text-primary mb-2 text-center tracking-[0.2em] uppercase">JOURNEY</p>
        <h2 className="font-display text-3xl md:text-5xl text-on-surface mb-16 text-center font-extrabold tracking-tight">
          Education &amp; Experience
        </h2>
        
        {/* Vertical Track */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 py-4 space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="relative">
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(70,241,197,0.5)]"></div>
              
              {/* Content Card */}
              <div className="glass-card p-6 md:p-8 rounded-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h4 className="font-display text-lg md:text-xl text-on-surface font-bold">
                      {item.role}
                    </h4>
                    <p className="font-mono text-sm text-primary">
                      {item.institution}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-on-surface-variant bg-surface-container px-3 py-1 rounded w-fit h-fit border border-white/5">
                    {item.duration}
                  </span>
                </div>
                <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

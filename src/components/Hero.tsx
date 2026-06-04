import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Explicit tuple type
      },
    },
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-margin-mobile md:px-gutter pt-20 pb-20 overflow-hidden">
      {/* Primary Cyan Halo */}
      <div className="halo-primary absolute top-[-100px] left-[-100px] w-[600px] h-[600px] pointer-events-none opacity-80" />

      {/* Main Content Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-container-max mx-auto relative z-10"
      >
        {/* System init tag */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-xs md:text-sm text-primary mb-6 tracking-[0.2em] uppercase"
        >
          System Initialization Complete
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-8xl text-on-surface mb-6 font-extrabold tracking-tighter"
        >
          Ruhan
        </motion.h1>

        {/* Subtitles / Roles */}
        <motion.h2
          variants={itemVariants}
          className="font-display text-xl md:text-3xl text-on-surface-variant mb-8 max-w-3xl mx-auto font-bold tracking-tight"
        >
          CS Student <span className="text-primary/45 mx-1 md:mx-2">·</span> AI Developer{' '}
          <span className="text-secondary/45 mx-1 md:mx-2">·</span> Full-Stack Engineer
        </motion.h2>

        {/* Tagline / Pitch */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building robust architectures and intelligent systems. Bridging the gap between elegant theory and resilient production code.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-sm sm:max-w-none mx-auto"
        >
          <a
            href="#work"
            onClick={(e) => handleScrollTo(e, 'work')}
            className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-sans text-button-text rounded hover:shadow-[0_0_30px_rgba(70,241,197,0.5)] transition-all duration-300 active:scale-95 interactive flex items-center justify-center gap-2 font-semibold"
          >
            View Projects <ArrowDown size={16} className="animate-bounce" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-outline text-on-surface font-sans text-button-text rounded hover:border-primary hover:text-primary transition-all duration-300 active:scale-95 interactive flex items-center justify-center font-semibold"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

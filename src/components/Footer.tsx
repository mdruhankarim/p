import React from 'react';

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer className="bg-surface w-full py-20 border-t border-white/5 relative z-10">
      <div className="flex flex-col items-center justify-center space-y-6 text-center px-margin-mobile max-w-container-max mx-auto">
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, '#')}
          className="font-display text-headline-md text-primary tracking-tighter hover:text-white transition-colors duration-300 font-bold"
        >
          RUHAN
        </a>
        <div className="flex gap-6">
          <a
            href="https://github.com/ruhan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/ruhan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@ruhan.dev"
            className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            Email
          </a>
        </div>
        <p className="text-xs text-on-surface-variant opacity-50">
          © 2024 RUHAN. Built with technical precision.
        </p>
      </div>
    </footer>
  );
}

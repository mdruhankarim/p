import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#about' }, // Skills is inside about section
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle transparent to frosted glass background transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for nav link highlighting
  useEffect(() => {
    const sections = ['work', 'about', 'experience', 'contact'];
    
    const handleScrollActive = () => {
      const scrollPosition = window.scrollY + 120; // offset for nav height

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollActive);
    // Initial check
    handleScrollActive();
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      // update hash manually
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full h-20 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-background/85 backdrop-blur-xl border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex justify-between items-center h-full px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#')}
            className="font-display text-headline-md tracking-tighter text-on-surface hover:text-primary transition-colors duration-300 interactive font-bold"
          >
            RUHAN
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = 
                (link.href === '#work' && activeSection === 'work') ||
                (link.href === '#about' && activeSection === 'about') ||
                (link.href === '#experience' && activeSection === 'experience');
              
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-colors duration-300 interactive ${
                    isActive
                      ? 'text-primary'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary font-sans text-button-text rounded hover:shadow-[0_0_20px_rgba(70,241,197,0.4)] transition-all duration-300 active:scale-95 interactive font-semibold"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-on-surface hover:text-primary transition-colors p-2 interactive"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-72 bg-surface border-l border-white/5 p-8 flex flex-col justify-between md:hidden"
            >
              <div className="flex flex-col space-y-8 pt-20">
                {navLinks.map((link, i) => {
                  const isActive = 
                    (link.href === '#work' && activeSection === 'work') ||
                    (link.href === '#about' && activeSection === 'about') ||
                    (link.href === '#experience' && activeSection === 'experience');
                    
                  return (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`text-lg font-medium transition-colors ${
                        isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full text-center py-3 bg-primary text-on-primary rounded font-semibold hover:shadow-[0_0_15px_rgba(70,241,197,0.4)] transition-all"
                >
                  Contact
                </motion.a>
              </div>
              
              <div className="text-center text-xs text-on-surface-variant/40">
                © 2024 RUHAN
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

import { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioMain() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  // Custom Cursor trailing effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;
      }
      
      // Delay the outline slightly for smooth tail effect
      setTimeout(() => {
        if (cursorOutlineRef.current) {
          cursorOutlineRef.current.style.left = `${posX}px`;
          cursorOutlineRef.current.style.top = `${posY}px`;
        }
      }, 55);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Event delegation to scale cursor outline on hover of interactive elements
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('interactive') ||
        target.closest('.interactive');
        
      if (isInteractive) {
        document.body.classList.add('hovering');
      } else {
        document.body.classList.remove('hovering');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // Scroll to hash on load/reload
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '').replace('/', '');
      if (id) {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const navOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - navOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 300);
      }
    }
  }, []);

  return (
    <div className="relative text-on-surface antialiased overflow-x-hidden min-h-screen">
      {/* Noise background overlay */}
      <div className="noise-bg" />

      {/* Custom Cursor elements (hidden on mobile) */}
      <div ref={cursorDotRef} className="cursor-dot hidden md:block" />
      <div ref={cursorOutlineRef} className="cursor-outline hidden md:block" />

      {/* Top Navbar */}
      <Navbar />

      {/* Main sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PortfolioMain />} />
      </Routes>
    </Router>
  );
}

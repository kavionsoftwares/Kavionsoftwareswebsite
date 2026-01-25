
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import About from './components/About';
import DataSection from './components/DataSection';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ChatBot from './components/ChatBot';
import AnimatedBackground from './components/visuals/AnimatedBackground';
import GridShimmer from './components/visuals/GridShimmer';

const App: React.FC = () => {
  const [isNotFound, setIsNotFound] = useState(false);

  // Simple "routing" simulation for the 404 request
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#404-demo') {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth scrolling JavaScript logic
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Removed window.history.pushState to fix SecurityError in restricted environments
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  if (isNotFound) {
    return (
      <div className="relative min-h-screen bg-[#030303] text-white selection:bg-[#19E76E] selection:text-black">
        <AnimatedBackground />
        <GridShimmer />
        <NotFound onHome={() => window.location.hash = ''} />
      </div>
    );
  }

  return (
    <div id="top" className="relative min-h-screen bg-[#030303] text-white selection:bg-[#19E76E] selection:text-black">
      {/* Universal Visual Components */}
      <AnimatedBackground />
      <GridShimmer />
      
      {/* Content Layout */}
      <Header />
      
      <main className="relative z-10">
        <Hero />
        
        <About />

        <DataSection />

        <Process />

        <Services />

        <Testimonials />

        <Blog />

        <FAQ />

        <Contact />
      </main>

      <Footer />
      <ChatBot />
      
      {/* Global CSS for unique effects */}
      <style>{`
        html { 
          scroll-behavior: smooth; 
        }
        body { cursor: crosshair; }
        
        ::selection {
          background-color: #19E76E;
          color: black;
        }

        .border-white\\/5 { border-color: rgba(255, 255, 255, 0.05); }
        .bg-white\\/\\[0\\.02\\] { background-color: rgba(255, 255, 255, 0.02); }
        .hover\\:bg-white\\/\\[0\\.05\\]:hover { background-color: rgba(255, 255, 255, 0.05); }
        
        /* Cursor proximity trigger simulation for certain elements */
        .proximity-glow {
          transition: box-shadow 0.3s ease;
        }
        .proximity-glow:hover {
          box-shadow: 0 0 30px rgba(25, 231, 110, 0.2);
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.3; transform: translate(-50%, -50%) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default App;

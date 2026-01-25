
import React, { useEffect, useState } from 'react';
import Button from './ui/Button';

const ParallaxShape: React.FC<{ 
  className?: string; 
  speed: number; 
  style?: React.CSSProperties 
}> = ({ className, speed, style }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      className={`absolute pointer-events-none transition-transform duration-75 ease-out ${className}`}
      style={{ transform: `translateY(${offset}px)`, ...style }}
    />
  );
};

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trustValues = [
    "NO TEMPLATES", "24/7 SUPPORT", "1-DAY RESPONSE", "CUSTOM ENGINEERED", 
    "ZERO SHORTCUTS", "ENTERPRISE QUALITY", "CLIENT FOR LIFE", "2026 ARCHITECTURE"
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Parallax Abstract Shapes */}
      <ParallaxShape 
        speed={-0.2} 
        className="top-[15%] -left-20 w-[600px] h-[600px] bg-[#19E76E]/5 rounded-full blur-[120px]" 
      />
      <ParallaxShape 
        speed={-0.4} 
        className="top-[40%] -right-40 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[150px]" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#19E76E]/20 bg-[#19E76E]/5 rounded-full mb-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#19E76E]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#19E76E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#19E76E]"></span>
              </span>
              Available Q3 2026 • Systems Optimal
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12 uppercase">
            <span className={`block transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              We Build Digital
            </span>
            <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-[#19E76E] via-white to-white/40 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Growth Engines.
            </span>
            <span className={`block italic font-light lowercase transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              (not just websites)
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-white/60 max-w-3xl mb-14 font-light leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Kavion Softwares engineers high-conversion, professional ecosystems for 
            brands that refuse to blend in. In 2026, visual credibility is 
            non-negotiable—we ensure you lead the pack.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a href="#contact"><Button variant="secondary">Start Your Transformation</Button></a>
            <a href="#process"><Button variant="ghost">Our Custom Process</Button></a>
          </div>
        </div>
      </div>

      {/* Trust Bar Ticker */}
      <div className="absolute bottom-24 left-0 w-full overflow-hidden border-y border-white/5 bg-black/40 backdrop-blur-sm py-4 select-none">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...trustValues, ...trustValues].map((val, i) => (
            <div key={i} className="flex items-center mx-12">
              <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase font-bold">{val}</span>
              <div className="w-1 h-1 bg-[#19E76E] rounded-full ml-12 opacity-50" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 font-mono text-[9px] uppercase tracking-[0.4em]">
        <div className="w-px h-8 bg-gradient-to-b from-[#19E76E] to-transparent" />
        Scroll
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

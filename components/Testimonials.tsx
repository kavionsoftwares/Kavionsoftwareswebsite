
import React, { useState, useEffect, useRef } from 'react';

const AuthoritySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-black border-y border-white/5 relative overflow-hidden"
    >
      {/* Background Pattern Interrupt - Stronger Gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,_#19E76E22_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,_#19E76E11_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
          
          {/* Left Side: The Narrative & Citation */}
          <div className="lg:w-1/2 space-y-10 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#19E76E]" />
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#19E76E] font-bold">Authority Protocol</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white uppercase">
              Visual <span className="text-white/40">Credibility</span> <br />
              Is Non-Negotiable.
            </h2>

            <div className="relative p-8 border border-white/10 bg-white/[0.02] backdrop-blur-md">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#19E76E]" />
              <p className="text-xl md:text-2xl text-white/80 leading-snug font-light italic">
                The importance of web design cannot be overstated, because nearly all initial impressions are based on visual aesthetics, meaning your business's future is determined in milliseconds.
              </p>
            </div>

            <div className="flex items-center gap-4 opacity-40">
              <div className="w-1 h-1 rounded-full bg-white" />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Source: British Computer Society, 2019</span>
            </div>
          </div>

          {/* Right Side: The Hero Statistic (94%) */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative group cursor-default">
              {/* Radial Progress Simulation */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="transparent"
                    className="text-white/5"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray="100 100"
                    strokeDashoffset={isVisible ? "6" : "100"}
                    className="text-[#19E76E] transition-all duration-[2000ms] ease-out shadow-[0_0_20px_#19E76E]"
                    style={{ strokeDasharray: '280%', strokeDashoffset: isVisible ? '17%' : '280%' }}
                  />
                </svg>

                <div className="text-center transition-all duration-700 group-hover:scale-105">
                  <div className={`text-8xl md:text-9xl lg:text-[11rem] font-black text-white leading-none tracking-tighter transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    94<span className="text-[#19E76E] animate-pulse-glow">%</span>
                  </div>
                  <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/40 mt-4 font-bold">
                    Design Impact Factor
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#19E76E]/0 group-hover:bg-[#19E76E]/5 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Closing Action */}
        <div className="mt-24 text-center">
          <p className="text-white/30 text-sm font-light mb-8 max-w-2xl mx-auto">
            If your website feels like an afterthought, you are forfeiting nearly all of your brand’s potential for conversion before the user even reads your first word.
          </p>
          <a href="#contact" className="inline-flex items-center gap-4 group">
             <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-white group-hover:text-[#19E76E] transition-colors">Audit Your Presence</span>
             <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#19E76E] transition-all group-hover:translate-x-1">
                <svg className="w-4 h-4 text-[#19E76E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
             </div>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(25, 231, 110, 0.4)); }
          50% { filter: drop-shadow(0 0 15px rgba(25, 231, 110, 0.8)); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default AuthoritySection;

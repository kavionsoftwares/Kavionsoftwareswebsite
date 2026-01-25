
import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const platforms = [
    { 
      name: "CURSOR", 
      desc: "Intelligent code completion powered by AI - write custom websites faster with context-aware suggestions that understand your entire codebase." 
    },
    { 
      name: "NOTION", 
      desc: "All-in-one workspace for project planning, client documentation, and collaborative design - organize every aspect of your web development process in one place." 
    },
    { 
      name: "WRITER", 
      desc: "AI-powered content generation for website copy, blog posts, and marketing materials - create compelling brand narratives that convert visitors into customers." 
    },
    { 
      name: "BASITEN", 
      desc: "Advanced automation platform for workflow optimization - streamline repetitive tasks and focus on what matters: building exceptional custom websites." 
    },
    { 
      name: "GAMMA", 
      desc: "Create stunning presentations and pitch decks in minutes - showcase your web design proposals with beautiful, interactive slides that win clients." 
    },
    { 
      name: "ABRIDGE", 
      desc: "Transform meeting recordings into actionable insights - capture every client requirement and feedback automatically for perfect project execution." 
    },
    { 
      name: "CLAY", 
      desc: "Intelligent CRM and relationship management - track leads, manage client interactions, and automate outreach to grow your web development business." 
    },
    { 
      name: "MERCO", 
      desc: "Data-driven market research and competitive analysis - understand your clients' industries deeply to build websites that dominate their competition." 
    }
  ];

  return (
    <section className="py-24 border-y border-white/5 bg-black transition-all duration-700 ease-in-out relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Frustration Title */}
        <div className="text-center mb-20 px-4 max-w-7xl mx-auto relative z-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[calc(-0.05em)] text-white mb-6 leading-[0.85] uppercase transition-all duration-500">
            ARE YOU READY <br className="hidden md:block" /> TO KEEP UP? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19E76E] via-[#10b981] to-[#19E76E] animate-pulse">
              AUTOMATION ACHIEVES 10X MORE!
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#19E76E] mx-auto mt-8 opacity-50" />
        </div>

        {/* Interactive Platform Section */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative p-8 md:p-16 lg:p-24 border border-white/10 transition-all duration-700 ease-in-out group cursor-default overflow-hidden
            ${isHovered ? 'bg-[#19E76E] shadow-[0_0_80px_rgba(25,231,110,0.3)]' : 'bg-[#030303]'}
          `}
        >
          {/* Header Area with The Standard For Innovators inside a Black Box on hover */}
          <div className="text-center mb-24 relative z-10 flex flex-col items-center">
            <div className={`transition-all duration-500 transform px-10 py-5 border border-transparent
              ${isHovered ? 'bg-black text-[#19E76E] border-[#19E76E]/40 shadow-2xl translate-y-0 scale-105' : 'bg-transparent text-white/30 translate-y-0'}
            `}>
              <span className="font-mono text-[11px] md:text-[14px] uppercase tracking-[0.6em] font-black whitespace-nowrap">
                The standard for innovators
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12 relative z-10">
            {platforms.map((platform) => (
              <div 
                key={platform.name} 
                className="flex flex-col transition-all duration-500 group/item"
              >
                <h4 className={`font-mono text-3xl font-black tracking-tighter mb-4 transition-colors duration-500
                  ${isHovered ? 'text-black' : 'text-white/80'}
                `}>
                  {platform.name}
                </h4>
                <p className={`text-sm leading-relaxed font-medium transition-colors duration-500
                  ${isHovered ? 'text-black/80' : 'text-white/40'}
                `}>
                  {platform.desc}
                </p>
                <div className={`mt-6 h-0.5 transition-all duration-500 
                  ${isHovered ? 'bg-black/30 w-full' : 'bg-white/10 w-8 group-hover/item:w-16'}
                `} />
              </div>
            ))}
          </div>

          {/* Call to Action within section */}
          <div className={`mt-24 text-center transition-all duration-700 delay-100 relative z-10
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <a href="#contact" className="inline-block">
              <button className="bg-black text-[#19E76E] px-12 py-5 font-mono text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all border-2 border-black group/btn shadow-xl">
                Scale Your Business →
              </button>
            </a>
          </div>

          {/* Decorative Grid Accent */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:40px_40px]`} />
        </div>

        {/* Existing Testimonial Quote */}
        <div className="mt-40 max-w-5xl mx-auto border-l border-white/10 pl-12 relative group">
          <div className="absolute top-0 left-0 w-1 h-12 bg-[#19E76E] transition-all duration-500 group-hover:h-full" />
          <blockquote className="text-4xl md:text-5xl font-light italic leading-tight text-white/80 group-hover:text-white transition-colors duration-500">
            "Kavion Softwares helped us hit insane revenue numbers without ever thinking about scaling UI. Their engineering-first design philosophy is literally a game-changer."
          </blockquote>
          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#19E76E] to-blue-500" />
            <div>
              <p className="font-bold tracking-tight">Isaiah Granet</p>
              <p className="text-sm font-mono text-white/40 uppercase">CEO @ BLAND AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#19E76E]/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default Testimonials;

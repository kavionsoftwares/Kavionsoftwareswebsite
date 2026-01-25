
import React, { useState, useEffect } from 'react';
import { LucideSearch, LucidePalette, LucideCode2, LucideRocket } from 'lucide-react';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Discovery & Blueprint",
      icon: <LucideSearch />,
      desc: "We dive deep into your goals. If you love an enterprise-level site, we reverse-engineer its features to replicate that premium feel for your brand."
    },
    {
      num: "02",
      title: "Engineered Layouts",
      icon: <LucidePalette />,
      desc: "Using custom automation and personalized prompts, we generate design structures that perfectly align with your brand's unique colors and slogans."
    },
    {
      num: "03",
      title: "Active Build Phase",
      icon: <LucideCode2 />,
      desc: "We code custom bots, integrate high-fidelity imagery, and tailor every section. We do not stop until the interface is flawless and you are 100% happy."
    },
    {
      num: "04",
      title: "Launch & Support",
      icon: <LucideRocket />,
      desc: "Rigorous testing of every button and form. After your final approval, we launch. But we don't leave—we provide ongoing check-ups for life."
    }
  ];

  return (
    <section id="process" className="py-32 relative bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-32">
          <div className="p-1 border border-[#19E76E]/20 inline-block rounded-full mb-8">
            <div className="px-6 py-1 bg-[#19E76E]/5 rounded-full font-mono text-[10px] text-[#19E76E] uppercase tracking-widest font-bold">
              Transparent Roadmap
            </div>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            Point A <span className="text-white/20">To</span> Point B.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Central Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/5 hidden lg:block" />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col lg:flex-row items-center gap-12 group transition-all duration-700
                  ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                `}
                onMouseEnter={() => setActiveStep(i)}
              >
                {/* Visual Circle on Line */}
                <div className="hidden lg:flex absolute left-[50%] -translate-x-1/2 w-12 h-12 bg-black border border-white/10 rounded-full items-center justify-center z-20 group-hover:border-[#19E76E] transition-colors duration-500">
                  <div className={`w-3 h-3 rounded-full transition-all duration-500 ${activeStep === i ? 'bg-[#19E76E] scale-125 shadow-[0_0_15px_#19E76E]' : 'bg-white/10'}`} />
                </div>

                <div className="flex-1 w-full">
                  <div className={`p-10 border border-white/5 bg-white/[0.01] backdrop-blur-sm group-hover:bg-white/[0.03] transition-all duration-500 relative
                    ${i % 2 === 0 ? 'text-right lg:pr-16' : 'text-left lg:pl-16'}
                  `}>
                    <span className="font-mono text-[#19E76E] text-sm font-black tracking-widest mb-4 block uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                      Phase {step.num}
                    </span>
                    <h3 className="text-3xl font-black mb-6 uppercase tracking-tight group-hover:text-white transition-colors">{step.title}</h3>
                    <p className="text-white/40 leading-relaxed text-sm group-hover:text-white/70 transition-colors">{step.desc}</p>
                    
                    {/* Floating Step Icon */}
                    <div className={`absolute top-10 text-[#19E76E]/10 group-hover:text-[#19E76E]/20 transition-all duration-700
                      ${i % 2 === 0 ? 'left-10' : 'right-10'}
                    `}>
                      {React.cloneElement(step.icon as React.ReactElement, { size: 64, strokeWidth: 0.5 })}
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-40 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8">Ready to initiate?</p>
          <a href="#contact" className="inline-block border-b border-[#19E76E] pb-2 font-mono text-sm text-white hover:text-[#19E76E] transition-colors">
            View Sample Timeline Document →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;

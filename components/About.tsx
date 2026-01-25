
import React from 'react';
import { LucideShieldCheck, LucideZap, LucideUsers, LucideTrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-black">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#19E76E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Header Section */}
        <div className="max-w-5xl mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#19E76E]" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#19E76E] font-bold">The Mission Protocol</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white uppercase mb-12">
            Rescuing Brands From <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19E76E] via-white to-white/40">Generic Limitations.</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/80 font-light leading-tight italic border-l-4 border-[#19E76E] pl-8">
            "In 2026, a business’s website is its most critical handshake and often marks the difference between a lost lead and a loyal customer."
          </p>
        </div>

        {/* Core Mission Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="p-10 border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-[#19E76E]/30 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-6 text-[#19E76E]">The Rescue Mission</h3>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              At Kavion Softwares, our mission is to rescue small and medium-sized businesses from the limitations of generic, broken templates that fail to capture a unique brand identity. 
            </p>
            <p className="text-lg text-white/90 font-semibold leading-relaxed">
              We believe that a poor website is a poor representation of your hard work.
            </p>
          </div>

          <div className="p-10 border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-[#19E76E]/30 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-6 text-white uppercase tracking-tighter">Service Overview</h3>
            <p className="text-lg text-white/60 leading-relaxed">
              We specialize in creating fully personalized, professional web solutions from the ground up. By rejecting cookie-cutter designs, we ensure that every client receives a tailored digital presence. Whether we are building a high-impact landing page or a complex multi-page site, every element is designed specifically to build trust, command attention, and help you compete effectively in a market where visual credibility is everything.
            </p>
          </div>
        </div>

        {/* Commitment & Interaction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col p-10 border border-white/5 bg-black hover:bg-white/[0.03] transition-all duration-500 relative group overflow-hidden">
            <LucideUsers className="text-[#19E76E] mb-8 group-hover:scale-110 transition-transform duration-500" size={40} strokeWidth={1} />
            <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Lifetime Relationships</h4>
            <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">
              Our commitment goes far beyond writing code because we are dedicated to building genuine, lifetime relationships that turn digital challenges into measurable sales. We operate as one team with our clients.
            </p>
            <div className="absolute bottom-0 left-0 h-1 bg-[#19E76E] w-0 group-hover:w-full transition-all duration-700" />
          </div>

          <div className="flex flex-col p-10 border border-white/5 bg-black hover:bg-white/[0.03] transition-all duration-500 relative group overflow-hidden">
            <LucideZap className="text-[#19E76E] mb-8 group-hover:scale-110 transition-transform duration-500" size={40} strokeWidth={1} />
            <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Advanced Automation</h4>
            <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">
              We operate as one team with our clients and utilize advanced automation along with custom engineered features, such as intelligent chatbots, to drive real world results and increase brand reliability.
            </p>
            <div className="absolute bottom-0 left-0 h-1 bg-[#19E76E] w-0 group-hover:w-full transition-all duration-700" />
          </div>

          <div className="flex flex-col p-10 border border-white/5 bg-black hover:bg-white/[0.03] transition-all duration-500 relative group overflow-hidden">
            <LucideTrendingUp className="text-[#19E76E] mb-8 group-hover:scale-110 transition-transform duration-500" size={40} strokeWidth={1} />
            <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Scalable Assets</h4>
            <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">
              From our transparent process to our constant responsiveness and unlimited ongoing support, our goal is to solve your problems rather than just complete a transaction.
            </p>
            <div className="absolute bottom-0 left-0 h-1 bg-[#19E76E] w-0 group-hover:w-full transition-all duration-700" />
          </div>
        </div>

        {/* Final Thoughts Statement */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.6em] text-white/20 mb-8 font-bold">Future Proofing v2.6</p>
          <h5 className="text-2xl md:text-4xl font-light text-white/70 leading-relaxed mb-12">
            We do not just deliver a website. Instead, we provide a <span className="text-white font-medium italic underline decoration-[#19E76E]/40">scalable, secure, and interactive asset</span> that grows alongside your business.
          </h5>
          <div className="p-1 border border-[#19E76E]/30 inline-block rounded-full">
            <div className="px-8 py-2 bg-[#19E76E]/10 rounded-full font-mono text-[11px] text-[#19E76E] uppercase tracking-[0.2em] font-bold">
              Stay at the forefront of innovation
            </div>
          </div>
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute -right-20 top-1/2 -rotate-90 origin-center pointer-events-none hidden xl:block">
        <span className="font-mono text-[120px] font-black opacity-[0.01] whitespace-nowrap uppercase select-none">
          CRAFTED NOT COPIED
        </span>
      </div>
    </section>
  );
};

export default About;

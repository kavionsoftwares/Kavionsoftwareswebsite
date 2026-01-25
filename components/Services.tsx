
import React, { useState } from 'react';
import { LucideLayout, LucideZap, LucideTerminal, LucideGlobe, LucideCpu, LucideDatabase, LucideCheckCircle2, LucidePlusCircle } from 'lucide-react';

const ComparisonModule: React.FC = () => {
  const [view, setView] = useState<'landing' | 'multi'>('landing');

  return (
    <div className="mb-32">
      <div className="flex justify-center mb-12">
        <div className="bg-white/5 p-1 rounded-full border border-white/10 flex items-center">
          <button 
            onClick={() => setView('landing')}
            className={`px-8 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest transition-all ${view === 'landing' ? 'bg-[#19E76E] text-black font-bold' : 'text-white/60 hover:text-white'}`}
          >
            Landing Page
          </button>
          <button 
            onClick={() => setView('multi')}
            className={`px-8 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest transition-all ${view === 'multi' ? 'bg-[#19E76E] text-black font-bold' : 'text-white/60 hover:text-white'}`}
          >
            Multi-Page Site
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="p-8 md:p-12 border border-white/5 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#19E76E] opacity-50" />
          <h3 className="text-4xl font-bold mb-8 uppercase tracking-tighter">
            {view === 'landing' ? 'The Impact Engine' : 'The Enterprise Ecosystem'}
          </h3>
          <p className="text-white/60 leading-relaxed mb-10 text-lg">
            {view === 'landing' 
              ? "Perfect for single-focus goals. Landing pages eliminate distractions and drive users toward one specific action with maximum velocity."
              : "Ideal for established brands. Multi-page sites build depth, house complex content, and establish authority across multiple service vectors."}
          </p>
          <ul className="space-y-4 mb-10">
            {(view === 'landing' 
              ? ["Single high-impact CTA", "Minimized bounce rates", "Faster build time", "Focused conversion tracking"]
              : ["Deep information hierarchy", "Multiple service gateways", "Comprehensive SEO coverage", "Expanded brand storytelling"]
            ).map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                <LucideCheckCircle2 className="text-[#19E76E]" size={18} />
                {item}
              </li>
            ))}
          </ul>
          <a 
            href="#contact" 
            className="font-mono text-[10px] uppercase tracking-widest p-4 bg-white/5 border border-white/10 inline-block text-[#19E76E] hover:bg-[#19E76E]/10 transition-colors"
          >
            Inquire for tailored costs
          </a>
        </div>

        <div className="space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-[0.4em] text-[#19E76E] mb-4">Strategic Insights</h4>
          <div className="p-6 border border-white/5 hover:border-[#19E76E]/20 transition-all">
            <h5 className="font-bold mb-2">Did you know?</h5>
            <p className="text-sm text-white/40 leading-relaxed">
              Multi-page sites are not always better. A landing page can be just as effective for lead generation while costing less. Multi-page sites require more linkage and internal mapping, reflected in the investment.
            </p>
          </div>
          <div className="p-6 border border-white/5 hover:border-[#19E76E]/20 transition-all">
            <h5 className="font-bold mb-2">Our Recommendation</h5>
            <p className="text-sm text-white/40 leading-relaxed">
              We build whatever suits you. We'll analyze your current traffic and goals during the discovery phase to determine the most effective structure for your ROI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ 
  title: string; 
  desc: string; 
  icon: React.ReactNode;
  index: number 
}> = ({ title, desc, icon, index }) => {
  return (
    <div 
      className="group relative p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-700 overflow-hidden backdrop-blur-sm"
    >
      <div className="mb-10 text-[#19E76E]/40 group-hover:text-[#19E76E] transition-all duration-500 group-hover:scale-110 transform origin-left">
        {icon}
      </div>
      
      <h3 className="text-2xl font-black mb-6 tracking-tight group-hover:translate-x-1 transition-transform duration-500 uppercase">
        {title}
      </h3>
      
      <p className="text-white/40 leading-relaxed text-sm group-hover:text-white/70 transition-colors duration-500 mb-8">
        {desc}
      </p>

      <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-[#19E76E] opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
        <LucidePlusCircle size={14} />
        Inquire For Specs
      </div>
      
      {/* Dynamic borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#19E76E]/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#19E76E]/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#19E76E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Managed Ecosystem",
      desc: "We own and control the site infrastructure, handling 100% of technical overhead, security patches, and instant edits. Focus purely on your revenue.",
      icon: <LucideCpu size={36} strokeWidth={1} />
    },
    {
      title: "Direct Ownership",
      desc: "The full codebase, assets, and hosting control are transferred directly to you. A custom-engineered asset delivered with zero strings attached.",
      icon: <LucideDatabase size={36} strokeWidth={1} />
    },
    {
      title: "Autonomous Agents",
      desc: "Bespoke AI chatbots tailored to your FAQ. They gather leads, qualify prospects, and provide 24/7 engagement with a premium brand voice.",
      icon: <LucideZap size={36} strokeWidth={1} />
    },
    {
      title: "The Lifetime Bond",
      desc: "Our subscription tier grants unlimited support, free feature additions, and quarterly check-ups. Once you connect, we are your team for life.",
      icon: <LucideTerminal size={36} strokeWidth={1} />
    }
  ];

  return (
    <section id="solutions" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#19E76E]" />
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#19E76E] font-bold">Solutions Architecture</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
              Engineered Value, <br />
              <span className="text-white/20">Not Just Designs.</span>
            </h2>
          </div>
        </div>

        <ComparisonModule />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {services.map((s, i) => (
            <ServiceCard key={i} title={s.title} desc={s.desc} icon={s.icon} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

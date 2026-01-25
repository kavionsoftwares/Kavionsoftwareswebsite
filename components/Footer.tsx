
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-12 bg-[#030303] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-6">
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-12">
              KAVION <br />
              <span className="text-[#19E76E]">SOFTWARES.</span>
            </h2>
            <div className="flex gap-8">
              <a href="mailto:contact@kavionsoftwares.com" className="font-mono text-sm border-b border-white/20 pb-2 hover:border-[#19E76E] transition-colors">
                contact@kavionsoftwares.com
              </a>
              <a href="#contact" className="font-mono text-sm border-b border-white/20 pb-2 hover:border-[#19E76E] transition-colors">
                Schedule Your Discovery
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Capabilities</h4>
              <ul className="flex flex-col gap-4 text-sm text-white/60">
                <li><a href="#solutions" className="hover:text-[#19E76E] transition-colors">Custom Builds</a></li>
                <li><a href="#solutions" className="hover:text-[#19E76E] transition-colors">Smart Chatbots</a></li>
                <li><a href="#process" className="hover:text-[#19E76E] transition-colors">Reverse Engineering</a></li>
                <li><a href="#solutions" className="hover:text-[#19E76E] transition-colors">Lifetime Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Navigation</h4>
              <ul className="flex flex-col gap-4 text-sm text-white/60">
                <li><a href="#about" className="hover:text-[#19E76E] transition-colors">Team Values</a></li>
                <li><a href="#data" className="hover:text-[#19E76E] transition-colors">Data Protocol</a></li>
                <li><a href="#process" className="hover:text-[#19E76E] transition-colors">Our Workflow</a></li>
                <li><a href="#lab" className="hover:text-[#19E76E] transition-colors">Engineering Lab</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Support</h4>
              <ul className="flex flex-col gap-4 text-sm text-white/60">
                <li><a href="#faq" className="hover:text-[#19E76E] transition-colors">Common Queries</a></li>
                <li><a href="#contact" className="hover:text-[#19E76E] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Price Transparency</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-6">
          <div className="flex items-center gap-4 grayscale opacity-40">
             <div className="h-6 w-auto font-mono text-[10px] border border-white px-2 flex items-center uppercase tracking-widest">No Templates Policy</div>
             <div className="h-6 w-auto font-mono text-[10px] border border-white px-2 flex items-center uppercase tracking-widest">Client for Life</div>
          </div>
          
          <p className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
            &copy; 2026 KAVION SOFTWARES. ALL SYSTEMS OPERATIONAL.
          </p>
          
          <div className="flex items-center gap-4">
             <a href="#" className="text-white/40 hover:text-white transition-colors">TW</a>
             <a href="#" className="text-white/40 hover:text-white transition-colors">LN</a>
             <a href="#" className="text-white/40 hover:text-white transition-colors">GH</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

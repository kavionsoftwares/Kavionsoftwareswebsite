
import React from 'react';
import { LucideShieldCheck, LucideEye, LucideLock, LucideFingerprint, LucideShieldAlert } from 'lucide-react';

const DataSection: React.FC = () => {
  const interactivePoints = [
    {
      icon: <LucideShieldCheck size={28} />,
      title: "Zero Sensitive Data",
      desc: "We only gather what's needed for your site: public images, FAQs, and brand slogans."
    },
    {
      icon: <LucideLock size={28} />,
      title: "2FA Protected",
      desc: "Provided data is locked behind multi-factor authentication in our private databases."
    },
    {
      icon: <LucideFingerprint size={28} />,
      title: "Internal Only",
      desc: "Information is never shared with third parties. We are your dedicated internal team."
    },
    {
      icon: <LucideEye size={28} />,
      title: "Total Transparency",
      desc: "What you want private, stays private. What you want shown, we build with precision."
    }
  ];

  return (
    <section id="data" className="py-32 relative bg-black/60 overflow-hidden border-y border-white/5">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#19E76E]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <LucideShieldAlert className="text-[#19E76E]" size={20} />
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#19E76E] font-bold">Data Protocol v2.6</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10 uppercase leading-[0.9]">
              Security <br />
              <span className="text-white/20">& Transparency.</span>
            </h2>
            
            <div className="relative group p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm mb-12">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#19E76E] opacity-40 group-hover:opacity-100 transition-all duration-500" />
              <p className="text-xl text-white/80 font-light leading-relaxed italic">
                "By design, your sensitive data stays untouched. We only collect what contributes to your growth—brand assets, public team details, and FAQs. Trust is our primary product."
              </p>
            </div>

            <p className="text-white/40 leading-relaxed max-w-xl">
              This approach removes unnecessary risk. We act as a true extension of your business, delivering results with clarity. Your data is stored in our private, multi-authenticated databases, and we never outsource your information.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {interactivePoints.map((point, i) => (
                <div 
                  key={i}
                  className="p-10 bg-black hover:bg-[#19E76E]/5 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="text-[#19E76E] mb-6 group-hover:scale-110 transition-transform duration-500">
                    {point.icon}
                  </div>
                  <h4 className="font-mono text-xs uppercase tracking-widest mb-4 font-bold text-white/90">{point.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">
                    {point.desc}
                  </p>
                  
                  {/* Subtle Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
            
            {/* Visual Security Badge */}
            <div className="mt-12 flex items-center justify-center p-8 border border-white/5 bg-white/[0.01]">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-[#19E76E]/30 flex items-center justify-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#19E76E]/10 animate-pulse flex items-center justify-center">
                    <LucideShieldCheck className="text-[#19E76E]" size={20} />
                  </div>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-white/30">Encrypted Infrastructure</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DataSection;

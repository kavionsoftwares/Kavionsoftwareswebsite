
import React from 'react';
import Button from './ui/Button';

const NotFound: React.FC<{ onHome: () => void }> = ({ onHome }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[20vw] font-black opacity-[0.03] select-none pointer-events-none">
        404
      </div>
      
      <div className="font-mono text-[#19E76E] text-xs uppercase tracking-[0.4em] mb-6">Error Code: ERR_SYSTEM_LOST</div>
      <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8">NODE NOT FOUND.</h1>
      
      <p className="text-xl text-white/40 max-w-lg mb-12 font-light leading-relaxed">
        The resource you are attempting to access has either been deprecated, moved, or never existed in our current build system.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6">
        <Button onClick={onHome} variant="secondary">Return to Root</Button>
        <a href="#contact"><Button variant="ghost">Report Anomaly</Button></a>
      </div>
      
      <div className="mt-20 flex items-center gap-2 px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20">
         <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
         <span className="font-mono text-[9px] uppercase tracking-widest text-red-500">Route Interrupted</span>
      </div>
    </div>
  );
};

export default NotFound;

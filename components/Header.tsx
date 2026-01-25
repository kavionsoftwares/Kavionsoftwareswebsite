
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#19E76E] rotate-45 group-hover:rotate-90 transition-transform duration-500 flex items-center justify-center">
            <div className="w-4 h-4 bg-black -rotate-45" />
          </div>
          <span className="font-mono text-xl font-bold tracking-tighter uppercase">Kavion<span className="text-[#19E76E]">Softwares</span></span>
        </a>
        
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { name: 'About', href: '#about' },
            { name: 'Data', href: '#data' },
            { name: 'Process', href: '#process' },
            { name: 'Solutions', href: '#solutions' },
            { name: 'Lab', href: '#lab' },
            { name: 'FAQ', href: '#faq' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#19E76E] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="font-mono text-xs uppercase tracking-widest border border-[#19E76E]/40 px-6 py-2 hover:bg-[#19E76E] hover:text-black transition-all hidden sm:block">
            Start Your Build
          </a>
          <button className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1">
            <span className="w-6 h-px bg-white" />
            <span className="w-6 h-px bg-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

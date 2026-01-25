
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono text-sm font-medium tracking-tighter uppercase transition-all duration-300 rounded-none group select-none";
  
  const variants = {
    primary: "bg-white text-black hover:bg-opacity-0 hover:text-white border border-white",
    secondary: "bg-[#19E76E] text-black hover:bg-opacity-0 hover:text-[#19E76E] border border-[#19E76E]",
    ghost: "bg-transparent text-white border border-white/20 hover:border-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {/* Hover Background Beam */}
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
        {variant === 'secondary' ? (
           <span className="absolute inset-0 bg-[#19E76E]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        ) : (
           <span className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      
      <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
        {children}
      </span>
      
      <span className="relative invisible">{children}</span>

      {/* Border Beam Effect */}
      <div className="absolute inset-0 border border-transparent group-hover:border-beam pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      <style>{`
        @keyframes beam {
          0% { clip-path: inset(0 100% 100% 0); }
          25% { clip-path: inset(0 0 100% 0); }
          50% { clip-path: inset(0 0 0 0); }
          75% { clip-path: inset(100% 0 0 0); }
          100% { clip-path: inset(100% 100% 0 0); }
        }
        .border-beam {
           animation: beam 2s linear infinite;
           border-color: #19E76E;
        }
      `}</style>
    </button>
  );
};

export default Button;

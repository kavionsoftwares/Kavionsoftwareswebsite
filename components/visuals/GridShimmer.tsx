
import React from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

const GridShimmer: React.FC = () => {
  const { x, y } = useMousePosition();

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
      
      {/* Cursor Light Beam / Proximity Glow */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(25, 231, 110, 0.4) 0%, transparent 70%)',
          left: `${x - 300}px`,
          top: `${y - 300}px`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Grid Shimmer Animation Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          animation: 'shimmerMove 8s linear infinite',
          maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
        }}
      />

      <style>{`
        @keyframes shimmerMove {
          0% { background-position: 0 0; }
          100% { background-position: 64px 64px; }
        }
      `}</style>
    </div>
  );
};

export default GridShimmer;

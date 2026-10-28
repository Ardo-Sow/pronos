import React from 'react';
import senamLogoSrc from '../assets/images/senam_agro_logo_1786821486794.jpg';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  variant?: 'light' | 'dark' | 'glass';
}

export const SenamLogo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  variant = 'dark',
}) => {
  const sizeMap = {
    xs: { img: 'w-7 h-7', title: 'text-sm', sub: 'text-[9px]' },
    sm: { img: 'w-10 h-10', title: 'text-base', sub: 'text-[10px]' },
    md: { img: 'w-13 h-13 sm:w-14 sm:h-14', title: 'text-xl sm:text-2xl', sub: 'text-[11px]' },
    lg: { img: 'w-20 h-20 sm:w-24 sm:h-24', title: 'text-3xl sm:text-4xl', sub: 'text-sm' },
    xl: { img: 'w-28 h-28 sm:w-36 sm:h-36', title: 'text-4xl sm:text-5xl', sub: 'text-base' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* 3D Official Logo Image Container with Glossy Ring Frame */}
      <div
        className={`relative ${currentSize.img} rounded-2xl overflow-hidden shadow-lg ring-1 transition-transform group-hover:scale-105 shrink-0 bg-white ${
          variant === 'light'
            ? 'ring-emerald-600/30 shadow-emerald-950/10'
            : 'ring-amber-400/40 shadow-2xl shadow-emerald-950/80'
        }`}
      >
        <img
          src={senamLogoSrc}
          alt="SENAM AGRO Logo Officiel"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transform scale-105"
        />
        {/* Subtle overlay glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/30 pointer-events-none" />
      </div>

      {/* Brand Text Branding */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-black font-serif tracking-wider ${currentSize.title} ${
                variant === 'light' ? 'text-stone-900' : 'text-stone-50'
              }`}
            >
              SENAM
            </span>
            <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md font-black bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-xs tracking-wider">
              AGRO
            </span>
          </div>
          <span
            className={`tracking-wider font-medium mt-1 ${currentSize.sub} ${
              variant === 'light' ? 'text-emerald-800' : 'text-emerald-400'
            }`}
          >
            Jus Naturels & Fruits du Terroir
          </span>
        </div>
      )}
    </div>
  );
};

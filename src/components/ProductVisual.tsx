import React, { useState } from 'react';
import { Product } from '../types';
import { categoryIcon } from '../data/categories';

interface ProductVisualProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showBadge?: boolean;
}

// Les photos "pack shot" des jus et poissons s'affichent entières ;
// les photos déposées dans src/assets/products/ remplissent tout le cadre.
const CONTAIN_CATEGORIES = ['jus', 'poisson'];

export const ProductVisual: React.FC<ProductVisualProps> = ({
  product,
  size = 'md',
  className = '',
  showBadge = true,
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-44 sm:h-48 w-full',
    md: 'h-56 sm:h-64 w-full',
    lg: 'h-80 sm:h-[380px] w-full',
    hero: 'h-80 sm:h-[420px] w-full',
  };

  const hasRealImage = Boolean(product.imageUrl) && !imageError;
  const contain = CONTAIN_CATEGORIES.includes(product.category);
  const emoji = product.emoji || categoryIcon(product.category);

  const pill = (() => {
    if (product.category === 'jus') return '250ml • 350ml • 500ml • 1L';
    if (product.category === 'poisson') {
      return product.formats[0].unit === 'carton' ? 'Carton Frais' : 'Au Kilo & Caisse';
    }
    return product.badge || '';
  })();

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${product.bgGradient} flex items-center justify-center select-none group border border-stone-200/90 shadow-inner ${sizeClasses[size]} ${className}`}
    >
      <div
        className="absolute w-48 h-48 rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ backgroundColor: product.color }}
      />
      <div
        className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-30 blur-2xl pointer-events-none"
        style={{ backgroundColor: product.accentColor }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1.5px,transparent_1.5px)] [background-size:14px_14px] pointer-events-none" />

      {hasRealImage ? (
        <img
          src={product.imageUrl}
          alt={product.imageAlt || product.name}
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
          loading="lazy"
          className={
            contain
              ? 'relative w-full h-full object-contain p-2 sm:p-3 drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-105'
              : 'relative w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
          }
        />
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center gap-3 px-4 text-center transition-transform duration-500 group-hover:scale-105">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white/80 backdrop-blur-sm border border-white shadow-xl flex items-center justify-center">
            <span className="text-6xl sm:text-7xl leading-none" role="img" aria-label={product.name}>
              {emoji}
            </span>
          </div>
          <span className="text-xs font-bold text-stone-800 bg-white/80 px-3 py-1 rounded-full border border-stone-200/80 max-w-[90%] truncate">
            {product.name}
          </span>
        </div>
      )}

      {showBadge && pill && hasRealImage && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-stone-900 bg-white/95 backdrop-blur-md px-3 py-0.5 rounded-full border border-stone-200/90 shadow-md whitespace-nowrap">
            <span>{pill}</span>
          </div>
        </div>
      )}
    </div>
  );
};

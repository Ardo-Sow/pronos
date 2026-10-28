import React, { useState } from 'react';
import { Product } from '../types';
import { Sparkles, Leaf, Award, Droplets } from 'lucide-react';

interface ProductVisualProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showBadge?: boolean;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  product,
  size = 'md',
  className = '',
  showBadge = true,
}) => {
  const [imageError, setImageError] = useState(false);
  const isFruit = product.category === 'fruits-frais';
  const isPack = product.category === 'packs';
  const isFish = product.category === 'poissons-mer';

  const sizeClasses = {
    sm: 'h-44 sm:h-48 w-full',
    md: 'h-64 sm:h-76 w-full',
    lg: 'h-88 sm:h-[400px] w-full',
    hero: 'h-88 sm:h-[440px] w-full',
  };

  // Visual icons / representations
  const getVisualDetails = (id: string) => {
    switch (id) {
      // Fish & Seafood
      case 'poisson-thiof':
        return { emoji: '🐟', label: 'Thiof Mérou Blanc', decor: '🌊', colorName: 'Noble Atlantique', liquidBg: '#0284C7' };
      case 'poisson-nenou-dieune':
        return { emoji: '🐠', label: 'Nenou Dieune Rouge', decor: '✨', colorName: 'Rouget Marin', liquidBg: '#E11D48' };
      case 'poisson-daurade':
        return { emoji: '🐟', label: 'Daurade Royale', decor: '🌊', colorName: 'Argenté Littoral', liquidBg: '#0D9488' };
      case 'poisson-capitaine':
        return { emoji: '🐟', label: 'Capitaine Océan', decor: '🌊', colorName: 'Océan Pur', liquidBg: '#0284C7' };
      case 'poisson-beurre-blanc':
        return { emoji: '🐟', label: 'Beurre Blanc', decor: '🌊', colorName: 'Perle Marine', liquidBg: '#64748B' };
      case 'poisson-beurre-noir':
        return { emoji: '🐟', label: 'Beurre Noir', decor: '🌊', colorName: 'Saveur Intense', liquidBg: '#334155' };
      case 'poisson-sompatte':
        return { emoji: '🐟', label: 'Sompatte Doré', decor: '🌊', colorName: 'Terroir Marin', liquidBg: '#D97706' };
      case 'poisson-madmozelle':
        return { emoji: '🐟', label: 'Madmozelle', decor: '✨', colorName: 'Finesse Rosée', liquidBg: '#FB7185' };
      case 'poisson-yaboye':
        return { emoji: '🐟', label: 'Yaboye Sardinelle', decor: '🌊', colorName: 'Oméga-3 Pur', liquidBg: '#059669' };
      case 'poisson-seudeu':
        return { emoji: '🐟', label: 'Seudeu Courbine', decor: '🌊', colorName: 'Chair Royale', liquidBg: '#0284C7' };
      case 'poisson-yakh':
        return { emoji: '🐟', label: 'Yakh Sauvage', decor: '🌊', colorName: 'Pêche Artisanale', liquidBg: '#475569' };
      case 'poisson-lotte':
        return { emoji: '🐟', label: 'Lotte Diabbar', decor: '🌊', colorName: 'Chair Moelleuse', liquidBg: '#78716C' };
      case 'poisson-saumon':
        return { emoji: '🍣', label: 'Filet de Saumon', decor: '✨', colorName: 'Pavé Saumoné', liquidBg: '#F97316' };
      case 'fruits-mer-gambas':
        return { emoji: '🦐', label: 'Gambas Géantes', decor: '✨', colorName: 'Fruits de Mer', liquidBg: '#E11D48' };
      case 'poisson-carton-wass':
        return { emoji: '📦', label: 'Carton Wass Tilapia', decor: '⭐', colorName: 'Gros & Demi-Gros', liquidBg: '#0D9488' };

      // Juices & Fruits
      case 'bouye-naturel':
        return { emoji: '🥜', label: 'Bouye Pur Baobab', decor: '🍂', colorName: 'Velouté Baobab', liquidBg: '#C9935B' };
      case 'bissap-rouge':
        return { emoji: '🌺', label: 'Bissap Rouge Intense', decor: '🌿', colorName: 'Pourpre Éclatant', liquidBg: '#880E4F' };
      case 'tamarin-unique':
        return { emoji: '🌰', label: 'Tamarin Sauvage', decor: '🌾', colorName: 'Ambre Terroir', liquidBg: '#6D4C41' };
      case 'bouye-corossol':
        return { emoji: '🍈', label: 'Baobab & Corossol', decor: '🍃', colorName: 'Nectar Exotique', liquidBg: '#558B2F' };
      case 'bouye-goyave':
        return { emoji: '🌸', label: 'Goyave Rose & Bouye', decor: '✨', colorName: 'Rose Douceur', liquidBg: '#D81B60' };
      case 'jus-cocktail':
        return { emoji: '🍍', label: 'Cocktail Solaire', decor: '🌴', colorName: 'Punch Tropical', liquidBg: '#FB8C00' };
      case 'bissap-blanc-bouye':
        return { emoji: '🌼', label: 'Bissap Blanc Rare', decor: '✨', colorName: 'Ivoire Floral', liquidBg: '#E0E0E0' };
      case 'bouye-lait':
        return { emoji: '🥛', label: 'Bouye Lait Onctueux', decor: '✨', colorName: 'Crème Vanillée', liquidBg: '#EFEBE9' };
      case 'orange-bouye':
        return { emoji: '🍊', label: 'Orange Pressée', decor: '☀️', colorName: 'Agrume Vitalité', liquidBg: '#FF9800' };
      case 'mangue-bouye':
        return { emoji: '🥭', label: 'Mangue Gourmande', decor: '🥭', colorName: 'Nectar Doré', liquidBg: '#FFA000' };
      case 'gingembre-bouye':
        return { emoji: '🫚', label: 'Gingembre & Citron', decor: '⚡', colorName: 'Énergie Pure', liquidBg: '#FBC02D' };
      case 'pure-detox':
        return { emoji: '🥒', label: 'Concombre & Menthe', decor: '🌱', colorName: 'Détox Fraîcheur', liquidBg: '#2E7D32' };
      case 'fruit-sapoti':
        return { emoji: '🥔', label: 'Sapoti du Sénégal', decor: '🍯', colorName: 'Chair Mielleuse', liquidBg: '#8D6E63' };
      case 'fruit-mangue':
        return { emoji: '🥭', label: 'Mangue Fraîche', decor: '☀️', colorName: 'Juteuse & Sucrée', liquidBg: '#FFB300' };
      case 'fruit-citron':
        return { emoji: '🍋', label: 'Citron Juteux Local', decor: '💧', colorName: 'Tonique Naturel', liquidBg: '#FDD835' };
      case 'fruit-corossol':
        return { emoji: '🍈', label: 'Corossol Frais Entier', decor: '🌿', colorName: 'Grand Cru Vertus', liquidBg: '#33691E' };
      case 'pack-decouverte-6':
        return { emoji: '🎁', label: 'Coffret 6 Saveurs', decor: '⭐', colorName: 'Assortiment Mix', liquidBg: '#00695C' };
      case 'pack-famille-4l':
        return { emoji: '🎉', label: 'Pack Famille 4L', decor: '⭐', colorName: 'Maxi Convivialité', liquidBg: '#AD1457' };
      default:
        return { emoji: '🐟', label: 'Produit Frais', decor: '✨', colorName: '100% Frais', liquidBg: '#0284C7' };
    }
  };

  const details = getVisualDetails(product.id);
  const hasRealImage = Boolean(product.imageUrl) && !imageError;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${product.bgGradient} flex items-center justify-center select-none group border border-stone-200/90 shadow-inner ${sizeClasses[size]} ${className}`}
    >
      {/* Dynamic Ambient Background Aura */}
      <div
        className="absolute w-48 h-48 rounded-full opacity-40 blur-3xl transition-transform duration-700 group-hover:scale-130 pointer-events-none"
        style={{ backgroundColor: product.color }}
      />
      <div
        className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-30 blur-2xl pointer-events-none"
        style={{ backgroundColor: product.accentColor }}
      />

      {/* Terroir / Subtle Micro-texture Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1.5px,transparent_1.5px)] [background-size:14px_14px] pointer-events-none" />

      {/* If real image is present */}
      {hasRealImage ? (
        <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-3 overflow-hidden">
          {/* Main Product Photography */}
          <img
            src={product.imageUrl}
            alt={product.imageAlt || product.name}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain drop-shadow-xl transform transition-transform duration-700 ease-out group-hover:scale-103"
          />

          {/* Bottom Volume/Format Badge Pill */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-stone-900 bg-white/95 backdrop-blur-md px-3 py-0.5 rounded-full border border-stone-200/90 shadow-md whitespace-nowrap">
              {isFish ? (
                <>
                  <span className="text-sky-600">🌊</span>
                  <span>{product.formats[0].unit === 'carton' ? 'Carton Frais' : 'Au Kilo & Caisse'}</span>
                </>
              ) : isFruit ? (
                <>
                  <Leaf className="w-3 h-3 text-emerald-600" />
                  <span>Au Kilo & Paniers</span>
                </>
              ) : isPack ? (
                <>
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Coffret Dégustation</span>
                </>
              ) : (
                <>
                  <Droplets className="w-3 h-3 text-emerald-600" />
                  <span>250ml • 350ml • 500ml • 1L</span>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Fallback Graphic Visual */
        <div className="relative z-10 flex flex-col items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
          {isFish ? (
            /* Fish Graphic Visual */
            <div className="flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-3xl blur-md opacity-50"
                  style={{ backgroundColor: product.accentColor }}
                />
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center shadow-xl border-2 border-sky-300/80 backdrop-blur-md relative overflow-hidden bg-gradient-to-br from-sky-50 to-blue-100">
                  <span className="text-6xl sm:text-7xl filter drop-shadow-lg select-none transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    {details.emoji}
                  </span>
                </div>
                <div className="absolute -bottom-2 bg-gradient-to-r from-sky-900 to-blue-900 text-sky-200 font-extrabold text-[11px] px-3 py-0.5 rounded-full border border-sky-400/50 shadow-lg tracking-wider flex items-center gap-1">
                  <span>🌊</span>
                  <span>{product.formats[0].unit === 'carton' ? 'LE CARTON' : 'AU KG'}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full border border-stone-200/90 shadow-xs">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.accentColor }} />
                <span className="text-xs font-bold text-stone-800">{details.label}</span>
              </div>
            </div>
          ) : isFruit ? (
            /* Fruit Basket Graphic Visual */
            <div className="flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-3xl blur-md opacity-50"
                  style={{ backgroundColor: product.accentColor }}
                />
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center shadow-xl border-2 border-white/80 backdrop-blur-md relative overflow-hidden bg-white/70">
                  <span className="text-6xl sm:text-7xl filter drop-shadow-lg select-none transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    {details.emoji}
                  </span>
                  <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
                </div>
                <div className="absolute -bottom-2 bg-gradient-to-r from-stone-900 to-stone-800 text-amber-300 font-extrabold text-[11px] px-3 py-0.5 rounded-full border border-amber-300/40 shadow-lg tracking-wider flex items-center gap-1">
                  <Leaf className="w-3 h-3 text-emerald-400" />
                  <span>AU KG</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full border border-stone-200/90 shadow-xs">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.accentColor }} />
                <span className="text-xs font-bold text-stone-800">{details.label}</span>
              </div>
            </div>
          ) : isPack ? (
            /* Packs Visual */
            <div className="flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center shadow-xl border-2 border-amber-400/50 backdrop-blur-md relative overflow-hidden bg-gradient-to-br from-stone-900 to-stone-950 text-white">
                  <span className="text-6xl sm:text-7xl filter drop-shadow-xl select-none transform transition-transform duration-300 group-hover:scale-110">
                    {details.emoji}
                  </span>
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 opacity-80" />
                </div>
                <div className="absolute -bottom-2 bg-gradient-to-r from-emerald-800 to-emerald-950 text-emerald-200 font-extrabold text-[11px] px-3 py-0.5 rounded-full border border-emerald-400/50 shadow-lg tracking-wider">
                  PACK DEGUSTATION
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full border border-stone-200/90 shadow-xs">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span className="text-xs font-bold text-stone-800">{details.label}</span>
              </div>
            </div>
          ) : (
            /* Square / Cubic Bottle Visual with Official Green & Gold Label */
            <div className="flex flex-col items-center justify-center">
              <div className="relative flex flex-col items-center">
                {/* 1. Dark Green Cap with Gold Band */}
                <div className="w-10 h-4 bg-[#0a2f1b] rounded-t-sm shadow-md border-t border-x border-[#1b4d32] z-30 flex flex-col items-center justify-between py-0.5 relative overflow-hidden">
                  <div className="w-full h-1 bg-gradient-to-r from-[#0a2f1b] via-[#1b4d32] to-[#0a2f1b]" />
                  <div className="w-full h-1.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 flex items-center justify-center shadow-xs">
                    <span className="text-[5px] font-black text-emerald-950 tracking-widest uppercase scale-75 font-serif">SENAM</span>
                  </div>
                </div>

                {/* 2. Bottle Neck (Square Neck Ring) */}
                <div className="w-7 h-2.5 bg-white/70 border-x border-stone-300/80 backdrop-blur-xs z-20 relative shadow-inner">
                  <div
                    className="absolute inset-x-0.5 bottom-0 h-2 opacity-90"
                    style={{ backgroundColor: details.liquidBg }}
                  />
                </div>

                {/* 3. Angular Faceted Shoulders (Cubic Chamfered Geometry) */}
                <div className="w-24 h-6 relative z-20 overflow-hidden">
                  <div
                    className="w-full h-full relative"
                    style={{
                      clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
                      backgroundColor: details.liquidBg,
                    }}
                  >
                    {/* Glass faceted reflections on shoulder */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/15" />
                    <div className="absolute inset-y-0 left-2 w-1.5 bg-white/40 blur-[0.5px]" />
                    <div className="absolute inset-y-0 right-2 w-1.5 bg-white/20 blur-[0.5px]" />
                  </div>
                </div>

                {/* 4. Square Cube Body (Flat vertical faces with edge chamfers) */}
                <div className="w-24 h-32 sm:h-36 relative overflow-hidden shadow-2xl border-x-2 border-b-2 border-white/90 backdrop-blur-xs flex flex-col justify-between bg-white/20">
                  {/* Liquid Fill */}
                  <div
                    className="absolute inset-0 z-0"
                    style={{ backgroundColor: details.liquidBg }}
                  >
                    {/* Glass Surface Highlights (Cube edges) */}
                    <div className="absolute inset-y-0 left-1 w-2 bg-gradient-to-r from-white/40 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-1 w-2 bg-gradient-to-l from-white/30 to-transparent pointer-events-none" />
                    <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-b from-black/15 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                  </div>

                  {/* 5. Official Dark Green & Gold Label */}
                  <div className="relative z-10 mx-2 mt-2 bg-gradient-to-b from-[#062618] via-[#041a10] to-[#02120b] text-amber-100 rounded-sm p-1.5 text-center shadow-2xl border border-amber-400/90 ring-1 ring-amber-500/30 flex flex-col items-center justify-between">
                    {/* Gold Leaf & SENAM AGRO Header */}
                    <div className="flex flex-col items-center">
                      <div className="text-[9px] text-amber-400 leading-none">🌿</div>
                      <div className="text-[7.5px] font-extrabold tracking-widest text-amber-300 uppercase font-serif mt-0.5 leading-none">
                        SENAM AGRO
                      </div>
                      <div className="text-[5.5px] font-semibold text-amber-200/90 tracking-wider uppercase mt-0.5">
                        JUS NATUREL
                      </div>
                    </div>

                    {/* Fruit Flavor Name in Bold Gold */}
                    <div className="my-1 border-y border-amber-400/40 py-0.5 w-full">
                      <div className="text-[8.5px] font-black text-amber-300 uppercase tracking-wide truncate">
                        {product.name.replace(/Jus de |Jus d’|Jus /i, '')}
                      </div>
                    </div>

                    {/* Quality statement & Fruit Icon */}
                    <div className="flex items-center justify-center gap-1 my-0.5">
                      <span className="text-base select-none">{details.emoji}</span>
                    </div>

                    <div className="text-[5px] text-amber-200/80 tracking-tight leading-none uppercase">
                      100% NATUREL • FAIT AU SÉNÉGAL
                    </div>

                    <div className="mt-1 pt-0.5 border-t border-amber-400/30 w-full flex items-center justify-between text-[6px] text-amber-300 font-bold px-1">
                      <span>SENAM</span>
                      <span>1L</span>
                    </div>
                  </div>

                  {/* 6. Embossed Glass Logo at Base */}
                  <div className="relative z-10 py-1 text-center">
                    <span className="text-[7px] font-bold text-white/50 tracking-widest uppercase font-serif drop-shadow-sm">
                      SENAM AGRO
                    </span>
                  </div>
                </div>

                {/* Floating Fruit Accent Badge */}
                <div className="absolute -bottom-2 -right-3 bg-stone-900/90 text-white rounded-full p-1.5 shadow-xl border border-amber-400/60 transform transition-transform group-hover:scale-125 group-hover:rotate-12 z-30">
                  <span className="text-xl leading-none">{details.emoji}</span>
                </div>
              </div>

              {/* Volume Specs Pill */}
              <div className="mt-3.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-stone-800 bg-white/95 backdrop-blur-md px-3 py-0.5 rounded-full border border-stone-200/90 shadow-xs">
                <Droplets className="w-3 h-3 text-emerald-600" />
                <span>
                  {product.formats.length > 2 ? '350ml • 500ml • 1L' : product.formats.map(f => f.volume).join(' • ')}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating 100% Naturel Badges */}
      {showBadge && (
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-950/90 text-emerald-100 px-2.5 py-0.5 rounded-full shadow-md border border-emerald-500/50 backdrop-blur-xs">
            {isFish ? <span>⚓ Frais du Jour</span> : (
              <>
                <Leaf className="w-2.5 h-2.5 text-amber-300" />
                <span>100% Naturel</span>
              </>
            )}
          </span>
        </div>
      )}

      {/* Top Vente / Best Seller Badge */}
      {product.isBestSeller && (
        <div className="absolute top-3 right-3 z-20">
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 px-2.5 py-0.5 rounded-full shadow-md border border-amber-300">
            <Sparkles className="w-2.5 h-2.5" />
            <span>Top Vente</span>
          </span>
        </div>
      )}
    </div>
  );
};


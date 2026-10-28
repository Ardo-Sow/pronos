import React from 'react';
import { ShoppingBag, MessageCircle, Phone, Sparkles, Fish } from 'lucide-react';
import { CartItem } from '../types';
import { COMPANY_INFO } from '../data/products';

interface MobileBottomNavProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cart,
  onOpenCart,
  onNavigate,
  activeSection,
}) => {
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-stone-950/95 backdrop-blur-xl border-t border-stone-800/90 py-1.5 px-3 shadow-2xl safe-bottom">
      <div className="flex items-center justify-around">
        {/* 1. Jus Naturels */}
        <button
          onClick={() => onNavigate('catalogue')}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-xl transition-colors ${
            activeSection === 'catalogue' ? 'text-amber-300' : 'text-stone-400 hover:text-white'
          }`}
        >
          <span className="text-lg">🍹</span>
          <span className="text-[10px] font-bold">Nos Jus</span>
        </button>

        {/* 2. Poissons Frais */}
        <button
          onClick={() => onNavigate('poissons-mer')}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-xl transition-colors ${
            activeSection === 'poissons-mer' ? 'text-sky-300' : 'text-stone-400 hover:text-white'
          }`}
        >
          <Fish className="w-5 h-5 text-sky-400" />
          <span className="text-[10px] font-bold">Poissons</span>
        </button>

        {/* 3. WhatsApp Direct Button (Center Highlight) */}
        <a
          href={`https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent('Bonjour SENAM AGRO, je souhaite passer une commande.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center -mt-4"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-950/80 border-2 border-amber-300/80 transform active:scale-95 transition-all">
            <MessageCircle className="w-6 h-6 fill-current" />
          </div>
          <span className="text-[9.5px] font-black text-emerald-400 mt-0.5">WhatsApp</span>
        </a>

        {/* 4. Hotline Appeler */}
        <a
          href={`tel:${COMPANY_INFO.phone1Raw}`}
          className="flex flex-col items-center gap-0.5 p-1 text-stone-400 hover:text-white rounded-xl transition-colors"
        >
          <Phone className="w-5 h-5 text-amber-400" />
          <span className="text-[10px] font-bold">Appeler</span>
        </a>

        {/* 5. Panier avec badge */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center gap-0.5 p-1 text-stone-400 hover:text-white rounded-xl transition-colors"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-amber-300" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-[17px] h-[17px] px-1 bg-amber-400 text-stone-950 text-[10px] font-black rounded-full flex items-center justify-center shadow-md animate-pulse">
                {totalCartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold">Panier</span>
        </button>
      </div>
    </div>
  );
};

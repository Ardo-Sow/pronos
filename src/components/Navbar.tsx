import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, Sparkles, MapPin, Leaf } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { CartItem } from '../types';
import { SenamLogo } from './Logo';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cart,
  onOpenCart,
  activeSection,
  onNavigate,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { id: 'catalogue', label: 'Nos Produits' },
    { id: 'poissons-mer', label: '🐟 Poissons & Mer' },
    { id: 'fruits-frais', label: '🍈 Fruits au Kilo' },
    { id: 'savoir-faire', label: 'Notre Savoir-Faire' },
    { id: 'simulateur', label: 'Simulateur' },
    { id: 'contact', label: 'Contact & Livraison' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-950/95 backdrop-blur-lg text-stone-100 border-b border-stone-800/80 transition-all duration-200">
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-950 text-emerald-200 text-xs py-2 px-4 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-[11.5px] tracking-wide">
              🇸🇳 <strong>SENAM AGRO</strong> • 100% Naturel • Fait Main • Zéro Conservateur • Dakar
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-emerald-300 font-medium">
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              Livraison Express Dakar & Régions
            </span>
            <a
              href={`tel:${COMPANY_INFO.phone1Raw}`}
              className="hover:text-white transition-colors underline font-bold text-amber-300"
            >
              📞 {COMPANY_INFO.phone1}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center text-left group focus:outline-none cursor-pointer"
            id="brand-logo-btn"
          >
            <SenamLogo size="md" variant="dark" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-stone-900/80 px-3 py-1.5 rounded-2xl border border-stone-800/80" aria-label="Menu principal">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                id={`nav-link-${link.id}`}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  activeSection === link.id
                    ? 'text-amber-300 bg-stone-800 shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick Call Button */}
            <a
              href={`tel:${COMPANY_INFO.phone1Raw}`}
              id="header-call-btn"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-stone-900 text-stone-200 border border-stone-700 hover:bg-stone-800 hover:text-white transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Commander</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              id="header-cart-btn"
              aria-label="Voir le panier"
              className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-lg shadow-emerald-950/60 transition-all transform active:scale-95 cursor-pointer border border-emerald-500/30"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Mon Panier</span>
              {totalCartCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-black bg-amber-400 text-stone-950 rounded-full shadow-md animate-pulse">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Ouvrir le menu"
              className="lg:hidden p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-stone-950/98 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <div className="grid grid-cols-1 gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800 font-extrabold'
                    : 'text-stone-200 hover:bg-stone-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-800 space-y-3">
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone1Raw}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-stone-900 text-stone-100 font-bold text-xs border border-stone-700"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Appeler : {COMPANY_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessageBase)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-md"
              >
                <span>Commander par WhatsApp ({COMPANY_INFO.phone1})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

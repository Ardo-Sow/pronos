import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Leaf, Truck, PhoneCall, CheckCircle2, Award, Droplets, MapPin, ShoppingBag, Check } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';
import { ProductVisual } from './ProductVisual';
import { Product } from '../types';
import senamLogoSrc from '../assets/images/senam_agro_logo_1786821486794.jpg';
import imgHeroMangue from '../assets/images/senam_hero_flagship_1788201292747.jpg';
import imgHeroBouye from '../assets/images/senam_hero_bouye_1788201305029.jpg';
import imgHeroBissap from '../assets/images/senam_cube_bissap_1788200319616.jpg';
import imgHeroCorossol from '../assets/images/senam_cube_corossol_1788200332821.jpg';

interface HeroProps {
  onExploreCatalog: () => void;
  onExploreFruits: () => void;
  onExploreFish?: () => void;
  onSelectProduct: (product: Product) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onExploreFruits,
  onExploreFish,
  onSelectProduct,
}) => {
  // Flagship showcase state
  const [selectedHeroFlavor, setSelectedHeroFlavor] = useState<'mangue' | 'bouye' | 'bissap' | 'corossol'>('mangue');

  const heroFlavors = [
    {
      id: 'mangue' as const,
      label: 'Jus de Mangue',
      tag: '⭐ Nectar Royal',
      volume: '1L • 500ml',
      price: '1 500 FCFA',
      color: '#f59e0b',
      img: imgHeroMangue,
      desc: 'Mangue locale gorgée de soleil, pulpe onctueuse et parfum tropical envoûtant.',
      productId: 'mangue-bouye',
    },
    {
      id: 'bouye' as const,
      label: 'Bouye Pur Naturel',
      tag: '👑 Emblématique',
      volume: '1L • 500ml • 350ml',
      price: '1 500 FCFA',
      color: '#d97706',
      img: imgHeroBouye,
      desc: 'Pain de singe (Baobab) pressé traditionnellement, velouté et riche en vitamine C.',
      productId: 'bouye-naturel',
    },
    {
      id: 'bissap' as const,
      label: 'Bissap Rouge & Menthe',
      tag: '🌺 Grand Classique',
      volume: '1L • 500ml • 350ml',
      price: '1 000 FCFA',
      color: '#e11d48',
      img: imgHeroBissap,
      desc: 'Calices d’hibiscus rouge acidulé sublimés par une touche de menthe fraîche.',
      productId: 'bissap-rouge',
    },
    {
      id: 'corossol' as const,
      label: 'Bouye Corossol',
      tag: '🌟 N°1 des Ventes',
      volume: '1L • 500ml • 350ml',
      price: '2 000 FCFA',
      color: '#10b981',
      img: imgHeroCorossol,
      desc: 'Le mariage parfait entre la douceur du baobab et les notes exotiques du corossol.',
      productId: 'bouye-corossol',
    },
  ];

  const currentFlavor = heroFlavors.find((f) => f.id === selectedHeroFlavor) || heroFlavors[0];
  const linkedProduct = PRODUCTS.find((p) => p.id === currentFlavor.productId) || PRODUCTS[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white pt-8 pb-14 sm:pt-16 sm:pb-24">
      {/* Radiant Tropical Lighting Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[350px] bg-emerald-700/15 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Terroir Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Responsive Disposition: 2 Columns on Desktop, Clean Vertical Flow on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Brand Story & Call To Actions (7 cols on desktop) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">
            
            {/* Official Brand Badge */}
            <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-2xl bg-stone-900/90 border border-amber-400/50 shadow-xl backdrop-blur-md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow bg-white shrink-0 border border-amber-300/40">
                <img
                  src={senamLogoSrc}
                  alt="SENAM AGRO Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 font-serif">
                    SENAM AGRO SÉNÉGAL
                  </span>
                  <span className="text-[9.5px] bg-emerald-950 text-emerald-300 px-1.5 py-0.2 rounded font-bold border border-emerald-700/50">
                    🇸🇳 100% Terroir
                  </span>
                </div>
                <div className="text-xs text-stone-300 font-medium">
                  Jus • Poissons • Fruits • Viandes • Légumes • Pépinière
                </div>
              </div>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight text-stone-50 leading-[1.12]">
              La Saveur Authentique des{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
                Jus en Bouteille Cubique
              </span>{' '}
              & Nectars Purs
            </h1>

            {/* Narrative Paragraph */}
            <p className="text-stone-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Découvrez notre prestigieuse gamme de jus artisanaux présentés dans leur nouvelle <strong>bouteille cubique facettée</strong> avec étiquette officielle vert & or (<strong className="text-amber-300">Mangue</strong>, <strong className="text-amber-200">Bouye Pur</strong>, <strong className="text-rose-300">Bissap</strong>, <strong className="text-emerald-300">Corossol</strong>), nos <strong>poissons frais du jour</strong> (Thiof, Daurade, Nenou Dieune, Gambas) et nos <strong>fruits du terroir</strong>.
            </p>

            {/* Value Props Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs text-stone-200 font-semibold">
              <span className="inline-flex items-center gap-1.5 bg-stone-900/80 px-3 py-1.5 rounded-full border border-stone-800 backdrop-blur-xs">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Naturel • 0 Conservateur</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-stone-900/80 px-3 py-1.5 rounded-full border border-stone-800 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Bouteille Cubique 1L • 500ml • 350ml</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-stone-900/80 px-3 py-1.5 rounded-full border border-stone-800 backdrop-blur-xs">
                <Truck className="w-3.5 h-3.5 text-sky-400" />
                <span>Livraison Dakar & Régions</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent('Bonjour SENAM AGRO, je souhaite commander vos jus naturels en bouteille cubique et produits frais.')}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm sm:text-base font-extrabold bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-2xl shadow-emerald-950/80 hover:shadow-emerald-700/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer border border-emerald-500/40"
              >
                <span>💬 Commander par WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onExploreCatalog}
                id="hero-catalog-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm sm:text-base font-bold bg-stone-900/90 text-stone-200 hover:text-white border border-stone-700 hover:border-amber-400/50 hover:bg-stone-800 transition-all cursor-pointer shadow-lg"
              >
                <span>🍹 Voir la Carte des Jus</span>
              </button>

              {onExploreFish && (
                <button
                  onClick={onExploreFish}
                  id="hero-fish-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm sm:text-base font-bold bg-sky-950/90 text-sky-200 hover:text-white border border-sky-600/50 hover:border-sky-400 hover:bg-sky-900 transition-all cursor-pointer shadow-lg"
                >
                  <span>🐟 Poissons Frais</span>
                </button>
              )}
            </div>

            {/* Direct Phone & Ordering Hotline */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Service commandes : <strong className="text-amber-300 font-bold">{COMPANY_INFO.phone1}</strong> / <strong className="text-amber-300 font-bold">{COMPANY_INFO.phone2}</strong></span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: The Flagship Bottle & Glass Showcase (5 cols on desktop) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glowing decorative backdrop rim */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-emerald-500/30 to-amber-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />

              {/* Main Showcase Container */}
              <div className="relative rounded-3xl bg-stone-900/95 border-2 border-amber-400/40 p-4 sm:p-5 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden">
                
                {/* Header Tag of the showcase */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-black">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{currentFlavor.tag}</span>
                  </div>

                  <div className="text-xs font-black text-amber-300 bg-stone-950/80 px-2.5 py-1 rounded-lg border border-amber-400/30">
                    {currentFlavor.price}
                  </div>
                </div>

                {/* The Master Photography (Reproducing the exact scene from BOISSON.jpeg) */}
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-stone-950/80 flex items-center justify-center border border-stone-800/80 group">
                  <img
                    src={currentFlavor.img}
                    alt={`${currentFlavor.label} - Bouteille Cubique SENAM AGRO`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-2 transform group-hover:scale-104 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Specs Pill on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-bold text-stone-100 bg-stone-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-stone-700/80 shadow-lg">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Droplets className="w-3.5 h-3.5" />
                      <span>{currentFlavor.volume}</span>
                    </span>
                    <span className="text-amber-300 uppercase tracking-wider font-extrabold text-[10px]">
                      Bouteille Cubique
                    </span>
                  </div>
                </div>

                {/* Flavor Switcher Tabs (Interactive selection for Mangue, Bouye, Bissap, Corossol) */}
                <div className="mt-3.5">
                  <div className="text-[11px] font-bold text-stone-400 mb-2 flex items-center justify-between">
                    <span>Parfums disponibles en bouteille cubique :</span>
                    <span className="text-amber-300 font-semibold">{currentFlavor.label}</span>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5">
                    {heroFlavors.map((flavor) => (
                      <button
                        key={flavor.id}
                        onClick={() => setSelectedHeroFlavor(flavor.id)}
                        className={`py-2 px-1 rounded-xl text-xs font-bold transition-all text-center flex flex-col items-center gap-0.5 cursor-pointer ${
                          selectedHeroFlavor === flavor.id
                            ? 'bg-amber-400 text-stone-950 shadow-md ring-2 ring-amber-300'
                            : 'bg-stone-800/90 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700/60'
                        }`}
                      >
                        <span className="text-sm">
                          {flavor.id === 'mangue' && '🥭'}
                          {flavor.id === 'bouye' && '🥜'}
                          {flavor.id === 'bissap' && '🌺'}
                          {flavor.id === 'corossol' && '🍈'}
                        </span>
                        <span className="text-[10px] font-extrabold truncate w-full">
                          {flavor.label.replace('Jus de ', '').replace(' Bouye', '')}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Flavor Description & Quick Order Action */}
                <div className="mt-3 pt-3 border-t border-stone-800 flex items-center justify-between gap-2">
                  <p className="text-xs text-stone-300 line-clamp-1">
                    {currentFlavor.desc}
                  </p>
                  <button
                    onClick={() => onSelectProduct(linkedProduct)}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
                  >
                    <span>Commander</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars of Trust Quality Bar (Clean responsive grid on mobile and desktop) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-stone-900/60 border border-stone-800 backdrop-blur-xs">
            <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/50 shrink-0">
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-stone-100">100% Naturel</div>
              <div className="text-[11px] text-stone-400 mt-0.5">Zéro additifs chimiques</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-stone-900/60 border border-stone-800 backdrop-blur-xs">
            <div className="p-2 sm:p-2.5 rounded-xl bg-amber-950 text-amber-400 border border-amber-800/50 shrink-0">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-stone-100">Artisanal & Fait Main</div>
              <div className="text-[11px] text-stone-400 mt-0.5">Hygiène et tradition</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-stone-900/60 border border-stone-800 backdrop-blur-xs">
            <div className="p-2 sm:p-2.5 rounded-xl bg-rose-950 text-rose-400 border border-rose-800/50 shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-stone-100">Santé & Vitalité</div>
              <div className="text-[11px] text-stone-400 mt-0.5">Vitamines & antioxydants</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-stone-900/60 border border-stone-800 backdrop-blur-xs">
            <div className="p-2 sm:p-2.5 rounded-xl bg-teal-950 text-teal-400 border border-teal-800/50 shrink-0">
              <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-stone-100">Livraison Express</div>
              <div className="text-[11px] text-stone-400 mt-0.5">Dakar & tout le Sénégal</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

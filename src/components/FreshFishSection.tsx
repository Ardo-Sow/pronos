import React, { useState } from 'react';
import { Sparkles, PhoneCall, ShoppingBag, Truck, CheckCircle2, ShieldCheck, Waves, Fish, ArrowRight, TableProperties } from 'lucide-react';
import { Product, ProductFormat } from '../types';
import { PRODUCTS, COMPANY_INFO, imgPoissonHero } from '../data/products';
import { ProductVisual } from './ProductVisual';

interface FreshFishSectionProps {
  onAddToCart: (product: Product, format: ProductFormat) => void;
  onOpenModal: (product: Product) => void;
  onOpenPriceTable: () => void;
}

export const FreshFishSection: React.FC<FreshFishSectionProps> = ({
  onAddToCart,
  onOpenModal,
  onOpenPriceTable,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'bestsellers' | 'nobles' | 'fruits-mer'>('all');
  
  const allFishProducts = PRODUCTS.filter((p) => p.category === 'poissons-mer');

  const filteredFish = allFishProducts.filter((fish) => {
    if (filterType === 'bestsellers') return fish.isBestSeller;
    if (filterType === 'nobles') return ['poisson-thiof', 'poisson-nenou-dieune', 'poisson-daurade', 'poisson-saumon'].includes(fish.id);
    if (filterType === 'fruits-mer') return ['fruits-mer-gambas', 'poisson-carton-wass'].includes(fish.id);
    return true;
  });

  return (
    <section id="poissons-mer" className="py-20 sm:py-28 bg-gradient-to-b from-stone-950 via-slate-950 to-stone-900 text-white relative overflow-hidden border-b border-stone-800">
      
      {/* Radiant Deep Ocean Aura */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-600/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Nautical Wave Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf807_1px,transparent_1px),linear-gradient(to_bottom,#38bdf807_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Feature Hero Banner */}
        <div className="bg-gradient-to-r from-sky-950/90 via-slate-900/90 to-blue-950/90 rounded-3xl p-6 sm:p-8 md:p-10 border border-sky-500/30 shadow-2xl backdrop-blur-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-900/80 text-sky-300 text-xs font-black uppercase tracking-wider border border-sky-400/40">
                <Waves className="w-4 h-4 text-sky-400 animate-pulse" />
                <span>Nouvelle Gamme Fraîcheur SENAM AGRO</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-stone-50 leading-tight">
                Poissons Frais du Jour &{' '}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">
                  Fruits de Mer au Kilo
                </span>
              </h2>
              
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {COMPANY_INFO.fishSlogan} Sélection rigoureuse de la pêche artisanale sénégalaise : <strong className="text-sky-300">Thiof</strong>, <strong className="text-rose-300">Nenou Dieune</strong>, <strong className="text-teal-300">Daurade</strong>, <strong className="text-amber-300">Capitaine</strong>, <strong className="text-orange-300">Gambas géantes</strong> et nos <strong className="text-sky-200">cartons pro pour revendeurs</strong>.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-stone-300">
                <span className="flex items-center gap-1.5 bg-sky-900/60 px-3.5 py-1.5 rounded-full border border-sky-700/60 font-semibold text-sky-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Écaillé & Vidé sur demande
                </span>
                <span className="flex items-center gap-1.5 bg-sky-900/60 px-3.5 py-1.5 rounded-full border border-sky-700/60 font-semibold text-sky-200">
                  <Truck className="w-3.5 h-3.5 text-amber-300" /> Glacière isotherme & Livraison rapide
                </span>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenPriceTable}
                  id="fish-open-tarifs-btn"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs shadow-lg shadow-sky-950 transition-all cursor-pointer"
                >
                  <TableProperties className="w-4 h-4" />
                  <span>Consulter la Grille des 15 Variétés</span>
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent('Bonjour SENAM AGRO, je souhaite commander du poisson frais.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-xs shadow-lg transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Commander sur WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Showcase Visual Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-sky-400/40 group">
                <img
                  src={imgPoissonHero}
                  alt="Étal de poissons frais du Sénégal SENAM AGRO"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="text-xs font-black text-sky-300 bg-sky-950/90 px-3 py-1 rounded-full border border-sky-400/50 backdrop-blur-xs">
                    ⚓ Arrivage Quotidien Garanti
                  </div>
                  <div className="text-xs font-black text-amber-300 bg-stone-900/90 px-3 py-1 rounded-full border border-amber-400/50">
                    Dès 2 000 FCFA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Sub-Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-100 flex items-center gap-2">
              <Fish className="w-5 h-5 text-sky-400" />
              <span>Nos Variétés Disponibles ({filteredFish.length})</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              Commandez au kilo ou en lot pour vos repas de famille et réceptions
            </p>
          </div>

          <div className="flex items-center gap-2 bg-stone-900/90 p-1.5 rounded-2xl border border-stone-800">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              Tous ({allFishProducts.length})
            </button>
            <button
              onClick={() => setFilterType('bestsellers')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterType === 'bestsellers'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              ⭐ Best Sellers
            </button>
            <button
              onClick={() => setFilterType('nobles')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterType === 'nobles'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              👑 Poissons Nobles
            </button>
            <button
              onClick={() => setFilterType('fruits-mer')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterType === 'fruits-mer'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              🦐 Gambas & Pro
            </button>
          </div>
        </div>

        {/* Fish Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFish.map((fish) => {
            const defaultFormat = fish.formats[0];
            return (
              <div
                key={fish.id}
                onClick={() => onOpenModal(fish)}
                className="group relative bg-stone-900/90 backdrop-blur-md rounded-3xl border border-stone-800 hover:border-sky-500/60 p-5 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Price Ribbon */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-md border border-sky-300">
                    {fish.badge}
                  </span>
                </div>

                <div>
                  <div className="pt-2 pb-3">
                    <ProductVisual product={fish} size="md" />
                  </div>

                  <div className="text-[11px] text-sky-400 font-bold uppercase tracking-wider">
                    {fish.subtitle}
                  </div>
                  
                  <h4 className="text-lg font-bold text-stone-100 group-hover:text-sky-300 transition-colors font-serif mt-1">
                    {fish.name}
                  </h4>

                  <p className="text-xs text-stone-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {fish.description}
                  </p>

                  <div className="mt-3.5 space-y-1">
                    {fish.benefits.slice(0, 2).map((b, i) => (
                      <div key={i} className="text-[11px] text-stone-300 flex items-center gap-1.5">
                        <span className="text-sky-400 font-bold">✓</span>
                        <span className="truncate">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-stone-800 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] text-stone-400 uppercase font-semibold">Tarif de base</div>
                    <div className="text-base font-extrabold text-amber-300">
                      {defaultFormat.price.toLocaleString('fr-FR')} FCFA
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(fish, defaultFormat);
                    }}
                    id={`btn-add-fish-${fish.id}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white text-xs font-bold shadow-md shadow-sky-950 transition-all active:scale-95 cursor-pointer border border-sky-400/30"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Ajouter</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Contact for Bulk or Cleaning Services */}
        <div className="mt-14 bg-stone-900/80 rounded-2xl p-5 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-900/80 text-sky-300 border border-sky-600/40 flex items-center justify-center shrink-0">
              <Fish className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-stone-100">
                Besoin d’une grosse commande ou d'une découpe personnalisée ?
              </div>
              <div className="text-xs text-stone-400">
                Restaurants, réceptions, hôtels : tarifs dégressifs au carton et livraison sous chaîne du froid.
              </div>
            </div>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phone1Raw}`}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs text-center shadow-md transition-all whitespace-nowrap"
          >
            Appeler le Service Poissons : {COMPANY_INFO.phone1}
          </a>
        </div>

      </div>
    </section>
  );
};

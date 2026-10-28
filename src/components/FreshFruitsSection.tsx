import React from 'react';
import { Sparkles, PhoneCall, ShoppingBag, Truck, MapPin, CheckCircle2, Leaf, Heart } from 'lucide-react';
import { Product, ProductFormat } from '../types';
import { PRODUCTS, COMPANY_INFO } from '../data/products';
import { ProductVisual } from './ProductVisual';

interface FreshFruitsSectionProps {
  onAddToCart: (product: Product, format: ProductFormat) => void;
  onOpenModal: (product: Product) => void;
}

export const FreshFruitsSection: React.FC<FreshFruitsSectionProps> = ({
  onAddToCart,
  onOpenModal,
}) => {
  const fruitProducts = PRODUCTS.filter((p) => p.category === 'fruits-frais');

  return (
    <section id="fruits-frais" className="py-20 sm:py-28 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 text-white relative overflow-hidden">
      
      {/* Radiant Background Aura */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Vente Directe du Producteur au Consommateur</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-stone-50 tracking-tight">
            Fruits Frais du Terroir au Kilo
          </h2>
          
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Récoltés à parfaite maturité sous le soleil du Sénégal. Des fruits juteux, savoureux et gorgés de vitamines pour booster votre immunité et régaler toute la famille.
          </p>

          {/* Quick info banner */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800/50">
              <Leaf className="w-3.5 h-3.5" /> 100% Naturel & Cueillette Fraîche
            </span>
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold bg-amber-950/80 px-3.5 py-1 rounded-full border border-amber-800/50">
              <Truck className="w-3.5 h-3.5" /> Livraison Express Dakar & Régions
            </span>
          </div>
        </div>

        {/* 4 Fruits Grid (Sapoti, Mangue, Citron, Corossol) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fruitProducts.map((fruit) => {
            const defaultFormat = fruit.formats[0]; // 1 KG
            return (
              <div
                key={fruit.id}
                onClick={() => onOpenModal(fruit)}
                className="group relative bg-stone-900/85 backdrop-blur-md rounded-3xl border border-stone-800 hover:border-amber-500/60 p-5 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Price Sticker Ribbon */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-black text-xs px-3 py-1 rounded-full shadow-md border border-amber-300">
                    {fruit.badge}
                  </span>
                </div>

                <div>
                  <div className="pt-2 pb-3">
                    <ProductVisual product={fruit} size="md" />
                  </div>

                  <div className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
                    {fruit.subtitle}
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors font-serif mt-1">
                    {fruit.name}
                  </h3>

                  <p className="text-xs text-stone-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {fruit.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {fruit.benefits.slice(0, 2).map((b, i) => (
                      <div key={i} className="text-[11.5px] text-stone-300 flex items-center gap-1.5">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3.5 border-t border-stone-800 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] text-stone-400 uppercase font-bold">Tarif au KG</div>
                    <div className="text-xl font-black text-amber-400">
                      {defaultFormat.price.toLocaleString('fr-FR')} <span className="text-xs text-stone-300 font-normal">FCFA</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(fruit, defaultFormat);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Commander 1kg</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wholesale & Event Catering Callout */}
        <div className="mt-14 bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-950 rounded-3xl p-6 sm:p-10 border border-emerald-700/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Offre Gros & Professionnels
            </div>
            <h4 className="text-2xl font-bold text-stone-100 font-serif">
              Besoin de fruits en grande quantité pour un hôtel, restaurant ou événement ?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
              SENAM AGRO vous garantit des approvisionnements réguliers par caisses (10kg, 25kg, 50kg) avec des tarifs grossistes dégressifs et une livraison frigorifique sur Dakar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone2Raw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-stone-900 text-stone-200 hover:text-white border border-stone-700 hover:bg-stone-800 transition-all text-center"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>{COMPANY_INFO.phone2}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.phone2Raw}?text=${encodeURIComponent('Bonjour SENAM AGRO, je souhaite obtenir un devis pour une commande de fruits en gros.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-lg transition-all text-center"
            >
              <span>Devis de gros sur WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

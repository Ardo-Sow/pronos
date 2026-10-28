import React from 'react';
import { X, PhoneCall, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import senamLogoSrc from '../assets/images/senam_agro_logo_1786821486794.jpg';

interface OfficialPriceTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfficialPriceTableModal: React.FC<OfficialPriceTableModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const juicePrices = [
    { name: 'Jus bouye (Baobab Pur)', p350: 350, p500: 800, p1L: 1500, emoji: '🥜' },
    { name: 'Jus bissap blanc', p350: 350, p500: 800, p1L: 1500, emoji: '🌼' },
    { name: 'Jus gingembre', p350: 350, p500: 800, p1L: 1500, emoji: '🫚' },
    { name: 'Jus d’orange', p350: 350, p500: 800, p1L: 1500, emoji: '🍊' },
    { name: 'Bouye goyave', p350: 500, p500: 1000, p1L: 2000, emoji: '🌸' },
    { name: 'Bouye lait', p350: 500, p500: 1000, p1L: 2000, emoji: '🥛' },
    { name: 'Tamarin', p350: 500, p500: 1000, p1L: 2000, emoji: '🌰' },
    { name: 'Cocktail tropical', p350: 500, p500: 1000, p1L: 2000, emoji: '🍍' },
    { name: 'Mangue', p350: 500, p500: 1000, p1L: 2000, emoji: '🥭' },
    { name: 'Bouye & Corossol', p350: 500, p500: 1000, p1L: 2000, emoji: '🍈' },
    { name: 'Jus bissap rouge', p350: 350, p500: 800, p1L: 1500, emoji: '🌺' },
    { name: 'Detox (Concombre, Pomme, Menthe)', p350: 650, p500: 1300, p1L: 2500, emoji: '🥒' },
  ];

  const fruitPrices = [
    { name: 'Sapoti Frais', price: '800 FCFA / KG', emoji: '🥔' },
    { name: 'Mangues Locales de Saison', price: '500 FCFA / KG', emoji: '🥭' },
    { name: 'Citrons Juteux Sans Traitement', price: '500 FCFA / KG', emoji: '🍋' },
    { name: 'Corossols Entiers Frais', price: '2 500 FCFA / KG', emoji: '🍈' },
  ];

  const fishPrices = [
    { name: 'THIOF (Mérou Blanc)', price: '4 000 FCFA', emoji: '🐟', tag: '⭐ Best Seller' },
    { name: 'NENOU DIEUNE', price: '6 000 FCFA', emoji: '🐠', tag: 'Rouget' },
    { name: 'DAURADE ROYALE', price: '3 500 FCFA', emoji: '🐟', tag: 'Populaire' },
    { name: 'CAPITAINE', price: '3 000 FCFA', emoji: '🐟', tag: 'Prix Doux' },
    { name: 'BEURRE BLANC', price: '3 500 FCFA', emoji: '🐟', tag: 'Noble' },
    { name: 'BEURRE NOIR', price: '3 800 FCFA', emoji: '🐟', tag: 'Intense' },
    { name: 'SOMPATTE', price: '3 500 FCFA', emoji: '🐟', tag: 'Terroir' },
    { name: 'MADMOZELLE', price: '3 500 FCFA', emoji: '🐟', tag: 'Délicat' },
    { name: 'YABOYE', price: '2 000 FCFA', emoji: '🐟', tag: 'Oméga-3' },
    { name: 'SEUDEU (Courbine)', price: '3 400 FCFA', emoji: '🐟', tag: 'Savoureux' },
    { name: 'YAKH', price: '4 650 FCFA', emoji: '🐟', tag: 'Sauvage' },
    { name: 'LOTTE (Diabbar)', price: '3 300 FCFA', emoji: '🐟', tag: 'Moelleux' },
    { name: 'FILLET DE SAUMEAU', price: '18 250 FCFA', emoji: '🍣', tag: 'Gastronomie' },
    { name: 'GAMBASS GÉANTES', price: '11 000 FCFA', emoji: '🦐', tag: 'Fruits de Mer' },
    { name: 'CARTON WASS / TILAPIA', price: '23 500 FCFA', emoji: '📦', tag: 'Offre Pro' },
  ];

  return (
    <div
      id="modal-official-prices"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-stone-200 my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with warm theme */}
        <div className="bg-gradient-to-r from-stone-950 via-emerald-950 to-stone-900 text-white p-6 sm:p-7 relative overflow-hidden border-b border-amber-400/30">
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl bg-white shrink-0 border border-amber-300/40">
                <img
                  src={senamLogoSrc}
                  alt="SENAM AGRO"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-105"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-900/80 text-amber-300 text-[11px] font-extrabold uppercase tracking-wider mb-1 border border-emerald-600/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  Grille Officielle des Tarifs
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-serif">
                  SENAM AGRO • Jus, Poissons & Fruits
                </h3>
                <p className="text-stone-300 text-xs mt-0.5">
                  Jus artisanaux (350ml, 500ml, 1L) • Poissons frais du jour au KG • Fruits de saison
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-white/10 blur-xl pointer-events-none" />
        </div>

        {/* Content Table */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Juices Table */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span>🍹</span> Gamme des Jus de Fruits
              </h4>
              <span className="text-xs text-stone-500 font-medium">Prix en FCFA TTC</span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-stone-100/80 text-stone-700 uppercase font-bold text-[11px] tracking-wider border-b border-stone-200">
                  <tr>
                    <th className="py-3 px-3.5 sm:px-4">Saveur</th>
                    <th className="py-3 px-2 sm:px-3 text-center bg-amber-50/70 text-amber-900">350 ML</th>
                    <th className="py-3 px-2 sm:px-3 text-center bg-emerald-50/70 text-emerald-900">500 ML</th>
                    <th className="py-3 px-2 sm:px-4 text-center bg-teal-50/70 text-teal-900">1 LITRE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {juicePrices.map((item, idx) => (
                    <tr
                      key={item.name}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-stone-50' : 'bg-stone-50/40 hover:bg-stone-50'}
                    >
                      <td className="py-2.5 px-3.5 sm:px-4 font-semibold text-stone-900 flex items-center gap-2">
                        <span>{item.emoji}</span>
                        <span>{item.name}</span>
                      </td>
                      <td className="py-2.5 px-2 sm:px-3 text-center font-bold text-amber-700 bg-amber-50/30">
                        {item.p350} F
                      </td>
                      <td className="py-2.5 px-2 sm:px-3 text-center font-bold text-emerald-800 bg-emerald-50/30">
                        {item.p500} F
                      </td>
                      <td className="py-2.5 px-2 sm:px-4 text-center font-extrabold text-teal-900 bg-teal-50/30">
                        {item.p1L} F
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Poissons Frais & Fruits de Mer au KG */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span>🐟</span> Poissons Frais & Fruits de Mer (Arrivage du Jour)
              </h4>
              <span className="text-xs text-sky-700 font-bold bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                Pêche Artisanale
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {fishPrices.map((fish) => (
                <div
                  key={fish.name}
                  className="bg-sky-50/50 rounded-xl p-3 border border-sky-100/90 text-left flex flex-col justify-between hover:border-sky-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-1">
                    <span className="text-xl">{fish.emoji}</span>
                    <span className="text-[9.5px] font-bold text-sky-800 bg-sky-100 px-1.5 py-0.2 rounded-md">
                      {fish.tag}
                    </span>
                  </div>
                  <div className="mt-1.5">
                    <div className="text-xs font-bold text-stone-900 leading-tight truncate">
                      {fish.name}
                    </div>
                    <div className="mt-1 text-xs font-black text-sky-900 bg-white/90 px-2 py-1 rounded-lg border border-sky-200/80 shadow-xs inline-block">
                      {fish.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fruits au KG */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span>🍈</span> Fruits Frais au Kilo
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {fruitPrices.map((fruit) => (
                <div
                  key={fruit.name}
                  className="bg-stone-50 rounded-xl p-3 border border-stone-200 text-center flex flex-col items-center justify-between"
                >
                  <span className="text-2xl mb-1">{fruit.emoji}</span>
                  <div className="text-xs font-bold text-stone-800">{fruit.name}</div>
                  <div className="mt-1 text-xs font-extrabold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                    {fruit.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action & Hotline banner */}
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-amber-900">Commandes directes & WhatsApp</div>
                <div className="text-sm font-extrabold text-stone-900">
                  {COMPANY_INFO.phone1} / {COMPANY_INFO.phone2}
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent('Bonjour SENAM AGRO, je souhaite commander des jus.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs text-center shadow-sm transition-all"
            >
              Commander sur WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

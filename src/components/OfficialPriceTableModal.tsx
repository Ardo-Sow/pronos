import React from 'react';
import { X, PhoneCall, Sparkles } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS, isOutOfStock } from '../data/products';
import { CATEGORIES } from '../data/categories';
import senamLogoSrc from '../assets/images/senam_agro_logo_1786821486794.jpg';

interface OfficialPriceTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const fmt = (n: number) => n.toLocaleString('fr-FR');

export const OfficialPriceTableModal: React.FC<OfficialPriceTableModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="modal-official-prices"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-stone-200 my-6"
        onClick={(e) => e.stopPropagation()}
      >
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
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-900/80 text-amber-300 text-[11px] font-extrabold uppercase tracking-wider mb-1 border border-emerald-700/60">
                  <Sparkles className="w-3.5 h-3.5" />
                  Grille Officielle des Tarifs
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-serif">SENAM AGRO • Tous nos tarifs</h3>
                <p className="text-stone-300 text-xs mt-0.5">Prix en FCFA, par catégorie</p>
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
        </div>

        <div className="p-5 sm:p-7 space-y-7 max-h-[75vh] overflow-y-auto">
          {CATEGORIES.map((cat) => {
            const items = PRODUCTS.filter((p) => p.category === cat.id);
            if (items.length === 0) return null;
            return (
              <div key={cat.id}>
                <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 mb-2.5">
                  <span>{cat.icon}</span> {cat.label}
                  {isOutOfStock({ category: cat.id }) && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
                      Rupture de stock
                    </span>
                  )}
                </h4>
                <div className="overflow-hidden rounded-2xl border border-stone-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody className="divide-y divide-stone-100">
                      {items.map((p) => (
                        <tr key={p.id} className="hover:bg-stone-50">
                          <td className="py-2 px-3.5 font-semibold text-stone-800">{p.name}</td>
                          <td className="py-2 px-3.5 text-right text-stone-700">
                            {p.formats.map((f) => (
                              <div key={f.id} className="whitespace-nowrap">
                                <span className="text-stone-500">{p.formats.length > 1 ? `${f.volume} : ` : ''}</span>
                                <span className="font-extrabold text-emerald-800">{fmt(f.price)} FCFA</span>
                                {p.formats.length === 1 && (
                                  <span className="text-stone-500"> / {f.unit === 'sac' ? 'sac 25 kg' : f.unit}</span>
                                )}
                              </div>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}

          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-amber-900">Commandes directes & WhatsApp</div>
                <div className="text-sm font-extrabold text-stone-900">{COMPANY_INFO.phone1}</div>
              </div>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent('Bonjour SENAM AGRO, je souhaite commander.')}`}
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

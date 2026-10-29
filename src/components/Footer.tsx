import React from 'react';
import { Phone, Mail, MapPin, Heart, Leaf, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { SenamLogo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <SenamLogo size="md" variant="dark" />

            <p className="text-xs text-stone-400 leading-relaxed">
              {COMPANY_INFO.legalName}. Valorisation des saveurs authentiques du Sénégal : jus naturels, poissons frais, fruits, légumes, viandes, volailles marinées et plants de pépinière.
            </p>

            <div className="text-xs text-amber-400 font-semibold italic">
              « {COMPANY_INFO.slogan} »
            </div>
          </div>

          {/* Col 2: Nos Gammes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-100 uppercase tracking-wider">
              Nos Spécialités
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>• Bouye Pur & Bouye Lait Onctueux</li>
              <li>• Bouye Corossol, Goyave, Mangue</li>
              <li>• Bissap Rouge & Bissap Blanc Rare</li>
              <li>• Pure Détox Concombre Menthe</li>
              <li>• Poissons frais, fruits & légumes au kilo</li>
              <li>• Viandes, volailles marinées & pépinière</li>
            </ul>
          </div>

          {/* Col 3: Contact & Commandes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-100 uppercase tracking-wider">
              Service Commandes
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`tel:${COMPANY_INFO.phone1Raw}`} className="hover:text-white">
                  {COMPANY_INFO.phone1}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={`tel:${COMPANY_INFO.phone2Raw}`} className="hover:text-white">
                  {COMPANY_INFO.phone2}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Dakar, Sénégal (Livraison rapide)</span>
              </p>
              <p className="text-[11px] text-stone-500 pt-1">
                {COMPANY_INFO.openingHours}
              </p>
            </div>
          </div>

          {/* Col 4: Engagements */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-100 uppercase tracking-wider">
              Nos Garanties
            </h4>
            <div className="bg-stone-900 p-4 rounded-2xl border border-stone-800 space-y-2">
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <Leaf className="w-4 h-4" />
                <span>100% Naturel & Sain</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                Sans additifs chimiques ni conservateurs. Ingrédients issus de l’agriculture sénégalaise responsable.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} SENAM AGRO. Tous droits réservés. Dakar, Sénégal.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 text-stone-300 hover:text-white border border-stone-800 hover:border-stone-700 transition-colors"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

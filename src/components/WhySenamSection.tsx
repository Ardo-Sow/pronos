import React from 'react';
import { Leaf, Award, HeartHandshake, Sparkles, Droplets, CheckCircle, ShieldCheck, ThermometerSnowflake } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import senamLogoSrc from '../assets/images/senam_agro_logo_1786821486794.jpg';

export const WhySenamSection: React.FC = () => {
  const pillars = [
    {
      icon: Leaf,
      title: '100% Naturel & Brut',
      description:
        'Nos jus sont extraits directement à partir de fruits mûrs, de pulpes de baobab sauvage et de calices d’hibiscus sélectionnés. Zéro colorant de synthèse, zéro arôme chimique artificiel.',
      accent: 'emerald',
    },
    {
      icon: HeartHandshake,
      title: 'Fait Main & Terroir Sénégalais',
      description:
        'Chaque bouteille est le fruit d’un savoir-faire traditionnel allié à une rigueur moderne. Nous valorisons les récoltes locales et soutenons directement les agriculteurs du Sénégal.',
      accent: 'amber',
    },
    {
      icon: ThermometerSnowflake,
      title: 'Fraîcheur & Chaîne du Froid',
      description:
        'Préparation continue pour garantir une fraîcheur absolue. Nos produits sont immédiatement conditionnés et maintenus au frais pour préserver les vitamines actives et les minéraux.',
      accent: 'teal',
    },
    {
      icon: ShieldCheck,
      title: 'Au Service de Votre Santé',
      description:
        'Des recettes pensées pour votre bien-être : régulation de la tension avec le Bissap, digestion avec le Tamarin, renfort immunitaire avec le Corossol et énergie avec le Bouye.',
      accent: 'rose',
    },
  ];

  return (
    <section id="savoir-faire" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-300">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Excellence Agroalimentaire au Sénégal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif tracking-tight">
            Pourquoi Choisir SENAM AGRO ?
          </h2>
          
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {COMPANY_INFO.legalName} s’engage chaque jour à vous offrir l’authenticité des saveurs de notre terre avec les normes d’hygiène et de qualité les plus exigeantes.
          </p>
        </div>

        {/* Brand Origin & Official Logo Showcase */}
        <div className="mb-14 bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/20 shadow-xl flex flex-col md:flex-row items-center gap-6 sm:gap-10">
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden shadow-2xl bg-white border-2 border-amber-400/60 ring-4 ring-emerald-500/10">
              <img
                src={senamLogoSrc}
                alt="Logo Officiel SENAM AGRO"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-105"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-emerald-800 text-amber-300 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-amber-300 shadow-md">
              OFFICIEL
            </div>
          </div>

          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-800 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              L'Identité SENAM AGRO
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
              Cultiver la terre, valoriser nos richesses, nourrir l'Afrique
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-3xl">
              Le logo de <strong>SENAM AGRO</strong> symbolise la pousse de vie émergeant des sillons fertiles du terroir sénégalais. Notre vocation est d'apporter directement de la terre à votre verre des boissons vivantes, bienfaisantes et respectueuses des producteurs locaux.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 border border-emerald-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-stone-900 font-serif mb-2">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Engagement Garanti</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Infographic Card */}
        <div className="mt-14 bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              De l’Arbre à Votre Table
            </span>
            <h3 className="text-2xl font-bold font-serif text-stone-100 mt-1">
              Notre Processus de Fabrication Artisanal
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700 space-y-2 text-center sm:text-left">
              <div className="text-2xl font-black text-amber-400">01</div>
              <h4 className="font-bold text-stone-100 text-sm">Sélection & Tri Manuel</h4>
              <p className="text-xs text-stone-300">
                Choix rigoureux des fruits, baobabs et fleurs d’hibiscus à maturité idéale.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700 space-y-2 text-center sm:text-left">
              <div className="text-2xl font-black text-emerald-400">02</div>
              <h4 className="font-bold text-stone-100 text-sm">Extraction & Infusion Douce</h4>
              <p className="text-xs text-stone-300">
                Pressage soigné et filtration pour préserver l’onctuosité et les vitamines.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700 space-y-2 text-center sm:text-left">
              <div className="text-2xl font-black text-teal-400">03</div>
              <h4 className="font-bold text-stone-100 text-sm">Mise en Bouteille Hygiénique</h4>
              <p className="text-xs text-stone-300">
                Conditionnement hermétique en formats 350ml, 500ml et 1L dans un environnement stérile.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700 space-y-2 text-center sm:text-left">
              <div className="text-2xl font-black text-rose-400">04</div>
              <h4 className="font-bold text-stone-100 text-sm">Livraison au Frais</h4>
              <p className="text-xs text-stone-300">
                Acheminement rapide à Dakar et expéditions soignées vers toutes les régions.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

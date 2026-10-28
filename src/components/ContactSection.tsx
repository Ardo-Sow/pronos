import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    subject: 'Commande de jus / fruits',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `*NOUVEAU MESSAGE CONTACT - SENAM AGRO*\n\nNom : ${formState.name}\nTéléphone : ${formState.phone}\nObjet : ${formState.subject}\nMessage : ${formState.message}`;
    window.open(`https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormState({ name: '', phone: '', subject: 'Commande de jus / fruits', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute -bottom-10 left-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Service Client Réactif</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 font-serif tracking-tight">
            Contact & Service Livraison
          </h2>

          <p className="text-stone-300 text-sm sm:text-base">
            Une question, une commande spéciale ou un besoin de partenariat ? Notre équipe basée à Dakar vous répond immédiatement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Call & WhatsApp 1 */}
            <div className="bg-stone-800/80 rounded-2xl p-5 border border-stone-700/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-600 text-white shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                  Ligne Principale & WhatsApp
                </div>
                <div className="text-lg font-bold text-stone-100 font-serif">
                  {COMPANY_INFO.phone1}
                </div>
                <div className="flex gap-2 pt-1">
                  <a
                    href={`tel:${COMPANY_INFO.phone1Raw}`}
                    className="text-xs font-semibold text-stone-300 hover:text-white underline"
                  >
                    Appeler directement
                  </a>
                  <span className="text-stone-500">•</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phone1Raw}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-emerald-400 hover:underline"
                  >
                    Ouvrir WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Call & WhatsApp 2 */}
            <div className="bg-stone-800/80 rounded-2xl p-5 border border-stone-700/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-600 text-white shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                  Ligne Commandes & Fruits au Kilo
                </div>
                <div className="text-lg font-bold text-stone-100 font-serif">
                  {COMPANY_INFO.phone2}
                </div>
                <div className="flex gap-2 pt-1">
                  <a
                    href={`tel:${COMPANY_INFO.phone2Raw}`}
                    className="text-xs font-semibold text-stone-300 hover:text-white underline"
                  >
                    Appeler directement
                  </a>
                  <span className="text-stone-500">•</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phone2Raw}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-amber-400 hover:underline"
                  >
                    Ouvrir WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Delivery Coverage */}
            <div className="bg-stone-800/80 rounded-2xl p-5 border border-stone-700/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-stone-700 text-stone-200 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-stone-300 uppercase tracking-wide">
                  Siège & Zone de Couverture
                </div>
                <div className="text-sm font-semibold text-stone-200">
                  Dakar, Sénégal
                </div>
                <p className="text-xs text-stone-400">
                  Livraison à domicile et au bureau sur l’ensemble de la presqu’île de Dakar et envois express vers toutes les régions.
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-stone-800/80 rounded-2xl p-5 border border-stone-700/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-stone-700 text-stone-200 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-stone-300 uppercase tracking-wide">
                  Horaires d’Ouverture & Livraisons
                </div>
                <p className="text-xs text-stone-300 font-medium">
                  {COMPANY_INFO.openingHours}
                </p>
              </div>
            </div>

          </div>

          {/* Right: Quick Direct Contact Form */}
          <div className="lg:col-span-7 bg-stone-950 rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl">
            <h3 className="text-xl font-bold font-serif text-stone-100 mb-2">
              Envoyez-nous un Message Direct
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Remplissez ce formulaire court pour être mis en relation avec notre service commercial.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Ex: Babacar Diop"
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Numéro de Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="Ex: 77 000 00 00"
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Sujet de votre demande *
                </label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                >
                  <option value="Commande de jus / fruits">Commande de jus ou fruits au kilo</option>
                  <option value="Devis Événementiel (Mariage, Baptême)">Devis Événementiel (Mariage, Baptême, Fête)</option>
                  <option value="Offre Entreprise & Restauration">Offre Entreprise, Hôtel & Restauration</option>
                  <option value="Distributeur / Revendeur">Devenir distributeur / point de vente</option>
                  <option value="Autre renseignement">Autre renseignement</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Votre message ou détails *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Indiquez vos besoins, saveurs souhaitées, date et lieu de livraison..."
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all active:scale-98 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Transmettre via WhatsApp Direct</span>
              </button>

              {isSent && (
                <div className="p-3 rounded-xl bg-emerald-950 text-emerald-300 text-xs flex items-center gap-2 border border-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Votre message a été généré avec succès et transféré vers WhatsApp !</span>
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden md:flex fixed bottom-5 right-5 z-40 flex-col items-end gap-2">
      
      {/* Tooltip Popup */}
      {isOpen && (
        <div className="bg-stone-900 text-white p-4 rounded-2xl shadow-2xl border border-stone-700 w-72 mb-2 animate-slideUp">
          <div className="flex items-center justify-between pb-2 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-emerald-400">Service Client Actif</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-stone-300 my-3 leading-relaxed">
            Besoin d’un conseil ou d’une livraison express à Dakar ? Contactez-nous directement :
          </p>

          <div className="space-y-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessageBase)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-stone-950 text-xs font-extrabold shadow-sm transition-all"
            >
              <span>WhatsApp : {COMPANY_INFO.phone1}</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone1Raw}`}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold border border-stone-700 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Appeler : {COMPANY_INFO.phone1}</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-btn"
        aria-label="Contacter sur WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-stone-950 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </button>

    </div>
  );
};

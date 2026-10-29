import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, Truck, MapPin, CheckCircle2, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, DeliveryZone } from '../types';
import { DELIVERY_ZONES, COMPANY_INFO } from '../data/products';
import { categoryIcon } from '../data/categories';
import senamLogoSrc from '../assets/images/senam_agro_logo_1786821486794.jpg';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, formatId: string, delta: number) => void;
  onRemoveItem: (productId: string, formatId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [selectedZone, setSelectedZone] = useState<DeliveryZone>(DELIVERY_ZONES[0]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const itemsSubtotal = cart.reduce((sum, item) => sum + item.format.price * item.quantity, 0);
  const deliveryFee = cart.length > 0 ? selectedZone.fee : 0;
  const grandTotal = itemsSubtotal + deliveryFee;
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // ignore
    }

    let message = `*COMMANDE SENAM AGRO - SITE WEB*\n\n`;
    message += `👤 *Client :* ${customerName.trim() || 'Client web'}\n`;
    message += `📞 *Téléphone :* ${customerPhone.trim() || 'Non renseigné'}\n`;
    message += `📍 *Adresse / Quartier :* ${customerAddress.trim() || 'Dakar'}\n`;
    message += `🚚 *Zone de livraison :* ${selectedZone.name} (+${selectedZone.fee} FCFA)\n`;
    if (customerNote.trim()) {
      message += `📝 *Note / Consigne :* ${customerNote.trim()}\n`;
    }
    message += `\n*DÉTAILS DES ARTICLES :*\n`;
    cart.forEach((item, i) => {
      message += `${i + 1}. ${item.product.name} [${item.format.label}] x ${item.quantity} = ${(
        item.format.price * item.quantity
      ).toLocaleString('fr-FR')} FCFA\n`;
    });

    message += `\n--------------------------------\n`;
    message += `*Sous-total :* ${itemsSubtotal.toLocaleString('fr-FR')} FCFA\n`;
    message += `*Livraison :* ${deliveryFee.toLocaleString('fr-FR')} FCFA\n`;
    message += `*TOTAL À PAYER : ${grandTotal.toLocaleString('fr-FR')} FCFA*\n`;
    message += `--------------------------------\n`;
    message += `Merci de confirmer la prise en charge et le créneau de livraison !`;

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/70 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-stone-200 animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-stone-950 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl overflow-hidden shadow-md bg-white border border-amber-300/40 shrink-0">
              <img
                src={senamLogoSrc}
                alt="SENAM AGRO"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-105"
              />
            </div>
            <div>
              <h3 className="font-bold text-base font-serif text-stone-100">Panier SENAM AGRO</h3>
              <p className="text-xs text-amber-300">
                {totalCount} article(s) • 100% Naturel
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-850 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
          
          {/* Cart Items List */}
          {cart.length > 0 ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-stone-700 uppercase tracking-wider">
                <span>Articles ({cart.length})</span>
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-rose-600 hover:underline text-[11px] font-semibold"
                >
                  Vider le panier
                </button>
              </div>

              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.format.id}`}
                  className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 border border-stone-200/90 gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 overflow-hidden flex items-center justify-center shrink-0 shadow-2xs">
                    {item.product.imageUrl ? (
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xl">
                        {item.product.emoji || categoryIcon(item.product.category)}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-stone-900 truncate">
                      {item.product.name}
                    </h4>
                    <div className="text-[11px] text-stone-500 font-medium">
                      {item.format.label} • {item.format.price} FCFA
                    </div>
                    <div className="text-xs font-extrabold text-emerald-800 mt-0.5">
                      {(item.format.price * item.quantity).toLocaleString('fr-FR')} FCFA
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.format.id, -1)}
                      className="w-6 h-6 rounded-lg bg-white border border-stone-300 text-stone-700 flex items-center justify-center font-bold text-xs hover:bg-stone-100"
                    >
                      <Minus className="w-2.5 h-2.5" />
                    </button>
                    <span className="w-5 text-center text-xs font-extrabold text-stone-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.format.id, 1)}
                      className="w-6 h-6 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xs hover:bg-emerald-600 shadow-2xs"
                    >
                      <Plus className="w-2.5 h-2.5" />
                    </button>
                    <button
                      onClick={() => onRemoveItem(item.product.id, item.format.id)}
                      className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors ml-1"
                      title="Supprimer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-2xl text-stone-400">
                🍃
              </div>
              <h4 className="text-base font-bold text-stone-800">Votre panier est vide</h4>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Explorez nos jus, poissons, fruits, viandes, légumes et plants pour composer votre panier.
              </p>
              <button
                onClick={onClose}
                className="mt-2 inline-block px-5 py-2 rounded-xl bg-emerald-800 text-white text-xs font-bold shadow-xs hover:bg-emerald-700"
              >
                Parcourir les produits
              </button>
            </div>
          )}

          {/* Delivery & Customer Info Form */}
          {cart.length > 0 && (
            <div className="space-y-4 pt-2 border-t border-stone-200">
              
              {/* Delivery Zone Selector */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Zone de livraison (Sénégal) :</span>
                </label>
                <select
                  value={selectedZone.id}
                  onChange={(e) => {
                    const found = DELIVERY_ZONES.find((z) => z.id === e.target.value);
                    if (found) setSelectedZone(found);
                  }}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-xs font-semibold text-stone-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                >
                  {DELIVERY_ZONES.map((zone) => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name} (+{zone.fee} FCFA)
                    </option>
                  ))}
                </select>
                <div className="text-[11px] text-stone-500 mt-1">
                  ⏱️ Délai estimé : <strong>{selectedZone.estimatedTime}</strong>
                </div>
              </div>

              {/* Customer Coordinates */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  Vos coordonnées de livraison :
                </label>
                
                <input
                  type="text"
                  placeholder="Votre Nom & Prénom *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />

                <input
                  type="tel"
                  placeholder="Numéro de Téléphone (WhatsApp) *"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Adresse précise / Quartier / Repère à Dakar *"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />

                <textarea
                  placeholder="Précision (ex: Bien frais, heure souhaitée, etc.)"
                  rows={2}
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-1.5 text-xs text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-emerald-600 focus:outline-none resize-none"
                />
              </div>

            </div>
          )}

        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 space-y-3">
            
            {/* Calculation Lines */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Sous-total produits :</span>
                <span className="font-bold text-stone-900">{itemsSubtotal.toLocaleString('fr-FR')} FCFA</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Frais de livraison :</span>
                <span className="font-bold text-stone-900">+{deliveryFee.toLocaleString('fr-FR')} FCFA</span>
              </div>
              <div className="flex justify-between items-center text-stone-900 pt-2 border-t border-stone-200">
                <span className="font-extrabold text-sm">TOTAL À RÉGLER :</span>
                <span className="text-xl font-black text-emerald-800">
                  {grandTotal.toLocaleString('fr-FR')}{' '}
                  <span className="text-xs font-semibold text-amber-700">FCFA</span>
                </span>
              </div>
            </div>

            {/* Direct 1-Click WhatsApp Checkout */}
            <button
              type="button"
              onClick={handleCheckoutWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold bg-[#25D366] hover:bg-[#20ba59] text-stone-950 shadow-md transition-all active:scale-98 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Valider la commande sur WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center text-[10px] text-stone-500">
              Paiement à la livraison (Wave, Orange Money ou Espèces)
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

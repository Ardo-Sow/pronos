import React, { useState } from 'react';
import { Calculator, Sparkles, Send, Check, PhoneCall, Plus, Minus, RefreshCw } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO, DELIVERY_ZONES } from '../data/products';
import { Product, ProductFormat, ProductCategory } from '../types';
import { CATEGORIES, categoryIcon } from '../data/categories';

interface OrderSimulatorProps {
  onAddBulkToCart: (items: { product: Product; format: ProductFormat; quantity: number }[]) => void;
}

export const OrderSimulator: React.FC<OrderSimulatorProps> = ({ onAddBulkToCart }) => {
  // Preset types - default to custom with empty selection
  const [eventType, setEventType] = useState<'custom' | 'event' | 'family' | 'detox'>('custom');
  const [guestCount, setGuestCount] = useState(25);
  const [selectedZone, setSelectedZone] = useState(DELIVERY_ZONES[0]);
  const [filterCategory, setFilterCategory] = useState<Exclude<ProductCategory, 'all'>>('jus');

  // Quantities for custom / calculated items - EMPTY by default
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  // Selected format per product (default to popular format)
  const [selectedFormats, setSelectedFormats] = useState<{ [productId: string]: string }>({});

  const updateQuantity = (key: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[key] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      }
      return { ...prev, [key]: next };
    });
  };

  const handleClearAll = () => {
    setQuantities({});
    setEventType('custom');
  };

  // Preset recalculation
  const applyPreset = (type: 'event' | 'family' | 'detox') => {
    setEventType(type);
    if (type === 'event') {
      // 350ml bottles calculation
      const bottlesNeeded = Math.ceil(guestCount * 1.2);
      const split = Math.ceil(bottlesNeeded / 4);
      setQuantities({
        'bouye-corossol-fmt-350': split,
        'bissap-rouge-fmt-350': split,
        'bouye-naturel-fmt-350': split,
        'jus-cocktail-fmt-350': split,
      });
    } else if (type === 'family') {
      // 1 Litre bottles + fruits
      setQuantities({
        'bouye-naturel-fmt-1000': 2,
        'bissap-rouge-fmt-1000': 2,
        'bouye-lait-fmt-1000': 2,
        'bouye-corossol-fmt-1000': 1,
        'fruit-mangue-fmt-1': 2,
        'legume-citron-fmt-1': 1,
      });
    } else if (type === 'detox') {
      // 7-day cure
      setQuantities({
        'pure-detox-fmt-350': 4,
        'gingembre-bouye-fmt-350': 3,
        'orange-bouye-fmt-350': 2,
        'legume-citron-fmt-1': 2,
        'fruit-corrosol-fmt-1': 1,
      });
    }
  };

  // Calculate items and total price
  const simulatedItems = (Object.entries(quantities) as [string, number][])
    .filter(([_, qty]) => qty > 0)
    .map(([key, qty]) => {
      // Key can be `productId-formatId` or legacy `productId`
      let product: Product | undefined;
      let format: ProductFormat | undefined;

      if (key.includes('-fmt-')) {
        const parts = key.split('-fmt-');
        const pId = parts[0];
        const fId = `fmt-${parts[1]}`;
        product = PRODUCTS.find((p) => p.id === pId);
        if (product) {
          format = product.formats.find((f) => f.id === fId) || product.formats[0];
        }
      } else {
        product = PRODUCTS.find((p) => p.id === key);
        if (product) {
          format = product.formats.find((f) => f.popular) || product.formats[0];
        }
      }

      if (!product || !format) return null;

      return {
        key,
        product,
        format,
        quantity: qty,
        subtotal: format.price * qty,
      };
    })
    .filter(Boolean) as { key: string; product: Product; format: ProductFormat; quantity: number; subtotal: number }[];

  const subtotal = simulatedItems.reduce((acc, item) => acc + item.subtotal, 0);
  const total = subtotal + selectedZone.fee;

  const handleSendToWhatsApp = () => {
    let message = `Bonjour SENAM AGRO, je souhaite commander selon mon estimation en ligne :\n\n`;
    simulatedItems.forEach((item) => {
      message += `• ${item.quantity}x ${item.product.name} (${item.format.label}) = ${item.subtotal.toLocaleString('fr-FR')} FCFA\n`;
    });
    message += `\nSous-total : ${subtotal.toLocaleString('fr-FR')} FCFA`;
    message += `\nLivraison : ${selectedZone.name} (+${selectedZone.fee} FCFA)`;
    message += `\n*TOTAL : ${total.toLocaleString('fr-FR')} FCFA*`;
    message += `\n\nMerci de me confirmer la disponibilité et le délai !`;

    window.open(`https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleAddToCart = () => {
    onAddBulkToCart(
      simulatedItems.map((item) => ({
        product: item.product,
        format: item.format,
        quantity: item.quantity,
      }))
    );
  };

  return (
    <section id="simulateur" className="py-20 bg-stone-100/90 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold border border-amber-300">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            <span>Simulateur & Devis Express</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif tracking-tight">
            Estimez Votre Commande en 1 Clic
          </h2>
          
          <p className="text-stone-600 text-sm sm:text-base">
            Que ce soit pour une fête, une réception d’entreprise, un stock familial ou une cure santé, composez votre formule sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            
            {/* Presets Switcher */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                1. Choisissez un modèle de commande :
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => applyPreset('event')}
                  className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all ${
                    eventType === 'event'
                      ? 'bg-stone-900 text-amber-300 border-stone-900 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  🎉 Cérémonie / Fête
                </button>

                <button
                  type="button"
                  onClick={() => applyPreset('family')}
                  className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all ${
                    eventType === 'family'
                      ? 'bg-stone-900 text-amber-300 border-stone-900 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  🏠 Stock Famille 1L
                </button>

                <button
                  type="button"
                  onClick={() => applyPreset('detox')}
                  className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all ${
                    eventType === 'detox'
                      ? 'bg-stone-900 text-amber-300 border-stone-900 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  🌿 Cure Détox & Santé
                </button>

                <button
                  type="button"
                  onClick={() => setEventType('custom')}
                  className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all ${
                    eventType === 'custom'
                      ? 'bg-stone-900 text-amber-300 border-stone-900 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  ✨ 100% Personnalisé
                </button>
              </div>
            </div>

            {/* If Event, Guest slider */}
            {eventType === 'event' && (
              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-emerald-950">
                  <span>Nombre d’invités estimé :</span>
                  <span className="text-sm bg-emerald-700 text-white px-2.5 py-0.5 rounded-full font-extrabold">
                    {guestCount} personnes
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={guestCount}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setGuestCount(val);
                    const bottlesNeeded = Math.ceil(val * 1.2);
                    const split = Math.ceil(bottlesNeeded / 4);
                    setQuantities({
                      'bouye-corossol-fmt-350': split,
                      'bissap-rouge-fmt-350': split,
                      'bouye-naturel-fmt-350': split,
                      'jus-cocktail-fmt-350': split,
                    });
                  }}
                  className="w-full accent-emerald-700 cursor-pointer"
                />
                <div className="text-[11px] text-emerald-800">
                  Recommandation automatique : environ {Math.ceil(guestCount * 1.2)} bouteilles de 350 ML réparties sur 4 saveurs populaires.
                </div>
              </div>
            )}

            {/* Custom Item Adjusters */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  2. Choisissez vos produits et quantités :
                </label>
                {simulatedItems.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="text-xs text-rose-600 hover:text-rose-700 font-semibold underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Vider la sélection</span>
                  </button>
                )}
              </div>

              {/* Choix de la catégorie */}
              <div className="mb-3">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value as Exclude<ProductCategory, 'all'>)}
                  className="w-full bg-stone-50 border border-stone-200 text-stone-800 text-xs font-bold rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.icon} {c.label} ({PRODUCTS.filter((p) => p.category === c.id).length})
                    </option>
                  ))}
                </select>
              </div>

              {/* Product cards list */}
              <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
                {PRODUCTS.filter((p) => p.category === filterCategory).map((p) => {
                  // Currently selected format for this product
                  const currentFormatId =
                    selectedFormats[p.id] || (p.formats.find((f) => f.popular) || p.formats[0]).id;
                  const currentFormat =
                    p.formats.find((f) => f.id === currentFormatId) || p.formats[0];
                  
                  const itemKey = `${p.id}-${currentFormat.id}`;
                  const qty = quantities[itemKey] || 0;

                  return (
                    <div
                      key={p.id}
                      className={`p-3 rounded-2xl border transition-all ${
                        qty > 0
                          ? 'bg-emerald-50/60 border-emerald-300 ring-1 ring-emerald-300/40'
                          : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">
                            {p.emoji || categoryIcon(p.category)}
                          </span>
                          <div>
                            <div className="text-xs font-bold text-stone-900">{p.name}</div>
                            <div className="text-[11px] text-stone-500 line-clamp-1">
                              {p.tagline}
                            </div>
                          </div>
                        </div>

                        {/* Format selector buttons if more than 1 format */}
                        <div className="flex items-center gap-1.5 self-start sm:self-auto">
                          {p.formats.map((fmt) => (
                            <button
                              key={fmt.id}
                              type="button"
                              onClick={() =>
                                setSelectedFormats((prev) => ({ ...prev, [p.id]: fmt.id }))
                              }
                              className={`text-[11px] px-2 py-1 rounded-lg border font-semibold transition-all ${
                                currentFormat.id === fmt.id
                                  ? 'bg-stone-900 text-amber-300 border-stone-900 shadow-xs'
                                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                              }`}
                            >
                              {fmt.volume} ({fmt.price} F)
                            </button>
                          ))}
                        </div>

                        {/* Quantity adjuster */}
                        <div className="flex items-center justify-end gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => updateQuantity(itemKey, -1)}
                            disabled={qty === 0}
                            className="w-7 h-7 rounded-lg bg-white text-stone-700 border border-stone-200 disabled:opacity-30 flex items-center justify-center font-bold text-xs hover:bg-stone-100 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-extrabold text-stone-900">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(itemKey, 1)}
                            className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xs hover:bg-emerald-600 shadow-xs cursor-pointer active:scale-95"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Delivery Zone Selector */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                3. Zone de livraison à Dakar ou Régions :
              </label>
              <select
                value={selectedZone.id}
                onChange={(e) => {
                  const zone = DELIVERY_ZONES.find((z) => z.id === e.target.value) || DELIVERY_ZONES[0];
                  setSelectedZone(zone);
                }}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs font-semibold text-stone-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none cursor-pointer"
              >
                {DELIVERY_ZONES.map((zone) => (
                  <option key={zone.id} value={zone.id}>
                    {zone.name} (+{zone.fee} FCFA) - {zone.estimatedTime}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-5 bg-stone-900 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    Récapitulatif en Temps Réel
                  </span>
                  <h3 className="text-xl font-bold font-serif text-stone-100 mt-0.5">
                    Devis Estimatif
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-stone-800 text-stone-300 border border-stone-700">
                  {simulatedItems.length} article(s)
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {simulatedItems.length > 0 ? (
                  simulatedItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center text-xs py-1.5 border-b border-stone-800/60"
                    >
                      <div className="text-stone-300">
                        <span className="font-bold text-amber-300 mr-2">{item.quantity}x</span>
                        <span>{item.product.name}</span>
                        <span className="text-stone-500 text-[10px] ml-1">({item.format.label})</span>
                      </div>
                      <div className="font-extrabold text-stone-100">
                        {item.subtotal.toLocaleString('fr-FR')} FCFA
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-stone-500 text-xs">
                    Sélectionnez au moins un produit pour voir le devis.
                  </div>
                )}
              </div>

              {/* Financial Calculation */}
              <div className="mt-6 pt-4 border-t border-stone-800 space-y-2 text-xs">
                <div className="flex justify-between text-stone-400">
                  <span>Sous-total produits :</span>
                  <span className="font-semibold text-stone-200">{subtotal.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Frais de livraison ({selectedZone.name.split('(')[0]}) :</span>
                  <span className="font-semibold text-stone-200">+{selectedZone.fee.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-stone-700">
                  <span className="text-sm font-bold text-stone-100">Total Global Estimé :</span>
                  <span className="text-2xl font-black text-amber-400">
                    {total.toLocaleString('fr-FR')} <span className="text-xs font-normal text-stone-300">FCFA</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                disabled={simulatedItems.length === 0}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold bg-[#25D366] hover:bg-[#20ba59] disabled:opacity-50 text-stone-950 shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Valider le devis sur WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={simulatedItems.length === 0}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 disabled:opacity-50 text-white transition-all active:scale-98 cursor-pointer"
              >
                <span>Transférer vers le Panier d’Achat</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, Check, ShoppingBag, PhoneCall, Sparkles, Heart, Leaf, Shield, Truck, Share2 } from 'lucide-react';
import { Product, ProductFormat } from '../types';
import { ProductVisual } from './ProductVisual';
import { COMPANY_INFO, isOutOfStock } from '../data/products';
import senamLogoSrc from '../assets/images/senam_agro_logo_1786821486794.jpg';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, format: ProductFormat, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedFormat, setSelectedFormat] = useState<ProductFormat>(
    product.formats.find((f) => f.popular) || product.formats[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [showAddedSuccess, setShowAddedSuccess] = useState(false);
  const [showSoldOut, setShowSoldOut] = useState(false);

  const totalPrice = selectedFormat.price * quantity;

  const handleAddToCart = () => {
    if (isOutOfStock(product)) {
      setShowSoldOut(true);
      setTimeout(() => setShowSoldOut(false), 2000);
      return;
    }
    onAddToCart(product, selectedFormat, quantity);
    setShowAddedSuccess(true);
    setTimeout(() => {
      setShowAddedSuccess(false);
    }, 1500);
  };

  const generateWhatsAppOrderLink = () => {
    const text = `Bonjour SENAM AGRO, je souhaite commander :
- Produit : ${product.name} (${selectedFormat.label})
- Quantité : ${quantity}
- Total : ${totalPrice.toLocaleString('fr-FR')} FCFA
Merci de me confirmer la disponibilité et le délai de livraison à Dakar !`;
    return `https://wa.me/${COMPANY_INFO.phone1Raw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="modal-close-btn"
          aria-label="Fermer la modal"
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-stone-100/90 text-stone-700 hover:bg-stone-200 hover:text-stone-900 transition-colors shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Visual Showcase */}
          <div className="p-6 bg-stone-50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-900 text-emerald-100">
                  {product.naturalTag}
                </span>
                {product.badge && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="my-4">
                <ProductVisual product={product} size="lg" />
              </div>
            </div>

            {/* Flavor Profile Radar / Sliders */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200/80 space-y-2 mt-4">
              <div className="text-xs font-bold text-stone-900 uppercase tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Profil Gustatif & Texture</span>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] pt-1">
                <div>
                  <div className="flex justify-between text-stone-600 mb-0.5">
                    <span>Onctuosité</span>
                    <span className="font-bold text-emerald-700">{product.flavorProfile.creaminess}/5</span>
                  </div>
                  <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-600 h-full rounded-full"
                      style={{ width: `${(product.flavorProfile.creaminess / 5) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-stone-600 mb-0.5">
                    <span>Douceur</span>
                    <span className="font-bold text-amber-600">{product.flavorProfile.sweetness}/5</span>
                  </div>
                  <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full"
                      style={{ width: `${(product.flavorProfile.sweetness / 5) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-stone-600 mb-0.5">
                    <span>Acidité / Fraîcheur</span>
                    <span className="font-bold text-rose-600">{product.flavorProfile.acidity}/5</span>
                  </div>
                  <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-rose-500 h-full rounded-full"
                      style={{ width: `${(product.flavorProfile.acidity / 5) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-stone-600 mb-0.5">
                    <span>Intensité</span>
                    <span className="font-bold text-stone-800">{product.flavorProfile.intensity}/5</span>
                  </div>
                  <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-stone-800 h-full rounded-full"
                      style={{ width: `${(product.flavorProfile.intensity / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                    {product.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif leading-tight mt-1">
                    {product.name}
                  </h2>
                  <p className="text-sm font-medium text-amber-700 mt-1">
                    {product.tagline}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md bg-white border border-amber-300/40 shrink-0 hidden sm:block">
                  <img
                    src={senamLogoSrc}
                    alt="SENAM AGRO"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-105"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Ingrédients */}
              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ingrédients 100% Naturels</span>
                </h4>
                <ul className="text-xs text-stone-600 space-y-1 pl-4 list-disc marker:text-emerald-600">
                  {product.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>

              {/* Bienfaits Santé */}
              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-600" />
                  <span>Bienfaits Nutritionnels</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="text-xs bg-emerald-50 text-emerald-900 font-semibold px-2.5 py-1 rounded-lg border border-emerald-200"
                    >
                      ✓ {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Formats, Quantity & Checkout */}
            <div className="pt-4 border-t border-stone-200 space-y-4">
              
              {/* Format selection */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Choisissez votre format :
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {product.formats.map((fmt) => (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setSelectedFormat(fmt)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        selectedFormat.id === fmt.id
                          ? 'border-emerald-700 bg-emerald-50/70 text-emerald-950 font-bold shadow-xs ring-2 ring-emerald-600/30'
                          : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <div className="text-xs">{fmt.label}</div>
                      <div className="text-sm font-extrabold text-stone-900 mt-0.5">
                        {fmt.price.toLocaleString('fr-FR')} FCFA
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Price row */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center border border-stone-300 rounded-xl bg-stone-50 overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-stone-700 hover:bg-stone-200 font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-bold text-stone-900 text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-stone-700 hover:bg-stone-200 font-bold text-sm"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-stone-500 uppercase font-semibold">Total</div>
                  <div className="text-2xl font-black text-stone-900 leading-none">
                    {totalPrice.toLocaleString('fr-FR')}{' '}
                    <span className="text-xs font-bold text-amber-700">FCFA</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white shadow-md transition-all ${
                    showSoldOut
                      ? 'bg-red-600'
                      : showAddedSuccess
                      ? 'bg-emerald-800'
                      : 'bg-emerald-700 hover:bg-emerald-600 active:scale-98'
                  }`}
                >
                  {showSoldOut ? (
                    <span>⛔ Rupture de stock</span>
                  ) : showAddedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Ajouté au Panier !</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Ajouter au Panier</span>
                    </>
                  )}
                </button>

                <a
                  href={generateWhatsAppOrderLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold bg-[#25D366] hover:bg-[#20ba59] text-stone-950 shadow-md transition-all active:scale-98"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Commander WhatsApp</span>
                </a>
              </div>

              {/* Delivery notice */}
              <div className="text-center text-[11px] text-stone-500 flex items-center justify-center gap-1.5 pt-1">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Livraison partout à Dakar en moins de 2h</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

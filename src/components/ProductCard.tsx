import React, { useState } from 'react';
import { Plus, Eye, Check, Sparkles, ShoppingBag, Leaf, Droplets } from 'lucide-react';
import { Product, ProductFormat } from '../types';
import { ProductVisual } from './ProductVisual';
import { isOutOfStock } from '../data/products';
import { categoryLabel } from '../data/categories';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, format: ProductFormat) => void;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onOpenModal,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<ProductFormat>(
    product.formats.find((f) => f.popular) || product.formats[0]
  );
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [soldOut, setSoldOut] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOutOfStock(product)) {
      setSoldOut(true);
      setTimeout(() => setSoldOut(false), 2000);
      return;
    }
    onAddToCart(product, selectedFormat);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
    }, 1200);
  };

  const categoryText = categoryLabel(product.category);

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => onOpenModal(product)}
      className="group relative bg-white rounded-3xl border border-stone-200/90 hover:border-emerald-500/60 shadow-sm hover:shadow-2xl hover:shadow-stone-900/10 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer transform hover:-translate-y-1"
    >
      {/* Top Badges overlay */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
        {product.badge ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-3 py-1 rounded-full bg-stone-900/90 text-amber-300 shadow-md border border-amber-400/40 backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>{product.badge}</span>
          </span>
        ) : (
          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-stone-100/90 text-stone-700 border border-stone-200 backdrop-blur-xs">
            {categoryText}
          </span>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(product);
          }}
          className="p-2 rounded-full bg-white/95 text-stone-600 hover:text-emerald-700 hover:bg-white shadow-md backdrop-blur-xs transition-all pointer-events-auto transform hover:scale-110"
          title="Aperçu rapide"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Visual Component */}
      <div className="p-2.5">
        <ProductVisual product={product} size="md" />
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-stone-50/50 via-white to-white">
        
        {/* Title & Tagline */}
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1">
            <Leaf className="w-3 h-3 text-emerald-600" />
            <span>{product.subtitle || 'SENAM AGRO'}</span>
          </div>
          
          <h3 className="text-lg font-extrabold text-stone-900 group-hover:text-emerald-800 transition-colors font-serif leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-stone-600 mt-1.5 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Quick Key Benefits Badges */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.benefits.slice(0, 2).map((benefit, idx) => (
              <span
                key={idx}
                className="text-[10.5px] bg-stone-100/80 text-stone-700 px-2.5 py-0.5 rounded-full border border-stone-200/90 font-medium flex items-center gap-1"
              >
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{benefit}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Format Selector & Pricing Row */}
        <div className="mt-5 pt-3.5 border-t border-stone-100">
          
          {/* Formats Selector Tabs (affiché seulement s'il y a plusieurs formats) */}
          {product.formats.length > 1 ? (
            <div className="mb-3.5">
              <div className="text-[11px] font-bold text-stone-500 mb-1.5 flex items-center justify-between">
                <span>Choisir le format :</span>
                <span className="text-emerald-700 font-semibold">{selectedFormat.volume}</span>
              </div>
              <div className="flex items-center gap-1.5">
                {product.formats.map((fmt) => (
                  <button
                    key={fmt.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFormat(fmt);
                    }}
                    className={`flex-1 text-xs py-2 sm:py-1.5 px-2 rounded-xl font-bold transition-all text-center min-h-[36px] flex items-center justify-center ${
                      selectedFormat.id === fmt.id
                        ? 'bg-stone-950 text-amber-300 shadow-md ring-2 ring-amber-400/40'
                        : 'bg-stone-100/90 text-stone-700 border border-stone-200/90 hover:bg-stone-200/80'
                    }`}
                  >
                    {fmt.volume}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-3.5 text-[11px] font-bold text-stone-500">
              Vendu : <span className="text-emerald-700 font-semibold">{selectedFormat.label}</span>
            </div>
          )}

          {/* Price & Add to Cart Button */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <div>
              <div className="text-[10px] text-stone-400 uppercase font-semibold">Prix</div>
              <div className="text-xl font-black text-stone-900 leading-none mt-0.5">
                {selectedFormat.price.toLocaleString('fr-FR')}{' '}
                <span className="text-xs font-bold text-amber-700">FCFA</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              id={`add-to-cart-btn-${product.id}`}
              className={`inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 min-h-[42px] rounded-xl text-xs font-extrabold whitespace-nowrap transition-all transform active:scale-95 shadow-md cursor-pointer ${
                soldOut
                  ? 'bg-red-600 text-white ring-2 ring-red-300'
                  : addedAnimation
                  ? 'bg-emerald-800 text-white ring-2 ring-emerald-400'
                  : 'bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-emerald-900/20'
              }`}
            >
              {soldOut ? (
                <span>⛔ Rupture de stock</span>
              ) : addedAnimation ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Ajouté !</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                  <span>Commander</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

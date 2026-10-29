import React, { useState, useMemo, useEffect } from 'react';
import { Search, Sparkles, SlidersHorizontal, TableProperties } from 'lucide-react';
import { Product, ProductCategory, ProductFormat } from '../types';
import { ProductCard } from './ProductCard';
import { PRODUCTS, isOutOfStock } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { OfficialPriceTableModal } from './OfficialPriceTableModal';

interface ProductCatalogProps {
  selectedCategory: Exclude<ProductCategory, 'all'>;
  onSelectCategory: (category: Exclude<ProductCategory, 'all'>) => void;
  onAddToCart: (product: Product, format: ProductFormat) => void;
  onOpenModal: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onOpenModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name'>('default');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [isPriceTableOpen, setIsPriceTableOpen] = useState(false);

  const currentCategory = CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];
  const isSearching = searchQuery.trim().length > 0;

  // Sous-familles de la catégorie (ex. Bœuf / Mouton / Poulet pour les viandes)
  const groups = useMemo(() => {
    const set: string[] = [];
    PRODUCTS.filter((p) => p.category === selectedCategory).forEach((p) => {
      if (p.group && !set.includes(p.group)) set.push(p.group);
    });
    return set;
  }, [selectedCategory]);

  // On revient sur "Tous" quand on change de catégorie
  useEffect(() => {
    setSelectedGroup('all');
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      if (q) {
        // Recherche dans toutes les catégories
        return (
          product.name.toLowerCase().includes(q) ||
          product.subtitle.toLowerCase().includes(q) ||
          product.tagline.toLowerCase().includes(q) ||
          product.ingredients.some((ing) => ing.toLowerCase().includes(q))
        );
      }
      if (product.category !== selectedCategory) return false;
      if (selectedGroup !== 'all' && product.group !== selectedGroup) return false;
      return true;
    }).sort((a, b) => {
      const priceA = a.formats[0].price;
      const priceB = b.formats[0].price;
      if (sortBy === 'price-asc') return priceA - priceB;
      if (sortBy === 'price-desc') return priceB - priceA;
      if (sortBy === 'name') return a.name.localeCompare(b.name, 'fr');
      return 0;
    });
  }, [selectedCategory, selectedGroup, searchQuery, sortBy]);

  return (
    <section id="catalogue" className="py-14 sm:py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-3 border border-emerald-300/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Catalogue Officiel SENAM AGRO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif tracking-tight">
            Choisissez une catégorie
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Jus, poissons, fruits, viandes, légumes, pépinière : touchez une catégorie pour voir les produits et leurs prix.
          </p>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setIsPriceTableOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-extrabold shadow-sm transition-all cursor-pointer"
            >
              <TableProperties className="w-4 h-4" />
              <span>Voir tous les tarifs</span>
            </button>
          </div>
        </div>

        {/* Tuiles de catégories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-8">
          {CATEGORIES.map((cat) => {
            const active = !isSearching && selectedCategory === cat.id;
            const count = PRODUCTS.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  onSelectCategory(cat.id);
                }}
                className={`relative rounded-2xl p-3 sm:p-4 text-center border transition-all cursor-pointer bg-gradient-to-br ${cat.tile} ${
                  active
                    ? 'border-emerald-700 ring-2 ring-emerald-700 shadow-lg -translate-y-0.5'
                    : 'border-stone-200 hover:border-emerald-500 hover:shadow-md'
                }`}
              >
                <div className="text-3xl sm:text-4xl leading-none">{cat.icon}</div>
                <div className="mt-2 text-[13px] sm:text-sm font-extrabold text-stone-900 leading-tight">{cat.label}</div>
                <div className="mt-0.5 text-[11px] font-semibold text-stone-600">{count} produits</div>
                {isOutOfStock({ category: cat.id }) && (
                  <span className="absolute top-1.5 right-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-red-600 text-white">
                    Rupture
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Recherche & tri */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un produit (ex : Thiof, Banane, Bœuf, Manguier...)"
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-700"
                  aria-label="Effacer la recherche"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <SlidersHorizontal className="w-4 h-4 text-stone-500 hidden sm:inline" />
              <span className="text-xs font-semibold text-stone-600 whitespace-nowrap">Trier par :</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-stone-50 border border-stone-200 text-stone-800 text-xs font-semibold rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer"
              >
                <option value="default">Ordre du catalogue</option>
                <option value="price-asc">Prix : croissant</option>
                <option value="price-desc">Prix : décroissant</option>
                <option value="name">Nom (A → Z)</option>
              </select>
            </div>
          </div>

          {/* Sous-familles */}
          {!isSearching && groups.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {['all', ...groups].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setSelectedGroup(g)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedGroup === g
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200/60'
                  }`}
                >
                  {g === 'all' ? 'Tout' : g}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Titre de la liste */}
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-serif flex items-center gap-2">
            {isSearching ? (
              <>🔎 Résultats de la recherche</>
            ) : (
              <>
                <span>{currentCategory.icon}</span> {currentCategory.label}
              </>
            )}
          </h3>
          <span className="text-xs font-semibold text-stone-500">{filteredProducts.length} produit(s)</span>
        </div>

        {/* Grille */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-3">
            <div className="text-4xl">🍃</div>
            <h3 className="text-lg font-bold text-stone-800">Aucun produit ne correspond à votre recherche</h3>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              Essayez un autre mot-clé ou choisissez une catégorie ci-dessus.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-2 text-xs font-bold text-emerald-800 hover:underline inline-block"
            >
              Effacer la recherche
            </button>
          </div>
        )}
      </div>

      <OfficialPriceTableModal isOpen={isPriceTableOpen} onClose={() => setIsPriceTableOpen(false)} />
    </section>
  );
};

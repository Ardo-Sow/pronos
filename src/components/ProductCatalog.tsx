import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, Layers, SlidersHorizontal, TableProperties } from 'lucide-react';
import { Product, ProductCategory, ProductFormat } from '../types';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { OfficialPriceTableModal } from './OfficialPriceTableModal';

interface ProductCatalogProps {
  onAddToCart: (product: Product, format: ProductFormat) => void;
  onOpenModal: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onAddToCart,
  onOpenModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name'>('default');
  const [isPriceTableOpen, setIsPriceTableOpen] = useState(false);

  const categories: { id: ProductCategory; label: string; count: number; icon: string }[] = [
    { id: 'all', label: 'Tous nos produits', count: PRODUCTS.length, icon: '🌟' },
    { id: 'poissons-mer', label: 'Poissons & Fruits de Mer', count: PRODUCTS.filter((p) => p.category === 'poissons-mer').length, icon: '🐟' },
    { id: 'bouye-fusion', label: 'Jus de Bouye & Fusions', count: PRODUCTS.filter((p) => p.category === 'bouye-fusion').length, icon: '🥜' },
    { id: 'classiques', label: 'Grands Classiques', count: PRODUCTS.filter((p) => p.category === 'classiques').length, icon: '🌺' },
    { id: 'vitalite-detox', label: 'Vitalité & Détox', count: PRODUCTS.filter((p) => p.category === 'vitalite-detox').length, icon: '🥒' },
    { id: 'fruits-frais', label: 'Fruits Frais au KG', count: PRODUCTS.filter((p) => p.category === 'fruits-frais').length, icon: '🍈' },
    { id: 'packs', label: 'Packs & Événements', count: PRODUCTS.filter((p) => p.category === 'packs').length, icon: '🎁' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      const priceA = a.formats[0].price;
      const priceB = b.formats[0].price;
      if (sortBy === 'price-asc') return priceA - priceB;
      if (sortBy === 'price-desc') return priceB - priceA;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // default order
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="catalogue" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-3 border border-emerald-300/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Catalogue Officiel SENAM AGRO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif tracking-tight">
            Jus Artisanaux, Poissons Frais & Récoltes Naturelles
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Jus purs en formats <strong>350 ML</strong>, <strong>500 ML</strong>, <strong>1L</strong>, fruits du terroir et <strong>poissons frais du jour</strong> au <strong>KG & en carton</strong>.
          </p>

          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setIsPriceTableOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-extrabold shadow-sm transition-all cursor-pointer"
            >
              <TableProperties className="w-4 h-4" />
              <span>Voir la Grille des Tarifs Officielle (Jus, Poissons, Fruits)</span>
            </button>
          </div>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 mb-10 space-y-4">
          
          {/* Top row: Search input & Sort selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher (ex: Thiof, Daurade, Gambas, Bouye, Corossol...)"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort selector */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <SlidersHorizontal className="w-4 h-4 text-stone-500 hidden sm:inline" />
              <span className="text-xs font-semibold text-stone-600 whitespace-nowrap">Trier par:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-stone-50 border border-stone-200 text-stone-800 text-xs font-semibold rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer"
              >
                <option value="default">Recommandés</option>
                <option value="price-asc">Prix : croissant</option>
                <option value="price-desc">Prix : décroissant</option>
                <option value="name">Nom alphabétique</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`cat-filter-${cat.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 text-white shadow-sm shadow-emerald-950/20'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 hover:text-stone-900 border border-stone-200/60'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-950 text-emerald-200'
                      : 'bg-white text-stone-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Products Grid */}
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
              Essayez de modifier votre mot-clé ou sélectionnez une autre catégorie pour explorer notre gamme complète.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 text-xs font-bold text-emerald-800 hover:underline inline-block"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

      </div>

      <OfficialPriceTableModal
        isOpen={isPriceTableOpen}
        onClose={() => setIsPriceTableOpen(false)}
      />
    </section>
  );
};

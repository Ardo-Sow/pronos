import { ProductCategory } from '../types';

export interface CategoryInfo {
  id: Exclude<ProductCategory, 'all'>;
  label: string;
  icon: string;
  description: string;
  tile: string; // dégradé Tailwind de la tuile
}

// Ordre d'affichage des catégories sur le site
export const CATEGORIES: CategoryInfo[] = [
  { id: 'jus', label: 'Jus', icon: '🍹', description: 'Jus naturels artisanaux', tile: 'from-amber-100 to-orange-200' },
  { id: 'poisson', label: 'Poisson', icon: '🐟', description: 'Poissons & fruits de mer frais', tile: 'from-sky-100 to-blue-200' },
  { id: 'fruits', label: 'Fruits', icon: '🍈', description: 'Fruits frais au kilo', tile: 'from-lime-100 to-amber-200' },
  { id: 'viande', label: 'Viande', icon: '🥩', description: 'Bœuf, mouton, chèvre, poulet', tile: 'from-rose-100 to-red-200' },
  { id: 'pepiniere', label: 'Pépinière', icon: '🌱', description: 'Plants fruitiers en lot', tile: 'from-green-100 to-lime-200' },
  { id: 'viandes-marinees', label: 'Viandes & volailles marinées', icon: '🍗', description: 'Marinades maison prêtes à cuire', tile: 'from-orange-100 to-red-200' },
  { id: 'legumes', label: 'Légumes', icon: '🥕', description: 'Légumes frais au kilo', tile: 'from-emerald-100 to-lime-200' },
];

export const CATEGORY_BY_ID: Record<string, CategoryInfo> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c])
);

export const categoryIcon = (id: string) => CATEGORY_BY_ID[id]?.icon ?? '🛒';
export const categoryLabel = (id: string) => CATEGORY_BY_ID[id]?.label ?? 'Produit';

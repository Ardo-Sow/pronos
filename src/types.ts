export type ProductCategory =
  | 'all'
  | 'jus'
  | 'poisson'
  | 'fruits'
  | 'viande'
  | 'pepiniere'
  | 'viandes-marinees'
  | 'legumes';

export interface ProductFormat {
  id: string;
  label: string;
  volume: string;
  price: number; // in FCFA
  unit: string;
  popular?: boolean;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: Exclude<ProductCategory, 'all'>;
  group?: string; // sous-famille (ex. Bœuf, Mouton, Agrumes...)
  emoji?: string; // icône affichée quand il n'y a pas de photo
  description: string;
  badge?: string;
  imageUrl?: string;
  formats: ProductFormat[];
  ingredients: string[];
  benefits: string[];
  flavorProfile?: {
    sweetness: number; // 1 to 5
    acidity: number;
    creaminess: number;
    intensity: number;
  };
  color: string;
  accentColor: string;
  bgGradient: string;
  imageAlt: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  naturalTag: string;
}

export interface CartItem {
  product: Product;
  format: ProductFormat;
  quantity: number;
}

export interface DeliveryZone {
  id: string;
  name: string;
  fee: number;
  estimatedTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  avatarText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

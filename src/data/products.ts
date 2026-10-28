import { Product, DeliveryZone, Testimonial, FaqItem } from '../types';

import imgBouyeNaturel from '../assets/images/senam_cube_bouye_1788200306214.jpg';
import imgBissapRouge from '../assets/images/senam_cube_bissap_1788200319616.jpg';
import imgTamarin from '../assets/images/senam_cube_tamarin_1788200366788.jpg';
import imgBouyeCorossol from '../assets/images/senam_cube_corossol_1788200332821.jpg';
import imgBouyeGoyave from '../assets/images/senam_cube_goyave_1788200348856.jpg';
import imgJusCocktail from '../assets/images/senam_cube_cocktail_1788200408257.jpg';
import imgBissapBlanc from '../assets/images/senam_cube_bissap_blanc_1788200425561.jpg';
import imgBouyeLait from '../assets/images/senam_cube_bouye_lait_1788200439710.jpg';
import imgOrangeBouye from '../assets/images/senam_cube_orange_1788200394970.jpg';
import imgMangueBouye from '../assets/images/senam_cube_mangue_1788200291250.jpg';
import imgGingembreBouye from '../assets/images/senam_cube_gingembre_1788200382093.jpg';
import imgPureDetox from '../assets/images/senam_cube_pure_detox_1788200454131.jpg';
import imgFruitSapoti from '../assets/images/senam_fruit_sapoti_1786824341800.jpg';
import imgFruitMangue from '../assets/images/senam_fruit_mangue_1786824351473.jpg';
import imgFruitCitron from '../assets/images/senam_fruit_citron_1786824361796.jpg';
import imgFruitCorossol from '../assets/images/senam_fruit_corossol_1786824374379.jpg';

// Poissons Frais & Fruits de Mer
import imgFishBeurreBlanc from '../assets/images/senam_fish_beurre_blanc_1788199078620.jpg';
import imgFishBeurreNoir from '../assets/images/senam_fish_beurre_noir_1788199089880.jpg';
import imgFishDaurade from '../assets/images/senam_fish_daurade_1788199014140.jpg';
import imgFishCapitaine from '../assets/images/senam_fish_capitaine_1788199025383.jpg';
import imgFishSompatte from '../assets/images/senam_fish_sompatte_1788199100596.jpg';
import imgFishNenouDieune from '../assets/images/senam_fish_nenoudieune_1788199003067.jpg';
// Catégories actuellement en rupture de stock (mettre [] quand tout est de nouveau disponible)
export const OUT_OF_STOCK_CATEGORIES: string[] = ['bouye-fusion', 'classiques', 'vitalite-detox'];
export const isOutOfStock = (product: { category: string }) =>
  OUT_OF_STOCK_CATEGORIES.includes(product.category);
import imgFishMadmozelle from '../assets/images/senam_fish_madmozelle_1788199140527.jpg';
import imgFishYaboye from '../assets/images/senam_fish_yaboye_1788199112264.jpg';
import imgFishSeudeu from '../assets/images/senam_fish_seudeu_1788199152013.jpg';
import imgFishThiof from '../assets/images/senam_fish_thiof_1788198991846.jpg';
import imgFishYakh from '../assets/images/senam_fish_yakh_1788199163232.jpg';
import imgFishLotte from '../assets/images/senam_fish_lotte_1788199124365.jpg';
import imgFishSaumon from '../assets/images/senam_fish_saumon_1788199048350.jpg';
import imgFishGambas from '../assets/images/senam_fish_gambas_1788199035712.jpg';
import imgFishCartonWass from '../assets/images/senam_fish_carton_wass_1788199060868.jpg';
import imgPoissonHero from '../assets/images/senam_poisson_hero_1788198977984.jpg';

export { imgPoissonHero };

export const COMPANY_INFO = {
  name: 'SENAM AGRO',
  legalName: "Société d'exploitation de la Nature Agroalimentaire Moderne",
  slogan: 'La qualité au service de votre santé !',
  secondarySlogan: 'Le goût naturel de nos terres & la fraîcheur de nos mers !',
  fishSlogan: 'Fraîcheur du jour, saveur naturelle pour des repas sains et savoureux.',
  phone1: '+221 78 989 51 08',
  phone2: '+221 78 989 51 08',
  phone1Raw: '221789895108',
  phone2Raw: '221789895108',
  email: 'namagro1@gmail.com',
  secondaryEmail: 'contact@senam-agro.sn',
  address: 'Dakar, Sénégal (Livraison partout au Sénégal)',
  openingHours: 'Lundi - Samedi : 08h00 - 19h30 | Dimanche : 09h00 - 15h00',
  whatsappMessageBase: 'Bonjour SENAM AGRO, je souhaite passer une commande depuis le site web :',
};

export const DELIVERY_ZONES: DeliveryZone[] = [
  { id: 'zac-mbao', name: 'ZAC Mbao, Mbao', fee: 1000, estimatedTime: '30 - 60 min' },
  { id: 'keur-massar-rufisque', name: 'Keur Massar, Rufisque, Bargny', fee: 1500, estimatedTime: '45 - 90 min' },
  { id: 'pikine-guediawaye', name: 'Pikine, Guédiawaye, Thiaroye', fee: 2000, estimatedTime: '45 - 90 min' },
  { id: 'dakar-centre', name: 'Dakar Centre (Plateau, Médina, Fann, Point E)', fee: 2000, estimatedTime: '45 - 90 min' },
  { id: 'dakar-almadies-autres', name: 'Almadies, Ngor, Ouakam, Mermoz, Sacré-Cœur & Autres', fee: 2500, estimatedTime: '1h - 2h' },
  { id: 'thies-mbour', name: 'Thiès, Mbour, Saly Portudal', fee: 3500, estimatedTime: 'Livraison le jour même / 24h' },
  { id: 'regions-senegal', name: 'Autres Régions du Sénégal (Envoi express relais)', fee: 4500, estimatedTime: '24h - 48h' },
];

export const PRODUCTS: Product[] = [
  // 1. Jus de Bouye Pur
  // 350 ML: 350 F | 500 ML: 800 F | 1L: 1500 F
  {
    id: 'bouye-naturel',
    name: 'Jus de Bouye Pur',
    subtitle: 'Bouye Unique',
    tagline: 'Le Goût Authentique du Baobab Sauvage',
    category: 'bouye-fusion',
    badge: '350 F / 350ml',
    imageUrl: imgBouyeNaturel,
    isBestSeller: true,
    naturalTag: '100% Naturel • Fait Main',
    description: 'Le grand classique de la gastronomie sénégalaise. Élaboré à partir de pulpe de pain de singe (fruit du baobab) rigoureusement sélectionnée, offrant une texture veloutée et un goût riche inimitable.',
    formats: [
      { id: 'fmt-250', label: 'Bouteille 250 ML', volume: '250 ML', price: 250, unit: 'bouteille' },
      { id: 'fmt-350', label: 'Bouteille 350 ML', volume: '350 ML', price: 350, unit: 'bouteille' },
      { id: 'fmt-500', label: 'Bouteille 500 ML', volume: '500 ML', price: 800, unit: 'bouteille' },
      { id: 'fmt-1000', label: 'Bouteille 1 Litre', volume: '1 Litre', price: 1500, unit: 'bouteille', popular: true },
    ],
    ingredients: ['Pulpe de fruit de baobab (Bouye)', 'Eau pure micro-filtrée', 'Pointe de sucre de canne brut'],
    benefits: ['Riche en Vitamine C & Minéraux', 'Excellente source de fibres solubles', 'Soutient le transit et la vitalité'],
    flavorProfile: { sweetness: 3, acidity: 2, creaminess: 5, intensity: 4 },
    color: '#D4A373',
    accentColor: '#9A6B39',
    bgGradient: 'from-amber-50 to-orange-100',
    imageAlt: 'Jus de Bouye pur naturel SENAM AGRO',
  },

  // 2. Jus Bissap Blanc
  // 350 ML: 350 F | 500 ML: 800 F | 1L: 1500 F
  {
    id: 'bissap-blanc-bouye',
    name: 'Jus Bissap Blanc',
    subtitle: 'Flower Bissap Blanc',
    tagline: 'La Douceur de la Fleur de Bissap Blanc & Bouye Crémeux',
    category: 'classiques',
    badge: '350 F / 350ml',
    imageUrl: imgBissapBlanc,
    naturalTag: '100% Naturel • Recette Unique',
    description: 'Une infusion raffinée à base de calices de bissap blanc (hibiscus blanc) du Sénégal. Une saveur florale délicate, légère et ultra rafraîchissante.',
    formats: [
      { id: 'fmt-250', label: 'Bouteille 250 ML', volume: '250 ML', price: 250, unit: 'bouteille' },
      { id: 'fmt-350', label: 'Bouteille 350 ML', volume: '350 ML', price: 350, unit: 'bouteille' },
      { id: 'fmt-500', label: 'Bouteille 500 ML', volume: '500 ML', price: 800, unit: 'bouteille' },
      { id: 'fmt-1000', label: 'Bouteille 1 Litre', volume: '1 Litre', price: 1500, unit: 'bouteille', popular: true },
    ],
    ingredients: ['Calices d’hibiscus blanc du Sénégal', 'Eau purifiée', 'Fleur d’oranger légère', 'Sucre de canne'],
    benefits: ['Vertus digestives et apaisantes', 'Saveur florale délicate et peu sucrée', 'Boisson rafraîchissante haut de gamme'],
    flavorProfile: { sweetness: 3, acidity: 3, creaminess: 2, intensity: 4 },
    color: '#E0E0E0',
    accentColor: '#616161',
    bgGradient: 'from-stone-50 to-amber-50',
    imageAlt: 'Jus Bissap Blanc SENAM AGRO',
  },

  // 3. Jus Gingembre
  // 350 ML: 350 F | 500 ML: 800 F | 1L: 1500 F
  {
    id: 'gingembre-bouye',
    name: 'Jus de Gingembre',
    subtitle: 'Gingembre Pur & Bouye',
    tagline: 'L’Intensité du Gingembre & Le Caractère Sauvage',
    category: 'vitalite-detox',
    badge: '350 F / 350ml',
    imageUrl: imgGingembreBouye,
    isBestSeller: true,
    naturalTag: '100% Naturel • Fait Main',
    description: 'Le caractère ardent du rhizome de gingembre frais pressé avec une pointe de citron vert. Un booster immunitaire et tonifiant incomparable.',
    formats: [
      { id: 'fmt-250', label: 'Bouteille 250 ML', volume: '250 ML', price: 250, unit: 'bouteille' },
      { id: 'fmt-350', label: 'Bouteille 350 ML', volume: '350 ML', price: 350, unit: 'bouteille' },
      { id: 'fmt-500', label: 'Bouteille 500 ML', volume: '500 ML', price: 800, unit: 'bouteille' },
      { id: 'fmt-1000', label: 'Bouteille 1 Litre', volume: '1 Litre', price: 1500, unit: 'bouteille', popular: true },
    ],
    ingredients: ['Extrait de gingembre frais pressé', 'Eau purifiée', 'Jus de citron vert', 'Pointe de menthe', 'Sucre de canne'],
    benefits: ['Propriétés anti-inflammatoires puissantes', 'Revitalisant physique et tonique général', 'Stimule la digestion active'],
    flavorProfile: { sweetness: 2, acidity: 3, creaminess: 1, intensity: 5 },
    color: '#FBC02D',
    accentColor: '#F57F17',
    bgGradient: 'from-yellow-50 to-amber-100',
    imageAlt: 'Jus Gingembre SENAM AGRO',
  },

  // 4. Jus d'Orange
  // 350 ML: 350 F | 500 ML: 800 F | 1L: 1500 F
  {
    id: 'orange-bouye',
    name: 'Jus d’Orange',
    subtitle: 'Orange Pure & Bouye',
    tagline: 'La Fraîcheur Pure de l’Orange & Le Soleil d’Afrique',
    category: 'vitalite-detox',
    badge: '350 F / 350ml',
    imageUrl: imgOrangeBouye,
    naturalTag: '100% Naturel • Sans Additifs',
    description: 'Le punch vivifiant des oranges gorgées de soleil, fraîchement pressées. Un jus solaire plein de peps pour faire le plein d’énergie naturelle.',
    formats: [
      { id: 'fmt-250', label: 'Bouteille 250 ML', volume: '250 ML', price: 250, unit: 'bouteille' },
      { id: 'fmt-350', label: 'Bouteille 350 ML', volume: '350 ML', price: 350, unit: 'bouteille' },
      { id: 'fmt-500', label: 'Bouteille 500 ML', volume: '500 ML', price: 800, unit: 'bouteille' },
      { id: 'fmt-1000', label: 'Bouteille 1 Litre', volume: '1 Litre', price: 1500, unit: 'bouteille', popular: true },
    ],
    ingredients: ['Jus d’oranges fraîches pressées', 'Eau purifiée', 'Zeste fin d’agrume'],
    benefits: ['Haute teneur en Vitamine C naturelle', 'Stimule le système immunitaire', 'Goût tonique et ensoleillé'],
    flavorProfile: { sweetness: 3, acidity: 4, creaminess: 2, intensity: 4 },
    color: '#FF9800',
    accentColor: '#E65100',
    bgGradient: 'from-orange-50 to-amber-100',
    imageAlt: 'Jus Orange pressée SENAM AGRO',
  },

  // 5. Jus Bissap Rouge
  // 350 ML: 350 F | 500 ML: 800 F | 1L: 1500 F
  {
    id: 'bissap-rouge',
    name: 'Jus de Bissap Rouge',
    subtitle: 'Bissap Rouge Unique',
    tagline: 'Des jus de bissap rouge naturels, frais et délicieux',
    category: 'classiques',
    badge: '350 F / 350ml',
    imageUrl: imgBissapRouge,
    isBestSeller: true,
    naturalTag: '100% Naturel • Fait Main',
    description: 'Infusion de calices de fleurs d’hibiscus rouges du Sénégal, subtilement rehaussée d’une touche de menthe fraîche. Une explosion de fraîcheur acidulée et vivifiante.',
    formats: [
      { id: 'fmt-250', label: 'Bouteille 250 ML', volume: '250 ML', price: 250, unit: 'bouteille' },
      { id: 'fmt-350', label: 'Bouteille 350 ML', volume: '350 ML', price: 350, unit: 'bouteille' },
      { id: 'fmt-500', label: 'Bouteille 500 ML', volume: '500 ML', price: 800, unit: 'bouteille' },
      { id: 'fmt-1000', label: 'Bouteille 1 Litre', volume: '1 Litre', price: 1500, unit: 'bouteille', popular: true },
    ],
    ingredients: ['Calices d’hibiscus sabdariffa rouges', 'Feuilles de menthe fraîche', 'Eau purifiée', 'Sucre de canne'],
    benefits: ['Puissant antioxydant naturel', 'Aide à réguler la pression artérielle', 'Effet détox et rafraîchissant immédiat'],
    flavorProfile: { sweetness: 3, acidity: 4, creaminess: 1, intensity: 5 },
    color: '#880E4F',
    accentColor: '#B71C1C',
    bgGradient: 'from-rose-50 to-red-100',
    imageAlt: 'Jus de Bissap rouge naturel SENAM AGRO',
  },

  // 6. Bouye Goyave
  // 350 ML: 500 F | 500 ML: 1000 F | 1L: 2000 F
  {
    id: 'bouye-goyave',
    name: 'Bouye Goyave',
    subtitle: 'Goyave Tropicale & Bouye',
    tagline: 'L’Onctuosité du Baobab & La Douceur de la Goyave',
    category: 'bouye-fusion',
    badge: '500 F / 350ml',
    imageUrl: imgBouyeGoyave,
    naturalTag: '100% Naturel • Fait Main',
    description: 'Le parfum envoûtant de la goyave fraîche associé à la texture soyeuse du baobab. Une explosion de douceur fruitée et d’arômes tropicaux.',
    formats: [
      { id: 'fmt-250', label: 'Bouteille 250 ML', volume: '250 ML', price: 350, unit: 'bouteille' },
      { id: 'fmt-350', label: 'Bouteille 350 ML', volume: '350 ML', price: 500, unit: 'bouteille' },
      { id: 'fmt-500', label: 'Bouteille 500 ML', volume: '500 ML', price: 1000, unit: 'bouteille' },
      { id: 'fmt-1000', label: 'Bouteille 1 Litre', volume: '1 Litre', price: 2000, unit: 'bouteille', popular: true },
    ],
    ingredients: ['Pulpe de baobab naturelle', 'Purée de goyaves roses locales', 'Eau purifiée', 'Sucre de canne'],
    benefits: ['Concentration exceptionnelle en vitamine C', 'Favorise l’éclat du teint et la santé de la peau', 'Saveur tropicale très gourmande'],
    flavorProfile: { sweetness: 4, acidity: 3, creaminess: 4, intensity: 4 },
    color: '#EC407A',
    accentColor: '#C2185B',
    bgGradient: 'from-pink-50 to-rose-100',
    imageAlt: 'Jus Bouye Goyave SENAM AGRO',
  },

  // 7. Bouye Lait
  // 350 ML: 500 F | 500 ML: 1000 F | 1L: 2000 F
  {
    id: 'bouye-lait',
    name: 'Bouye Lait',
    subtitle: 'Bouye Lait Unique & Soyeux',
    tagline: 'L’Onctuosité du Baobab & L’Onctuosité du Lait',
    category: 'bouye-fusion',
    badge: '500 F / 350ml',
    imageUrl: imgBouyeLait,
    naturalTag: '100% Naturel • Fait Main',
    description: 'Le dessert liquide sénégalais traditionnel revisité avec excellence. L’alliance parfaite entre la pulpe brute de baobab et un lait entier onctueux, parfumé avec délicatesse.',
    formats: [
      { id: 'fmt-250', label: 'Bouteille 250 ML', volume: '250 ML', price: 350, unit: 'bouteille' },
      { id: 'fmt-350', label: 'Bouteille 350 ML', volume: '350 ML', price: 500, unit: 'bouteille' },
      { id: 'fmt-500', label: 'Bouteille 500 ML', volume: '500 ML', price: 1000, unit: 'bouteille' },
      { id: 'fmt-1000', label: 'Bouteille 1 Litre', volume: '1 Litre', price: 2000, unit: 'bouteille', popular: true },
    ],
    ingredients: ['Pulpe de baobab naturelle', 'Lait entier pasteurisé de qualité', 'Touche de vanille Bourbon', 'Sucre de canne'],
    benefits: ['Riche en calcium et protéines', 'Nourrissant et réconfortant', 'Idéal pour le petit-déjeuner et le goûter'],
    flavorProfile: { sweetness: 4, acidity: 1, creaminess: 5, intensity: 4 },
    color: '#EFEBE9',
    accentColor: '#795548',
    bgGradient: 'from-amber-50 to-neutral-100',
    imageAlt: 'Bouye Lait gourmand SENAM AGRO',
  },

  // 8. Tamarin
  // 350 ML: 500 F | 500 ML: 1000 F | 1L: 2000 F
  {
    id: 'tamarin-unique',
    name: 'Jus de Tamarin',
    subtitle: 'Tamarin Unique',
    tagline: 'Des jus de tamarin naturels, frais et délicieux',
    category: 'classiques',
    badge: '500 F / 350ml',
    imageUrl: imgTamarin,
    naturalTag: '100% Naturel • Fait Main',
    description: 'Préparé avec des gousses de tamarin local, ce jus au goût franc et équilibré offre une expérience gustative rafraîchissante et naturellement tonifiante.',
    formats: [
      { id: 'fmt-250', label: 'Bouteille 250 ML', volume: '250 ML', price: 350, unit: 'bouteille' },
      { id: 'fmt-350', label: 'Bouteille 350 ML', volume: '350 ML', price: 500, unit: 'bouteille' },
      { id: 'fmt-500', label: 'Bouteille 500 ML', volume: '500 ML', price: 1000, unit: 'bouteille' },
      { id: 'fmt-1000', label: 'Bouteille 1 Litre', volume: '1 Litre', price: 2000, unit: 'bouteille', popular: true },
    ],
    ingredients: ['Gousses de tamarin mûres sélectionnées', 'Eau de source', 'Sucre de canne brut'],
    benefits: ['Facilite la digestion naturelle', 'Riche en potassium et magnésium', 'Vertus détoxifiantes et apaisantes'],
    flavorProfile: { sweetness: 2, acidity: 5, creaminess: 1, intensity: 4 },
    color: '#795548',
    accentColor: '#4E342E',
    bgGradient: 'from-amber-50 to-stone-100',
    imageAlt: 'Jus de Tamarin pur SENAM AGRO',
  },

  // 9. Cocktail
  // 350 ML: 500 F | 500 ML: 1000 F | 1L: 2000 F
  {
    id: 'jus-cocktail',
    name: 'Jus Cocktail',
    subtitle: 'Cocktail Unique',
    tagline: 'Des jus de cocktail naturels, frais et délicieux',
    category: 'bouye-fusion',
    badge: '500 F / 350ml',
    imageUrl: imgJusCocktail,
    isBestSeller: true,
    naturalTag: '100% Naturel • Fait Main',
    description: 'Un subtil mélange harmonieux d’ananas victoria sucré, d’oranges gorgées de soleil et d’un velouté de bouye. Le jus festif par excellence pour toute la famille.',
    formats: [
      { id: 'fmt-250', label: 'Bouteille 250 ML', volume: '250 ML', price: 350, unit: 'bouteille' },
      { id: 'fmt-350', label: 'Bouteille 350 ML', volume: '350 ML', price: 500, unit: 'bouteille' },
      { id: 'fmt-500', label: 'Bouteille 500 ML', volume: '500 ML', price: 1000, unit: 'bouteille' },
      { id: 'fmt-1000', label: 'Bouteille 1 Litre', volume: '1 Litre', price: 2000, unit: 'bouteille', popular: true },
    ],
    ingredients: ['Jus d’ananas frais pressé', 'Jus d’orange douce', 'Pulpe de bouye veloutée', 'Infusion légère'],
    benefits: ['Cocktail multivitaminé A, C, E', 'Hydratation intense et énergie immédiate', 'Plaisir fruité équilibré'],
    flavorProfile: { sweetness: 4, acidity: 3, creaminess: 3, intensity: 4 },
    color: '#FB8C00',
    accentColor: '#E65100',
    bgGradient: 'from-amber-50 to-yellow-100',
    imageAlt: 'Jus Cocktail tropical SENAM AGRO',
  },

  // 10. Mangue
  // 350 ML: 500 F | 500 ML: 1000 F | 1L: 2000 F
  {
    id: 'mangue-bouye',
    name: 'Jus de Mangue',
    subtitle: 'Pur Mange & Bouye',
    tagline: 'La Douceur Pure de la Mange & L’Onctuosité du Baobab',
    category: 'bouye-fusion',
    badge: '500 F / 350ml',
    imageUrl: imgMangueBouye,
    naturalTag: '100% Naturel • Terroir Sénégalais',
    description: 'Fabriqué à partir des mangues les plus juteuses des vergers sénégalais. Un nectar doux, dense, ensoleillé et naturellement savoureux.',
    formats: [
      { id: 'fmt-250', label: 'Bouteille 250 ML', volume: '250 ML', price: 350, unit: 'bouteille' },
      { id: 'fmt-350', label: 'Bouteille 350 ML', volume: '350 ML', price: 500, unit: 'bouteille' },
      { id: 'fmt-500', label: 'Bouteille 500 ML', volume: '500 ML', price: 1000, unit: 'bouteille' },
      { id: 'fmt-1000', label: 'Bouteille 1 Litre', volume: '1 Litre', price: 2000, unit: 'bouteille', popular: true },
    ],
    ingredients: ['Chair de mangue sénégalaise mûre', 'Pulpe de fruit', 'Eau purifiée', 'Pointe de citron'],
    benefits: ['Riche en provitamine A et antioxydants', 'Soutient la santé oculaire et la vitalité', 'Saveur naturellement sucrée'],
    flavorProfile: { sweetness: 5, acidity: 2, creaminess: 4, intensity: 5 },
    color: '#FFA000',
    accentColor: '#FF6F00',
    bgGradient: 'from-amber-50 to-yellow-100',
    imageAlt: 'Jus Mangue SENAM AGRO',
  },

  // 11. Bouye Corossol
  // 350 ML: 500 F | 500 ML: 1000 F | 1L: 2000 F
  {
    id: 'bouye-corossol',
    name: 'Bouye & Corossol',
    subtitle: 'Bouye Corossol',
    tagline: 'Corossol Doux & Bouye Crémeux - Recette Unique',
    category: 'bouye-fusion',
    badge: '500 F / 350ml',
    imageUrl: imgBouyeCorossol,
    isBestSeller: true,
    naturalTag: '100% Naturel • Sans Additifs',
    description: 'Une création gastronomique exclusive SENAM AGRO combinant l’onctuosité du fruit de baobab avec la douceur aromatique du corossol mûr. Un délice riche en bienfaits.',
    formats: [
      { id: 'fmt-250', label: 'Bouteille 250 ML', volume: '250 ML', price: 350, unit: 'bouteille' },
      { id: 'fmt-350', label: 'Bouteille 350 ML', volume: '350 ML', price: 500, unit: 'bouteille' },
      { id: 'fmt-500', label: 'Bouteille 500 ML', volume: '500 ML', price: 1000, unit: 'bouteille' },
      { id: 'fmt-1000', label: 'Bouteille 1 Litre', volume: '1 Litre', price: 2000, unit: 'bouteille', popular: true },
    ],
    ingredients: ['Pulpe de fruit de baobab', 'Pulpe fraîche de corossol blanc', 'Eau filtrée', 'Sucre léger'],
    benefits: ['Action antioxydante et relaxante', 'Renforce le système immunitaire', 'Texture douce et apaisante pour l’estomac'],
    flavorProfile: { sweetness: 4, acidity: 2, creaminess: 5, intensity: 5 },
    color: '#689F38',
    accentColor: '#33691E',
    bgGradient: 'from-lime-50 to-emerald-100',
    imageAlt: 'Jus Bouye Corossol SENAM AGRO',
  },

  // 12. Detox
  // 350 ML: 650 F | 500 ML: 1300 F | 1L: 2500 F
  {
    id: 'pure-detox',
    name: 'Jus Detox',
    subtitle: 'Pure Detox & Équilibre',
    tagline: 'La Pureté Verte du Detox & L’Onctuosité de l’Équilibre',
    category: 'vitalite-detox',
    badge: '1 300 F / 500ml',
    imageUrl: imgPureDetox,
    naturalTag: '100% Naturel • Sans Additifs',
    description: 'Un élixir vert vivifiant composé de concombres croquants, pommes vertes, menthe fraîche et citron. Idéal pour purifier l’organisme et faire le plein de vitalité.',
    formats: [
      { id: 'fmt-250', label: 'Bouteille 250 ML', volume: '250 ML', price: 450, unit: 'bouteille' },
      { id: 'fmt-350', label: 'Bouteille 350 ML', volume: '350 ML', price: 650, unit: 'bouteille' },
      { id: 'fmt-500', label: 'Bouteille 500 ML', volume: '500 ML', price: 1300, unit: 'bouteille', popular: true },
      { id: 'fmt-1000', label: 'Bouteille 1 Litre', volume: '1 Litre', price: 2500, unit: 'bouteille' },
    ],
    ingredients: ['Concombre frais du Niayes', 'Pomme verte juteuse', 'Menthe fraîche froissée', 'Citron vert'],
    benefits: ['Détoxification hépatique et rénale', 'Hydratation cellulaire maximale', 'Effet légèreté et bien-être'],
    flavorProfile: { sweetness: 2, acidity: 3, creaminess: 2, intensity: 4 },
    color: '#2E7D32',
    accentColor: '#1B5E20',
    bgGradient: 'from-emerald-50 to-green-100',
    imageAlt: 'Jus Detox SENAM AGRO',
  },

  // 13. Sapoti (Fruit au KG)
  {
    id: 'fruit-sapoti',
    name: 'Sapoti Frais du Sénégal (Au KG)',
    subtitle: 'Fruit Sapoti Frais',
    tagline: 'Douceur Fondante et Mielleuse du Terroir',
    category: 'fruits-frais',
    badge: '800 FCFA / KG',
    imageUrl: imgFruitSapoti,
    naturalTag: '100% Terroir • Fait Main',
    description: 'Le sapoti est un fruit tropical d’une douceur incomparable à la chair fondante rappelant la poire et la cassonade. Récolté à parfaite maturité au Sénégal.',
    formats: [
      { id: 'fmt-1kg', label: '1 Kilogramme', volume: '1 KG', price: 800, unit: 'kg', popular: true },
      { id: 'fmt-3kg', label: 'Panier 3 Kilogrammes', volume: '3 KG', price: 2300, unit: 'panier' },
      { id: 'fmt-5kg', label: 'Caisse 5 Kilogrammes', volume: '5 KG', price: 3800, unit: 'caisse' },
    ],
    ingredients: ['Fruits de sapoti frais soigneusement triés'],
    benefits: ['Riche en antioxydants, tanins et vitamines A & C', 'Texture gourmande naturellement mielleuse', 'Excellente source d’énergie saine'],
    flavorProfile: { sweetness: 5, acidity: 1, creaminess: 4, intensity: 4 },
    color: '#8D6E63',
    accentColor: '#5D4037',
    bgGradient: 'from-stone-50 to-amber-100',
    imageAlt: 'Vente de Sapoti frais au kilo SENAM AGRO',
  },

  // 14. Mangue Fraîche (Fruit au KG)
  {
    id: 'fruit-mangue',
    name: 'Mangues Fraîches Sélectionnées (Au KG)',
    subtitle: 'Mangues au Kilo',
    tagline: 'Mangues Juteuses et Sucrées de Saison',
    category: 'fruits-frais',
    badge: '500 FCFA / KG',
    imageUrl: imgFruitMangue,
    naturalTag: '100% Local • Vergers Locaux',
    description: 'Des mangues sénégalaises savoureuses, cueillies à maturité optimale. Idéales pour la dégustation directe, les salades de fruits ou vos jus maison.',
    formats: [
      { id: 'fmt-1kg', label: '1 Kilogramme', volume: '1 KG', price: 500, unit: 'kg', popular: true },
      { id: 'fmt-5kg', label: 'Caisse 5 Kilogrammes', volume: '5 KG', price: 2400, unit: 'caisse' },
      { id: 'fmt-10kg', label: 'Carton Vrac 10 Kilogrammes', volume: '10 KG', price: 4600, unit: 'carton' },
    ],
    ingredients: ['Mangues fraîches locales issues de nos producteurs partenaires'],
    benefits: ['Riches en fibres alimentaires', 'Vitamines A, C et minéraux essentiels', 'Goût authentique et parfum puissant'],
    flavorProfile: { sweetness: 5, acidity: 2, creaminess: 3, intensity: 5 },
    color: '#FFB300',
    accentColor: '#FF6F00',
    bgGradient: 'from-amber-50 to-orange-100',
    imageAlt: 'Vente de mangues fraîches du Sénégal SENAM AGRO',
  },

  // 15. Citron Frais (Fruit au KG)
  {
    id: 'fruit-citron',
    name: 'Citrons Frais du Terroir (Au KG)',
    subtitle: 'Citrons au Kilo',
    tagline: 'Agrumes Pleins de Jus et Saveur Vivifiante',
    category: 'fruits-frais',
    badge: '500 FCFA / KG',
    imageUrl: imgFruitCitron,
    naturalTag: '100% Naturel • Sans Traitement',
    description: 'Citrons locaux gorgés de jus acidulé et riches en huiles essentielles. Parfaits pour vos assaisonnements, vos boissons santé et vos remèdes naturels.',
    formats: [
      { id: 'fmt-1kg', label: '1 Kilogramme', volume: '1 KG', price: 500, unit: 'kg', popular: true },
      { id: 'fmt-3kg', label: 'Filet 3 Kilogrammes', volume: '3 KG', price: 1400, unit: 'filet' },
      { id: 'fmt-5kg', label: 'Sac 5 Kilogrammes', volume: '5 KG', price: 2200, unit: 'sac' },
    ],
    ingredients: ['Citrons jaunes et verts locaux du Sénégal'],
    benefits: ['Effet détoxifiant et alcalinisant', 'Action antiseptique et digestive', 'Concentré en vitamine C active'],
    flavorProfile: { sweetness: 1, acidity: 5, creaminess: 1, intensity: 5 },
    color: '#FDD835',
    accentColor: '#F57F17',
    bgGradient: 'from-yellow-50 to-lime-100',
    imageAlt: 'Vente de citron frais au kilo SENAM AGRO',
  },

  // 16. Corossol Frais (Fruit au KG)
  {
    id: 'fruit-corossol',
    name: 'Corossol Frais Entier (Au KG)',
    subtitle: 'Corossol Entier au Kilo',
    tagline: 'Le Trésor Médicinal de Casamance',
    category: 'fruits-frais',
    badge: '2 500 FCFA / KG',
    imageUrl: imgFruitCorossol,
    isBestSeller: true,
    naturalTag: '100% Terroir • Fruit Rare',
    description: 'Fruit de corossol sélectionné à la main. Sa chair blanche cotonneuse et juteuse recèle de vertus médicinales exceptionnelles et d’un goût exquis.',
    formats: [
      { id: 'fmt-1kg', label: '1 Kilogramme', volume: '1 KG', price: 2500, unit: 'kg', popular: true },
      { id: 'fmt-3kg', label: 'Lot 3 Kilogrammes (2-3 gros fruits)', volume: '3 KG', price: 7200, unit: 'lot' },
      { id: 'fmt-5kg', label: 'Caisse 5 Kilogrammes', volume: '5 KG', price: 11500, unit: 'caisse' },
    ],
    ingredients: ['Fruit de corossol frais (Graviola) entier'],
    benefits: ['Puissant soutien cellulaire et immunitaire', 'Favorise un sommeil profond et réparateur', 'Soulage les tensions et apaise le corps'],
    flavorProfile: { sweetness: 4, acidity: 3, creaminess: 4, intensity: 5 },
    color: '#558B2F',
    accentColor: '#2E7D32',
    bgGradient: 'from-green-50 to-emerald-100',
    imageAlt: 'Vente de corossol frais au kilo SENAM AGRO',
  },

  // PACK 1: Pack Découverte 6 Saveurs
  {
    id: 'pack-decouverte-6',
    name: 'Coffret Découverte 6 Saveurs (350 ML)',
    subtitle: 'Pack Découverte',
    tagline: 'L’Expérience Complète des Saveurs SENAM AGRO',
    category: 'packs',
    badge: '2 500 FCFA',
    imageUrl: imgJusCocktail,
    naturalTag: 'Coffret Dégustation',
    description: 'Le coffret idéal pour découvrir nos recettes phares au format nomade 350 ML : Bouye Pur, Bissap Blanc, Bissap Rouge, Gingembre, Orange et Cocktail.',
    formats: [
      { id: 'fmt-pack6', label: 'Coffret 6 x 350 ML', volume: '6 x 350 ML', price: 2500, unit: 'coffret', popular: true },
      { id: 'fmt-pack12', label: 'Pack Famille 12 x 350 ML', volume: '12 x 350 ML', price: 4800, unit: 'pack' },
    ],
    ingredients: ['Sélection de 6 jus naturels assortis SENAM AGRO'],
    benefits: ['Variété de saveurs et de bienfaits', 'Format pratique pour les événements et réunions', 'Excellent rapport qualité/prix'],
    flavorProfile: { sweetness: 4, acidity: 3, creaminess: 4, intensity: 4 },
    color: '#00695C',
    accentColor: '#004D40',
    bgGradient: 'from-teal-50 to-emerald-100',
    imageAlt: 'Pack Découverte SENAM AGRO',
  },

  // PACK 2: Pack Famille & Partage 4x1L
  {
    id: 'pack-famille-4l',
    name: 'Pack Famille & Partage (4 x 1 Litre)',
    subtitle: 'Pack Famille 4L',
    tagline: 'La Convivialité Sénégalaise au Meilleur Prix',
    category: 'packs',
    badge: '6 000 FCFA',
    imageUrl: imgBouyeNaturel,
    naturalTag: '100% Convivialité',
    description: 'Composez votre pack familial de 4 bouteilles de 1 Litre au choix (Bouye, Bissap, Gingembre, Orange, etc.). Idéal pour le repas familial ou les cérémonies.',
    formats: [
      { id: 'fmt-pack4L', label: 'Pack 4 x 1 Litre', volume: '4 x 1L', price: 6000, unit: 'pack', popular: true },
      { id: 'fmt-pack8L', label: 'Pack Maxi 8 x 1 Litre', volume: '8 x 1L', price: 11500, unit: 'pack' },
    ],
    ingredients: ['4 bouteilles de 1L au choix parmi nos gammes artisanales'],
    benefits: ['Économie sur le prix unitaire', 'Stock frais toujours disponible à la maison', 'Prêt pour régaler tous vos invités'],
    flavorProfile: { sweetness: 4, acidity: 3, creaminess: 4, intensity: 4 },
    color: '#AD1457',
    accentColor: '#880E4F',
    bgGradient: 'from-rose-50 to-amber-100',
    imageAlt: 'Pack Famille 4 Litres SENAM AGRO',
  },

  // ==========================================
  // POISSONS & FRUITS DE MER (SENAM AGRO)
  // Saveur naturelle & arrivage quotidien
  // ==========================================

  // 1. THIOF (Mérou Blanc) - 4 000 FCFA
  {
    id: 'poisson-thiof',
    name: 'Thiof (Mérou Blanc)',
    subtitle: 'Poisson Noble du Sénégal',
    tagline: 'Le Roi du Thiéboudienne & des Grillades Royales',
    category: 'poissons-mer',
    badge: '4 000 FCFA',
    imageUrl: imgFishThiof,
    isBestSeller: true,
    naturalTag: 'Pêche Artisanale',
    description: 'Le Thiof (Mérou blanc) est le poisson emblématique de la gastronomie sénégalaise. Chair ferme, blanche, raffinée et savoureuse, idéal pour un Ceebu Jën d’exception ou au four.',
    formats: [
      { id: 'fmt-thiof-1kg', label: '1 Kilogramme', volume: '1 KG', price: 4000, unit: 'kg', popular: true },
      { id: 'fmt-thiof-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 8000, unit: 'lot' },
      { id: 'fmt-thiof-3kg', label: 'Lot 3 Kilogrammes (Poisson entier moyen/gros)', volume: '3 KG', price: 12000, unit: 'lot' },
      { id: 'fmt-thiof-5kg', label: 'Caisse 5 KG', volume: '5 KG', price: 19500, unit: 'caisse' },
    ],
    ingredients: ['Poisson Thiof (Epinephelus aeneus)'],
    benefits: ['Riche en protéines de haute qualité', 'Excellente source d’oméga-3 et minéraux', 'Chair ferme et très peu d’arêtes'],
    flavorProfile: { sweetness: 1, acidity: 1, creaminess: 4, intensity: 5 },
    color: '#0284C7',
    accentColor: '#0369A1',
    bgGradient: 'from-sky-50 to-blue-100',
    imageAlt: 'Thiof SENAM AGRO',
  },

  // 2. NENOU DIEUNE (Rouget) - 6 000 FCFA
  {
    id: 'poisson-nenou-dieune',
    name: 'Nenou Dieune (Rouget)',
    subtitle: 'Rouget Rouge Intense',
    tagline: 'Chair Fine & Délicate pour Grillades et Fritures',
    category: 'poissons-mer',
    badge: '6 000 FCFA',
    imageUrl: imgFishNenouDieune,
    isBestSeller: true,
    naturalTag: 'Qualité Premium',
    description: 'Le Nenou Dieune est un poisson rouge recherché pour la finesse remarquable de sa chair et son parfum marin délicat. Un régal croustillant en friture ou braisé à la sénégalaise.',
    formats: [
      { id: 'fmt-nenou-1kg', label: '1 Kilogramme', volume: '1 KG', price: 6000, unit: 'kg', popular: true },
      { id: 'fmt-nenou-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 11800, unit: 'lot' },
      { id: 'fmt-nenou-3kg', label: 'Lot 3 Kilogrammes', volume: '3 KG', price: 17500, unit: 'lot' },
    ],
    ingredients: ['Poisson Nenou Dieune entier'],
    benefits: ['Très digeste et savoureux', 'Riche en phosphore et oligo-éléments', 'Idéal pour petits et grands'],
    flavorProfile: { sweetness: 2, acidity: 1, creaminess: 3, intensity: 4 },
    color: '#E11D48',
    accentColor: '#BE123C',
    bgGradient: 'from-rose-50 to-red-100',
    imageAlt: 'Nenou Dieune poisson rouge SENAM AGRO',
  },

  // 3. DAURADE (Dorade) - 3 500 FCFA
  {
    id: 'poisson-daurade',
    name: 'Daurade Royale',
    subtitle: 'Daurade du Littoral',
    tagline: 'L’Incontournable des Poissons Braisés & Cuissons au Four',
    category: 'poissons-mer',
    badge: '3 500 FCFA',
    imageUrl: imgFishDaurade,
    isBestSeller: true,
    naturalTag: 'Qualité Sélectionnée',
    description: 'Daurade aux écailles argentées brillantes. Chair moelleuse, fondante et parfumée, idéale marinée avec un bon Nokoss puis braisée au feu de bois ou au four.',
    formats: [
      { id: 'fmt-daurade-1kg', label: '1 Kilogramme', volume: '1 KG', price: 3500, unit: 'kg', popular: true },
      { id: 'fmt-daurade-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 7000, unit: 'lot' },
      { id: 'fmt-daurade-3kg', label: 'Lot 3 Kilogrammes', volume: '3 KG', price: 10200, unit: 'lot' },
      { id: 'fmt-daurade-5kg', label: 'Caisse 5 Kilogrammes', volume: '5 KG', price: 16800, unit: 'caisse' },
    ],
    ingredients: ['Daurade royale du littoral'],
    benefits: ['Faible en calories et riche en bons lipides', 'Texture tendre et savoureuse', 'Parfait pour un repas sain'],
    flavorProfile: { sweetness: 1, acidity: 1, creaminess: 3, intensity: 4 },
    color: '#0D9488',
    accentColor: '#0F766E',
    bgGradient: 'from-teal-50 to-emerald-100',
    imageAlt: 'Daurade SENAM AGRO',
  },

  // 4. CAPITAINE - 3 000 FCFA
  {
    id: 'poisson-capitaine',
    name: 'Capitaine',
    subtitle: 'Capitaine de Mer',
    tagline: 'Chair Tendre & Généreuse sans Arêtes Gênantes',
    category: 'poissons-mer',
    badge: '3 000 FCFA',
    imageUrl: imgFishCapitaine,
    naturalTag: 'Prix Doux',
    description: 'Le Capitaine est particulièrement apprécié pour ses gros morceaux de chair blanche, dense et très facile à consommer. Excellent en sauce, en Yassa poisson ou pané.',
    formats: [
      { id: 'fmt-capitaine-1kg', label: '1 Kilogramme', volume: '1 KG', price: 3000, unit: 'kg', popular: true },
      { id: 'fmt-capitaine-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 6000, unit: 'lot' },
      { id: 'fmt-capitaine-3kg', label: 'Lot 3 Kilogrammes', volume: '3 KG', price: 8800, unit: 'lot' },
      { id: 'fmt-capitaine-5kg', label: 'Caisse 5 Kilogrammes', volume: '5 KG', price: 14500, unit: 'caisse' },
    ],
    ingredients: ['Poisson Capitaine de nos côtes'],
    benefits: ['Riche en vitamines B et D', 'Excellente source de sélénium', 'Idéal pour toute la famille'],
    flavorProfile: { sweetness: 1, acidity: 1, creaminess: 3, intensity: 3 },
    color: '#0284C7',
    accentColor: '#0369A1',
    bgGradient: 'from-blue-50 to-indigo-100',
    imageAlt: 'Capitaine SENAM AGRO',
  },

  // 5. BEURRE BLANC - 3 500 FCFA
  {
    id: 'poisson-beurre-blanc',
    name: 'Beurre Blanc',
    subtitle: 'Poisson Beurre Blanc',
    tagline: 'Chair Moelleuse & Délicatement Fondante',
    category: 'poissons-mer',
    badge: '3 500 FCFA',
    imageUrl: imgFishBeurreBlanc,
    naturalTag: 'Pêche Locale',
    description: 'Le poisson Beurre Blanc porte bien son nom : sa chair blanche très fondante en bouche offre une douceur incomparable en sauce ou cuit à l’étouffée.',
    formats: [
      { id: 'fmt-beurreblanc-1kg', label: '1 Kilogramme', volume: '1 KG', price: 3500, unit: 'kg', popular: true },
      { id: 'fmt-beurreblanc-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 7000, unit: 'lot' },
      { id: 'fmt-beurreblanc-3kg', label: 'Lot 3 Kilogrammes', volume: '3 KG', price: 10200, unit: 'lot' },
    ],
    ingredients: ['Poisson Beurre Blanc pêché localement'],
    benefits: ['Chair très tendre', 'Apport équilibré en protéines', 'Saveur douce très appréciée'],
    flavorProfile: { sweetness: 1, acidity: 1, creaminess: 4, intensity: 3 },
    color: '#64748B',
    accentColor: '#475569',
    bgGradient: 'from-slate-50 to-stone-100',
    imageAlt: 'Beurre Blanc poisson SENAM AGRO',
  },

  // 6. BEURRE NOIR - 3 800 FCFA
  {
    id: 'poisson-beurre-noir',
    name: 'Beurre Noir',
    subtitle: 'Poisson Beurre Noir',
    tagline: 'Goût Prononcé & Texture Onctueuse Idéale en Braise',
    category: 'poissons-mer',
    badge: '3 800 FCFA',
    imageUrl: imgFishBeurreNoir,
    naturalTag: 'Qualité Supérieure',
    description: 'Variété réputée pour sa saveur riche et intense. Très apprécié des connaisseurs pour des sauces relevées ou des grillades au charbon de bois bien assaisonnées.',
    formats: [
      { id: 'fmt-beurrenoir-1kg', label: '1 Kilogramme', volume: '1 KG', price: 3800, unit: 'kg', popular: true },
      { id: 'fmt-beurrenoir-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 7500, unit: 'lot' },
      { id: 'fmt-beurrenoir-3kg', label: 'Lot 3 Kilogrammes', volume: '3 KG', price: 11000, unit: 'lot' },
    ],
    ingredients: ['Poisson Beurre Noir'],
    benefits: ['Texture généreuse', 'Haute valeur nutritionnelle', 'Idéal pour plats mijotés'],
    flavorProfile: { sweetness: 1, acidity: 1, creaminess: 4, intensity: 4 },
    color: '#334155',
    accentColor: '#1E293B',
    bgGradient: 'from-zinc-100 to-stone-200',
    imageAlt: 'Beurre Noir poisson SENAM AGRO',
  },

  // 7. SOMPATTE - 3 500 FCFA
  {
    id: 'poisson-sompatte',
    name: 'Sompatte (Pomadasys)',
    subtitle: 'Grogneur / Sompatte',
    tagline: 'Ferme, Goûteux et Parfait pour vos Plats Traditionnels',
    category: 'poissons-mer',
    badge: '3 500 FCFA',
    imageUrl: imgFishSompatte,
    naturalTag: 'Terroir Marin',
    description: 'Poisson robuste à la chair serrée et savoureuse. Le Sompatte tient merveilleusement bien à la cuisson et apporte un arôme marin généreux dans les sauces et riz au poisson.',
    formats: [
      { id: 'fmt-sompatte-1kg', label: '1 Kilogramme', volume: '1 KG', price: 3500, unit: 'kg', popular: true },
      { id: 'fmt-sompatte-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 7000, unit: 'lot' },
      { id: 'fmt-sompatte-3kg', label: 'Lot 3 Kilogrammes', volume: '3 KG', price: 10200, unit: 'lot' },
    ],
    ingredients: ['Poisson Sompatte sélectionné'],
    benefits: ['Excellente tenue à la cuisson', 'Riche en acides aminés essentiels', 'Parfait pour plats mijotés'],
    flavorProfile: { sweetness: 1, acidity: 1, creaminess: 3, intensity: 4 },
    color: '#D97706',
    accentColor: '#B45309',
    bgGradient: 'from-amber-50 to-orange-100',
    imageAlt: 'Sompatte poisson SENAM AGRO',
  },

  // 8. MADMOZELLE - 3 500 FCFA
  {
    id: 'poisson-madmozelle',
    name: 'Madmozelle (Mademoiselle)',
    subtitle: 'Dorade Mademoiselle',
    tagline: 'Une Chair Fine et Savoureuse pour vos Grillades',
    category: 'poissons-mer',
    badge: '3 500 FCFA',
    imageUrl: imgFishMadmozelle,
    naturalTag: 'Pêche Côtière',
    description: 'La Madmozelle est un poisson gracieux aux reflets rosés et à la chair raffinée. Très appréciée en cuisson braisée, au four aux herbes ou en papillote.',
    formats: [
      { id: 'fmt-madmozelle-1kg', label: '1 Kilogramme', volume: '1 KG', price: 3500, unit: 'kg', popular: true },
      { id: 'fmt-madmozelle-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 7000, unit: 'lot' },
      { id: 'fmt-madmozelle-3kg', label: 'Lot 3 Kilogrammes', volume: '3 KG', price: 10200, unit: 'lot' },
    ],
    ingredients: ['Poisson Madmozelle'],
    benefits: ['Texture légère et fondante', 'Riche en iode et minéraux marins', 'Apprécié des gourmets'],
    flavorProfile: { sweetness: 1, acidity: 1, creaminess: 3, intensity: 4 },
    color: '#FB7185',
    accentColor: '#E11D48',
    bgGradient: 'from-rose-50 to-pink-100',
    imageAlt: 'Madmozelle poisson SENAM AGRO',
  },

  // 9. YABOYE - 2 000 FCFA
  {
    id: 'poisson-yaboye',
    name: 'Yaboye (Sardinelle)',
    subtitle: 'Sardinelle',
    tagline: 'L’Incontournable Populaire, Bourré d’Oméga-3',
    category: 'poissons-mer',
    badge: '2 000 FCFA',
    imageUrl: imgFishYaboye,
    naturalTag: 'Super Aliment • Petit Prix',
    description: 'La Yaboye (Sardinelle) est le trésor nutritionnel de l’océan atlantique sénégalais. Ultra riche en oméga-3, elle est succulente grillée au feu de braises ou fumée.',
    formats: [
      { id: 'fmt-yaboye-1kg', label: '1 Kilogramme', volume: '1 KG', price: 2000, unit: 'kg', popular: true },
      { id: 'fmt-yaboye-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 3900, unit: 'lot' },
      { id: 'fmt-yaboye-3kg', label: 'Lot 3 Kilogrammes', volume: '3 KG', price: 5700, unit: 'lot' },
      { id: 'fmt-yaboye-5kg', label: 'Caisse 5 Kilogrammes', volume: '5 KG', price: 9200, unit: 'caisse' },
    ],
    ingredients: ['Sardinelle Yaboye pêchée localement'],
    benefits: ['Championne en Oméga-3 et santé cardiaque', 'Riche en calcium et vitamine D', 'Accessible et très savoureuse'],
    flavorProfile: { sweetness: 1, acidity: 1, creaminess: 4, intensity: 5 },
    color: '#059669',
    accentColor: '#047857',
    bgGradient: 'from-emerald-50 to-teal-100',
    imageAlt: 'Yaboye sardinelle SENAM AGRO',
  },

  // 10. SEUDEU - 3 400 FCFA
  {
    id: 'poisson-seudeu',
    name: 'Seudeu (Ombrine / Courbine)',
    subtitle: 'Courbine Sénégalaise',
    tagline: 'Grande Noblesse de Goût & Chair Blanche Épaisse',
    category: 'poissons-mer',
    badge: '3 400 FCFA',
    imageUrl: imgFishSeudeu,
    naturalTag: 'Noble & Savoureux',
    description: 'Le Seudeu est un poisson à chair blanche dense, particulièrement juteuse. Il offre une tenue parfaite pour les grands plats familiaux, riz rouge ou blanc.',
    formats: [
      { id: 'fmt-seudeu-1kg', label: '1 Kilogramme', volume: '1 KG', price: 3400, unit: 'kg', popular: true },
      { id: 'fmt-seudeu-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 6700, unit: 'lot' },
      { id: 'fmt-seudeu-3kg', label: 'Lot 3 Kilogrammes', volume: '3 KG', price: 9900, unit: 'lot' },
    ],
    ingredients: ['Poisson Seudeu entier'],
    benefits: ['Chair épaisse et généreuse', 'Teneur élevée en protéines maigres', 'Facile à cuisiner'],
    flavorProfile: { sweetness: 1, acidity: 1, creaminess: 3, intensity: 4 },
    color: '#0284C7',
    accentColor: '#0369A1',
    bgGradient: 'from-sky-50 to-cyan-100',
    imageAlt: 'Seudeu poisson SENAM AGRO',
  },

  // 11. YAKH - 4 650 FCFA
  {
    id: 'poisson-yakh',
    name: 'Yakh (Baracuda / Yakh)',
    subtitle: 'Poisson Yakh Sauvage',
    tagline: 'Chair Serrée & Parfum Marin Prononcé',
    category: 'poissons-mer',
    badge: '4 650 FCFA',
    imageUrl: imgFishYakh,
    naturalTag: 'Pêche Côtière',
    description: 'Le Yakh est réputé pour sa chair savoureuse et ferme qui absorbe magnifiquement les épices sénégalaises (Rof, piment, ail, persil). Une référence pour les amateurs de poisson de caractère.',
    formats: [
      { id: 'fmt-yakh-1kg', label: '1 Kilogramme', volume: '1 KG', price: 4650, unit: 'kg', popular: true },
      { id: 'fmt-yakh-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 9200, unit: 'lot' },
      { id: 'fmt-yakh-3kg', label: 'Lot 3 Kilogrammes', volume: '3 KG', price: 13500, unit: 'lot' },
    ],
    ingredients: ['Poisson Yakh'],
    benefits: ['Texture ferme sans effritement', 'Riche en phosphore et oligo-éléments', 'Goût unique et authentique'],
    flavorProfile: { sweetness: 1, acidity: 1, creaminess: 3, intensity: 5 },
    color: '#475569',
    accentColor: '#334155',
    bgGradient: 'from-stone-100 to-slate-200',
    imageAlt: 'Yakh poisson SENAM AGRO',
  },

  // 12. LOTTE - 3 300 FCFA
  {
    id: 'poisson-lotte',
    name: 'Lotte (Diabbar)',
    subtitle: 'Lotte de Mer',
    tagline: 'Zéro Arête Centrale Gênante, Chair Moelleuse comme du Crustacé',
    category: 'poissons-mer',
    badge: '3 300 FCFA',
    imageUrl: imgFishLotte,
    naturalTag: 'Texture Gourmande',
    description: 'La Lotte est un poisson sans arêtes latérales, à la chair ferme et tendre qui rappelle la queue de langouste. Idéale en brochettes, en court-bouillon ou en sauce.',
    formats: [
      { id: 'fmt-lotte-1kg', label: '1 Kilogramme', volume: '1 KG', price: 3300, unit: 'kg', popular: true },
      { id: 'fmt-lotte-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 6500, unit: 'lot' },
      { id: 'fmt-lotte-3kg', label: 'Lot 3 Kilogrammes', volume: '3 KG', price: 9600, unit: 'lot' },
    ],
    ingredients: ['Lotte de mer'],
    benefits: ['Pratiquement sans arêtes', 'Texture très fine et dense', 'Excellente source de vitamines'],
    flavorProfile: { sweetness: 1, acidity: 1, creaminess: 4, intensity: 3 },
    color: '#78716C',
    accentColor: '#57534E',
    bgGradient: 'from-stone-100 to-amber-100',
    imageAlt: 'Lotte SENAM AGRO',
  },

  // 13. FILLET DE SAUMEAU (Saumon) - 18 250 FCFA
  {
    id: 'poisson-saumon',
    name: 'Filet de Saumon (Fillet de Saumeau)',
    subtitle: 'Saumon Extra',
    tagline: 'Pavé Gourmand Riche en Oméga-3 & Saveur Délicieuse',
    category: 'poissons-mer',
    badge: '18 250 FCFA',
    imageUrl: imgFishSaumon,
    isBestSeller: true,
    naturalTag: 'Qualité Gastronomique',
    description: 'Filet de saumon de première qualité, à la chair rose orangée fondante et soyeuse. Prêt à poêler, cuire au four à l’unilatérale ou déguster avec un riz parfumé et légumes.',
    formats: [
      { id: 'fmt-saumon-1kg', label: '1 Kilogramme (Filet entier)', volume: '1 KG', price: 18250, unit: 'kg', popular: true },
      { id: 'fmt-saumon-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 36500, unit: 'lot' },
      { id: 'fmt-saumon-3kg', label: 'Lot 3 Kilogrammes', volume: '3 KG', price: 54750, unit: 'lot' },
    ],
    ingredients: ['Filet de saumon premium'],
    benefits: ['Teneur record en acides gras Oméga-3', 'Excellente source de vitamine B12 et D', 'Goût raffiné incomparable'],
    flavorProfile: { sweetness: 2, acidity: 1, creaminess: 5, intensity: 4 },
    color: '#F97316',
    accentColor: '#EA580C',
    bgGradient: 'from-orange-50 to-rose-100',
    imageAlt: 'Filet de saumon SENAM AGRO',
  },

  // 14. GAMBASS - 11 000 FCFA
  {
    id: 'fruits-mer-gambas',
    name: 'Gambas Géantes (Grosses Crevettes)',
    subtitle: 'Fruits de Mer Premium',
    tagline: 'Charnues, Croquantes & Savoureuses pour vos Banquets',
    category: 'poissons-mer',
    badge: '11 000 FCFA',
    imageUrl: imgFishGambas,
    isBestSeller: true,
    naturalTag: 'Fruits de Mer',
    description: 'Grosses gambas sélectionnées pour leur calibre généreux et leur chair ferme et sucrée. Parfaites flambées à l’ail et persil, sautées ou en brochettes barbecue.',
    formats: [
      { id: 'fmt-gambas-500g', label: 'Barquette 500g', volume: '500g', price: 6000, unit: 'barquette', popular: true },
      { id: 'fmt-gambas-1kg', label: '1 Kilogramme (Calibre géant)', volume: '1 KG', price: 11000, unit: 'kg' },
      { id: 'fmt-gambas-2kg', label: 'Lot 2 Kilogrammes', volume: '2 KG', price: 21500, unit: 'lot' },
    ],
    ingredients: ['Gambas géantes de mer'],
    benefits: ['Très riches en protéines et pauvres en gras', 'Source remarquable de zinc, fer et sélénium', 'Croquant et saveur marine exquise'],
    flavorProfile: { sweetness: 3, acidity: 1, creaminess: 4, intensity: 5 },
    color: '#E11D48',
    accentColor: '#BE123C',
    bgGradient: 'from-red-50 to-amber-100',
    imageAlt: 'Gambas géantes SENAM AGRO',
  },

  // 15. CARTON WASS / TILAPIA - 23 500 FCFA
  {
    id: 'poisson-carton-wass',
    name: 'Carton Wass / Tilapia (Gros & Demi-Gros)',
    subtitle: 'Idéal Revendeurs & Professionnels',
    tagline: 'Conditionnement Économique pour Restaurants, Cérémonies et Foyers',
    category: 'poissons-mer',
    badge: '23 500 FCFA',
    imageUrl: imgFishCartonWass,
    isBestSeller: true,
    naturalTag: 'Offre Spéciale Pro & Famille',
    description: 'Carton complet de poisson Wass / Tilapia rigoureusement calibré pour garantir une qualité optimale. La solution la plus économique pour les réceptions, gargotes, restaurants et grandes familles.',
    formats: [
      { id: 'fmt-carton-1', label: '1 Carton Complet', volume: '1 Carton', price: 23500, unit: 'carton', popular: true },
      { id: 'fmt-carton-2', label: 'Lot 2 Cartons', volume: '2 Cartons', price: 46000, unit: 'lot' },
      { id: 'fmt-carton-5', label: 'Pack Pro 5 Cartons', volume: '5 Cartons', price: 113000, unit: 'pack' },
    ],
    ingredients: ['Poissons Wass / Tilapia entiers calibrés'],
    benefits: ['Tarif de gros imbattable', 'Parfait pour les événements et la revente', 'Conservation facile et longue durée'],
    flavorProfile: { sweetness: 1, acidity: 1, creaminess: 3, intensity: 4 },
    color: '#0D9488',
    accentColor: '#0F766E',
    bgGradient: 'from-teal-50 to-sky-100',
    imageAlt: 'Carton Wass Tilapia poisson SENAM AGRO',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aïssatou Diallo',
    role: 'Cliente Particulière',
    location: 'Almadies, Dakar',
    comment: 'Le jus de Bouye Corossol est tout simplement divin ! Une texture onctueuse, très peu sucré et un vrai goût de fruit frais. Je commande mon pack de 1L chaque semaine.',
    rating: 5,
    avatarText: 'AD',
  },
  {
    id: 'test-2',
    name: 'Dr. Mamadou Ndiaye',
    role: 'Nutritionniste',
    location: 'Fann Résidence',
    comment: 'SENAM AGRO propose enfin des jus sans conservateurs chimiques ni arômes de synthèse. Le jus Pure Detox et le Bouye Pur font partie intégrante de mes recommandations santé.',
    rating: 5,
    avatarText: 'MN',
  },
  {
    id: 'test-3',
    name: 'Fatou Bintou Sène',
    role: 'Organisatrice d’Événements',
    location: 'Sacré-Cœur 3',
    comment: 'Pour le baptême de mon fils, nous avons commandé 80 bouteilles de 350 ML (Bissap, Bouye Lait, Cocktail). Livraison ponctuelle, bouteilles bien fraîches, les invités ont adoré !',
    rating: 5,
    avatarText: 'FS',
  },
  {
    id: 'test-4',
    name: 'Ibrahima Fall',
    role: 'Client Fidèle',
    location: 'Dakar Plateau',
    comment: 'Très bon service client par WhatsApp. Les corossols frais au kilo sont livrés intacts et parfaitement mûrs. Bravo pour le sérieux et la propreté des emballages !',
    rating: 5,
    avatarText: 'IF',
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Vos jus contiennent-ils des conservateurs ou des colorants artificiels ?',
    answer: 'Non, absolument aucun. Tous les jus SENAM AGRO sont 100% naturels, confectionnés de façon artisanale à Dakar à partir de fruits frais locaux et de pulpe de baobab de première qualité.',
    category: 'Produits & Qualité',
  },
  {
    question: 'Quels sont les différents formats disponibles et les tarifs ?',
    answer: 'Nos jus sont proposés en 3 formats pratiques : 350 ML (dès 350 FCFA), 500 ML (dès 800 FCFA) et 1 Litre (dès 1 500 FCFA). Nous proposons également les fruits frais au kilo.',
    category: 'Tarifs & Formats',
  },
  {
    question: 'Combien de temps se conservent les jus SENAM AGRO ?',
    answer: 'Au réfrigérateur (entre 2°C et 4°C), nos jus se conservent parfaitement pendant 5 à 7 jours. Vous pouvez également les congeler pour une conservation prolongée jusqu’à 3 mois.',
    category: 'Conservation',
  },
  {
    question: 'Quels sont les tarifs et zones de livraison ?',
    answer: 'Nos tarifs de livraison : ZAC Mbao (1 000 FCFA), Keur Massar & Rufisque (1 500 FCFA), Pikine & Guédiawaye (2 000 FCFA), Dakar Centre (2 000 FCFA), Almadies et autres quartiers (2 500 FCFA), Thiès/Mbour (3 500 FCFA) et Régions (4 500 FCFA). Livraison express le jour même sous 45 à 90 minutes.',
    category: 'Livraison',
  },
  {
    question: 'Est-il possible de passer de grosses commandes pour des cérémonies et réceptions ?',
    answer: 'Oui ! Nous fournissons régulièrement des mariages, baptêmes, séminaires, comités d’entreprises et réceptions. Utilisez notre simulateur de devis ou contactez-nous directement sur WhatsApp (+221 78 989 51 08) pour bénéficier de tarifs dégressifs.',
    category: 'Événements & B2B',
  },
  {
    question: 'Quels sont les modes de paiement acceptés ?',
    answer: 'Vous pouvez régler à la livraison en espèces, ou via Wave, Orange Money et Free Money dès la validation de votre commande sur WhatsApp.',
    category: 'Paiement',
  },
];

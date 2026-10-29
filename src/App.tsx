import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { WhySenamSection } from './components/WhySenamSection';
import { OrderSimulator } from './components/OrderSimulator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Product, ProductFormat, CartItem, ProductCategory } from './types';
import { CATEGORY_BY_ID } from './data/categories';
import { PRODUCTS, isOutOfStock } from './data/products';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function App() {
  // Cart state with localStorage cache
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('senam_cart_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Exclude<ProductCategory, 'all'>>('jus');
  const [activeSection, setActiveSection] = useState('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('senam_cart_v1', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart operations
  const handleAddToCart = (product: Product, format: ProductFormat, quantity = 1) => {
    if (isOutOfStock(product)) {
      showToast(`${product.name} : rupture de stock`);
      return;
    }
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.format.id === format.id
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, format, quantity }];
      }
    });
    showToast(`${quantity}x ${product.name} (${format.label}) ajouté au panier`);
  };

  const handleAddBulkToCart = (
    items: { product: Product; format: ProductFormat; quantity: number }[]
  ) => {
    items.forEach((item) => {
      handleAddToCart(item.product, item.format, item.quantity);
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, formatId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.format.id === formatId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string, formatId: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.format.id === formatId))
    );
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('Panier vidé');
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    // Un identifiant de catégorie (jus, poisson, viande...) ouvre le catalogue sur cette catégorie
    if (CATEGORY_BY_ID[sectionId]) {
      setSelectedCategory(sectionId as Exclude<ProductCategory, 'all'>);
      document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-800 selection:text-white">
      
      {/* Navigation Header */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* 1. Hero Section */}
        <Hero
          onExploreCatalog={() => handleNavigate('catalogue')}
          onExploreFish={() => handleNavigate('poisson')}
          onExploreFruits={() => handleNavigate('fruits')}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* 2. Catalogue par catégories */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={(c) => {
            setSelectedCategory(c);
            setActiveSection(c);
          }}
          onAddToCart={handleAddToCart}
          onOpenModal={(p) => setSelectedProduct(p)}
        />

        {/* 5. Craftsmanship & Why SENAM AGRO */}
        <WhySenamSection />

        {/* 5. Interactive Event & Stock Order Simulator */}
        <OrderSimulator onAddBulkToCart={handleAddBulkToCart} />

        {/* 6. Customer Testimonials */}
        <TestimonialsSection />

        {/* 7. FAQ Accordion */}
        <FaqSection />

        {/* 8. Fast Contact & Delivery Info */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Action Button (Desktop) */}
      <WhatsAppFloatingButton />

      {/* Sticky Mobile Bottom Navigation Bar (Phone) */}
      <MobileBottomNav
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-emerald-500/50 flex items-center gap-2.5 text-xs sm:text-sm font-semibold animate-slideUp">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-xs text-amber-300 hover:underline flex items-center gap-1 font-bold"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Voir panier</span>
          </button>
        </div>
      )}

    </div>
  );
}

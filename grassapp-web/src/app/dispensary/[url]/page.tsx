'use client';

import { ArrowLeftIcon, ArrowRightIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { CartButton } from '@/components/cart/CartButton';
import { addItem } from '@/store/cartSlice';
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef, useEffect } from 'react';
import { mockProducts } from '@/utils/mockData';
import { ProductCard } from '@/components/product/ProductCard';
import { RootState } from '@/store/store';
import { motion, AnimatePresence } from 'framer-motion';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'flower', name: 'Flower' },
  { id: 'pre-rolls', name: 'Pre-Rolls' },
  { id: 'vaporizers', name: 'Vaporizers' },
  { id: 'edibles', name: 'Edibles' },
  { id: 'concentrates', name: 'Concentrates' },
  { id: 'accessories', name: 'Accessories' },
];

export default function DispensaryMenu() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state: RootState) => state.cart);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 200,
    effects: [] as string[],
    potency: [0, 100],
  });
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const handleAddToCart = (product: any, size: { name: string; weight: string; price: number }) => {
    dispatch(addItem({
      id: uuidv4(),
      productId: product.id,
      name: `${product.name} - ${size.weight}`,
      price: size.price,
      quantity: 1,
      size: size.name,
      weight: size.weight,
      image_url: product.image_url,
      strain_type: product.strain_type,
      thc: product.thc
    }));
  };

  // Filter products based on selected category and filters
  const filteredProducts = mockProducts.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < filters.minPrice || product.price > filters.maxPrice) return false;
    if (filters.effects.length > 0 && !filters.effects.every(effect => product.effects?.includes(effect))) return false;
    if (product.thc) {
      const thcValue = parseInt(product.thc);
      if (thcValue < filters.potency[0] || thcValue > filters.potency[1]) return false;
    }
    return true;
  });

  // Get card size based on product properties
  const getCardSize = (index: number, product: any) => {
    if (product.featured) return 'col-span-2 row-span-2';
    return 'col-span-1';
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-grass-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => router.back()}
              className="p-2 hover:text-grass-primary transition-colors"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <CartButton />
          </div>
        </div>
      </header>

      <main className="pt-28">
        <div className="container mx-auto px-4">
          {/* Dispensary Info */}
          <div className="flex items-center gap-6 mb-8">
            <div className="relative h-24 w-24 rounded-xl overflow-hidden">
              <PlaceholderImage
                src="/images/dispensaries/placeholder.jpg"
                alt="Dispensary"
                type="dispensary"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold">Green Leaf Dispensary</h1>
                <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
                  <StarIcon className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">4.5</span>
                </div>
                <span className="bg-green-500/20 text-green-500 text-xs px-2 py-1 rounded-full">
                  GrassApp Verified
                </span>
              </div>
              <p className="text-white/70">Premium Cannabis Dispensary • 0.8 miles away</p>
            </div>
          </div>
          
          {/* Featured Products Carousel */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Featured Products</h2>
            <div className="relative group">
              <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth">
                <div className="flex gap-6 pb-4">
                  {mockProducts.slice(0, 5).map((product) => (
                    <div 
                      key={product.id}
                      className="w-[300px] flex-shrink-0 snap-start"
                    >
                      <ProductCard 
                        product={{ ...product, featured: true }}
                        size="large"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Scroll Buttons */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => {
                  const container = document.querySelector('.overflow-x-auto');
                  if (container) {
                    container.scrollBy({ left: -320, behavior: 'smooth' });
                  }
                }}
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </button>
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => {
                  const container = document.querySelector('.overflow-x-auto');
                  if (container) {
                    container.scrollBy({ left: 320, behavior: 'smooth' });
                  }
                }}
              >
                <ArrowRightIcon className="w-6 h-6" />
              </button>
            </div>
          </section>

          {/* Categories & Filters */}
          <div className="sticky top-16 bg-black/95 backdrop-blur-sm z-40 py-4 border-b border-grass-primary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors relative
                      ${selectedCategory === category.id 
                        ? 'bg-grass-primary text-white' 
                        : 'bg-grass-bg-light hover:bg-grass-primary/20'}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                    {selectedCategory === category.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-grass-primary"
                        layoutId="categoryUnderline"
                      />
                    )}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`p-2 rounded-full transition-colors ${
                  isFilterOpen ? 'bg-grass-primary text-white' : 'bg-grass-bg-light hover:bg-grass-primary/20'
                }`}
              >
                <AdjustmentsHorizontalIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Filter Panel */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  {/* Add your filter controls here */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                  className={`${getCardSize(index, product)} relative rounded-xl p-4 shadow-lg overflow-hidden cursor-pointer
                    ${expandedProduct === product.id ? 'bg-grass-primary/10' : 'bg-grass-bg-light'}
                    transition-colors duration-300 hover:bg-grass-primary/5`}
                >
                  {/* Product Image */}
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <PlaceholderImage
                      src={product.image_url}
                      alt={product.name}
                      type="product"
                      fill
                      className="object-cover"
                    />
                    {product.featured && (
                      <span className="absolute top-2 right-2 bg-grass-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {product.strain_type && (
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-white/10">
                          {product.strain_type}
                        </span>
                      )}
                      {product.thc && (
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-white/10">
                          THC: {product.thc}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white">{product.name}</h3>

                    {/* Expanded Content */}
                    <motion.div
                      initial={false}
                      animate={{ height: expandedProduct === product.id ? 'auto' : 0 }}
                      className="overflow-hidden"
                    >
                      {product.description && (
                        <p className="text-sm text-white/70 mb-3">
                          {product.description}
                        </p>
                      )}

                      {/* Size Selection */}
                      <div className="flex gap-2 flex-wrap mb-3">
                        {product.metadata.sizes.map((size) => (
                          <button
                            key={size.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToCart(product, size);
                            }}
                            className="px-3 py-1.5 rounded-lg text-sm font-medium bg-grass-primary text-white
                              hover:bg-grass-primary-light transition-colors"
                          >
                            {size.weight} - ${size.price}
                          </button>
                        ))}
                      </div>
                    </motion.div>

                    {/* Price Display */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-baseline gap-2 bg-black/80 px-3 py-1.5 rounded-xl">
                        <span className="text-2xl font-bold text-white">
                          ${product.metadata.sizes[0].price}
                        </span>
                        <span className="text-sm text-white/70">
                          min
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
} 
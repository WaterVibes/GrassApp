'use client';

import { motion } from 'framer-motion';
import { CannabisIcon } from '@/components/icons/CannabisIcon';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

interface ProductCardProps {
  product: {
    name: string;
    type: string;
    thc: string;
    description: string;
    price: number;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <CannabisIcon className="w-4 h-4 text-grass-primary" />
            <h4 className="font-medium">{product.name}</h4>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <span>{product.type}</span>
            <span>•</span>
            <span>THC {product.thc}</span>
          </div>
          <p className="text-sm text-gray-300">{product.description}</p>
        </div>
        <button className="flex items-center gap-2 bg-grass-primary px-3 py-1.5 rounded-lg hover:bg-grass-primary-light transition-colors">
          <span>${product.price}</span>
          <ShoppingBagIcon className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
} 
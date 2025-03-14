'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import ProductConfirmModal from './ProductConfirmModal';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image_url?: string;
    strain_type?: string;
    thc?: string;
    metadata: {
      sizes: Array<{
        name: string;
        weight: string;
        price: number;
      }>;
    };
    featured?: boolean;
    brand?: string;
    description?: string;
  };
  size?: 'large' | 'tall' | 'wide' | 'normal';
}

export function ProductCard({ product, size = 'normal' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.metadata.sizes[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCardDimensions = () => {
    switch (size) {
      case 'large':
        return 'h-[400px]';
      case 'tall':
        return 'h-[500px]';
      case 'wide':
        return 'h-[300px]';
      default:
        return 'h-[350px]';
    }
  };

  return (
    <>
      <motion.div
        className={`relative ${getCardDimensions()} group cursor-pointer`}
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Background Layer */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-grass-bg-light"
          initial={false}
          animate={{
            scale: isHovered ? 1.03 : 1,
            opacity: isHovered ? 0.7 : 0.5,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Content Layer */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-b from-black/20 to-black/80"
          initial={false}
          animate={{
            scale: isHovered ? 1.01 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Product Image */}
          <div className="relative h-full w-full">
            <PlaceholderImage
              src={product.image_url}
              alt={product.name}
              type="product"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              {/* Featured Badge */}
              {product.featured && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-4 right-4 bg-grass-primary text-white text-sm font-medium px-3 py-1 rounded-full"
                >
                  Featured
                </motion.div>
              )}

              {/* Product Info */}
              <motion.div
                initial={false}
                animate={{
                  y: isHovered ? 0 : 10,
                  opacity: isHovered ? 1 : 0.9,
                }}
              >
                {/* Strain Type & THC */}
                <div className="flex items-center gap-2 mb-2">
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

                {/* Product Name */}
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{product.name}</h3>

                {/* Description */}
                {product.description && (
                  <p className="text-sm text-white/70 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                )}

                {/* Size Selection & Price */}
                <div className="space-y-3">
                  {/* Size Options */}
                  <div className="flex gap-2 flex-wrap">
                    {product.metadata.sizes.map((size) => (
                      <button
                        key={size.name}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          selectedSize.name === size.name
                            ? 'bg-grass-primary text-white'
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                      >
                        {size.weight}
                      </button>
                    ))}
                  </div>

                  {/* Price Display */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2 bg-black/80 px-3 py-1.5 rounded-xl">
                      <span className="text-2xl font-bold text-white">
                        ${selectedSize.price}
                      </span>
                      <span className="text-sm text-white/70">
                        per {selectedSize.weight}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <motion.button
                      className="flex items-center gap-2 bg-grass-primary text-white px-4 py-2 rounded-xl font-medium
                        opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsModalOpen(true);
                      }}
                    >
                      <CurrencyDollarIcon className="w-5 h-5" />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <ProductConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
} 
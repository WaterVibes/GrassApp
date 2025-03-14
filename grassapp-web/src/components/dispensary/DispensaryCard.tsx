'use client';

import Link from 'next/link';
import { Dispensary } from '@/types/dispensary';
import { StarIcon as StarIconOutline, ClockIcon, TruckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { CannabisIcon } from '@/components/icons/CannabisIcon';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface DispensaryCardProps {
  dispensary: Dispensary;
  size?: 'large' | 'tall' | 'wide' | 'normal';
  featured?: boolean;
}

export function DispensaryCard({ dispensary, size = 'normal', featured = false }: DispensaryCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cleanUrl = encodeURIComponent(dispensary.url);

  // Adjust image height based on card size
  const imageHeightClass = {
    large: 'h-[500px]',
    tall: 'h-[600px]',
    wide: 'h-[300px]',
    normal: 'h-[400px]',
  }[size];
  
  return (
    <Link href={`/dispensary/${cleanUrl}`} className="block h-full">
      <motion.div
        className="relative rounded-xl overflow-hidden h-full group cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {featured && (
          <motion.div 
            className="absolute top-4 right-4 z-20 bg-yellow-400/90 backdrop-blur-sm text-black px-3 py-1 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xs font-semibold">FEATURED</span>
          </motion.div>
        )}

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"
          animate={{
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 bg-black/20 z-0"
          animate={{
            opacity: isHovered ? 0.4 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <PlaceholderImage
          src={dispensary.logo_url}
          alt={dispensary.name}
          type="dispensary"
          fill
          className="object-cover transition-transform duration-500"
          priority={size === 'large' || featured}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Content Overlay */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-6 z-20"
          animate={{
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start justify-between mb-3">
            <motion.h3 
              className={`${size === 'large' ? 'text-2xl' : 'text-xl'} font-bold text-white`}
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {dispensary.name}
            </motion.h3>
            {dispensary.rating && (
              <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                <StarIconSolid className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">{dispensary.rating}</span>
              </div>
            )}
          </div>

          <motion.div 
            className="flex items-center gap-4 text-sm text-white/90 mb-3"
            animate={{
              opacity: isHovered ? 1 : 0.8,
            }}
          >
            {dispensary.delivery_time && (
              <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                <ClockIcon className="w-4 h-4" />
                <span>{dispensary.delivery_time}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
              <CurrencyDollarIcon className="w-4 h-4" />
              <span>{dispensary.delivery_fee === 0 ? 'Free Delivery' : `$${dispensary.delivery_fee} Delivery`}</span>
            </div>
          </motion.div>

          <div className="flex items-center justify-between">
            <motion.span 
              className="text-sm text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full"
              animate={{
                opacity: isHovered ? 1 : 0.8,
              }}
            >
              Min. ${dispensary.minimum_order}
            </motion.span>
            <motion.span 
              className={`text-sm font-medium px-2 py-1 rounded-full ${
                dispensary.is_open 
                  ? 'bg-green-500/90 text-white' 
                  : 'bg-red-500/90 text-white'
              }`}
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
            >
              {dispensary.is_open ? 'Open Now' : 'Closed'}
            </motion.span>
          </div>

          {/* Tags */}
          {dispensary.tags && (
            <motion.div 
              className="flex flex-wrap gap-2 mt-3"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10,
              }}
              transition={{ duration: 0.3 }}
            >
              {dispensary.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs bg-white/10 backdrop-blur-sm text-white/90 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </Link>
  );
} 
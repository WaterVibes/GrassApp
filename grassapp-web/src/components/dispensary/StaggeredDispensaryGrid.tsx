'use client';

import { Dispensary } from '@/types/dispensary';
import { DispensaryCard } from './DispensaryCard';
import { motion } from 'framer-motion';

interface StaggeredDispensaryGridProps {
  dispensaries: Dispensary[];
}

export function StaggeredDispensaryGrid({ dispensaries }: StaggeredDispensaryGridProps) {
  // Function to determine the size and featured status for each card
  const getCardProperties = (index: number) => {
    // Create a repeating pattern for a magazine-style layout
    const pattern = index % 12;
    
    // Featured dispensaries get special treatment
    const isFeatured = pattern === 0 || pattern === 7;
    
    switch (pattern) {
      case 0: // Hero card (large featured)
        return {
          size: 'large' as const,
          className: 'col-span-2 row-span-2',
          featured: true,
        };
      case 7: // Secondary feature (wide)
        return {
          size: 'wide' as const,
          className: 'col-span-2 row-span-1',
          featured: true,
        };
      case 1:
      case 2: // Tall cards
        return {
          size: 'tall' as const,
          className: 'col-span-1 row-span-2',
          featured: false,
        };
      case 4:
      case 8: // Wide cards
        return {
          size: 'wide' as const,
          className: 'col-span-2 row-span-1',
          featured: false,
        };
      default: // Regular cards
        return {
          size: 'normal' as const,
          className: 'col-span-1 row-span-1',
          featured: false,
        };
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
      {dispensaries.map((dispensary, index) => {
        const { size, className, featured } = getCardProperties(index);
        return (
          <motion.div
            key={dispensary.id}
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <div className="h-full w-full">
              <DispensaryCard 
                dispensary={dispensary} 
                size={size}
                featured={featured}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
} 
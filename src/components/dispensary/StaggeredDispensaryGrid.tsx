import { Dispensary } from '@/utils/types';
import { DispensaryCard } from './DispensaryCard';

interface StaggeredDispensaryGridProps {
  dispensaries: Dispensary[];
}

export function StaggeredDispensaryGrid({ dispensaries }: StaggeredDispensaryGridProps) {
  // Function to determine the size class for each card
  const getCardSize = (index: number) => {
    // Create a repeating pattern of card sizes
    const pattern = index % 6;
    switch (pattern) {
      case 0: // Large card
        return 'col-span-2 row-span-2';
      case 1: // Tall card
        return 'col-span-1 row-span-2';
      case 2: // Wide card
        return 'col-span-2 row-span-1';
      default: // Regular card
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
      {dispensaries.map((dispensary, index) => (
        <div
          key={dispensary.id}
          className={`${getCardSize(index)} transition-transform hover:scale-[1.02] duration-300`}
        >
          <div className="h-full w-full">
            <DispensaryCard dispensary={dispensary} />
          </div>
        </div>
      ))}
    </div>
  );
} 
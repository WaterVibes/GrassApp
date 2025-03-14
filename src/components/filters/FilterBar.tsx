import React from 'react';
import Image from 'next/image';

interface Filter {
  id: string;
  name: string;
  icon: string;
  type: 'strain' | 'category' | 'price' | 'rating';
}

interface FilterBarProps {
  selectedFilters: string[];
  onFilterChange: (filterId: string) => void;
  className?: string;
}

const FILTERS: Filter[] = [
  {
    id: 'indica',
    name: 'Indica',
    icon: '/icons/indica.svg',
    type: 'strain'
  },
  {
    id: 'sativa',
    name: 'Sativa',
    icon: '/icons/sativa.svg',
    type: 'strain'
  },
  {
    id: 'hybrid',
    name: 'Hybrid',
    icon: '/icons/hybrid.svg',
    type: 'strain'
  },
  {
    id: 'flower',
    name: 'Flower',
    icon: '/icons/flower.svg',
    type: 'category'
  },
  {
    id: 'edibles',
    name: 'Edibles',
    icon: '/icons/edibles.svg',
    type: 'category'
  },
  {
    id: 'concentrates',
    name: 'Concentrates',
    icon: '/icons/concentrates.svg',
    type: 'category'
  }
];

export default function FilterBar({ selectedFilters, onFilterChange, className = '' }: FilterBarProps) {
  return (
    <div className={`flex gap-2 overflow-x-auto no-scrollbar py-2 ${className}`}>
      {FILTERS.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full border transition-colors whitespace-nowrap
            ${selectedFilters.includes(filter.id)
              ? 'bg-grass-primary border-grass-primary text-white'
              : 'border-white/20 text-white hover:border-grass-primary'
            }
          `}
        >
          <div className="relative w-5 h-5">
            <Image
              src={filter.icon}
              alt={filter.name}
              fill
              className="object-contain"
            />
          </div>
          <span>{filter.name}</span>
        </button>
      ))}
    </div>
  );
} 
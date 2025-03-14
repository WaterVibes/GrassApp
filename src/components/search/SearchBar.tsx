import React, { useState, useEffect, useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Suggestion {
  id: string;
  type: 'strain' | 'dispensary' | 'deal';
  title: string;
  subtitle?: string;
  imageUrl?: string;
}

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
}

export default function SearchBar({ onSearch, className = '' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock suggestions - Replace with actual API call
  const fetchSuggestions = async (searchQuery: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));

    if (!searchQuery) return [];

    return [
      {
        id: '1',
        type: 'strain',
        title: 'Blue Dream',
        subtitle: 'Hybrid • Popular strain',
        imageUrl: '/images/products/blue-dream.jpg'
      },
      {
        id: '2',
        type: 'dispensary',
        title: 'Storehouse',
        subtitle: '4.8 ★ • 2.3 mi',
        imageUrl: '/images/dispensaries/storehouse.jpg'
      },
      {
        id: '3',
        type: 'deal',
        title: '20% off Blue Dream',
        subtitle: 'At Storehouse • Ends today',
        imageUrl: '/images/products/blue-dream.jpg'
      }
    ].filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const getSuggestions = async () => {
      const results = await fetchSuggestions(query);
      setSuggestions(results);
    };

    if (query) {
      getSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    setShowSuggestions(false);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search strains, dispensaries, or deals..."
          className="w-full bg-grass-bg-light rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-grass-primary"
        />
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute w-full mt-2 bg-grass-bg-light rounded-xl shadow-xl overflow-hidden z-50">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => {
                setQuery(suggestion.title);
                onSearch(suggestion.title);
                setShowSuggestions(false);
              }}
              className="w-full flex items-center gap-3 p-3 hover:bg-black/20 transition-colors"
            >
              {suggestion.imageUrl && (
                <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={suggestion.imageUrl}
                    alt={suggestion.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col items-start">
                <span className="text-white font-medium">{suggestion.title}</span>
                {suggestion.subtitle && (
                  <span className="text-sm text-gray-400">{suggestion.subtitle}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 
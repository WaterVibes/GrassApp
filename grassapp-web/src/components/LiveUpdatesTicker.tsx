import { useEffect, useState } from 'react';

interface Update {
  id: string;
  text: string;
  type: 'deal' | 'strain' | 'promo';
}

export function LiveUpdatesTicker() {
  const [updates] = useState<Update[]>([
    { id: '1', text: '🔥 NEW STRAIN: Wedding Cake (28% THC) just arrived at GreenLeaf', type: 'strain' },
    { id: '2', text: '💰 FLASH SALE: 20% off all edibles at MediCanna - Next 2 hours only!', type: 'deal' },
    { id: '3', text: '🌟 First-time customers get a free pre-roll at Herbal Wellness', type: 'promo' },
    { id: '4', text: '🎉 New Premium Concentrates Collection launched at PureCanna', type: 'strain' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length);
    }, 5000); // Change update every 5 seconds

    return () => clearInterval(timer);
  }, [updates.length]);

  return (
    <div className="bg-grass-primary/10 border border-grass-primary/20 rounded-lg p-2">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 bg-grass-primary px-3 py-1 rounded-md">
          <span className="text-sm font-medium text-white">LIVE</span>
        </div>
        <div className="relative flex-1 h-6 overflow-hidden">
          {updates.map((update, index) => (
            <div
              key={update.id}
              className="absolute top-0 left-0 w-full transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                opacity: index === currentIndex ? 1 : 0,
              }}
            >
              <span className="text-sm text-white/90 whitespace-nowrap">{update.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
import { useEffect, useState } from 'react';

interface Update {
  id: string;
  text: string;
  type: 'deal' | 'strain' | 'promo';
}

export function LiveUpdatesTicker() {
  const [updates, setUpdates] = useState<Update[]>([
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
    <div className="bg-grass-primary/10 border border-grass-primary/20 rounded-lg p-2 overflow-hidden">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 bg-grass-primary px-3 py-1 rounded-md">
          <span className="text-sm font-medium">LIVE</span>
        </div>
        <div className="relative overflow-hidden flex-1">
          <div
            className="transition-transform duration-500 ease-in-out whitespace-nowrap"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {updates.map((update, index) => (
              <div
                key={update.id}
                className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transform: `translateX(${index * 100}%)` }}
              >
                <span className="text-sm text-white/90">{update.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
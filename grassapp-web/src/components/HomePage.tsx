'use client';

import { MagnifyingGlassIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { mockDispensaries, mockProducts } from '@/utils/mockData';
import { DispensaryCard } from '@/components/dispensary/DispensaryCard';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { CartButton } from '@/components/cart/CartButton';
import { LiveUpdatesTicker } from '@/components/LiveUpdatesTicker';
import { StaggeredDispensaryGrid } from '@/components/dispensary/StaggeredDispensaryGrid';
import { IMAGES } from '@/utils/constants';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';
import { motion } from 'framer-motion';

const categories = [
  { id: 'flower', name: 'Flower' },
  { id: 'pre-rolls', name: 'Pre-Rolls' },
  { id: 'vaporizers', name: 'Vaporizers' },
  { id: 'edibles', name: 'Edibles' },
  { id: 'concentrates', name: 'Concentrates' },
];

export function HomePage() {
  const { items } = useAppSelector((state: RootState) => state.cart);
  const { hasActiveOrder } = useAppSelector((state: RootState) => state.orders);
  const cartItemCount = items.length;
  const { isLoggedIn, user } = useAppSelector((state: RootState) => state.auth);

  return (
    <main className="min-h-screen bg-grass-bg text-white">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Replace login button with account button when logged in */}
            {isLoggedIn && user ? (
              <div className="flex flex-col gap-2">
                <Link 
                  href="/account"
                  className="flex items-center gap-2 text-white hover:text-grass-primary transition-colors relative"
                >
                  <div className="relative w-8 h-8">
                    <PlaceholderImage
                      src={user?.photoUrl}
                      alt="Profile"
                      type="avatar"
                      className="rounded-full"
                      fill
                      priority
                    />
                  </div>
                  {user?.grassPoints > 0 && (
                    <span className="absolute -top-1 -right-1 bg-grass-primary text-xs text-white w-4 h-4 rounded-full flex items-center justify-center">
                      {user.grassPoints}
                    </span>
                  )}
                  <span>Account</span>
                </Link>
                {user.role === 'driver' && user.isVerified ? (
                  <Link
                    href="/budz"
                    className="flex items-center justify-center gap-2 bg-budz-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-budz-primary/90 transition-colors"
                  >
                    Buddy Dashboard
                  </Link>
                ) : user.role === 'driver' ? (
                  <Link
                    href="/budz/verification"
                    className="flex items-center justify-center gap-2 bg-budz-primary/10 border border-budz-primary text-budz-primary px-6 py-2 rounded-lg font-medium hover:bg-budz-primary/20 transition-colors"
                  >
                    Complete Verification
                  </Link>
                ) : (
                  <Link
                    href="/budz/auth"
                    className="flex items-center justify-center gap-2 bg-budz-primary/10 border border-budz-primary text-budz-primary px-6 py-2 rounded-lg font-medium hover:bg-budz-primary/20 transition-colors"
                  >
                    Become a Buddy
                  </Link>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link 
                  href="/auth/sign-in"
                  className="bg-grass-primary hover:bg-grass-primary-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Login / Sign Up
                </Link>
                <Link
                  href="/budz/auth"
                  className="flex items-center justify-center gap-2 bg-budz-primary/10 border border-budz-primary text-budz-primary px-6 py-2 rounded-lg font-medium hover:bg-budz-primary/20 transition-colors"
                >
                  Become a Buddy
                </Link>
              </div>
            )}
            
            <div className="flex items-center gap-4">
              {isLoggedIn && user?.deliveryAddresses && user.deliveryAddresses.length > 0 ? (
                <Link 
                  href="/account/address"
                  className="flex items-center gap-2 text-sm hover:text-grass-primary transition-colors"
                >
                  <MapPinIcon className="w-5 h-5" />
                  <div className="flex flex-col">
                    <span>Delivery to:</span>
                    <span className="font-medium">
                      {user.deliveryAddresses[user.defaultAddressIndex || 0]?.street}
                    </span>
                  </div>
                </Link>
              ) : (
                <button className="flex items-center gap-2 text-sm">
                  <MapPinIcon className="w-5 h-5" />
                  Baltimore, MD
                </button>
              )}
              
              {hasActiveOrder ? (
                <Link
                  href="/order-status"
                  className="flex items-center gap-2 bg-grass-primary text-white px-4 py-2 rounded-lg hover:bg-grass-primary-light transition-colors"
                >
                  <ClockIcon className="w-5 h-5" />
                  View Order
                </Link>
              ) : null}
              
              <CartButton />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-[800px] h-[300px]"
          >
            <Image
              src="/images/GrassAppLogo.png"
              alt="GrassApp"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </motion.div>
        </div>
        
        {/* Live Updates Ticker */}
        <div className="mb-6">
          <LiveUpdatesTicker />
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search dispensaries and products..."
            className="w-full bg-grass-bg-light pl-12 pr-4 py-3 rounded-xl border border-grass-primary/20 focus:border-grass-primary focus:outline-none transition-colors"
          />
        </div>

        {/* Categories */}
        <div className="overflow-x-auto mb-8">
          <div className="flex gap-2 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 rounded-full bg-grass-bg-light whitespace-nowrap hover:bg-grass-primary transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dispensaries */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Dispensaries Near You</h2>
          <StaggeredDispensaryGrid dispensaries={mockDispensaries} />
        </section>

        {/* Featured Products */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-grass-bg-light rounded-xl p-4">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={product.image_url || IMAGES.PLACEHOLDERS.PRODUCT}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = IMAGES.PLACEHOLDERS.PRODUCT;
                    }}
                  />
                </div>
                <h3 className="font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{product.brand}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">${product.price}</span>
                  <button className="bg-grass-primary px-4 py-1 rounded-lg hover:bg-grass-primary-light transition-colors">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 
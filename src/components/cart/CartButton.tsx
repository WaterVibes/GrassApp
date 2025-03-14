import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';

export function CartButton() {
  const { items } = useAppSelector((state) => state.cart);
  const itemCount = items.length;

  return (
    <Link
      href="/cart"
      className="relative p-2 text-white hover:text-grass-primary transition-colors"
    >
      <ShoppingBagIcon className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-grass-primary text-xs text-white w-5 h-5 rounded-full flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
} 
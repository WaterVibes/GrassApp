import Image from 'next/image';
import { useState } from 'react';
import { IMAGES } from '@/utils/constants';

interface PlaceholderImageProps {
  src: string | null | undefined;
  alt: string;
  type?: 'product' | 'dispensary' | 'avatar';
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export function PlaceholderImage({
  src,
  alt,
  type = 'product',
  className = '',
  fill = false,
  width,
  height,
  priority = false,
  sizes,
}: PlaceholderImageProps) {
  const [imgSrc, setImgSrc] = useState(src || getPlaceholder(type));
  
  function getPlaceholder(type: 'product' | 'dispensary' | 'avatar') {
    return IMAGES.PLACEHOLDERS[type === 'product' ? 'PRODUCT' : type === 'dispensary' ? 'DISPENSARY' : 'AVATAR'];
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      onError={() => setImgSrc(getPlaceholder(type))}
      priority={priority}
      sizes={sizes}
      quality={90}
    />
  );
} 
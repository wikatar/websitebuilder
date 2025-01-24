'use client';

import Image from 'next/image';
import { PERFORMANCE_TARGETS } from '@/utils/performance';
import { measureImageLoadTime } from '@/utils/performance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

function generateBlurDataUrl(width: number, height: number): string {
  return `data:image/svg+xml;base64,${Buffer.from(`
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#e5e7eb"/>
    </svg>
  `).toString('base64')}`;
}

async function validateImageSize(src: string, maxSize: number): Promise<void> {
  try {
    const response = await fetch(src);
    const size = parseInt(response.headers.get('content-length') || '0', 10);
    
    if (size > maxSize) {
      console.warn(`Image ${src} exceeds maximum size of ${maxSize} bytes`);
    }
  } catch (error) {
    console.error(`Failed to validate image size for ${src}:`, error);
  }
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  className = ''
}: OptimizedImageProps) {
  // Validate image size at build time
  if (process.env.NODE_ENV === 'development') {
    validateImageSize(src, PERFORMANCE_TARGETS.MAX_IMAGE_SIZE);
  }

  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        quality={85}
        placeholder="blur"
        blurDataURL={generateBlurDataUrl(width, height)}
        className={`transition-opacity duration-300 ${className}`}
        onLoad={(e) => {
          measureImageLoadTime(e.timeStamp);
        }}
      />
    </div>
  );
} 
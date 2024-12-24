'use client';

import Image, { ImageProps } from 'next/image';

type OptimizedImageProps = Omit<ImageProps, 'loader' | 'unoptimized'>;

export function OptimizedImage(props: OptimizedImageProps) {
  return (
    <Image
      {...props}
      unoptimized={true}
    />
  );
}
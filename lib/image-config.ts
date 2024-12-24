import { ImageProps } from 'next/image';

// Static configuration only - no functions
export const imageConfig = {
  unoptimized: process.env.NODE_ENV === 'production',
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  formats: ['image/webp'],
  minimumCacheTTL: 60,
  dangerouslyAllowSVG: true,
  contentDispositionType: 'inline',
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**',
    },
  ],
} as const;

// Type-safe image dimensions
export const imageDimensions = {
  avatar: {
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
  screenshot: {
    width: 320,
    height: 650,
  },
} as const;

// Strongly typed image sources
export const imagePaths = {
  logos: {
    appStore: '/images/app-store-badge.svg',
    googlePlay: '/images/google-play-badge.png',
  },
  screenshots: {
    dealScreen: '/images/phone-deal.png',
    mapScreen: '/images/phone-map.png',
  },
  avatars: {
    user1: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=50&h=50',
    user2: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=50&h=50',
    user3: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=50&h=50',
  },
} as const;
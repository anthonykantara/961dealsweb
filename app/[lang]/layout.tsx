import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { Providers } from '@/components/providers';
import { Shell } from '@/components/shell';
import { Toaster } from '@/components/ui/toaster';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '961 Deals | Exclusive Deals Across Lebanon',
  description: 'Join 961 Deals to get exclusive access to the best deals across Lebanon. From restaurants to activities, save more with our membership.',
};

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning className="antialiased">
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <Suspense fallback={<LoadingSpinner />}>
            <Shell>{children}</Shell>
            <Toaster />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
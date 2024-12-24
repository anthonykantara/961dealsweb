'use client';

import { useEffect, useState } from 'react';
import { ClientTopMenu } from '@/navigation/client-top-menu';
import { Navbar } from '@/components/navbar';
import { FloatingCTA } from '@/navigation/floating-cta';
import { Footer } from '@/navigation/footer';
import { usePathname } from 'next/navigation';

export function Shell({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  const showNavigation = !pathname.startsWith('/partner/preview');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {showNavigation && (
        <>
          <ClientTopMenu />
          <Navbar />
        </>
      )}
      <main>{children}</main>
      <FloatingCTA />
      <Footer />
    </>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { MainNav } from './Navigation/MainNav';
import { MobileNav } from './Navigation/MobileNav';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps): JSX.Element {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="h-16 border-b bg-base-100" />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-base-200 border-t border-base-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12" />
        </footer>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-base-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <div className="block md:hidden">
              <MobileNav />
            </div>
            <div className="hidden md:block w-full">
              <MainNav />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-base-200 border-t border-base-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Footer content will be added later */}
        </div>
      </footer>
    </div>
  );
} 
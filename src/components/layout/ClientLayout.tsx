'use client';

import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { MainNav } from '@/components/layout/Navigation/MainNav';
import { MobileNav } from '@/components/layout/Navigation/MobileNav';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="flex flex-col min-h-screen" suppressHydrationWarning>
          <div className="sticky top-0 z-50 w-full border-b bg-base-100 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center justify-between w-full">
                  <div className="block md:hidden">
                    <MobileNav />
                  </div>
                  <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                    <MainNav />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-base-200 border-t border-base-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {/* Footer content will be added later */}
            </div>
          </footer>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
} 
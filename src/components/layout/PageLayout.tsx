'use client';

import { ReactNode } from 'react';
import { MainNav } from './Navigation/MainNav';
import { MobileNav } from './Navigation/MobileNav';
import { PageHeader } from './Common/PageHeader';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  showHeader?: boolean;
}

export function PageLayout({
  children,
  title,
  description,
  breadcrumbs,
  showHeader = true,
}: PageLayoutProps) {
  return (
    <>
      <header>
        <div className="flex md:hidden">
          <MobileNav />
        </div>
        <MainNav />
      </header>

      {showHeader && (
        <PageHeader
          title={title}
          description={description}
          breadcrumbs={breadcrumbs}
        />
      )}

      <main className="min-h-screen">
        {children}
      </main>

      <footer className="bg-base-200 border-t border-base-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Footer content will be added later */}
        </div>
      </footer>
    </>
  );
} 
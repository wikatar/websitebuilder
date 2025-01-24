'use client';

import Link from 'next/link';
import { LanguageSwitcher } from '../ui';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useState, useMemo } from 'react';

const Navigation = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('navigation');
  const [isOpen, setIsOpen] = useState(false);

  // Memoize nav items to prevent recreation on every render
  const navItems = useMemo(() => [
    { name: t('home'), path: '/' },
    { name: t('services'), path: '/services' },
    { name: t('about'), path: '/about' },
    { name: t('portfolio'), path: '/portfolio' },
    { name: t('contact'), path: '/contact' },
  ], [t]);

  // Memoize base path
  const basePath = useMemo(() => `/${locale}`, [locale]);

  return (
    <nav className="bg-base-100 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={basePath} className="flex items-center">
            <span className="text-xl font-bold">Balthazar Project</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={`${basePath}${item.path}`}
                className="text-base-content hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={`${basePath}${item.path}`}
                className="block py-2 text-base-content hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

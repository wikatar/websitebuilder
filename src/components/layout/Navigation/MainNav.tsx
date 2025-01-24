'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { LanguageSelector } from '@/components/layout/LanguageSelector';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const navItems = [
  {
    key: 'home',
    href: '/',
  },
  {
    key: 'about',
    href: '/about',
    subItems: [
      { key: 'story', href: '/about' },
      { key: 'team', href: '/about/team' },
      { key: 'vision', href: '/about/vision' },
    ],
  },
  {
    key: 'services',
    href: '/services',
    subItems: [
      { key: 'webdev', href: '/services' },
      { key: 'ai', href: '/services' },
      { key: 'growth', href: '/services' },
      { key: 'software', href: '/services' },
    ],
  },
  {
    key: 'portfolio',
    href: '/portfolio',
    subItems: [
      { key: 'projects', href: '/portfolio' },
      { key: 'cases', href: '/portfolio' },
    ],
  },
  {
    key: 'contact',
    href: '/contact',
  },
];

export function MainNav() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const getLocalizedHref = (href: string) => {
    return `/${locale}${href}`;
  };

  // Safe translation function
  const getNavTitle = (key: string) => {
    try {
      return t(`navigation.${key}.title`);
    } catch (error) {
      console.error(`Translation error for key "navigation.${key}.title":`, error);
      return key;
    }
  };

  return (
    <ErrorBoundary fallback={<div>Error loading navigation</div>}>
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={getLocalizedHref(item.href)}
              className={`text-base font-medium transition-colors hover:text-primary ${
                pathname === getLocalizedHref(item.href)
                  ? 'text-primary'
                  : 'text-base-content'
              }`}
            >
              {getNavTitle(item.key)}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSelector />
        </div>
      </nav>
    </ErrorBoundary>
  );
} 
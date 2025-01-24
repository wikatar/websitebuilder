'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { LanguageSelector } from '@/components/layout/LanguageSelector';
import { ErrorBoundary } from '@/components/ErrorBoundary';

interface SubMenu {
  key: string;
  href: string;
}

interface NavItem {
  key: string;
  href: string;
  subItems?: SubMenu[];
}

const navItems: NavItem[] = [
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

export function MobileNav() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  // Ensure hydration completes before showing dynamic content
  useEffect(() => {
    setMounted(true);
  }, []);

  const getLocalizedHref = (href: string) => {
    return `/${locale}${href}`;
  };

  // Handle cleanup when component unmounts
  useEffect(() => {
    return () => {
      setIsOpen(false);
    };
  }, []);

  if (!mounted) {
    return null; // Return null on server-side and first render
  }

  return (
    <ErrorBoundary>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-base-content hover:text-primary hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>

        <AnimatePresence mode="wait">
          {isOpen && mounted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-screen bg-base-100 shadow-lg border border-base-200 rounded-b-lg"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={getLocalizedHref(item.href)}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === getLocalizedHref(item.href)
                        ? 'text-primary bg-base-200'
                        : 'text-base-content hover:text-primary hover:bg-base-200'
                    }`}
                  >
                    {t(`navigation.${item.key}.title`)}
                  </Link>
                ))}
                <div className="pt-4 pb-2 border-t border-base-200">
                  <div className="flex items-center px-3">
                    <LanguageSelector />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  );
} 
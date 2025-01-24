'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { LanguageSelector } from '@/components/layout/LanguageSelector';

interface SubMenu {
  key: string;
  href: string;
}

interface MenuItem {
  key: string;
  href: string;
  subItems?: SubMenu[];
}

const navItems: MenuItem[] = [
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
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const getLocalizedHref = (href: string) => {
    return `/${locale}${href}`;
  };

  // Safe translation function
  const getNavTitle = (key: string, parentKey?: string) => {
    try {
      if (parentKey) {
        // For sub-items, we need to get them directly from the parent section
        return t(`${parentKey}.${key}`);
      }
      // For main items, we get the title
      return t(`${key}.title`);
    } catch (error) {
      console.error(`Translation error for key "${key}":`, error);
      return key;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-base-content hover:text-primary transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-screen bg-base-100 shadow-lg py-4 px-6"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.key} className="flex flex-col space-y-2">
                  <Link
                    href={getLocalizedHref(item.href)}
                    className={`text-base font-medium transition-colors hover:text-primary ${
                      pathname === getLocalizedHref(item.href)
                        ? 'text-primary'
                        : 'text-base-content'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {getNavTitle(item.key)}
                  </Link>
                  {item.subItems && (
                    <div className="pl-4 flex flex-col space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          href={getLocalizedHref(subItem.href)}
                          className={`text-sm transition-colors hover:text-primary ${
                            pathname === getLocalizedHref(subItem.href)
                              ? 'text-primary'
                              : 'text-base-content'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {getNavTitle(subItem.key, item.key)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 
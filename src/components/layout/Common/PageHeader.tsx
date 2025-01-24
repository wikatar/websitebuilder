'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  const t = useTranslations();

  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-base-content/70 hover:text-primary transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center space-x-2">
                  <FiChevronRight className="text-base-content/40" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-base-content/70">{crumb.label}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="text-base-content/70 hover:text-primary transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-xl text-base-content/70 max-w-3xl">{description}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
} 
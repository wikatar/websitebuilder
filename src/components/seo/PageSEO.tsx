'use client';

import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

interface PageSEOProps {
  path: string;
  pageKey: string;
}

export const generateMetadata = ({ path, pageKey }: PageSEOProps): Metadata => {
  const t = useTranslations('SEO');

  return {
    title: t(`${pageKey}.title`),
    description: t(`${pageKey}.description`),
    keywords: t(`${pageKey}.keywords`),
    openGraph: {
      title: t(`${pageKey}.title`),
      description: t(`${pageKey}.description`),
      type: 'website',
      url: `https://balthazarproject.com${path}`,
    },
    alternates: {
      canonical: `https://balthazarproject.com${path}`,
    },
  };
};

export const PageSEO = ({ path, pageKey }: PageSEOProps) => {
  // This component is now just a wrapper for metadata
  // It doesn't render anything visible
  return null;
}; 
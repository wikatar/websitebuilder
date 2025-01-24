'use client';

import { NextSeo } from 'next-seo';
import { useTranslations } from 'next-intl';

interface PageSEOProps {
  path: string;
  pageKey: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function PageSEO({ path, pageKey, imageUrl, imageAlt }: PageSEOProps) {
  const t = useTranslations(`pages.${pageKey}.SEO`);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://balthazarproject.com';
  const fullUrl = `${baseUrl}${path}`;
  const ogImageUrl = imageUrl || `${baseUrl}/images/og-image.jpg`;
  const ogImageAlt = imageAlt || t('title');

  return (
    <NextSeo
      title={t('title')}
      description={t('description')}
      canonical={fullUrl}
      openGraph={{
        type: 'website',
        locale: 'sv_SE',
        url: fullUrl,
        title: t('title'),
        description: t('description'),
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: ogImageAlt,
          },
        ],
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: t('keywords'),
        },
        {
          property: 'article:published_time',
          content: new Date().toISOString(),
        },
        {
          property: 'article:modified_time',
          content: new Date().toISOString(),
        },
      ]}
    />
  );
} 
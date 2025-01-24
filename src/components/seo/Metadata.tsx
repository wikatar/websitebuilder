'use client';

import { useTranslations } from 'next-intl';
import Head from 'next/head';

interface MetadataProps {
  path: string;
  pageKey: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function Metadata({ path, pageKey, imageUrl, imageAlt }: MetadataProps) {
  const t = useTranslations(`pages.${pageKey}.SEO`);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://balthazarproject.com';
  const fullUrl = `${baseUrl}${path}`;
  const ogImageUrl = imageUrl || `${baseUrl}/images/og-image.jpg`;
  const ogImageAlt = imageAlt || t('title');

  return (
    <Head>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <link rel="canonical" href={fullUrl} />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={t('title')} />
      <meta property="og:description" content={t('description')} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t('title')} />
      <meta name="twitter:description" content={t('description')} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      <meta property="article:published_time" content={new Date().toISOString()} />
      <meta property="article:modified_time" content={new Date().toISOString()} />
    </Head>
  );
} 
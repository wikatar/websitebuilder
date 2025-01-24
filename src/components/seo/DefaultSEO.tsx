'use client';

import { NextSeo } from 'next-seo';
import { useTranslations } from 'next-intl';

interface DefaultSEOProps {
  path?: string;
}

export function DefaultSEO({ path = '' }: DefaultSEOProps) {
  const t = useTranslations('SEO');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://balthazarproject.com';
  const fullUrl = `${baseUrl}${path}`;

  return (
    <NextSeo
      title={t('defaultTitle')}
      titleTemplate={`%s | ${t('siteName')}`}
      defaultTitle={t('siteName')}
      description={t('defaultDescription')}
      canonical={fullUrl}
      openGraph={{
        type: 'website',
        locale: 'sv_SE',
        url: fullUrl,
        siteName: t('siteName'),
        title: t('defaultTitle'),
        description: t('defaultDescription'),
        images: [
          {
            url: `${baseUrl}/images/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: t('defaultTitle'),
          },
        ],
      }}
      twitter={{
        handle: '@balthazarproject',
        site: '@balthazarproject',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=5',
        },
        {
          name: 'theme-color',
          content: '#000000',
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
      ]}
    />
  );
} 
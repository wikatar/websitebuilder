'use client';

import { useTranslations } from 'next-intl';
import { Metadata } from '@/components/seo/Metadata';
import { Hero } from '@/components/templates/agency';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      <Metadata path="/" pageKey="home" />
      <Hero />
    </>
  );
} 
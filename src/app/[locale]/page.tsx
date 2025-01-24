'use client';

import { useTranslations } from 'next-intl';
import { Metadata } from '@/components/seo/Metadata';
import { Hero, Services } from '@/components/templates/agency';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      <Metadata path="/" pageKey="home" />
      <main className="min-h-screen">
        <Hero />
        <Services />
      </main>
    </>
  );
} 
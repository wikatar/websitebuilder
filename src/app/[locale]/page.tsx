'use client';

import { useTranslations } from 'next-intl';
import { PageSEO } from '@/components/seo/PageSEO';
import { Hero } from '@/components/templates/agency';

export default function LocalePage() {
  const t = useTranslations('home');

  return (
    <>
      <PageSEO 
        path="/" 
        pageKey="home"
      />
      <main className="min-h-screen">
        <Hero />
      </main>
    </>
  );
} 
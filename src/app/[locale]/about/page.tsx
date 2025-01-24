'use client';

import { useTranslations } from 'next-intl';
import { Metadata } from '@/components/seo/Metadata';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      <Metadata path="/about" pageKey="about" />
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
          <p className="text-lg mb-4">{t('description')}</p>
        </div>
      </section>
    </>
  );
} 
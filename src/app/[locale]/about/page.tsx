'use client';

import { useTranslations } from 'next-intl';
import { PageSEO } from '@/components/seo/PageSEO';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      <PageSEO 
        path="/about" 
        pageKey="about"
      />
      <main className="min-h-screen">
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-base-content/80">
              {t('description')}
            </p>
          </div>
        </section>
      </main>
    </>
  );
} 
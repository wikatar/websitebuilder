'use client';

import { useTranslations } from 'next-intl';

export default function LocalePage() {
  const t = useTranslations('Index');

  return (
    <main className="min-h-screen">
      <section className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-8">
              {t('title')}
            </h1>
            <p className="text-xl mb-8">
              {t('description')}
            </p>
            <button className="btn btn-primary btn-lg">
              {t('getStarted')}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 
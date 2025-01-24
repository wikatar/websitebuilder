'use client';

import { useTranslations } from 'next-intl';
import { PageSEO } from '@/components/seo/PageSEO';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <>
      <PageSEO path="/about" pageKey="about" />
      <main className="min-h-screen py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-base-content/80 mb-8">{t('description')}</p>
            <h2 className="text-2xl font-bold mb-4">{t('mission.title')}</h2>
            <p className="mb-8">{t('mission.description')}</p>
            <h2 className="text-2xl font-bold mb-4">{t('values.title')}</h2>
            <ul className="space-y-4">
              {['innovation', 'quality', 'collaboration'].map((value) => (
                <li key={value} className="flex items-start">
                  <span className="mr-4">•</span>
                  <div>
                    <h3 className="font-bold">{t(`values.${value}.title`)}</h3>
                    <p>{t(`values.${value}.description`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </main>
    </>
  );
} 
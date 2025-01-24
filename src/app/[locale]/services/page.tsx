'use client';

import { useTranslations } from 'next-intl';
import { PageSEO } from '@/components/seo/PageSEO';
import { Services } from '@/components/templates/agency/Services';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const t = useTranslations('Services');

  return (
    <>
      <PageSEO path="/services" pageKey="services" />
      <main className="min-h-screen py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
          <p className="text-xl text-base-content/80 mb-12">{t('description')}</p>
          <Services />
        </motion.div>
      </main>
    </>
  );
} 
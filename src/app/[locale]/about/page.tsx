'use client';

import { useTranslations } from 'next-intl';
import { PageSEO } from '@/components/seo/PageSEO';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      <PageSEO path="/about" pageKey="about" />
      <main className="min-h-screen">
        <section className="py-16 bg-base-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{t('title')}</h1>
            <p className="text-xl text-base-content/80 mb-12 text-center max-w-3xl mx-auto">{t('description')}</p>
          </motion.div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8">{t('mission')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {['innovation', 'quality', 'collaboration'].map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="card-body">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <span className="text-2xl text-primary">•</span>
                      </div>
                      <h3 className="card-title text-xl mb-2">{t(`values.${value}.title`)}</h3>
                      <p className="text-base-content/70">{t(`values.${value}.description`)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
} 
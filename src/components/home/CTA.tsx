'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function CTA() {
  const t = useTranslations('Home.cta');

  return (
    <section className="py-24 bg-primary text-primary-content relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-focus/20 to-transparent" />
        <div className="absolute inset-y-0 right-0">
          <svg
            className="h-full w-full text-primary-focus/10"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 100,0 100,100" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl opacity-90 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/docs/getting-started"
              className="btn btn-secondary btn-lg"
            >
              {t('button')}
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary"
            >
              {t('secondaryButton')}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold">100+</div>
              <div className="mt-2 opacity-90">Websites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">1000+</div>
              <div className="mt-2 opacity-90">Pages Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">99.9%</div>
              <div className="mt-2 opacity-90">Uptime</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
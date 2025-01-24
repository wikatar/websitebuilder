'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  const t = useTranslations('Home.hero');

  return (
    <section className="relative bg-base-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2">
          <svg
            className="h-full w-full text-primary/5"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-base-content"
          >
            {t('title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-xl md:text-2xl text-base-content/80 max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/docs/getting-started"
              className="btn btn-primary btn-lg"
            >
              {t('cta')}
            </Link>
            <Link
              href="/docs"
              className="btn btn-outline btn-lg"
            >
              {t('secondaryCta')}
            </Link>
          </motion.div>

          {/* Code preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 relative"
          >
            <div className="bg-base-300 rounded-lg p-4 text-left overflow-hidden shadow-xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-error" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
              </div>
              <pre className="text-sm md:text-base overflow-x-auto">
                <code className="language-typescript">
                  {`// AI-First Development
const website = await AI.createWebsite({
  name: 'My Awesome Site',
  features: ['blog', 'shop', 'portfolio'],
  style: {
    theme: 'modern',
    colors: ['primary', 'accent'],
  },
});

// Autonomous deployment
await website.deploy();

// AI manages everything
website.on('error', async (error) => {
  await AI.resolveError(error);
});`}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
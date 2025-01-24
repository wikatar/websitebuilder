'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/layout/PageLayout';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function ContactPage() {
  const t = useTranslations('contact');
  
  return (
    <PageLayout
      title={t('title')}
      description={t('description')}
      breadcrumbs={[
        { label: t('nav.home'), href: '/' },
        { label: t('nav.contact'), href: '/contact' },
      ]}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="textarea textarea-bordered w-full"
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                {t('form.submit')}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FiMail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <a
                  href="mailto:contact@balthazarproject.com"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  contact@balthazarproject.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-base-content/70">Stockholm, Sweden</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FiPhone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-base-content/70">Available upon request</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
} 
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function ContactPage() {
  const t = useTranslations('contact');
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">{t('description')}</p>
      </div>
      
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FiMail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">{t('info.email.title')}</h3>
              <p className="text-base-content/70">{t('info.email.value')}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FiMapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">{t('info.address.title')}</h3>
              <p className="text-base-content/70">{t('info.address.value')}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FiPhone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">{t('info.phone.title')}</h3>
              <p className="text-base-content/70">{t('info.phone.value')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
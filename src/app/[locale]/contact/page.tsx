'use client';

import { useTranslations } from 'next-intl';
import { PageSEO } from '@/components/seo/PageSEO';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <>
      <PageSEO 
        path="/contact" 
        pageKey="contact"
      />
      <main className="min-h-screen">
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('title')}
            </h1>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label className="label">
                    <span className="label-text">{t('form.name')}</span>
                  </label>
                  <input 
                    type="text" 
                    className="input input-bordered w-full" 
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">{t('form.email')}</span>
                  </label>
                  <input 
                    type="email" 
                    className="input input-bordered w-full" 
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">{t('form.message')}</span>
                  </label>
                  <textarea 
                    className="textarea textarea-bordered w-full h-32" 
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  {t('form.submit')}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 
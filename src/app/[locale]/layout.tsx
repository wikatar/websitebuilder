import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'sv' }, { locale: 'en' }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 
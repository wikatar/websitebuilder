import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/layout';
import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'sv' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} data-theme="light">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen bg-base-100">
            <Navigation />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 
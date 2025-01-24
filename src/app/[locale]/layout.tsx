import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/layout';
import { locales } from '@/config';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { FontProvider } from '@/components/layout/FontProvider';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Get locale from headers to ensure it's properly awaited
  const headersList = await headers();
  const headerLocale = headersList.get('x-next-intl-locale');
  
  // Use the default locale if neither header nor params locale is available
  const locale = headerLocale ?? 'sv';

  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Validate that the incoming locale is configured
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <FontProvider>
            <ThemeProvider>
              <Navigation />
              {children}
            </ThemeProvider>
          </FontProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 
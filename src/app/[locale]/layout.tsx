import { Inter, Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/config';
import { Metadata } from '@/components/seo/Metadata';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { FontProvider } from '@/components/layout/FontProvider';
import Navigation from '@/components/layout/Navigation';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming locale is configured
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages(locale);

  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <FontProvider>
              <Metadata path="/" pageKey="home" />
              <Navigation />
              <main className="min-h-screen bg-base-100">
                {children}
              </main>
            </FontProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 
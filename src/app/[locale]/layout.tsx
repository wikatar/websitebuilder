import { Inter, Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/config';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import Navigation from '@/components/layout/Navigation';
import '../globals.css';

// Preload fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});

// Cache messages
const messagesCache = new Map();

async function getMessages(locale: string) {
  // Check cache first
  if (messagesCache.has(locale)) {
    return messagesCache.get(locale);
  }

  try {
    const messages = (await import(`@/messages/${locale}.json`)).default;
    messagesCache.set(locale, messages);
    return messages;
  } catch (error) {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}) {
  // Ensure params is resolved
  const { locale } = await Promise.resolve(params);

  // Validate locale first to fail fast
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${montserrat.variable} min-h-screen bg-base-100`}>
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Stockholm">
          <ThemeProvider>
            <Navigation />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 
import { Inter, Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
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

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const messages = await getMessages(params.locale);

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${montserrat.variable} min-h-screen bg-base-100`}>
        <NextIntlClientProvider locale={params.locale} messages={messages} timeZone="Europe/Stockholm">
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'sv'}];
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <MainLayout>
        {children}
      </MainLayout>
    </NextIntlClientProvider>
  );
}
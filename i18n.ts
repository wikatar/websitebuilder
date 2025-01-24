import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';
import {locales} from './src/config';

export default getRequestConfig(async () => {
  const headersList = await headers();
  const locale = headersList.get('x-next-intl-locale') || 'sv';
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  try {
    return {
      locale,
      messages: (await import(`./src/messages/${locale}.json`)).default,
      timeZone: 'Europe/Stockholm',
      now: new Date()
    };
  } catch (error) {
    notFound();
  }
}); 
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from './src/config';

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();

  try {
    return {
      messages: (await import(`./src/messages/${locale}.json`)).default,
      timeZone: 'Europe/Stockholm',
      now: new Date()
    };
  } catch (error) {
    notFound();
  }
}); 
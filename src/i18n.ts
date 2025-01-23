import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Use this for server components/pages
export default getRequestConfig(async ({locale}) => {
  try {
    return {
      messages: (await import(`./messages/${locale}.json`)).default,
      timeZone: 'Europe/Stockholm',
      now: new Date()
    };
  } catch (error) {
    notFound();
  }
});

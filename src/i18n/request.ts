import {notFound} from 'next/navigation';
import {getRequestConfig, requestLocale} from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = await requestLocale();
  try {
    return {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default
    };
  } catch (error) {
    notFound();
  }
}); 
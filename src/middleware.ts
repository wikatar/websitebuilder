import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: 'always'
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within /api, except for
    // - … if they start with `/api/auth` or `/api/webhook`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/api/((?!auth|webhook|.*\\..*).*)'
  ]
}; 
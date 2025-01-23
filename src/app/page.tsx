import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/sv');
}

export { default } from './(locales)/[locale]/page';

// redirect('/sv');

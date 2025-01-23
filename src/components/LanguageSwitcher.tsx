import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, asPath } = router;

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        {locale === 'sv' ? '🇸🇪 Svenska' : '🇬🇧 English'}
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
        <li>
          <Link href={asPath} locale="sv">
            🇸🇪 Svenska
          </Link>
        </li>
        <li>
          <Link href={asPath} locale="en">
            🇬🇧 English
          </Link>
        </li>
      </ul>
    </div>
  );
}

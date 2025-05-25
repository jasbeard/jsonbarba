import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useRouter } from 'next/router';
import { serif } from '@/font/fonts';

export function Header() {
  const router = useRouter();
  return (
    <header className="px-4 py-2 sticky top-0 z-10 bg-dark md:bg-transparent backdrop-blur-[1px]">
      <nav>
        <div className={`flex justify-between ${serif.className}`}>
          <div className={`font-medium gap-2 -mt-2 pr-4 rounded-br bg-white dark:bg-dark`}>
            <div className="flex justify-between items-center gap-2 mt-4 font-light">
              <Link
                href='/'
                aria-label="home link of the website"
                className={router.asPath === '/' ? "underline underline-offset-[3px] decoration-indigo-400" : "hover:underline underline-offset-[3px] decoration-indigo-200"}
              >
                Home
              </Link>
              <Link
                href='/writing'
                aria-label="writing link of the website"
                className={
                  router.asPath.split('/').includes('writing') ?
                  "underline underline-offset-[3px] decoration-indigo-400" : "hover:underline underline-offset-[3px] decoration-indigo-200"}
                >
                Writing
              </Link>
              <Link
                href='/work'
                aria-label="work link of the website"
                className={
                  router.asPath.split('/').includes('work') ?
                  "underline underline-offset-[3px] decoration-indigo-400" : "hover:underline underline-offset-[3px] decoration-indigo-200"}
                >
                Work
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
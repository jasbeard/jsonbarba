import avatarPhoto from '/public/seda-avatar.png';
import * as Avatar from '@radix-ui/react-avatar';
import Image from 'next/image';
import Link from 'next/link';
import { TwitterLogoIcon, GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, Cross1Icon } from '@radix-ui/react-icons';
import { ThemeSwitcher } from './ThemeSwitcher';
import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/router';
import { display } from '@/font/fonts';

function HeaderSocials() {
  const iconProps  = {
    width: 40,
    height: 40,
  };

  const socials = [
    {
      href: 'https://github.com/swoppy',
      icon: <GitHubLogoIcon {...iconProps} />,
      label: `link to Jason's github`,
      name: 'Github',
    },
    {
      href: 'https://www.linkedin.com/in/jsonbarba/',
      icon: <LinkedInLogoIcon {...iconProps} />,
      label: `link to Jason's linkedin`,
      name: 'LinkedIn'
    },
    {
      href: 'https://twitter.com/jsonbarba',
      icon: <TwitterLogoIcon {...iconProps} />,
      label: `link to Jason's twitter`,
      name: 'Twitter'
    },
    {
      href: 'mailto:me@jsonbarba.com',
      icon: <EnvelopeClosedIcon {...iconProps} />,
      label: `link to Jason's email`,
      name: 'Email'
    },
  ];

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="bg-slate-200 dark:bg-gray-700 rounded py-2 px-4 font-semibold hover:bg-accent dark:hover:bg-accent data-[state=open]:bg-accent
        transition-colors focus:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-30"
      >
        Contacts
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-20 grid overflow-auto 
          bg-gray bg-opacity-70 backdrop-blur-sm 
          data-[state=open]:animate-in data-[state=closed]:animate-out 
          data-[state=closed]:fade-out data-[state=open]:fade-in"
        >
          <Dialog.Content
            className="relative rounded-t-2xl h-[calc(100vh-2rem)] mt-[2rem] bg-slate-100 dark:bg-slate-800 w-screen
            will-change-transform
            data-[state=open]:animate-slide-up-mobile
            data-[state=closed]:animate-slide-down-mobile"
          >
            <Dialog.Title className="w-full text-center text-2xl mt-14 mb-4 font-medium text-dark dark:text-gray-300">Contacts</Dialog.Title>
            <div className="grid gap-4 grid-cols-1 px-4 sm:grid-cols-2 sm:px-12">
              {socials.map((item, i) => (
                <div key={i} className="h-24 w-full flex justify-center rounded shadow border border-cgray text-dark border-opacity-20 hover:bg-accent dark:hover:bg-accent dark:text-gray-300">
                  <Link href={item.href} target="_blank" aria-label={item.label} rel="noopener noreferrer" className="h-full w-full flex flex-col items-center justify-center gap-1">
                    {item.icon} <span className="text-xs">{item.name}</span>
                  </Link>
                </div>
              ))}
            </div>
            <Dialog.Close className="absolute right-0 top-0 m-4 shadow border p-2 rounded-full border-cgray border-opacity-20 hover:bg-accent dark:hover:bg-accent">
              <Cross1Icon />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Header() {
  const iconProps  = {
    width: 24,
    height: 24,
    className: 'text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent'
  };

  const links = [
    {
      href: 'https://github.com/swoppy',
      icon: <GitHubLogoIcon {...iconProps} />,
      label: `link to Jason's github`,
    },
    {
      href: 'https://www.linkedin.com/in/jsonbarba/',
      icon: <LinkedInLogoIcon {...iconProps} />,
      label: `link to Jason's linkedin`,
    },
    {
      href: 'https://twitter.com/jsonbarba',
      icon: <TwitterLogoIcon {...iconProps} />,
      label: `link to Jason's twitter`,
    },
    {
      href: 'mailto:me@jsonbarba.com',
      icon: <EnvelopeClosedIcon {...iconProps} />,
      label: `link to Jason's email`,
    },
  ];

  const router = useRouter();

  return (
    <header className="px-4 py-2 sticky top-0 z-10 backdrop-blur-[1px]">
      <nav>
        <div className="flex justify-between">
          <div className={`font-medium gap-2 -mt-2 pr-4 rounded-br bg-white dark:bg-dark ${display.className}`}>
            <div className="flex justify-between items-center gap-2 mt-4 font-light">
              <Link href='/' aria-label="home link of the website" className={router.asPath === '/' ? "underline underline-offset-[3px] decoration-indigo-400" : ""}>
                Home
              </Link>
              <Link href='/writing' aria-label="writing link of the website" className={router.asPath.split('/').includes('writing') ? "underline underline-offset-[3px] decoration-indigo-400" : ""}>
                Writing
              </Link>
            </div>
            {/* <span className="w-0.5 h-10 border-l border-gray-300 inline mx-4"/> */}
            {/* <div className="hidden sm:flex sm:gap-4">
              <ul className="sm:flex sm:gap-4">
              {links.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} target="_blank" aria-label={item.label} rel="noopener noreferrer">
                    {item.icon}
                  </Link>
                </li>
              ))}
              </ul>
            </div>
            <div className="sm:hidden">
              <HeaderSocials />
            </div> */}
          </div>
          <div className="bg-white dark:bg-dark -mt-2 rounded-b ">
            <div className="flex items-center justify-center mt-2">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
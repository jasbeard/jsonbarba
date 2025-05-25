import avatarPhoto from '/public/seda-avatar.png';
import * as Avatar from '@radix-ui/react-avatar';
import Image from 'next/image';
import Link from 'next/link';
import { TwitterLogoIcon, GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, Cross1Icon } from '@radix-ui/react-icons';
import { ThemeSwitcher } from './ThemeSwitcher';
import * as Dialog from '@radix-ui/react-dialog';

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
            className="relative rounded-t-2xl h-[calc(100vh-4rem)] mt-[4rem] bg-slate-100 dark:bg-slate-800 w-screen top-full transition-[all .15s ease-in-out] data-[state=open]:top-0
            data-[state=closed]:animate-out"
          >
            <Dialog.Title className="w-full text-center text-2xl mt-14 mb-4 font-medium text-dark dark:text-gray-300">Contacts</Dialog.Title>
            <div className="grid gap-4 grid-cols-1 px-4 sm:grid-cols-2 sm:px-12">
              {socials.map((item, i) => (
                <div key={i} className="h-24 w-full flex justify-center rounded shadow border border-cgray text-dark border-opacity-20 hover:bg-accent dark:hover:bg-accent dark:text-gray-300">
                  <Link href={item.href} target="_blank" aria-label={item.label} rel="noopener noreferrer" className="h-full w-full flex flex-col items-center justify-center gap-1">
                    {item.icon} <span className="text-sm">{item.name}</span>
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

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link href='/'>
            <Avatar.Root className="relative inline-flex items-center justify-center align-middle overflow-hidden select-none w-9 h-9 rounded-full">
              <Image
                className="w-full h-full object-cover select-none bg-gray-300"
                quality={95}
                fill
                sizes="100vw"
                src={avatarPhoto}
                alt="Jason Barba"
              />
              <Avatar.Fallback
                className="w-full h-full flex items-center justify-center bg-gray-300 text-purple-500 text-sm leading-none font-medium"
              >
                JB
              </Avatar.Fallback>
            </Avatar.Root>
          </Link>
          <span className="w-0.5 h-10 border-l border-gray-300 inline mx-4"/>
          <div className="hidden sm:flex sm:gap-4">
            {links.map((item, i) => (
              <Link key={i} href={item.href} target="_blank" aria-label={item.label} rel="noopener noreferrer">
                {item.icon}
              </Link>
            ))}
          </div>
          <div className="sm:hidden">
            <HeaderSocials />
          </div>
        </div>
        <div>
         <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}
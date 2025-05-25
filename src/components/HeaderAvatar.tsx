import avatarPhoto from '/public/seda-avatar.png';
import * as Avatar from '@radix-ui/react-avatar';
import Image from 'next/image';
import Link from 'next/link';
import { TwitterLogoIcon, GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { ThemeSwitcher } from './ThemeSwitcher';

export function HeaderAvatar() {
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
          <div className="flex gap-2.5">
            {links.map((item, i) => (
              <Link key={i} href={item.href} target="_blank" aria-label={item.label} rel="noopener noreferrer">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div>
         <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}
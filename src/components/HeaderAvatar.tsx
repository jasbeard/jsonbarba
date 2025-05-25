import avatarPhoto from '/public/avatar.png';
import * as Avatar from '@radix-ui/react-avatar';
import Image from 'next/image';
import Link from 'next/link';
import { TwitterLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { ThemeSwitcher } from './ThemeSwitcher';


export function HeaderAvatar() {;
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link href='/'>
            <Avatar.Root className="relative inline-flex items-center justify-center align-middle overflow-hidden select-none w-10 h-10 rounded-full">
              <Image
                className="w-full h-full object-cover mt-1 select-none"
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
            <Link href="https://github.com/swoppy" target="_blank">
              <GitHubLogoIcon width={28} height={28} className="text-gray-700 dark:text-gray-300 hover:text-[#03a5fc] dark:hover:text-[#03a5fc]" />
            </Link>
            <Link href="https://www.linkedin.com/in/jsonbarba/" target="_blank">
              <LinkedInLogoIcon width={28} height={28} className="text-gray-700 dark:text-gray-300 hover:text-[#03a5fc] dark:hover:text-[#03a5fc]" />
            </Link>
            <Link href="https://twitter.com/heyswoppy" target="_blank">
            <TwitterLogoIcon width={28} height={28} className="text-gray-700 dark:text-gray-300 hover:text-[#03a5fc] dark:hover:text-[#03a5fc]"/>
            </Link>
          </div>
        </div>
        <div>
         <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}
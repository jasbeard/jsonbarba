import hamburgerMenu from '/public/hamburger-menu.svg';
import flowerTopLeft from '/public/flower-top-left.png';
import leavesBottomRight from '/public/leaves-bottom-right.png';
import Image from 'next/image';
import { wedCursive, wedSerif, sans } from '@/font/fonts';
import { memo, startTransition, useEffect, useRef, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Dialog from '@radix-ui/react-dialog';
import { CountdownTimer } from '@/components/wedding/Countdown';
import { useRouter } from 'next/router';
import { noNil } from '@/utils/lib';
import dynamic from 'next/dynamic';
import { WeddingHeroSection } from '@/components/wedding/WeddingHeroSection';
import { NextSeo } from 'next-seo';
import { Gifts } from '@/components/wedding/Gifts';

export interface GuestData {
  guestName: string;
  isInvited: boolean;
  did_confirmed: boolean;
  guest_id: number;
  message: string;
}

export interface CompletionData {
  emailSentData: string;
  message: string;
}

export type TabNames = "our_story" | "photos" | "rsvp" | "faq" | "gifts" | "event_flow";

const Rsvp = dynamic(() => import('@/components/wedding/Rsvp/RsvpContent'), {
  ssr: false,
});

const OurStory = dynamic(() => import('@/components/wedding/OurStory'), {
  ssr: false,
});

const PhotoListWithSuspense = dynamic(() => import('@/components/wedding/Photos'), {
  ssr: false,
});

const Faq = dynamic(() => import('@/components/wedding/Faq'), {
  ssr: false,
});

const Event = dynamic(() => import('@/components/wedding/Event'), {
  ssr: false,
})

export function formatTabName(name: TabNames) {
  switch(name){
    case 'our_story':
      return 'Our Story';
    case 'photos':
      return 'Photos';
    case 'faq':
      return 'FAQs';
    case 'rsvp':
      return 'RSVP';
    case 'gifts':
      return 'Gifts';
    case 'event_flow':
      return 'Event Flow';
    default: '';
  };
};

const Page = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [validateResponse, setValidateResponse] = useState<GuestData | null>(null);
  const [completionResponse, setCompletionResponse] = useState<CompletionData | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const tabsTrigger = `p-2 rounded-md data-[state='active']:outline-none
    data-[state='active']:text-white data-[state='active']:bg-golden-amber
  `;

  // page theme
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    function updateBodyStyle() {
      body.style.backgroundColor = '#FFFAF2';
    }

    updateBodyStyle();

    return () => {
      body.style.backgroundColor = "rgb(44 49 54 / var(--tw-bg-opacity))";
    }
    
  },[]);

  function handleModalAction(value: string) {
    startTransition(() => {
      router.push(
        {
          pathname: router.pathname,
          query: noNil({
            section: value,
          }),
        },
        undefined,
        { shallow: true }
      );
    });
    setModalOpen(false);
  }

  const tabs = [
    {
      label: 'our_story',
      content: <OurStory />,
    },
    {
      label: 'photos',
      content: <PhotoListWithSuspense />,
    },
    {
      label: 'faq',
      content: <Faq />,
    },
    {
      label: 'rsvp',
      content: (
        <Rsvp
          isLoading={isLoading}
          setLoading={setLoading}
          setValidateResponse={setValidateResponse}
          validateResponse={validateResponse}
          comletionResponse={completionResponse}
          setCompletionResponse={setCompletionResponse}
        />
      ),
    },
    { 
      label: 'gifts',
      content: <Gifts />,
    },
    {
      label: 'event_flow',
      content: <Event />
    },
  ];

  return (
    <>
      <div style={{ fontFamily: wedCursive.style.fontFamily }} className="flex flex-col items-center py-8 px-4 text-[#515152] gap-4 mt-20">
        <WeddingHeroSection />
        <div style={{ fontFamily: sans.style.fontFamily }} className="flex-col w-full md:max-w-[47.924rem] mt-2 items-center flex-shrink h-full">
          <Tabs.Root
            defaultValue="our_story"
            value={router.query.section as string}
            onValueChange={(route) => {
              startTransition(() => {
                router.push(
                  {
                    pathname: router.pathname,
                    query: noNil({
                      section: route,
                    }),
                  },
                  undefined,
                  { shallow: true }
                );
              });
            }}
          >
            <Tabs.List
              className="fixed top-0 right-0 m-4 gap-4 md:gap-2 mb-4 font-medium hidden md:flex rounded-xl p-4 bg-stone-200"
              aria-label="our_story"
            >
              {tabs.map((item) => (
                <Tabs.Trigger
                  key={item.label}
                  className={tabsTrigger}
                  value={item.label}
                >
                  <span>{formatTabName(item.label as TabNames)}</span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <div className="border-t bg-stone"/>
            <div className={`block mb-6 mt-6 text-center font-semibold text-2xl sm:text-left md:hidden text-golden-amber ${wedSerif.className}`}>
              {formatTabName(router.query.section as TabNames) === 'FAQs' ? 'Frequently Ask Questions' : formatTabName(router.query.section as TabNames)}
            </div>
            <div className="w-full">
              {tabs.map((item) => (
                <Tabs.Content
                  key={item.label}
                  value={item.label}
                  className="px-2"
                >
                  {router.query.section === item.label && item.content}
                </Tabs.Content>
              ))}
            </div>
          </Tabs.Root>
        </div>
      </div>
      <div className="fixed top-0 md:hidden mt-4 ml-4 bg-stone-200 px-2 py-2.5 rounded-xl">
        <Dialog.Root modal open={isModalOpen} onOpenChange={setModalOpen}>
          <Dialog.Trigger className="p-4 rounded-full border border-[#515152]">
            <Image
              quality={95}
              src={hamburgerMenu}
              alt="hamburgerMenu"
              className="w-6 h-6 text-[#515152]"
            />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed"/>
            <Dialog.Content className="fixed w-full h-full bg-slate-300 top-0 p-4">
              <div className="relative grid grid-cols-1 mt-20 gap-4 text-[#515152]">
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    className="cursor-pointer text-left"
                    onClick={() => handleModalAction(tab.label)}
                  >
                    <span>{formatTabName(tab.label as TabNames)}</span>
                  </button>
                ))}
              </div>
              <Dialog.Close className="absolute top-0 p-4 rounded-full mt-4 right-0 mr-4 border border-[#515152]">
                <div className="w-6 h-6 relative text-[#515152] text-xl">
                  <span className="absolute -top-0.5 left-1.5">X</span>
                </div>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
}

const EmbeddedSpotifyPlaylist = () => {
  let embedRef = useRef(null);
  let tracks = [
    "track/1Y3LN4zO1Edc2EluIoSPJN",
    "track/4PF2XC8shB2w4g66MaXyEH",
    "track/6ohzjop0VYBRZ12ichlwg5",
    "track/3PHgxKy3nKy0v9KvUtHl8g",
  ];

function handleIframeOnload() {
  if (embedRef) {
    // goal: auto-play on load, security policy issue
    // attempt to hack play button
  }
}

  return (
    <div id="iframe-container" className="fixed top-0 right-0 md:right-[unset] md:top-[unset] md:bottom-0 md:left-0 m-4 w-[70%] md:w-[22%]">
      <iframe
        id="spotify-embed-iframe"
        className="rounded-xl"
        src={`https://open.spotify.com/embed/${tracks[Math.floor(Math.random() * tracks.length)]}?utm_source=generator&theme=0`}
        width="100%"
        height="80"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
        onLoad={handleIframeOnload}
        ref={embedRef}
      />
    </div>
  );
};

const BackgroundImages = () => {
  return (
    <>
      <Image
        quality={95}
        src={flowerTopLeft}
        alt="flower-top-left"
        className="absolute left-0 top-0 -z-10 w-40 -ml-5 mt-20 contrast-50 md:contrast-100 md:block md:w-[276px] blur-md lg:blur-0 md:m-[unset]"
        priority
      />
      <Image
        quality={95}
        src={leavesBottomRight}
        alt="leaver-bottom-right"
        className="absolute bottom-0 right-0 -mb-20 -z-10 contrast-50 md:contrast-100 w-40 md:block md:w-[276px] blur-md lg:blur-0 md:m-[unset]"
        priority
      />
    </>
  );
};

const MemoizedIframe = memo(EmbeddedSpotifyPlaylist); // memoized to keep it being re-rendered when changing sections
const MemoizedBackgroundImages = memo(BackgroundImages);

const Wedding = () => {
  return (
    <>
      <NextSeo
        title="Jason & Josan | Wedding"
        description="A page to check wedding details and validate invitations through RSVP"
      />
      <MemoizedBackgroundImages />
      <Page />
      <MemoizedIframe />
    </>
  );
};

export default Wedding;
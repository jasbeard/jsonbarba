import { WorkCard, WorkCardGeneral } from '@/components/WorkCard';
import { HeaderAvatar } from '@/components/HeaderAvatar'; 
import xsplit from '/public/xsplit.svg';
import videocom from '/public/videocom.svg';
import metrobank from '/public/metrobank.svg';
import pangolin from '/public/pangolin.png';
import { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import { GithubContributionMap } from '@/components/GithubContributionMap';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export default function Home() {
  const workList = [
    {
      imageSource: videocom,
      name: ['VideoCom', 'https://videocom.com'],
      designation: 'Senior Software Engineer',
      period: '2022 - present',
      highlights: [
        "One of the frontend core team members that builds and maintains VideoCom Cloud",
        "Working with engineering teams organization-wide to ensure implementation details are synched with web and apps",
        "Aid requirements deliberation with project managers"
      ],
      technology: ["Nextjs", "TypeScript", "GraphQL", "REST", "Tailwind CSS", "MySQL", "Redis", "Docker", "Kubernetes", "Cloudflare", "Google Cloud", "Git"],
    },
    {
      imageSource: xsplit,
      name: ['SplitmediaLabs', 'https://xsplit.com'],
      designation: 'Software Engineer',
      period: '2021 - 2022',
      highlights: [
        "Filled development deficiencies of XSplit Cloud",
        "Initiated and maintained several cloud features, mostly UIs and several API integrations",
        "Worked with design teams for technical alignments",
      ],
      technology: ["Nextjs", "TypeScript", "GraphQL", "Tailwind CSS", "MySQL", "Redis", "Docker", "Kubernetes", "Cloudflare", "Google Cloud", "Git"],
    },
    {
      imageSource: metrobank,
      name: ['Metrobank', 'https://metrobank.com.ph'],
      designation: 'Consultant',
      period: '2020 - 2021',
      highlights: [
        "Helped to make their bond platform (wealth manager) to have more automated bond buying and selling experience to advance further their digitalization efforts",
        "Spearheaded new key features of bond buying and selling",
        "Refactored, updated legacy dependencies",
      ],
      technology: ['LoopBack 4', 'React', 'Material-UI', "SOAP", "REST", "Git"]
    },
    {
      imageSource: pangolin,
      name: ['TeamRed Security', 'https://pangolinsecured.com'],
      designation: 'Software Developer',
      period: '2019 - 2020',
      highlights: [
        "Worked with the founders on mobile designs and technical decisions",
        "UI migrations from react-native to webview",
        "Updated mobile codebase and its dependencies",
      ],
      technology: ['React Native', 'TypeScript', 'WebView', "Python", "REST", "Jenkins", "Kubernetes", "Git"]
    },
  ];

  const legacyWork = {
    name: ['Various tech companies & endeavours'],
    designation: 'Developer',
    period: '2017 - 2019',
    highlights: [
      'Created websites, landing pages and web scrapers as a freelancer',
      'Worked with a financial startup',
      'Worked for a tech agency',
      'Worked at a bank (Unionbank of the Philippines)'
    ],
    technology: ['PHP', 'JavaScipt', 'TypeScript', 'React', 'Node', 'IBM API Connect', 'Firebase', "Git"]
  }

  const currentYear = new Date().getFullYear();

  return (
    <>
      <NextSeo
        title="Jason Barba"
        description="Website of Jason Barba, here is where you can see details of his commercial experience as a web engineer/developer"
      />
      <div className="m-4">
        <HeaderAvatar />
        <div className="md:px-32 lg:px-80">
          <section className="flex flex-col justify-center mt-8">
            <h1 className="text-4xl leading-[50px] font-semibold tracking-wider text-[#2c3136] dark:text-white">About</h1>
            <p className="max-w-4xl text-lg text-[#2c3136] dark:text-white font-medium leading-8 mt-4 tracking-[0.01em]">
              <span className="font-semibold">
                Jason Joseph Barba</span> is a software engineer mainly focus on the web frontend development side of things to help build software services that just make sense. 
                He spent over {currentYear - 2017} years working with various tech startups, mid-size organizations and even some larger ones. He likes to work on things
                that make our lives on the internet a little bit cleaner and easier.
            </p>
          </section>
          <section className="flex flex-col mt-8">
            <h1 className="text-4xl leading-[50px] font-semibold tracking-wider text-[#2c3136] dark:text-white">Github</h1>
            <span className="text-sm text-[#2c3136] dark:text-white mb-4">This year&apos;s ({currentYear}) code contribution</span>
            <GithubContributionMap />
          </section>
          <section className="flex flex-col mt-8">
            <h1 className="text-4xl leading-[50px] font-semibold tracking-wider text-[#2c3136] dark:text-white">Contracts</h1>
            <span className="text-sm text-[#2c3136] dark:text-white mb-4">List of commercial experiences</span>
            <div className="grid grid-cols-1 gap-y-4 mt-2">
              {workList.map((item, index) => (
                <Fragment key={index}>
                  <WorkCard
                    imageSource={item.imageSource}
                    name={item.name}
                    designation={item.designation}
                    period={item.period}
                    highlights={
                      item.highlights?.map((exp, i) => (
                        <ul className="flex items-start" key={`h-${i}`}>
                          <div><ArrowRightIcon className="-ml-4 mr-1 mt-[3px]"/></div><li>{exp}</li>
                        </ul>
                      ))
                    }
                    technology={item.technology}
                  />
                </Fragment>
              ))}
              <WorkCardGeneral 
                name={legacyWork.name}
                designation={legacyWork.designation}
                period={legacyWork.period}
                highlights={
                  legacyWork.highlights?.map((exp, index) => (
                    <ul className="flex items-start" key={index}>
                      <div><ArrowRightIcon className="-ml-4 mr-1 mt-[3px]"/></div><li>{exp}</li>
                    </ul>
                  ))
                }
                technology={legacyWork.technology}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

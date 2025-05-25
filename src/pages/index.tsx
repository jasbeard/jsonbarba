import { WorkCard, WorkCardGeneral } from '@/components/WorkCard';
import { HeaderAvatar } from '@/components/HeaderAvatar'; 
import xsplit from '/public/xsplit.svg';
import videocom from '/public/videocom.svg';
import metrobank from '/public/metrobank.svg';
import pangolin from '/public/pangolin.png';
import { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import { GithubContributionMap } from '@/components/GithubContributionMap';

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
        "Helped to make their bond platform (wealth manager) to have more automated bond buying experience to advance further their digitalization efforts",
        "Spearheaded new key features of bond buying",
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
      'Created websites, landing pages and web scrapers',
      'Worked with a financial startup',
      'Worked for a tech agency',
      'Worked at a bank (Unionbank of the Philippines)'
    ],
    technology: ['PHP', 'JavaScipt', 'TypeScript', 'React', 'Node', 'IBM API Connect', 'Firebase', "Git"]
  }

  return (
    <>
      <NextSeo
        title="Jason Barba"
        description="Website of Jason Barba, here is where you can see details of his commercial experience as a web engineer/developer"
      />
      <HeaderAvatar />
      <div className="md:px-80">
        <section className="flex justify-center mt-4">
          <p className="max-w-4xl text-xl text-[#2c3136] dark:text-white font-medium leading-8">
            Hey 👋 my name is Jason Barba and I am a software engineer - I mainly focus on web frontend development for building software services on the internet. 
            The technologies I am working with right now are Nextjs, TypeScript, Tailwind CSS, GraphQL, Git and Docker.
          </p>
        </section>
        <section className="flex flex-col items-center justify-center mt-4">
          <GithubContributionMap />
        </section>
        <section className="flex flex-col justify-center items-center mt-8">
          <h2 className="font-medium text-[#2c3136] dark:text-white">Commercial Projects & Contracts</h2>
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
                      <ul className="list-disc" key={`h-${i}`}>
                        <li>{exp}</li>
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
                  <ul className="list-disc" key={index}>
                    <li>{exp}</li>
                  </ul>
                ))
              }
              technology={legacyWork.technology}
            />
          </div>
        </section>
      </div>
    </>
  );
}

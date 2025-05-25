import { Fragment } from "react";
import xsplit from '/public/xsplit.svg';
import videocom from '/public/videocom.svg';
import metrobank from '/public/metrobank.svg';
import pangolin from '/public/pangolin.png';
import bajetto from '/public/bajetto.svg';
import asurion from '/public/asurion.png';
import { StaticImageData } from "next/image";
import * as WorkCard from "./WorkCard";

interface WorkListProps {
  imageSource: StaticImageData;
  name: string[];
  designation: string;
  highlights: string[];
  period: string;
  technology: string[];
}

export function ContractSection() {
  const workList: WorkListProps[] = [
    {
      imageSource: asurion,
      name: ['Asurion', 'https://asurion.com'],
      designation: 'Software Engineer 3',
      highlights: [
        "Maintain and update public facing websites of Asurion domain",
        "Collaborate on Proof-of-concept efforts with different teams for overall operational efficiencies",
        "On call support on incidents covering public websites and its services",
      ],
      period: '2023 - present',
      technology: ["Gatsbyjs", "GraphQL", "Contentful", "Tailwind CSS", "NGINX", "Docker", "AWS", "Git", "Github Actions"],
    },
    {
      imageSource: videocom,
      name: ['VideoCom', 'https://videocom.com'],
      designation: 'Senior Software Engineer',
      period: '2022 - 2023',
      highlights: [
        "Frontend core team that builds and maintains VideoCom Cloud",
        "Worked with engineering teams organization-wide to ensure implementation details are synched with web and apps",
        "Worked on requirements deliberation with project managers and designers",
        "Created and maintained several features",
        "Code reviews"
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
        "Initiated and maintained several cloud features - mostly UIs and several API integrations",
        "Worked with design teams for technical alignments",
      ],
      technology: ["Nextjs", "TypeScript", "GraphQL", "Tailwind CSS", "MySQL", "Redis", "Docker", "Kubernetes", "Cloudflare", "Google Cloud", "Git"],
    },
    {
      imageSource: metrobank,
      name: ['Metrobank', 'https://metrobank.com.ph'],
      designation: 'Programmer Analyst',
      period: '2020 - 2021',
      highlights: [
        "Implemented automated bond buying and selling experience to advance further their digitalization efforts",
        "Spearheaded frontend developement for buying and selling bonds",
        "Refactored, updated legacy dependencies",
        "Helped peers to minimize their development deficiencies",
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
      'Worked with a fintech startup',
      'Worked for a tech agency',
      'Worked at one of the top retail banks'
    ],
    technology: ['PHP', 'JavaScipt', 'TypeScript', 'React', 'Node', 'IBM API Connect', 'Firebase', "Git"]
  }

  return (
    <section className="space-y-4 mt-8 mx-auto" aria-describedby="exp">
      <h1 className="leading-[50px] font-semibold tracking-wider text-2xl sm:text-4xl">Contracts</h1>
      <span className="text-xs sm:text-sm text-dark dark:text-white mb-4" id="exp">List of commercial experiences</span>
        <ul className="grid grid-cols-1 gap-y-4 mt-2">
        {workList.map((item, index) => (
          <li key={index} aria-label="list of companies">
            <WorkCard.Root
              className="w-full p-4 rounded-sm shadow border border-cgray border-opacity-20 relative text-dark dark:text-white"
            >
              <WorkCard.Company
                name={item.name}
                image={item.imageSource}
                lengthOfStay={item.period}
                className="flex"
              />
              <WorkCard.Responsibilities
                items={item.highlights}
                designation={item.designation}
                className="flex flex-col text-xs sm:text-sm mt-2 px-4"
              />
              <WorkCard.Technology
                stack={item.technology}
                className="text-xs sm:text-sm px-4 -ml-4 mt-4"
              />
            </WorkCard.Root>
          </li>
        ))}
          <li>
            <WorkCard.Root className="w-full p-4 rounded-sm shadow border border-cgray border-opacity-20 relative text-dark dark:text-white">
              <WorkCard.Company
                name={legacyWork.name}
                lengthOfStay={legacyWork.period}
                className="flex"
              />
              <WorkCard.Responsibilities
                items={legacyWork.highlights}
                designation={legacyWork.designation}
                className="flex flex-col text-xs sm:text-sm mt-2 px-4"
              />
              <WorkCard.Technology
                stack={legacyWork.technology}
                className="text-xs sm:text-sm px-4 -ml-4 mt-4"
              />
            </WorkCard.Root>
          </li>
        </ul>
    </section>
  );
}

export function ProjectSection() {
  const projectList = [
    {
      imageSource: bajetto,
      name: ['Bajetto'],
      designation: 'Founder',
      period: '2023 - present',
      highlights: [
        "Responsible for everything 😁",
      ],
      technology: ["SwiftUI", "MySQL", "GraphQL", "REST", "Docker", "Git"],
    },
  ];

  return (
    <section className="space-y-4 mt-8 mx-auto">
      <h1 className="text-2xl sm:text-4xl leading-[50px] font-semibold tracking-wider">Projects</h1>
      <span className="text-xs sm:text-sm text-dark dark:text-white mb-4">List of released and developing projects</span>
      <div className="grid grid-cols-1 gap-y-4 mt-2">
        {projectList.map((item, index) => (
          <Fragment key={index}>
            <WorkCard.Root
              className="w-full p-4 rounded-sm shadow border border-cgray border-opacity-20 relative text-dark dark:text-white"
            >
              <WorkCard.Company
                name={item.name}
                image={item.imageSource}
                lengthOfStay={item.period}
                className="flex"
              />
              <WorkCard.Responsibilities
                items={item.highlights}
                designation={item.designation}
                className="flex flex-col text-xs sm:text-sm mt-2 px-4"
              />
            </WorkCard.Root>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

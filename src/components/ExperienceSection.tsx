import { Fragment } from "react";
import { WorkCard, WorkCardGeneral } from "./WorkCard";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import xsplit from '/public/xsplit.svg';
import videocom from '/public/videocom.svg';
import metrobank from '/public/metrobank.svg';
import pangolin from '/public/pangolin.png';
import bajetto from '/public/bajetto.svg';

export function ContractSection() {
  const workList = [
    {
      imageSource: videocom,
      name: ['VideoCom', 'https://videocom.com'],
      designation: 'Senior Software Engineer',
      period: '2022 - present',
      highlights: [
        "Frontend core team member that builds and maintains VideoCom Cloud",
        "Working with engineering teams organization-wide to ensure implementation details are synched with web and apps",
        "Aid project requirements and designs deliberation with project managers"
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
        "Helped made the bond platform (wealth manager) to have more automated bond buying and selling experience, advancing further their digitalization efforts",
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
      'Worked with a fintech startup',
      'Worked for a tech agency',
      'Worked at one of the top retail banks'
    ],
    technology: ['PHP', 'JavaScipt', 'TypeScript', 'React', 'Node', 'IBM API Connect', 'Firebase', "Git"]
  }

  return (
    <section className="space-y-4 mt-8 mx-auto">
      <h1 className="text-4xl leading-[50px] font-semibold tracking-wider">Contracts</h1>
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
                  <ul key={`h-${i}`}>
                    <li className="flex items-start">
                      <div><ArrowRightIcon className="-ml-4 mt-[3px]"/></div>
                      <p className="ml-1 text-left">{exp}</p>
                    </li>
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
              <ul key={index}>
                <li className="flex items-start">
                  <div><ArrowRightIcon className="-ml-4 mt-[3px]"/></div>
                  <p className="ml-1 text-left">{exp}</p>
                </li>
              </ul>
            ))
          }
          technology={legacyWork.technology}
        />
      </div>
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
      <h1 className="text-4xl leading-[50px] font-semibold tracking-wider">Projects</h1>
      <span className="text-sm text-[#2c3136] dark:text-white mb-4">List of released and developing projects</span>
      <div className="grid grid-cols-1 gap-y-4 mt-2">
        {projectList.map((item, index) => (
          <Fragment key={index}>
            <WorkCard
              imageSource={item.imageSource}
              name={item.name}
              designation={item.designation}
              period={item.period}
              highlights={
                item.highlights?.map((exp, i) => (
                  <ul key={`h-${i}`}>
                    <li className="flex items-start">
                      <div><ArrowRightIcon className="-ml-4 mt-[3px]"/></div>
                      <p className="ml-1 text-left">{exp}</p>
                    </li>
                  </ul>
                ))
              }
              technology={item.technology}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

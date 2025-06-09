import React, { useRef, useState } from "react";
import xsplit from "/public/xsplit.svg";
import videocom from "/public/videocom.svg";
import metrobank from "/public/metrobank.svg";
import pangolin from "/public/pangolin.png";
import asurion from "/public/asurion.png";
import { StaticImageData } from "next/image";
import * as WorkCard from "./workcard/WorkCard";

export interface WorkListProps {
  imageSource?: StaticImageData;
  name: string[];
  designation: string;
  highlights: string[];
  period: string;
  technology?: string[];
}

export function ContractSection() {
  const workList: WorkListProps[] = [
    {
      imageSource: asurion,
      name: ["Asurion", "https://asurion.com"],
      designation: "Software Engineer 3",
      highlights: [
        "Maintain Asurion's public websites",
        "Handle public websites incident support",
        "Coordinate team and stakeholder communications",
        "Feature ownership",
        "Code reviews",
        "Security SME",
      ],
      period: "2023 - present",
      // technology: [
      //   "TypeScript",
      //   "Nx",
      //   "React",
      //   "GraphQL",
      //   "Contentful",
      //   "Tailwind CSS",
      //   "NGINX",
      //   "Docker",
      //   "AWS",
      //   "Git",
      //   "Github Actions",
      // ],
    },
    {
      imageSource: videocom,
      name: ["VideoCom", "https://videocom.com"],
      designation: "Senior Software Engineer",
      period: "2022 - 2023",
      highlights: [
        "Frontend core team that builds and maintains VideoCom Cloud",
        "Collaborated across departments to align implementation details for web and app teams.",
        "Worked on requirements deliberation with project managers and designers",
        "Created and maintained several features",
        "Code reviews",
      ],
      technology: [
        "Nextjs",
        "TypeScript",
        "GraphQL",
        "REST",
        "Tailwind CSS",
        "MySQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "Cloudflare",
        "Google Cloud",
        "Git",
      ],
    },
    {
      imageSource: xsplit,
      name: ["SplitmediaLabs", "https://xsplit.com"],
      designation: "Software Engineer",
      period: "2021 - 2022",
      highlights: [
        "Filled development deficiencies of XSplit Cloud",
        "Launched and managed various cloud features, focusing on UIs and API integrations.",
        "Worked with design teams for technical alignments",
      ],
      technology: [
        "Nextjs",
        "TypeScript",
        "GraphQL",
        "Tailwind CSS",
        "MySQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "Cloudflare",
        "Google Cloud",
        "Git",
      ],
    },
    {
      imageSource: metrobank,
      name: ["Metrobank", "https://metrobank.com.ph"],
      designation: "Programmer Analyst",
      period: "2020 - 2021",
      highlights: [
        "Spearheaded frontend developement for buying and selling bonds",
        "Refactored, updated legacy dependencies",
        "Helped peers to minimize their development deficiencies",
      ],
      technology: ["LoopBack 4", "React", "Material-UI", "SOAP", "REST", "Git"],
    },
    {
      imageSource: pangolin,
      name: ["TeamRed Security", "https://pangolinsecured.com"],
      designation: "Software Developer",
      period: "2019 - 2020",
      highlights: [
        "Worked with the founders on mobile designs and technical decisions",
        "UI migrations from react-native to webview",
        "Updated mobile codebase and its dependencies",
      ],
      technology: [
        "React Native",
        "TypeScript",
        "WebView",
        "Python",
        "REST",
        "Jenkins",
        "Kubernetes",
        "Git",
      ],
    },
  ];

  const legacyWork = {
    name: ["Various tech companies & endeavours"],
    designation: "Developer",
    period: "2017 - 2019",
    highlights: [
      "Created websites, landing pages and web scrapers as a freelancer",
      "Worked with a fintech startup",
      "Worked for a tech agency",
      "Worked at one of the top retail banks",
    ],
    technology: [
      "PHP",
      "JavaScipt",
      "TypeScript",
      "React",
      "Node",
      "IBM API Connect",
      "Firebase",
      "Git",
    ],
  };

  return (
    <section className="space-y-4 mx-auto" aria-describedby="exp">
      <h1 className={` font-semibold text-2xl sm:text-3xl`}>Work</h1>
      <span
        className="text-xs sm:text-sm text-dark dark:text-white mb-4"
        id="exp"
      >
        List of commercial work experiences
      </span>
      <ul className="grid grid-cols-1 gap-y-4 mt-2">
        {workList.map((item, index) => (
          <li key={index} aria-label="list of companies">
            <SpotlightCard spotlightColor="rgba(99, 102, 241, 0.4)">
              <WorkCard.Root
                className="w-full p-4 rounded-sm shadow border border-cgray border-opacity-20 relative text-dark dark:text-white"
                work={item}
              >
                <WorkCard.Company className="flex" />
                <WorkCard.Responsibilities className="flex flex-col text-xs sm:text-sm mt-2" />
                <WorkCard.Technology className="text-xs sm:text-sm px-4 -ml-4 mt-4" />
              </WorkCard.Root>
            </SpotlightCard>
          </li>
        ))}
        <li>
          <SpotlightCard spotlightColor="rgba(99, 102, 241, 0.4)">
            <WorkCard.Root
              className="w-full p-4 rounded-sm shadow border border-cgray border-opacity-20 relative text-dark dark:text-white"
              work={legacyWork}
            >
              <WorkCard.Company className="flex" />
              <WorkCard.Responsibilities className="flex flex-col text-xs sm:text-sm mt-2" />
              <WorkCard.Technology className="text-xs sm:text-sm px-4 -ml-4 mt-4" />
            </WorkCard.Root>
          </SpotlightCard>
        </li>
      </ul>
    </section>
  );
}

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

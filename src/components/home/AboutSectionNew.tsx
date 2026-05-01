import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

type ExperienceItem = {
  company: string;
  href?: string;
  years: string;
  /** When true, years use muted styling (e.g. previous role). */
  yearsMuted?: boolean;
  description: string;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Aboitiz Data Innovation",
    href: "https://aboitizdatainnovation.com/",
    years: "2026-present",
    description:
      "Public sector AI projects. Internal secondment to different Aboitiz business units.",
  },
  {
    company: "Asurion",
    href: "https://www.asurion.com",
    years: "2023-2026",
    description:
      "E2E feature ownership roles, on-call & incident monitoring. Security SME.",
  },
  {
    company: "Videocom",
    years: "2022-2023",
    href: "https://videocom.com",
    yearsMuted: true,
    description:
      "Senior engineer. Built & launched features for Videocom cloud.",
  },
  {
    company: "SplitmediaLabs",
    years: "2021-2022",
    description:
      "Build web features around ffmpeg & API integrations. Migration efforts.",
  },
  {
    company: "Metrobank",
    years: "2020-2021",
    description:
      "Led development of automated buy and sell features for wealth management platform.",
  },
];

export function AboutSectionNew() {
  return (
    <>
      <div className="flex flex-col w-full max-w-2xl mt-20">
        <div
          className="text-gray-950 font-medium animate-fade-in"
          style={{
            animationDelay: "0ms",
            animationFillMode: "both",
          }}
        >
          Jason Barba.{" "}
          <span className="text-gray-600 font-normal">
            Senior Sofware Engineer.
          </span>
        </div>

        <span
          className=" animate-fade-in"
          style={{
            animationDelay: "100ms",
            animationFillMode: "both",
          }}
        >
          Currently works at Aboitiz Data Innovation as a Senior Full Stack
          Engineer. <br />
          Previously, Software Engineer 3 at Asurion.
        </span>
        <div
          className="mt-6 animate-fade-in"
          style={{
            animationDelay: "200ms",
            animationFillMode: "both",
          }}
        >
          <span>
            In my down time, I could be at the gym, travelling with my wife,
            playing video games, developing a mini SaaS, working on some writing
            or taking a picture.
          </span>
        </div>
      </div>
      {/* Experience */}
      <div
        className="mt-10 animate-fade-in"
        style={{
          animationDelay: "300ms",
          animationFillMode: "both",
        }}
      >
        <h2 className="text-xl font-[550] text-gray-950">Experience.</h2>
        {EXPERIENCE.map((item, index) => (
          <div key={item.company} className={index === 0 ? "mt-4" : "mt-6"}>
            <div className="flex gap-1">
              <div>
                {item.href ? (
                  <Link href={item.href} className="text-gray-950 font-medium">
                    {item.company}
                  </Link>
                ) : (
                  <span className="text-gray-950 font-medium">
                    {item.company}
                  </span>
                )}
              </div>
              <div className={item.yearsMuted ? "text-gray-600" : undefined}>
                {item.years}
              </div>
            </div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
      {/* Contact */}
      <div
        className="mt-10 animate-fade-in pb-4"
        style={{
          animationDelay: "400ms",
          animationFillMode: "both",
        }}
      >
        <h2 className="text-xl font-[550] text-gray-950">Social.</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link
            href="mailto:me@jasonbarba.com"
            className="flex w-fit justify-center items-center gap-0.5 cursor-pointer group px-2 py-1 text-sm rounded-full bg-gray-200 hover:bg-gray-900 hover:text-white transition-colors duration-200"
            target="_blank"
          >
            <div>me@jasonbarba.com</div>
            <ArrowUpRightIcon
              size={16}
              className="text-gray-600 stroke-1 group-hover:text-white mb-1"
            />
          </Link>
          <Link
            href="https://github.com/jasbeard"
            className="flex w-fit justify-center items-center gap-0.5 cursor-pointer group px-2 py-1 text-sm rounded-full bg-gray-200 hover:bg-gray-900 hover:text-white transition-colors duration-200"
            target="_blank"
          >
            <div>github.com</div>
            <ArrowUpRightIcon
              size={16}
              className="text-gray-600 stroke-1 group-hover:text-white mb-1"
            />
          </Link>
          <Link
            href="https://x.com/jasbeardtech"
            className="flex w-fit justify-center items-center gap-0.5 cursor-pointer group px-2 py-1 text-sm rounded-full bg-gray-200 hover:bg-gray-900 hover:text-white transition-colors duration-200"
            target="_blank"
          >
            <div>x.com</div>
            <ArrowUpRightIcon
              size={16}
              className="text-gray-600 stroke-1 group-hover:text-white mb-1"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

type CareerItem = {
  company: string;
  href?: string;
  years: string;
  /** When true, years use muted styling (e.g. previous role). */
  yearsMuted?: boolean;
  description: string;
};

const CAREER: CareerItem[] = [
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

const pillStyles =
  "flex w-fit justify-center border border-surface-border bg-transparent items-center gap-0.5 cursor-pointer group px-3.5 py-1.5 text-[13px] text-ink lg:text-sm rounded-full hover:bg-surface-hover-subtle transition-colors duration-200";

export function AboutSectionNew() {
  return (
    <>
      <div className="flex flex-col w-full max-w-2xl mt-20 text-sm lg:text-base">
        <div
          className="text-gray-950 font-medium animate-fade-in"
          style={{
            animationDelay: "0ms",
            animationFillMode: "both",
          }}
        >
          Jason Barba.{" "}
          <span className="text-gray-600 font-normal">
            Senior Software Engineer.
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
          Engineer.
        </span>
        <div>Previously, Software Engineer 3 at Asurion.</div>
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
      {/* Career */}
      <div
        className="mt-10 animate-fade-in text-sm lg:text-base"
        style={{
          animationDelay: "300ms",
          animationFillMode: "both",
        }}
      >
        <h2 className="text-xl lg:text-2xl font-[550] text-gray-950">
          Career.
        </h2>
        {CAREER.map((item, index) => (
          <div key={item.company} className={index === 0 ? "mt-4" : "mt-6"}>
            <div className="flex flex-wrap gap-x-1 gap-y-0.5">
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
        className="mt-10 animate-fade-in pb-4 text-sm lg:text-base"
        style={{
          animationDelay: "400ms",
          animationFillMode: "both",
        }}
      >
        <h2 className="text-xl lg:text-2xl font-[550] text-gray-950">
          Social.
        </h2>
        <div className="flex flex-wrap gap-2 mt-4 font-normal">
          <Link
            href="mailto:me@jasonbarba.com"
            className={pillStyles}
            target="_blank"
          >
            <div>me@jasonbarba.com</div>
            <ArrowUpRightIcon size={16} className="text-ink stroke-1 mb-1" />
          </Link>
          <Link
            href="https://github.com/jasbeard"
            className={pillStyles}
            target="_blank"
          >
            <div>github.com</div>
            <ArrowUpRightIcon size={16} className="text-ink stroke-1 mb-1" />
          </Link>
          <Link
            href="https://x.com/itsjasonbarba"
            className={pillStyles}
            target="_blank"
          >
            <div>x.com</div>
            <ArrowUpRightIcon size={16} className="text-ink stroke-1 mb-1" />
          </Link>
        </div>
      </div>
    </>
  );
}

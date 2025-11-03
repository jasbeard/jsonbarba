import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

export function AboutSectionNew() {
  return (
    <>
      <div className="flex flex-col w-full max-w-3xl mt-20">
        <div
          className="text-gray-950 font-medium animate-fade-in"
          style={{
            animationDelay: "0ms",
            animationFillMode: "both",
          }}
        >
          Jason Barba.{" "}
          <span className="text-gray-600 font-normal">Sofware Engineer.</span>
        </div>

        <span
          className="mt-2 animate-fade-in"
          style={{
            animationDelay: "100ms",
            animationFillMode: "both",
          }}
        >
          Currently, I work at Asurion. Previously at Videocom.
        </span>
        <div
          className="mt-6 animate-fade-in"
          style={{
            animationDelay: "200ms",
            animationFillMode: "both",
          }}
        >
          <span>
            In my spare time — I could be at the gym, travelling with my wife,
            playing video games, developing a mini SaaS, working on some writing
            or taking a picture.
          </span>
        </div>
      </div>
      {/* Experience */}
      <div
        className="mt-8 animate-fade-in"
        style={{
          animationDelay: "300ms",
          animationFillMode: "both",
        }}
      >
        <h2 className="text-xl font-[550] text-gray-950 italic">Experience.</h2>
        <div className="mt-2">
          <div className="flex gap-1">
            <div className="">
              <Link
                href="https://www.asurion.com"
                className="text-gray-950 font-medium"
              >
                Asurion
              </Link>
            </div>
            <div>2023-Now</div>
          </div>
          <div className="">
            Building & maintaining features, on-call & incident monitoring.
            Security SME.
          </div>
        </div>
        <div className="mt-6">
          <div className="flex gap-1">
            <div>
              <span className="text-gray-950 font-medium">Videocom</span>
            </div>
            <div className="text-gray-600">2022-2023</div>
          </div>
          <div>
            Senior engineer. Built & launched features for Videocom cloud.
          </div>
        </div>
        <div className="mt-6">
          <div className="flex gap-1">
            <div>
              <span className="text-gray-950 font-medium">SplitmediaLabs</span>
            </div>
            <div>2021-2022</div>
          </div>
          <div>
            Owned cloud feature development & API integrations. Migration
            efforts.
          </div>
        </div>
        <div className="mt-6">
          <div className="flex gap-1">
            <div>
              <span className="text-gray-950 font-medium">Metrobank</span>
            </div>
            <div>2020-2021</div>
          </div>
          <div>
            Led development of buy and sell features for bonds platform.
          </div>
        </div>
      </div>
      {/* Contact */}
      <div
        className="mt-8 animate-fade-in"
        style={{
          animationDelay: "400ms",
          animationFillMode: "both",
        }}
      >
        <h2 className="text-xl font-[550] text-gray-950 italic">Social.</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link
            href="mailto:me@jasonbarba.com"
            className="flex w-fit justify-center items-center gap-0.5 cursor-pointer group px-2 py-1 text-sm rounded-full bg-gray-200 hover:bg-gray-900 hover:text-white transition-colors duration-200"
          >
            <div>me@jasonbarba.com</div>
            <ArrowUpRightIcon
              size={16}
              className="text-gray-600 stroke-1 group-hover:text-white mb-1"
            />
          </Link>
          <Link
            href="https://github.com/swoppy"
            className="flex w-fit justify-center items-center gap-0.5 cursor-pointer group px-2 py-1 text-sm rounded-full bg-gray-200 hover:bg-gray-900 hover:text-white transition-colors duration-200"
          >
            <div>github.com</div>
            <ArrowUpRightIcon
              size={16}
              className="text-gray-600 stroke-1 group-hover:text-white mb-1"
            />
          </Link>
          <Link
            href="https://x.com/jsonbarba"
            className="flex w-fit justify-center items-center gap-0.5 cursor-pointer group px-2 py-1 text-sm rounded-full bg-gray-200 hover:bg-gray-900 hover:text-white transition-colors duration-200"
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

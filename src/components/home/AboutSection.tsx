import Link from "next/link";
import { useBlur } from "./useBlur";
import { useHover } from "./useHover";
import { serif, sans } from "@/font/fonts";
import {
  InteractiveSentence,
  InteractiveSentenceWithLink,
} from "./InteractiveSentence";

export function AboutSection({ currentYear }: { currentYear: number }) {
  const { states: blur, handlers: toggle } = useBlur();
  const { states: hover, handlers: onMouse } = useHover();

  // TODO: improve button focus on events

  return (
    <section className="flex flex-col justify-center mt-8 md:mt-0">
      <p className="text-dark dark:text-gray-200 text-lg !leading-8 md:text-3xl md:!leading-10 font-light tracking-[0.01em] w-full break-keep">
        <span
          className={`tracking-tight inline transition-all duration-500 ${
            hover.first && "text-indigo-300"
          }`}
        >
          Hey! I&#39;m{" "}
        </span>{" "}
        <InteractiveSentence
          id="Jason"
          hover={hover.first}
          blur={blur.JASON}
          toggle={() => toggle.firstBlur()}
          onMouse={{
            out: () => onMouse.firstGroup({ event: "out" }),
            over: () => onMouse.firstGroup({ event: "over" }),
          }}
          buttonClassName="rounded-xl"
          buttonContent="JASON"
          blurContent="Barba, building things has been a constant fascination for me. My
          journey in the world of creation has been an exciting blend of
          curiosity, learning, and hands-on experience."
        />
        <br />
        <br />
        <span
          className={`tracking-tight inline transition-all duration-500 ${
            hover.first && !blur.JASON && "text-indigo-200"
          }`}
        >
          I&#39;m based in Metro Manila Philippines.{" "}
        </span>
        <InteractiveSentence
          id="recently"
          hover={hover.second}
          blur={blur.RECENTLY}
          {...(!blur.JASON && { toggle: () => toggle.secondBlur() })}
          onMouse={{
            out: () => onMouse.secondGroup({ event: "out" }),
            over: () => onMouse.secondGroup({ event: "over" }),
          }}
          buttonClassName={`w-[98px] md:w-[155px] ${
            blur.JASON
              ? "blur cursor-text bg-[unset] dark:text-gray-400"
              : "blur-0 cursor-pointer rounded-xl bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 transition-colors duration-500 dark:text-dark"
          }`}
          buttonContent="Recently,"
          blurContent="I&#39;ve been dabbling in writing — just checking it out and seeing where it takes me.&nbsp;"
        />
        <InteractiveSentence
          id="moreover"
          hover={hover.third}
          blur={blur.MOREOVER}
          {...(!blur.RECENTLY && { toggle: () => toggle.thirdBlur() })}
          onMouse={{
            out: () => onMouse.thirdGroup({ event: "out" }),
            over: () => onMouse.thirdGroup({ event: "over" }),
          }}
          buttonClassName={`w-[108px] md:w-[168px] ${
            blur.RECENTLY
              ? "blur cursor-text bg-[unset] dark:text-gray-400"
              : "blur-0 cursor-pointer rounded-xl bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 transition-colors duration-500 dark:text-dark w-[98px] md:w-[155px]"
          }`}
          buttonContent="Moreover,"
          blurContent="my background is mostly around web app and UI development."
        />
        <br />
        <br />
        <InteractiveSentence
          id="overthelast"
          hover={hover.fourth}
          blur={blur.OVER_THE_LAST}
          {...(!blur.MOREOVER && { toggle: () => toggle.fourthBlur() })}
          onMouse={{
            out: () => onMouse.fourthGroup({ event: "out" }),
            over: () => onMouse.fourthGroup({ event: "over" }),
          }}
          buttonClassName={`w-[212px] md:w-[342px] ${
            blur.MOREOVER
              ? "blur cursor-text bg-[unset] dark:text-gray-400"
              : "blur-0 cursor-pointer bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 transition-colors duration-500 dark:text-dark w-[98px] md:w-[155px]"
          }`}
          buttonContent={`Over the last ${currentYear - 2018} years,`}
          blurContent="I&#39;ve navigated various professional landscapes, from startups to
          midsize and large organizations, with different capacities, gathering
          insights and expertise along the way."
        />
        <br />
        <br />
        <span
          className={`tracking-tight blur-0 transition-all duration-500 ${
            hover.fifth && "text-indigo-300"
          }`}
        >
          Currently, I{" "}
          <Link
            href="/work"
            className="inline underline decoration-solid underline-offset-4 decoration-1 hover:decoration-indigo-400 focus:decoration-indigo-400"
          >
            work
          </Link>{" "}
          at{" "}
        </span>
        <InteractiveSentence
          id="asurion"
          hover={hover.fifth}
          blur={blur.ASURION}
          toggle={() => toggle.fifthBlur()}
          onMouse={{
            out: () => onMouse.fifthGroup({ event: "out" }),
            over: () => onMouse.fifthGroup({ event: "over" }),
          }}
          buttonClassName={`w-[86px] md:w-[134px] rounded-xl`}
          buttonContent="Asurion"
          blurContent="&#40;a tech care company based in Nashville&#41; as a software engineer."
        />
        <br />
        <br />
        <span className="tracking-tight">
          You can reach me at{" "}
          <a
            href="mailto:me@jasonbarba.com"
            rel="noopener noreferrer"
            target="_blank"
            className="text-indigo-400"
          >
            me@jasonbarba.com
          </a>{" "}
          <InteractiveSentenceWithLink
            id="also"
            hover={hover.sixth}
            blur={blur.ALSO}
            toggle={() => toggle.sixthBlur()}
            onMouse={{
              out: () => onMouse.sixthGroup({ event: "out" }),
              over: () => onMouse.sixthGroup({ event: "over" }),
            }}
            buttonContent="Also,"
            buttonClassName="w-[60px] md:w-[86px] rounded-xl"
          >
            <ContactLinks blur={!blur.ALSO} />
          </InteractiveSentenceWithLink>
        </span>
      </p>
    </section>
  );
}

const ContactLinks = ({ blur }: { blur: boolean }) => {
  return (
    <>
      I&#39;m on{" "}
      <a
        {...(blur && { href: "https://github.com/swoppy" })}
        rel="noopener noreferrer"
        target="_blank"
        className="inline underline decoration-dashed underline-offset-4 decoration-1 hover:decoration-indigo-400 focus:decoration-indigo-400"
      >
        Github,
      </a>{" "}
      <a
        {...(blur && {
          href: "https://www.linkedin.com/in/jsonbarba/",
        })}
        rel="noopener noreferrer"
        target="_blank"
        className="inline underline decoration-dashed underline-offset-4 decoration-1 hover:decoration-indigo-400 focus:decoration-indigo-400"
      >
        LinkedIn
      </a>{" "}
      and{" "}
      <a
        {...(blur && { href: "https://x.com/jsonbarba" })}
        rel="noopener noreferrer"
        target="_blank"
        className="inline underline decoration-dashed underline-offset-4 decoration-1 hover:decoration-indigo-400 focus:decoration-indigo-400"
      >
        X.
      </a>
    </>
  );
};

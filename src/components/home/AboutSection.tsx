import { useBlur } from "./useBlur";
import { useHover } from "./useHover";
import {
  InteractiveSentence,
  InteractiveSentenceWithLink,
} from "./InteractiveSentence";
import { ContactLinks } from "./ContactLinks";

export function AboutSection({ currentYear }: { currentYear: number }) {
  const { states: blur, handlers: toggle } = useBlur();
  const { states: hover, handlers: onMouse } = useHover();

  // TODO: improve button focus on events

  return (
    <section className="flex flex-col justify-center mt-10 md:mt-20">
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
          disableShine={!blur.JASON}
          buttonClassName="outline-none rounded-xl border focus:bg-indigo-500/80 hover:bg-indigo-500/80"
          buttonContent="JASON"
          blurContent="Barba, a software engineer passionate about building impactful digital experiences. Based in Manila, Philippines."
        />
        <br />
        <br />
        <span
          className={`tracking-tight inline transition-all duration-500 ${
            hover.first && !blur.JASON && "text-indigo-200"
          }`}
        ></span>
        <InteractiveSentence
          id="spent"
          hover={hover.second}
          blur={blur.SPENT}
          disableShine={!blur.JASON && blur.SPENT ? false : true}
          {...(!blur.JASON && { toggle: () => toggle.secondBlur() })}
          onMouse={{
            out: () => onMouse.secondGroup({ event: "out" }),
            over: () => onMouse.secondGroup({ event: "over" }),
          }}
          buttonClassName={`border outline-none focus:bg-indigo-500/80 ${
            blur.JASON
              ? "blur cursor-text bg-transparent dark:text-gray-300 "
              : "blur-0 cursor-pointer rounded-xl hover:bg-indigo-500/80 transition-colors duration-500 dark:text-dark"
          }`}
          buttonContent={`I've spent the last ${currentYear - 2018} years`}
          blurContent={`crafting web apps. My experience spans across startups, midsize companies, and large enterprises, giving me a unique perspective on different development approaches and team dynamics.`}
        />{" "}
        <InteractiveSentence
          id="Currently"
          hover={hover.third}
          blur={blur.CURRENTLY}
          disableShine={!blur.SPENT && blur.CURRENTLY ? false : true}
          {...(!blur.SPENT && { toggle: () => toggle.thirdBlur() })}
          onMouse={{
            out: () => onMouse.thirdGroup({ event: "out" }),
            over: () => onMouse.thirdGroup({ event: "over" }),
          }}
          buttonClassName={`border outline-none focus:bg-indigo-500/80 ${
            blur.SPENT
              ? "blur cursor-text bg-transparent dark:text-gray-300"
              : "blur-0 cursor-pointer rounded-xl hover:bg-indigo-500/80 transition-colors duration-500 dark:text-dark"
          }`}
          buttonContent="Currently, "
          blurContent={`I'm a software engineer at Asurion, a tech care company based in Nashville.`}
        />{" "}
        <InteractiveSentence
          id="here"
          hover={hover.fourth}
          blur={blur.HERE}
          disableShine={!blur.CURRENTLY && blur.HERE ? false : true}
          {...(!blur.CURRENTLY && { toggle: () => toggle.fourthBlur() })}
          onMouse={{
            out: () => onMouse.fourthGroup({ event: "out" }),
            over: () => onMouse.fourthGroup({ event: "over" }),
          }}
          buttonClassName={`border outline-none focus:bg-indigo-500/80 ${
            blur.CURRENTLY
              ? "blur cursor-text bg-transparent dark:text-gray-300"
              : "blur-0 cursor-pointer rounded-xl hover:bg-indigo-500/80 transition-colors duration-500 dark:text-dark"
          }`}
          buttonContent="Here,"
          blurContent={`I lead efforts through feature ownership, manage incident responses, and drive security best practices while mentoring fellow devs through code reviews.`}
        />
        <br />
        <br />
        <InteractiveSentence
          id="beyond"
          hover={hover.fifth}
          blur={blur.BEYOND}
          disableShine={!blur.HERE && blur.BEYOND ? false : true}
          toggle={() => toggle.fifthBlur()}
          onMouse={{
            out: () => onMouse.fifthGroup({ event: "out" }),
            over: () => onMouse.fifthGroup({ event: "over" }),
          }}
          buttonClassName="rounded-xl border hover:bg-indigo-500/80 outline-none focus:bg-indigo-500/80"
          buttonContent={`Beyond my day-to-day work,`}
          blurContent="I&#39;m exploring the world of blogging and photography, sharing some experiences on the internet."
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
            disableShine={
              !blur.JASON && !blur.BEYOND && blur.ALSO ? false : true
            }
            toggle={() => toggle.sixthBlur()}
            onMouse={{
              out: () => onMouse.sixthGroup({ event: "out" }),
              over: () => onMouse.sixthGroup({ event: "over" }),
            }}
            buttonContent="Also,"
            buttonClassName="rounded-xl border hover:bg-indigo-500/80 outline-none focus:bg-indigo-500/80"
          >
            <ContactLinks />
          </InteractiveSentenceWithLink>
        </span>
      </p>
    </section>
  );
}

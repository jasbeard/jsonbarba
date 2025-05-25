import Link from "next/link";
import { useBlur } from "./useBlur";
import { useHover } from "./useHover";
import { serif } from "@/font/fonts";

export function AboutSection({ currentYear }: { currentYear: number }) {
  const { states:blur, handlers:toggle  } = useBlur();
  const { states:hover, handlers:onMouse } = useHover();

  return (
    <section className="flex flex-col justify-center mt-8 md:mt-0">
      <p className="text-dark dark:text-gray-200 text-lg !leading-8 md:text-3xl md:!leading-10 font-light tracking-[0.01em] w-full break-keep">
        <span className={`tracking-tight inline transition-all duration-500 ${hover.first && 'text-indigo-300'}`}>
          Hey! I&#39;m{' '}
        </span>{' '}
        <button
          className={`inline-flex rounded-xl bg-indigo-400 dark:text-dark ${serif.className}`}
          onClick={toggle.firstBlur}
          onMouseOver={() => onMouse.firstGroup({ event: 'over' })}
          onMouseOut={() => onMouse.firstGroup({ event: 'out'})}
        >
          <span className="mr-2 ml-2.5 font-medium">JASON</span>
        </button>{' '}

        <span className={`tracking-tight inline transition-all duration-400 ${blur.JASON ? 'blur select-none' : `blur-0 select-auto ${hover.first && 'text-indigo-300'}`}`}>
          Barba, building things has been a constant fascination for me. My journey in the world of creation has been an exciting blend of curiosity, learning, and hands-on experience.{' '}
        </span><br /><br />
        <span className={`tracking-tight inline transition-all duration-500 ${(hover.first && !blur.JASON) && 'text-indigo-200'}`}>
          I&#39;m based in Metro Manila Philippines.{' '}
          <button
            className={`
              inline px-2 w-[98px] md:w-[155px] ${serif.className}
              ${blur.JASON ? 'blur cursor-text' :
              'blur-0 cursor-pointer rounded-xl font-medium bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 transition-colors duration-500 dark:text-dark'}
            `}
            {...(!blur.JASON && { onClick: toggle.secondBlur })}
            onMouseOver={() => onMouse.secondGroup({ event: 'over' })}
            onMouseOut={() => onMouse.secondGroup({ event: 'out' })}
          >
            Recently,
          </button>
        </span>{' '}

        <span className={`inline transition-all duration-500 ${blur.RECENTLY ? 'blur select-none' : `blur-0 selec-auto ${hover.second && 'text-indigo-300'}`}`}>
          I&#39;ve been dabbling in writing — just checking it out and seeing where it takes me.{' '}
          <button
            className={`
              inline transition-all duration-500 px-2 w-[108px] md:w-[168px]
              ${serif.className} ${blur.RECENTLY ? 'blur select-none' :
              'blur-0 selec-auto cursor-pointer rounded-xl font-medium bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 dark:text-dark'}
            `}
            {...(!blur.RECENTLY && { onClick: toggle.thirdBlur })}
            onMouseOver={() => onMouse.thirdGroup({ event: 'over' })}
            onMouseOut={() => onMouse.thirdGroup({ event: 'out' })}
          >
            Moreover,
          </button>
        </span>{' '}

        <span className={`tracking-tight inline transition-all duration-400 ${blur.MOREOVER ? 'blur select-none' : `blur-0 select-auto ${hover.third && 'text-indigo-300'}`}`}>
          my background is mostly around web app and UI development.{' '}<br/><br/>
          <button
            className={`
              inline transition-all duration-500 px-2 w-[212px] md:w-[342px] ${serif.className} 
              ${blur.MOREOVER ? 'blur select-none cursor-text' :
              'blur-0 select-auto cursor-pointer font-medium bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 dark:text-dark'}
            `}
            {...(!blur.MOREOVER && { onClick: toggle.fourthBlur })}
            onMouseOver={() => onMouse.fourthGroup({ event: 'over' })}
            onMouseOut={() => onMouse.fourthGroup({ event: 'out' })}
          >
            Over the last {currentYear - 2017} years,
          </button>{' '}
        </span>

        <span className={`tracking-tight inline transition-all duration-500 ${blur.OVER_THE_LAST ? 'blur select-none' : `blur-0 select-auto ${hover.fourth && 'text-indigo-300'}`}`}>
          I&#39;ve navigated various professional landscapes, from startups to midsize and large organizations, with different capacities, gathering insights and expertise along the way.{' '}
        </span><br/><br/>

        <span className={`tracking-tight blur-0 transition-all duration-500 ${hover.fifth && 'text-indigo-300'}`}>
          Currently, I{' '}
          <Link
            href="/work"
            className="inline underline decoration-solid underline-offset-4 decoration-1 hover:decoration-indigo-400 focus:decoration-indigo-400"
          >
            work
          </Link> at{' '}
        </span>
        <button
          className={`transition-all duration-500 w-[86px] md:w-[134px] inline px-2 rounded-xl font-medium bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 dark:text-dark ${serif.className}`}
          onClick={toggle.fifthBlur}
          onMouseOver={() => onMouse.fifthGroup({ event: 'over' })}
          onMouseOut={() => onMouse.fifthGroup({ event: 'out' })}
        >
          Asurion
        </button>{' '}
        <span>
          <a
            {...(!blur.ASURION && { href: "https://asurion.com" })}
            rel="noopener noreferrer"
            target="_blank"
            className={`
              tracking-tight transition-all duration-400 inline underline decoration-dashed underline-offset-4 decoration-1 ${!blur.ASURION && 'hover:decoration-indigo-400 focus:decoration-indigo-400'}
              ${blur.ASURION ? 'blur select-none' : `blur-0 select-auto ${(!blur.ASURION && hover.fifth) && 'text-indigo-300'}`}
            `}
          >
            &#40;a tech insurance company based in Nashville&#41;
          </a>{' '}
          <span className={`${blur.ASURION ? 'blur select-none' : `blur-0 select-auto ${hover.fifth && 'text-indigo-400'}`}`}>as a software engineer.</span>
        </span>
        <br/><br/>

        <span className="tracking-tight">
          You can reach me at{' '}
          <a
            href="mailto:me@jsonbarba.com"
            rel="noopener noreferrer"
            target="_blank"
            className="text-indigo-400"
          >
            me@jsonbarba.com
          </a>{' '}
          <button
            className={`transition-all duration-500 w-[60px] md:w-[86px] inline px-2 rounded-xl font-medium bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 dark:text-dark ${serif.className}`}
            onClick={toggle.sixthBlur}
            onMouseOver={() => onMouse.sixthGroup({ event: 'over' })}
            onMouseOut={() => onMouse.sixthGroup({ event: 'out' })}
          >
            Also,
          </button>{' '}
          <span
            className={`inline transition-all duration-500 ${blur.ALSO ? 'blur select-none' : `blur-0 select-auto ${hover.sixth && 'text-indigo-300'}`}`}
          >
            I&#39;m on{' '}
            <a
              {...(!blur.ALSO && { href: "https://github.com/swoppy" })}
              rel="noopener noreferrer"
              target="_blank"
              className="inline underline decoration-dashed underline-offset-4 decoration-1 hover:decoration-indigo-400 focus:decoration-indigo-400"
            >
              Github,</a>{' '}
            <a
              {...(!blur.ALSO && { href: "https://www.linkedin.com/in/jsonbarba/" })}
              rel="noopener noreferrer"
              target="_blank"
              className="inline underline decoration-dashed underline-offset-4 decoration-1 hover:decoration-indigo-400 focus:decoration-indigo-400"
            >
            LinkedIn
            </a>{' '}and{' '}
            <a
              {...(!blur.ALSO && { href: "https://twitter.com/jsonbarba" })}
              rel="noopener noreferrer"
              target="_blank"
              className="inline underline decoration-dashed underline-offset-4 decoration-1 hover:decoration-indigo-400 focus:decoration-indigo-400"
            >
              X.
            </a>
          </span>
        </span>
      </p>
    </section>
  );
}
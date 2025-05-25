import Link from "next/link";
import { useBlur } from "./useBlur";
import { useHover } from "./useHover";
import { serif, sans } from "@/font/fonts";

function PulsingDot({ tw }: { tw?: string }) {
  return (
    <span className={`absolute ${tw}`}>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-300"></span>
      </span>
    </span>
  );
}

export function AboutSection({ currentYear }: { currentYear: number }) {
  const { states:blur, handlers:toggle  } = useBlur();
  const { states:hover, handlers:onMouse } = useHover();

  // TODO: improve button focus on events

  return (
    <section className="flex flex-col justify-center mt-8 md:mt-0">
      <p className="text-dark dark:text-gray-200 text-lg !leading-8 md:text-3xl md:!leading-10 font-light tracking-[0.01em] w-full break-keep">
        <span className={`tracking-tight inline transition-all duration-500 ${hover.first && 'text-indigo-300'}`}>
          Hey! I&#39;m{' '}
        </span>{' '}
        <button
          className={`inline-flex relative rounded-xl bg-indigo-400 dark:text-dark ${serif.className}`}
          onClick={toggle.firstBlur}
          onMouseOver={() => onMouse.firstGroup({ event: 'over' })}
          onMouseOut={() => onMouse.firstGroup({ event: 'out'})}
        >
          <span className="mr-2 ml-2.5 font-medium">JASON</span>
          {blur.JASON && <PulsingDot tw="-mt-1"/>}
        </button>{' '}
        

        <span className={`tracking-tight inline transition-all duration-400 ${blur.JASON ? 'blur select-none ease-out' : `blur-0 select-auto ease-out ${hover.first && 'text-indigo-300'}`}`}>
          Barba, building things has been a constant fascination for me. My journey in the world of creation has been an exciting blend of curiosity, learning, and hands-on experience.{' '}
        </span><br /><br />
        <span className={`tracking-tight inline transition-all duration-500 ${(hover.first && !blur.JASON) && 'text-indigo-200'}`}>
          I&#39;m based in Metro Manila Philippines.{' '}
          <button
            id="recently"
            className={`
              inline relative px-2 w-[98px] md:w-[155px] ${serif.className}
              ${blur.JASON ? 'blur cursor-text' :
              'blur-0 cursor-pointer rounded-xl font-medium bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 transition-colors duration-500 dark:text-dark'}
            `}
            {...(!blur.JASON && { onClick: toggle.secondBlur })}
            onMouseOver={() => onMouse.secondGroup({ event: 'over' })}
            onMouseOut={() => onMouse.secondGroup({ event: 'out' })}
          >
            {(blur.RECENTLY && !blur.JASON) && <PulsingDot tw="-mt-1.5 left-0"/>}
            <span>Recently,</span>
          </button>
        </span>{' '}

        <span className={`inline transition-all duration-500 ${blur.RECENTLY ? 'blur select-none' : `blur-0 selec-auto ${hover.second && 'text-indigo-300'}`}`}>
          I&#39;ve been dabbling in writing — just checking it out and seeing where it takes me.{' '}
          <button
            id="moreover"
            className={`
              inline relative transition-all duration-500 px-2 w-[108px] md:w-[168px]
              ${serif.className} ${blur.RECENTLY ? 'blur select-none' :
              'blur-0 selec-auto cursor-pointer rounded-xl font-medium bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 dark:text-dark'}
            `}
            {...(!blur.RECENTLY && { onClick: toggle.thirdBlur })}
            onMouseOver={() => onMouse.thirdGroup({ event: 'over' })}
            onMouseOut={() => onMouse.thirdGroup({ event: 'out' })}
          >
            {(blur.MOREOVER && !blur.RECENTLY) && <PulsingDot tw="-mt-1.5 left-0"/>}
            <span>Moreover,</span>
          </button>
        </span>{' '}

        <span className={`tracking-tight inline transition-all duration-400 ${blur.MOREOVER ? 'blur select-none' : `blur-0 select-auto ${hover.third && 'text-indigo-300'}`}`}>
          my background is mostly around web app and UI development.{' '}<br/><br/>
          <button
            className={`
              inline relative transition-all duration-500 px-2 w-[212px] md:w-[342px] ${serif.className} 
              ${blur.MOREOVER ? 'blur select-none cursor-text' :
              'blur-0 select-auto cursor-pointer font-medium bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 dark:text-dark'}
            `}
            {...(!blur.MOREOVER && { onClick: toggle.fourthBlur })}
            onMouseOver={() => onMouse.fourthGroup({ event: 'over' })}
            onMouseOut={() => onMouse.fourthGroup({ event: 'out' })}
          >
            <span>Over the last {currentYear - 2017} years,</span>
            {(blur.OVER_THE_LAST && !blur.MOREOVER) && <PulsingDot tw="-mt-1.5 left-0"/>}
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
          className={`transition-all duration-500 relative w-[86px] md:w-[134px] inline px-2 rounded-xl font-medium bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 dark:text-dark ${serif.className}`}
          onClick={toggle.fifthBlur}
          onMouseOver={() => onMouse.fifthGroup({ event: 'over' })}
          onMouseOut={() => onMouse.fifthGroup({ event: 'out' })}
        >
          {(blur.ASURION && !blur.OVER_THE_LAST) && <PulsingDot tw="-mt-1.5 left-0"/>}
          <span>Asurion</span>
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
            &#40;a tech care company based in Nashville&#41;
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
            className={`relative transition-all duration-500 w-[60px] md:w-[86px] inline px-2 rounded-xl font-medium bg-slate-400 hover:bg-indigo-400 focus:bg-indigo-400 dark:text-dark ${serif.className}`}
            onClick={toggle.sixthBlur}
            onMouseOver={() => onMouse.sixthGroup({ event: 'over' })}
            onMouseOut={() => onMouse.sixthGroup({ event: 'out' })}
          >
            <span>Also,</span>
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
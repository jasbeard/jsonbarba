import Link from "next/link";
import { useBlur } from "./useBlur";
import { useHover } from "./useHover";
import { serif } from "@/font/fonts";

export function AboutSection({ currentYear }: { currentYear: number }) {
  const { states:blur, handlers:toggle  } = useBlur();
  const { states:hover, handlers:onMouse } = useHover();

  // TODO: improve blur sequence when it is clicked in-between

  return (
    <section className="flex flex-col justify-center">
      <p className="text-dark dark:text-gray-200 text-lg !leading-8 md:text-3xl md:!leading-10 font-light tracking-[0.01em] w-full break-keep">
        <span className={`inline ${hover.first && 'text-indigo-400'}`}>
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

        <span className={`inline ${blur.first ? 'blur' : `blur-0 ${hover.first && 'text-indigo-400'}`}`}>
          Barba, building things has been a constant fascination for me.{' '}
        </span>
        &nbsp;&nbsp;<span className={`inline ${(hover.first && !blur.first) && 'text-indigo-400'}`}>
          I&#39;m based in Metro Manila Philippines.{' '}
          <button
            className={`inline px-2 w-[98px] md:w-[155px] ${serif.className} ${blur.first ? 'blur cursor-text' : 'blur-0 cursor-pointer rounded-xl font-medium bg-slate-400 dark:text-dark'}`}
            onClick={toggle.secondBlur}
            onMouseOver={() => onMouse.secondGroup({ event: 'over' })}
            onMouseOut={() => onMouse.secondGroup({ event: 'out' })}
          >
            Recently,
          </button>
        </span>{' '}

        <span className={`inline ${blur.second ? 'blur ' : `blur-0 ${hover.second && 'text-indigo-400'}`}`}>
          I&#39;ve been dabbling in writing — just checking it out and seeing where it takes me.{' '}
          <button
            className={`inline px-2 w-[108px] md:w-[168px] ${serif.className} ${blur.second ? 'blur cursor-text' : 'blur-0 cursor-pointer rounded-xl font-medium bg-slate-400 dark:text-dark'}`}
            onClick={toggle.thirdBlur}
            onMouseOver={() => onMouse.thirdGroup({ event: 'over' })}
            onMouseOut={() => onMouse.thirdGroup({ event: 'out' })}
          >
            Moreover,
          </button>
        </span>{' '}

        <span className={`inline ${blur.third ? 'blur' : `blur-0 ${hover.third && 'text-indigo-400'}`}`}>
          my background is mostly around web app and UI development.{' '}<br/><br/>
          <button
            className={`
              inline px-2 w-[212px] md:w-[342px] ${serif.className} 
              ${blur.third ? 'blur cursor-text' : 'blur-0 cursor-pointer font-medium bg-slate-400 dark:text-dark'}
            `}
            onClick={toggle.fourthBlur}
            onMouseOver={() => onMouse.fourthGroup({ event: 'over' })}
            onMouseOut={() => onMouse.fourthGroup({ event: 'out' })}
          >
            Over the last {currentYear - 2017} years,
          </button>{' '}
        </span>

        <span className={`inline ${blur.fourth ? 'blur' : `blur-0 ${hover.fourth && 'text-indigo-400'}`}`}>
          I&#39;ve navigated various professional landscapes, from startups to midsize and large organizations, with different capacities, gathering insights and expertise along the way.{' '}
        </span><br/><br/>

        <span className={`blur-0 ${hover.fifth && 'text-indigo-400'}`}>
          Currently, I{' '}
          <Link
            href="/work"
            className="inline underline decoration-dotted underline-offset-4 decoration-1 hover:decoration-indigo-400"
          >
            work
          </Link> at{' '}
        </span>
        <button
          className={`w-[86px] md:w-[134px] inline px-2 rounded-xl font-medium bg-slate-400 dark:text-dark ${serif.className}`}
          onClick={toggle.fifthBlur}
          onMouseOver={() => onMouse.fifthGroup({ event: 'over' })}
          onMouseOut={() => onMouse.fifthGroup({ event: 'out' })}
        >
          Asurion
        </button>{' '}
        <span>
          <a
            href="https://asurion.com"
            rel="noopener noreferrer"
            target="_blank"
            className={`
              inline underline decoration-dotted underline-offset-4 decoration-1 hover:decoration-indigo-400 
              ${blur.fifth ? 'blur' : `blur-0 ${(!blur.fifth && hover.fifth) && 'text-indigo-400'}`}
            `}
          >
            &#40;a tech insurance company based in Nashville&#41;
          </a>{' '}
          <span className={`${blur.fifth ? 'blur' : `blur-0 ${hover.fifth && 'text-indigo-400'}`}`}>as a software engineer.</span>
        </span>
        <br/><br/>

        <span>
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
            className={`w-[60px] md:w-[86px] inline px-2 rounded-xl font-medium bg-slate-400 dark:text-dark ${serif.className}`}
            onClick={toggle.sixthBlur}
            onMouseOver={() => onMouse.sixthGroup({ event: 'over' })}
            onMouseOut={() => onMouse.sixthGroup({ event: 'out' })}
          >
            Also,
          </button>{' '}
          <span
            className={`inline ${blur.sixth ? 'blur' : `blur-0 ${hover.sixth && 'text-indigo-400'}`}`}
          >
            I&#39;m on{' '}
            <a
              href="https://github.com/swoppy"
              rel="noopener noreferrer"
              target="_blank"
              className="inline underline decoration-dotted underline-offset-4 decoration-1 hover:decoration-indigo-400"
            >
              Github,</a>{' '}
            <a
              href="https://www.linkedin.com/in/jsonbarba/"
              rel="noopener noreferrer"
              target="_blank"
              className="inline underline decoration-dotted underline-offset-4 decoration-1 hover:decoration-indigo-400"
            >
            LinkedIn
            </a>{' '}and{' '}
            <a
              href="https://twitter.com/jsonbarba"
              rel="noopener noreferrer"
              target="_blank"
              className="inline underline decoration-dotted underline-offset-4 decoration-1 hover:decoration-indigo-400"
            >
              X.
            </a>
          </span>
        </span>
      </p>
    </section>
  );
}
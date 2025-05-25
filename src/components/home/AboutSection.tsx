import Link from "next/link";
import { useState } from "react";
import { useBlur } from "./useBlur";

export function AboutSection({ currentYear }: { currentYear: number }) {
  const { state:blur, handlers:toggle  } = useBlur();

  const [hover, setHover] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false
  });

  const handleHoverforFirstGroup = ({ event }: { event: 'over' | 'out' }) => {
    if (event === 'over') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          first: true,
        }
      });
    }

    if (event === 'out') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          first: false,
        }
      });
    }
  }

  return (
    <section className="flex flex-col justify-center">
      <p className="text-dark dark:text-gray-200 text-lg !leading-8 md:text-3xl md:!leading-10 font-light tracking-[0.01em] w-full break-keep">
        <span className="inline">
          Hey! I&#39;m{' '}
          <button
            className="inline-flex rounded-xl bg-indigo-400 dark:text-dark"
            onClick={toggle.firstBlur}
            onMouseOver={() => handleHoverforFirstGroup({ event: 'over'})}
            onMouseOut={() => handleHoverforFirstGroup({ event: 'out'})}
          >
            <span className="mr-2 ml-2.5 font-medium">JASON</span>
          </button>{' '}
        </span>{' '}

        <span className={`inline ${blur.first ? 'blur' : `blur-0 ${hover.first && 'text-indigo-400'}`}`}>
          Barba, building things has been a constant fascination for me.{' '}
        </span>
        &nbsp;&nbsp;<span className={`inline ${(hover.first && !blur.first) && 'text-indigo-400'}`}>
          I&#39;m based in Metro Manila Philippines.{' '}
          <button
            className={`inline px-2 ${blur.first ? 'blur cursor-text' : 'blur-0 cursor-pointer rounded-xl font-medium bg-slate-400 dark:text-dark'}`}
            onClick={toggle.secondBlur}
          >
            Recently,
          </button>
        </span>{' '}

        <span className={`inline ${blur.second ? 'blur ' : 'blur-0'}`}>
          I&#39;ve been dabbling in writing — just checking it out and seeing where it takes me.{' '}
          <button
            className={`inline px-2 ${blur.second ? 'blur cursor-text' : 'blur-0 cursor-pointer rounded-xl font-medium bg-slate-400 dark:text-dark'}`}
            onClick={toggle.thirdBlur}
          >
            Moreover,
          </button>
        </span>{' '}

        <span className={`inline ${blur.third ? 'blur' : 'blur-0'}`}>
          my background is mostly around web app and UI development.{' '}<br/><br/>
          <button
            className={`inline px-2 ${blur.third ? 'blur cursor-text' : 'blur-0 cursor-pointer font-medium bg-slate-400 dark:text-dark'}`}
            onClick={toggle.fourthBlur}
          >
            Over the last {currentYear - 2017} years,
          </button>{' '}
        </span>

        <span className={`inline ${blur.fourth ? 'blur' : 'blur-0'}`}>
          I&#39;ve navigated various professional landscapes, from startups to midsize and large organizations, with different capacities, gathering insights and expertise along the way.{' '}
        </span><br/><br/>

        <span>
          Currently, I{' '}
        </span>
          <Link
            href="/work"
            className="inline underline decoration-dotted underline-offset-4 decoration-1 hover:decoration-indigo-400"
          >
            work
          </Link> at{' '}
          <button
            className="inline px-2 rounded-xl font-medium bg-slate-400 dark:text-dark"
            onClick={toggle.fifthBlur}
          >
            Asurion
          </button>{' '}
        <span>
          <a
            href="https://asurion.com"
            rel="noopener noreferrer"
            target="_blank"
            className={`inline underline decoration-dotted underline-offset-4 decoration-1 hover:decoration-indigo-400 ${blur.fifth ? 'blur' : 'blur-0'}`}
          >
            &#40;a tech insurance company based in Nashville&#41;
          </a>{' '}
          <span className={`${blur.fifth ? 'blur' : 'blur-0'}`}>as a software engineer.</span>
        </span><br/><br/>

        <span>
          You can reach me at me@jsonbarba.com{' '}
          <button className="inline px-2 rounded-xl font-medium bg-slate-400 dark:text-dark" onClick={toggle.sixthBlur}>Also,</button>{' '}
          <span className={`inline ${blur.sixth ? 'blur' : 'blur-0'}`}>I&#39;m on Github, LinkedIn and X.</span>
        </span>
      </p>
    </section>
  );
}
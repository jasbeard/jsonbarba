import Link from "next/link";
import { useState } from "react";

export function AboutSection({ currentYear }: { currentYear: number }) {
  const [blur, setBlur] = useState({
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
    sixth: true
  });

  const handleToggleForFirstBlur = () => {
    if(!blur.first && !blur.second) {
      setBlur((previousStates) => {
        return {
        ...previousStates,
        second: !previousStates.second,
        third: !previousStates.third,
        fourth: !previousStates.fourth,
        }
      });
    }
    setBlur((previousStates) => {
      return {
      ...previousStates,
      first: !previousStates.first,
      }
    });
  }

  const handleToggleForSecondBlur = () => {
    if (!blur.first) setBlur((previousStates) => {
      return {
      ...previousStates,
      second: !previousStates.second,
      }
    });
  }

  const handleToggleForThirdBlur = () => {
    if (!blur.first && !blur.second) setBlur((previousStates) => {
      return {
      ...previousStates,
      third: !previousStates.third,
      }
    });
  }

  const handleToggleForFourthBlur = () => {
    if (!blur.first && !blur.second && !blur.third) setBlur((previousStates) => {
      return {
      ...previousStates,
      fourth: !previousStates.fourth,
      }
    });
  }

  const handleToggleForFifthBlur = () => {
    setBlur((previousStates) => {
      return {
      ...previousStates,
      fifth: !previousStates.fifth,
      }
    });
  }

  const handleToggleForSixthBlur = () => {
    setBlur((previousStates) => {
      return {
      ...previousStates,
      sixth: !previousStates.sixth,
      }
    });
  }

  return (
    <section className="flex flex-col justify-center">
      <p className="text-dark dark:text-gray-200 text-lg !leading-8 md:text-3xl md:!leading-10 font-light tracking-[0.01em] w-full break-keep">
        <span className="inline">
          Hey! I&#39;m{' '}
          <button className="inline-flex rounded-xl bg-indigo-400 dark:text-dark" onClick={handleToggleForFirstBlur}>
            <span className="mr-2 ml-2.5 font-medium">JASON</span>
          </button>{' '}
        </span>{' '}

        <span className={`inline ${blur.first ? 'blur' : 'blur-0'}`}>
          Barba, building things has been a constant fascination for me.{' '}
        </span>
        &nbsp;&nbsp;<span className="break-keep">
          I&#39;m based in Metro Manila Philippines.{' '}
          <button
            className={`inline px-2 ${blur.first ? 'blur cursor-text' : 'blur-0 cursor-pointer rounded-xl font-medium bg-slate-400 dark:text-dark'}`}
            onClick={handleToggleForSecondBlur}
          >
            Recently,
          </button>
        </span>{' '}

        <span className={`inline ${blur.second ? 'blur ' : 'blur-0'}`}>
          I&#39;ve been dabbling in writing — just checking it out and seeing where it takes me.{' '}
          <button
            className={`inline px-2 ${blur.second ? 'blur cursor-text' : 'blur-0 cursor-pointer rounded-xl font-medium bg-slate-400 dark:text-dark'}`}
            onClick={handleToggleForThirdBlur}
          >
            Moreover,
          </button>
        </span>{' '}

        <span className={`inline ${blur.third ? 'blur' : 'blur-0'}`}>
          my background is mostly around web app and UI development.{' '}<br/><br/>
          <button
            className={`inline px-2 ${blur.third ? 'blur cursor-text' : 'blur-0 cursor-pointer font-medium bg-slate-400 dark:text-dark'}`}
            onClick={handleToggleForFourthBlur}
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
            onClick={handleToggleForFifthBlur}
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
          <button className="inline px-2 rounded-xl font-medium bg-slate-400 dark:text-dark" onClick={handleToggleForSixthBlur}>Also,</button>{' '}
          <span className={`inline ${blur.sixth ? 'blur' : 'blur-0'}`}>I&#39;m on Github, LinkedIn and X.</span>
        </span>
      </p>
    </section>
  );
}
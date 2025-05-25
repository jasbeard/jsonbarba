import Link from "next/link";
import { useState } from "react";

export function AboutSection({ currentYear }: { currentYear: number }) {
  const [firstBlur, setFirstBlur] = useState(true);
  const [secondBlur, setSecondBlur] = useState(true);
  const [thirdBlur, setThirdBlur] = useState(true);
  const [fourthBlur, setFourthBlur] = useState(true);
  const [fifthBlur, setFifthBlur] = useState(true);
  const [sixthBlur, setSixthBlur] = useState(true);

  const handleToggleForFirstBlur = () => {
    if(!secondBlur && !firstBlur) {
      setSecondBlur((previousState) => !previousState);
    }
    setFirstBlur((previousState) => !previousState);
  }

  const handleToggleForSecondBlur = () => {
    if (!firstBlur) setSecondBlur((previousState) => !previousState);
  }

  const handleToggleForThirdBlur = () => {
    if (!firstBlur && !secondBlur) setThirdBlur((previousState) => !previousState);
  }

  const handleToggleForFourthBlur = () => {
    setFourthBlur((previousState) => !previousState);
  }

  const handleToggleForFifthBlur = () => {
    setFifthBlur(false);
  }

  const handleToggleForSixthBlur = () => {
    setSixthBlur((previousState) => !previousState);
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

        <span className={`inline ${firstBlur ? 'blur' : 'blur-0'}`}>
          Barba, building things has been a constant fascination for me.{' '}
        </span>
        &nbsp;&nbsp;<span className="break-keep">
          I&#39;m based in Metro Manila Philippines.{' '}
          <button
            className={`inline px-2 ${firstBlur ? 'blur cursor-text' : 'blur-0 cursor-pointer rounded-xl font-medium bg-slate-400 dark:text-dark'}`}
            onClick={handleToggleForSecondBlur}
          >
            Recently,
          </button>
        </span>{' '}

        <span className={`inline ${secondBlur ? 'blur ' : 'blur-0'}`}>
          I&#39;ve been dabbling in writing — just checking it out and seeing where it takes me.{' '}
          <button
            className={`inline px-2 ${secondBlur ? 'blur cursor-text' : 'blur-0 cursor-pointer rounded-xl font-medium bg-slate-400 dark:text-dark'}`}
            onClick={handleToggleForThirdBlur}
          >
            Moreover,
          </button>
        </span>{' '}

        <span className={`inline ${thirdBlur ? 'blur' : 'blur-0'}`}>
          my background is mostly around web app and UI development.{' '}<br/><br/>
          <button
            className={`inline px-2 ${thirdBlur ? 'blur cursor-text' : 'blur-0 cursor-pointer font-medium bg-slate-400 dark:text-dark'}`}
            onClick={handleToggleForFourthBlur}
          >
            Over the last {currentYear - 2017} years,
          </button>{' '}
        </span>

        <span className={`inline ${fourthBlur ? 'blur' : 'blur-0'}`}>
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
            className={`inline underline decoration-dotted underline-offset-4 decoration-1 hover:decoration-indigo-400 ${fifthBlur ? 'blur' : 'blur-0'}`}
          >
            &#40;a tech insurance company based in Nashville&#41;
          </a>{' '}
          <span className={`${fifthBlur ? 'blur' : 'blur-0'}`}>as a software engineer.</span>
        </span><br/><br/>

        <span>
          You can reach me at me@jsonbarba.com{' '}
          <button className="inline px-2 rounded-xl font-medium bg-slate-400 dark:text-dark" onClick={handleToggleForSixthBlur}>Also,</button>{' '}
          <span className={`inline ${sixthBlur ? 'blur' : 'blur-0'}`}>I&#39;m on Github, LinkedIn and X.</span>
        </span>
      </p>
    </section>
  );
}
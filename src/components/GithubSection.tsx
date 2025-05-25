import { useAutoAnimate } from "@formkit/auto-animate/react";
import { GithubContributionMap } from "./GithubContributionMap";

export function GithubSection() {
  const [parent] = useAutoAnimate();
  const currentYear = new Date().getFullYear();
  return (
    <section ref={parent} className="space-y-4 mt-8">
      <h1 className="text-4xl leading-[50px] font-semibold tracking-wider text-[#2c3136] dark:text-white">Github</h1>
      <span className="text-sm text-[#2c3136] dark:text-white mb-4">This year&apos;s ({currentYear}) code contribution</span>
      <GithubContributionMap />
    </section>
  );
}

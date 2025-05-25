import { useAutoAnimate } from "@formkit/auto-animate/react";
import { GithubContributionMap } from "./GithubContributionMap";

export function GithubSection() {
  const [parent] = useAutoAnimate();
  const currentYear = new Date().getFullYear();
  return (
    <section ref={parent} className="space-y-4 mt-8">
      <h1 className="font-semibold text-dark text-2xl sm:text-3xl dark:text-white">Github</h1>
      <span className="text-xs sm:text-sm text-dark dark:text-white mb-4">This year&apos;s ({currentYear}) code contribution</span>
      <GithubContributionMap />
    </section>
  );
}

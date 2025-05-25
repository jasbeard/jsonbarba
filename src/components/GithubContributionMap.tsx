import GitHubCalendar from "react-github-calendar";
import { ThemeInput } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GithubContributionMap() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const explicitTheme: ThemeInput = {
    light: ['#f0f0f0', '#b5f0da', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#554575', '#7DB9B6', '#F5E9CF', '#E96479'],
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  const currentYear = new Date().getFullYear();
  return (
    <>
      <h2 className="font-medium text-[#2c3136] dark:text-white mb-4">This year&apos;s ({currentYear}) code contribution so far</h2>
      <GitHubCalendar
        username="swoppy"
        colorScheme={theme === 'dark' ? 'dark' : 'light'}
        theme={explicitTheme}
        blockMargin={5}
        blockRadius={7}
        labels={{ totalCount: "{{count}} activities in {{year}}"}}
      />
    </>
  );
}
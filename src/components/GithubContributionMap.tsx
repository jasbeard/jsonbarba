import GitHubCalendar from "react-github-calendar";
import * as Tooltip from '@radix-ui/react-tooltip';
import { ThemeInput } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Colors from '@/components/colors.json';

export function GithubContributionMap() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const explicitTheme: ThemeInput = {
    light: [
      Colors.github.light["50"],
      Colors.github.light["100"],
      Colors.github.light["200"], 
      Colors.github.light["300"],
      Colors.github.light["400"]
    ],
    dark: [
      Colors.github.dark["50"],
      Colors.github.dark["100"],
      Colors.github.dark["200"],
      Colors.github.dark["300"],
      Colors.github.dark["400"]
    ],
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <GitHubCalendar
      username="swoppy"
      {...(theme === 'light' && { colorScheme: 'light' })}
      theme={explicitTheme}
      blockMargin={5}
      blockRadius={7}
      labels={{ totalCount: "{{count}} activities in {{year}}"}}
      renderBlock={(block, activity) => (
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>{block}</Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="rounded p-2 text-sm leading-none bg-gray-300 text-dark dark:bg-gray-500 dark:text-white select-none duration-500 will-change-transform data-[state=delayed-open]:animate-slide-up"
                sideOffset={5}
              >
                {`${activity.count} activities on ${activity.date}`}
                <Tooltip.Arrow className="fill-gray-300 dark:fill-gray-500"/>
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      )}
    />
  );
}
import { SunIcon, MoonIcon, GearIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const valueToIcon = (theme: string | undefined) => {
    switch(theme) {
      case 'dark': return <MoonIcon width={22} height={22} strokeWidth={6}/>;
      case 'light': return <SunIcon width={22} height={22} strokeWidth={6}/>;
      case 'system': return <GearIcon width={22} height={22} strokeWidth={6}/>;
      default: null // never
    }
  }

  return (
    <Select.Root value={theme} onValueChange={value => setTheme(value)}>
      <Select.Trigger aria-label='Theme' className='inline-flex justify-center items-center py-4 px-3 text-sm leading-none h-9 gap-1 shadow-2xl rounded'>
        {valueToIcon(theme)}
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className='overflow-hidden bg-slate-100 dark:bg-slate-800 rounded shadow-md mt-2 duration-500 will-change-transform data-[side=bottom]:animate-slide-down'
          side='bottom'
          position='popper'
        >
          <Select.ScrollUpButton />
          <Select.Viewport className='p-1'>
            <Select.Item value='light' className='flex items-center text-sm leading-none select-none px-4 py-3 data-[state=checked]:text-indigo-400 cursor-pointer'>
              <SunIcon strokeWidth={6} width={20} height={20} className='mr-2'/>
              <Select.ItemText>Light</Select.ItemText>
            </Select.Item>
            <Select.Item value='dark' className='flex items-center text-sm leading-none select-none px-4 py-3 data-[state=checked]:text-indigo-400 cursor-pointer'>
              <MoonIcon strokeWidth={6} width={20} height={20} className='mr-2' />
              <Select.ItemText>Dark</Select.ItemText>
              <Select.ItemIndicator className='bg-blue'/>
            </Select.Item>
            <Select.Item value='system' className='flex items-center text-sm leading-none select-none px-4 py-3 data-[state=checked]:text-indigo-400 cursor-pointer'>
              <GearIcon strokeWidth={6} width={20} height={20} className='mr-2' />
              <Select.ItemText>System</Select.ItemText>
              <Select.ItemIndicator className='bg-blue'/>
            </Select.Item>
          </Select.Viewport>
          <Select.ScrollDownButton/>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
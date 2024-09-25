import Link from 'next/link';
import { cookies } from 'next/headers';
import { BriefcaseBusiness, HomeIcon, LaptopMinimal, Moon, Music4, Sun, User } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dock, DockIcon } from '@/components/magicui/dock';
import { useTheme } from 'next-themes';
import { defaultLocale, Locale } from '@/lib/config';
import { getUserLocale, setUserLocale } from '@/lib/service';
import { ModeToggle } from './ModeToggle';
import Lang from './Lang';

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/about', icon: User, label: 'About Me ' },
    { href: '/projects', icon: LaptopMinimal, label: 'My Projects ' },
    { href: '/job', icon: BriefcaseBusiness, label: 'Jobs' },
  ],
  other: [
    {
      href: 'https://open.spotify.com/intl-es/artist/1TLNdNsxQmjBxwRsIZECVG?si=0wtQ0wHQSZ6KyCJ7pFmNtg',
      icon: Music4,
      label: 'My Music',
    },
  ],
};

export async function DockFooter() {
  const localeLang = await getUserLocale();
  return (
    <TooltipProvider>
      <Dock direction='middle' className='fixed bottom-4 right-1/2 translate-x-1/2 bg-background '>
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12 rounded-full'
                  )}
                >
                  <item.icon className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation='vertical' className='h-full' />
        {DATA.other.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  target='_blank'
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12 rounded-full'
                  )}
                >
                  <item.icon className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation='vertical' className='h-full py-2' />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Lang lang={localeLang} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Language</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
}

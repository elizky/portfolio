import Link from 'next/link';
import {
  HomeIcon,
  LaptopMinimal,
  Music4,
  NotebookPen,
  User,
} from 'lucide-react';
import { getUserLocale } from '@/lib/service';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Dock, DockIcon } from '@/components/magicui/dock';

import { ModeToggle } from './ModeToggle';
import Lang from './Lang';

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/about', icon: User, label: 'About Me ' },
    { href: '/projects', icon: LaptopMinimal, label: 'My Projects ' },
    { href: '/blog', icon: NotebookPen, label: 'Blog' },
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
      <Dock
        direction='middle'
        className='fixed bottom-4 right-1/2 translate-x-1/2 bg-background '
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12 rounded-full',
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
                    'size-12 rounded-full',
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

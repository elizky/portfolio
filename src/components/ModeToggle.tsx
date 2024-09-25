'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

import { Button, buttonVariants } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return theme === 'light' ? (
    <Button
      variant='ghost'
      aria-label='toogle theme'
      className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12 rounded-full')}
      onClick={() => setTheme('dark')}
    >
      <Sun className='size-4' />
    </Button>
  ) : (
    <Button
      variant='ghost'
      aria-label='toogle theme'
      className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12 rounded-full')}
      onClick={() => setTheme('light')}
    >
      <Moon className='size-4' />
    </Button>
  );
}

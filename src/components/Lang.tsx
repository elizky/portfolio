'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Locale } from '@/lib/config';
import { setUserLocale } from '@/lib/service';

const Lang = ({ lang }: { lang: string }) => {
  function onChange(value: string) {
    const locale = value as Locale;
    setUserLocale(locale);
  }

  return lang === 'en' ? (
    <Button
      variant='ghost'
      aria-label='toogle language'
      className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12 rounded-full')}
      onClick={() => onChange('es')}
    >
      EN
    </Button>
  ) : (
    <Button
      variant='ghost'
      aria-label='toogle language'
      className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12 rounded-full')}
      onClick={() => onChange('en')}
    >
      ES
    </Button>
  );
};

export default Lang;

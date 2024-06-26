'use client'
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';
import { Locale } from '@/lib/config';
import { setUserLocale } from '@/lib/service';
import { Languages } from 'lucide-react';

const Lang = () => {
  function onChange(value: string) {
    const locale = value as Locale;

    setUserLocale(locale);
  }
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Languages />
        <span className='ml-2'>Select Lang</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent className='capitalize'>
          <DropdownMenuItem onClick={() => onChange('es')}>ES</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onChange('en')}>EN</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export default Lang;

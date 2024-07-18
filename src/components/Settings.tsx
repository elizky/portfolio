import { Settings, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ModeToggle } from './ModeToggle';
import Lang from './Lang';

export function Sets() {
  const t = useTranslations('theme');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-44' align='end'>
        <DropdownMenuGroup>
          <Lang />
          <ModeToggle />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

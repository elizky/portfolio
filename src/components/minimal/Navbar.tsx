import { Button } from '@/components/ui/button';
import { Home, User, Calendar, ShoppingBag, Moon } from 'lucide-react';

export function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 p-4'>
      <div className='max-w-7xl mx-auto bg-background/80 backdrop-blur-sm rounded-full shadow-sm px-4 py-2 flex items-center justify-between'>
        <div className='flex space-x-4'>
          <Button variant='ghost' size='icon' aria-label='Home'>
            <Home className='h-5 w-5' />
          </Button>
          <Button variant='ghost' size='icon' aria-label='Profile'>
            <User className='h-5 w-5' />
          </Button>
          <Button variant='ghost' size='icon' aria-label='Calendar'>
            <Calendar className='h-5 w-5' />
          </Button>
          <Button variant='ghost' size='icon' aria-label='Shop'>
            <ShoppingBag className='h-5 w-5' />
          </Button>
        </div>
        <Button variant='ghost' size='icon' aria-label='Toggle theme'>
          <Moon className='h-5 w-5' />
        </Button>
        <Button>Hire Me</Button>
      </div>
    </nav>
  );
}

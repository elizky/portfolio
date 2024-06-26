import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import Logo from './Logo';

const Header = () => {
  return (
    <header className='py-6 bg-primary-foreground dark:bg-secondary'>
      <div className='container grid grid-cols-3 grid-rows-1 gap-8'>
        <div className='col-start-1 justify-self-start content-center'>
          <Logo />
        </div>
        <div className='col-start-3 justify-self-end'>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

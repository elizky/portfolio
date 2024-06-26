import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './ModeToggle';

const Header = () => {
  return (
    <header className='py-4'>
      <div className='container flex items-center justify-between'>
        <Link href='#' className='text-xl font-bold' prefetch={false}>
          Izky
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;

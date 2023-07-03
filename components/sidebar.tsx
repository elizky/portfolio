'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
  },
  '/projects': {
    name: 'projects',
  },
  '/blog': {
    name: 'blog 🚧',
  },
};

const Logo = () => {
  return (
    <Link aria-label='Nicolas Gonzalez' href='/'>
      <motion.svg
        className='text-primary  h-[25px] md:h-[37px]'
        width='25'
        height='37'
        viewBox='0 0 232 316'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d='M39 316V0'
          stroke='currentColor'
          strokeWidth={78}
        />
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d='M232 314.998H129.852L232 232.887V314.998Z'
          fill='currentColor'
        />
      </motion.svg>
    </Link>
  );
};

const Navbar = () => {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className='md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-lora'>
      <div className='lg:sticky lg:top-20'>
        <div className='ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start '>
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className='flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
            id='nav'
          >
            <div className='flex flex-row md:flex-col gap-1 pr-10 mb-2 mt-2 md:mt-0'>
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx('transition-all dark:hover:text-white hover:text-black flex align-middle', {
                      'text-black/50 dark:text-white/50': !isActive,
                      'font-bold': isActive,
                    })}
                  >
                    <span className='relative py-[5px] px-[10px]'>
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className='absolute inset-0 bg-accent/50 rounded-md z-[-1] '
                          layoutId='sidebar'
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
};
export default Navbar;

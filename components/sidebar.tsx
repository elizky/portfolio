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
        width='15'
        height='36'
        viewBox='0 0 38 90'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.01, fill: '#fff' }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d='M37.136 8.848C35.2587 8.93333 33.6373 9.18933 32.272 9.616C30.9067 10.0427 29.84 11.024 29.072 12.56C28.3893 14.0107 28.048 16.4853 28.048 19.984V69.008C28.048 71.312 28.0053 73.5307 27.92 75.664C27.8347 77.7973 27.7067 79.4187 27.536 80.528C28.9013 80.3573 30.608 80.272 32.656 80.272C34.7893 80.1867 36.2827 80.144 37.136 80.144V90H0.4V81.552C2.36267 81.4667 3.984 81.2107 5.264 80.784C6.62933 80.3573 7.65333 79.376 8.336 77.84C9.104 76.304 9.488 73.8293 9.488 70.416V21.392C9.488 19.088 9.53067 16.8693 9.616 14.736C9.78667 12.6027 9.91467 10.9813 10 9.87199C8.63467 9.95733 6.928 10.0427 4.88 10.128C2.832 10.128 1.33867 10.1707 0.4 10.256V0.399994H37.136V8.848Z'
          fill='#EE4342'
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
                    className={clsx(
                      'transition-all dark:hover:text-white hover:text-black flex align-middle',
                      {
                        'text-black/50 dark:text-white/50': !isActive,
                        'font-bold': isActive,
                      }
                    )}
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

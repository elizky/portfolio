import Image from 'next/image';
import { ArrowIcon } from 'components/icons';
import { name, about, bio, avatar, cta, links } from 'info/home';

export default async function HomePage() {
  return (
    <section>
      <h1>{name}</h1>
      {about.map((t) => (
        <p key={t} className='mt-5 max-w-[600px]'>{t}</p>
      ))}

      <div className='flex items-start md:items-center my-8 flex-col md:flex-row'>
        <Image alt={name} src={avatar} placeholder='blur' width={100} priority />
        <div className='mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 '>
          {bio.map((t) => (
            <p key={t} className='max-w-[460px] '>{t}</p>
          ))}
        </div>
      </div>
      {cta.map((t) => (
        <p key={t} className='my-5 max-w-[600px] '>{t}</p>
      ))}
      <ul className='flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-accent dark:text-accent/50'>
        {links.map((link) => (
          <li key={link.text}>
            <a
              className='flex items-center hover:text-black dark:hover:text-white transition-all gap-1'
              rel='noopener noreferrer'
              target='_blank'
              href={link.href}
              download
            >
              <p className='h-7'>{link.text}</p>
              <ArrowIcon />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

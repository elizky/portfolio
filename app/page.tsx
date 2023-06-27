import Image from 'next/image';
import { ArrowIcon } from 'components/icons';
import { name, about, bio, avatar, cta } from 'lib/info';

export default async function HomePage() {
  return (
    <section>
      <h1>{name}</h1>
      {about.map((t) => (
        <p className='mt-5 max-w-[600px]'>{t}</p>
      ))}

      <div className='flex items-start md:items-center my-8 flex-col md:flex-row'>
        <Image
          alt={name}
          className='rounded-full'
          src={avatar}
          placeholder='blur'
          width={100}
          priority
        />
        <div className='mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 '>
          {bio.map((t) => (
            <p className='max-w-[460px] '>{t}</p>
          ))}
        </div>
      </div>
      {cta.map((t) => (
        <p className='my-5 max-w-[600px] '>{t}</p>
      ))}
      <ul className='flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-accent/50'>
        <li>
          <a
            className='flex items-center hover:text-white transition-all gap-1'
            rel='noopener noreferrer'
            target='_blank'
            href='/NicolasGonzalez-en.pdf'
            download
          >
            <p className='h-7'>get my resume</p>
            <ArrowIcon />
          </a>
        </li>
        <li>
          <a
            className='flex items-center hover:text-white transition-all gap-1'
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/nicogonzalez22/'
          >
            <p className='h-7'>write me on linkedin</p>
            <ArrowIcon />
          </a>
        </li>
        <li>
          <a
            className='flex items-center hover:text-white transition-all gap-1'
            rel='noopener noreferrer'
            target='_blank'
            href='mailto:nigd22@google.com'
          >
            <p className='h-7'>email me</p>
            <ArrowIcon />
          </a>
        </li>
      </ul>
    </section>
  );
}

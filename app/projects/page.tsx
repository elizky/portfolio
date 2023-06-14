import type { Metadata } from 'next';
import { ArrowIcon } from 'components/icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Details about the main projects',
};

const ProjectsPage = () => {
  return (
    <section className='projects'>
      <h1>Projects</h1>

      <div className='prose text-white divide-y'>
        <p className='mt-5 max-w-[600px]'>
          In my journey as a developer, I discovered that the best ideas and projects arise from
          personal needs. I firmly believe that if something has benefited me, it can also help
          others. That's why I've channeled my passion for technology and programming into creating
          personal projects that solve everyday problems and provide innovative solutions.
        </p>

        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <Link
              href='https://bitacorizky.vercel.app/'
              className='flex items-baseline gap-4 text-accent underline-offset-8 transition-all hover:pl-4 hover:font-extrabold  hover:no-underline'
              target='_blank'
            >
              <h3 className='text-accent'>Bitacora</h3>
              <ArrowIcon />
            </Link>
            <p className='mt-5 max-w-[600px]'>
              This project is a secure and private digital diary. It was inspired by the need for a
              space where I can express myself authentically and safely store my personal thoughts
              and memories. Feel free to explore this project [here]
            </p>
          </div>
          <div className='flex flex-col items-start'>
            <Link
              href='https://calculatujuntin.vercel.app/'
              className='flex items-baseline gap-4 text-accent underline-offset-8 transition-all hover:pl-4 hover:font-extrabold  hover:no-underline'
              target='_blank'
            >
              <h3 className='text-accent'>Calcula tu juntin</h3> <ArrowIcon />
            </Link>

            <p className='mt-5 max-w-[600px]'>
              Here, you'll find a tool to calculate and evenly split expenses for an event among
              friends. The idea came to me while organizing gatherings with my friends, wanting to
              avoid discussions about who paid for what. You can access this project [here](link to
              the project).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsPage;

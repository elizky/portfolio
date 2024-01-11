import type { Metadata } from 'next';
import Link from 'next/link';
import { aboutProjects, projects, title } from 'info/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Details about the main projects',
};

const ProjectsPage = () => {
  return (
    <section className='projects'>
      <h1>{title}</h1>
      <div className='prose text-black dark:text-white divide-y'>
        {aboutProjects.map((t) => (
          <p className='mt-5 max-w-[600px]'>{t}</p>
        ))}
        <div className='my-8 divide-y '>
          {projects.map((project) => (
            <div className='flex flex-col items-start' key={project.title}>
              <Link
                href={project.page}
                className='flex items-baseline gap-4 text-accent underline-offset-8 transition-all hover:pl-4 hover:font-extrabold  hover:no-underline'
              >
                <h3 className='text-accent'>{project.title}</h3>
              </Link>
              <p className='mt-5 max-w-[600px]'>
                {project.description}
                {project.link && (
                  <Link
                    href={project.link}
                    className=' text-accent transition-all  hover:font-extrabold '
                    target='_blank'
                  >
                    here
                  </Link>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsPage;

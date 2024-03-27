import { Metadata } from 'next';
import { getProjects } from 'services/api';
import { PortableText } from '@portabletext/react';
import { titlesProyects } from 'info/projects';
import { Project } from 'interfaces/Project';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const data = (await getProjects(params.slug)) as Project;

  return {
    title: data.title,
  };
}

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const data = (await getProjects(params.slug)) as Project;
  const { problemTitle, stackTitle, featuresTitle } = titlesProyects;

  console.log('data ====>', data);

  return (
    <section className='projects'>
      <h1>{data.title}</h1>

      <div className='prose text-black dark:text-white  divide-y'>
        <div className='mt-5'>
          {data.resumen && <PortableText value={data.resumen} />}
          {data.link && (
            <a href={data.link} target='_blank' className='text-primary font-bold text-xl '>
              Go to the page
            </a>
          )}
        </div>

        {data.origen && (
          <div className='my-8 divide-y '>
            <div className='flex flex-col items-start'>
              <h3 className='text-accent'>{problemTitle}</h3>
              <PortableText value={data.origen} />
            </div>
          </div>
        )}
        {data.stack && (
          <div className='my-8 divide-y '>
            <div className='flex flex-col items-start'>
              <h3 className='text-accent'>{stackTitle}</h3>
              <PortableText value={data.stack} />
            </div>
          </div>
        )}
        {data.features && (
          <div className='my-8 divide-y '>
            <div className='flex flex-col items-start'>
              <h3 className='text-accent'>{featuresTitle}</h3>
              <PortableText value={data.features} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default ProjectPage;

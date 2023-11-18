import { PortableText } from '@portabletext/react';
import { bitacoraEN } from 'info/projects';
import { Project } from 'interfaces/Project';
import { getProjects } from 'services/api';

const BitacoraPage = async ({ params }: { params: { slug: string } }) => {
  const data = (await getProjects(params.slug)) as Project;
  const { problemTitle, stackTitle, featuresTitle } = bitacoraEN;

  return (
    <section className='projects'>
      <h1>{data.title}</h1>

      <div className='prose text-black dark:text-white  divide-y'>
        <div className='mt-5'>
          {data.resumen && <PortableText value={data.resumen} />}
          <a href={data.link} target='_blank' className='text-primary font-bold text-xl '>
            Go to the page
          </a>
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
export default BitacoraPage;

import { ctjEN } from 'info/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcula Tu Juntin',
  description: 'Details about the Calcula Tu Juntin project',
};

const CalculaTuJuntinPage = () => {
  const {
    title,
    description,
    problemTitle,
    problemContent,
    stackTitle,
    stackContent,
    featuresTitle,
    featuresSubtitle,
    featuresContent,
  } = ctjEN;
  return (
    <section className='projects'>
      <h1>{title}</h1>

      <div className='prose text-black dark:text-white  divide-y'>
        <p className='mt-5 max-w-[600px]'>{description}</p>

        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>{problemTitle}</h3>
            {problemContent.map((p) => (
              <p className='mt-5 max-w-[600px]'>{p}</p>
            ))}
          </div>
        </div>
        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>{stackTitle}</h3>
            {stackContent.map((s) => (
              <p className='mt-5 max-w-[600px]'>{s}</p>
            ))}
          </div>
        </div>
        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>{featuresTitle}</h3>
            <p className='mt-5 mb-0'> {featuresSubtitle}</p>
            <ul>
              {featuresContent.map((f) => (
                <li>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CalculaTuJuntinPage;

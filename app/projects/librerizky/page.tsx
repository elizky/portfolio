import { librerizkyEN } from 'info/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcula Tu Juntin',
  description: 'Details about the Calcula Tu Juntin project',
};

const CalculaTuJuntinPage = () => {
  const { title, description } = librerizkyEN;
  return (
    <section className='projects'>
      <h1>{title}</h1>

      <div className='prose text-black dark:text-white  divide-y'>
        <p className='mt-5 max-w-[600px]'>{description}</p>
      </div>
    </section>
  );
};
export default CalculaTuJuntinPage;

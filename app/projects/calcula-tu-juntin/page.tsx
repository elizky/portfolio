import { ctj } from 'info/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcula Tu Juntin',
  description: 'Details about the Calcula Tu Juntin project',
};

const CalculaTuJuntinPage = () => {
  const { title, description, problem, stack, features } = ctj;
  return (
    <section className='projects'>
      <h1>{title}</h1>

      <div className='prose text-white divide-y'>
        <p className='mt-5 max-w-[600px]'>{description}</p>

        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>Origen del problema</h3>
            {problem.map((p) => (
              <p className='mt-5 max-w-[600px]'>{p}</p>
            ))}
          </div>
        </div>
        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>Stack Tecnologico</h3>
            {stack.map((s) => (
              <p className='mt-5 max-w-[600px]'>{s}</p>
            ))}
          </div>
        </div>
        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>Features</h3>
            <p className='mt-5 mb-0'>
              Acá no hay mucha ciencia, pero lo importante a saber es que:
            </p>
            <ul>
              {features.map((f) => (
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

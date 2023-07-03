import type { Metadata } from 'next';

import { motion } from 'framer-motion';
import { bitacora } from 'info/projects';

export const metadata: Metadata = {
  title: 'Bitacora',
  description: 'Details about the Bitacora project',
};

const BitacoraPage = () => {
  const { title, description, problem, stack, features } = bitacora;

  return (
    <section className='projects'>
      <h1>{title}</h1>

      <div className='prose text-black dark:text-white  divide-y'>
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
            {stack.map((p) => (
              <p className='mt-5 max-w-[600px]'>{p}</p>
            ))}
          </div>
        </div>
        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>Features</h3>
            <p className='mt-5 mb-0'>Entre las features mas destacadas estan las siguientes</p>
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
export default BitacoraPage;

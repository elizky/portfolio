import type { Metadata } from 'next';

import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Bitacora',
  description: 'Details about the Bitacora project',
};

const ProjectsPage = () => {
  return (
    <section className='projects'>
      <h1>Bitacora</h1>

      <div className='prose text-white divide-y'>
        <p className='mt-5 max-w-[600px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero maiores facilis
          optio? Alias beatae explicabo magnam illo non nisi, ipsam facilis vitae vero expedita
          laboriosam esse reiciendis est magni.
        </p>

        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>title</h3>
            <p className='mt-5 max-w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero maiores facilis
          optio? Alias beatae explicabo magnam illo non nisi, ipsam facilis vitae vero expedita
          laboriosam esse reiciendis est magni.
            </p>
            <p className='mt-5 max-w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero maiores facilis
          optio? Alias beatae explicabo magnam illo non nisi, ipsam facilis vitae vero expedita
          laboriosam esse reiciendis est magni.
            </p>
          </div>
        </div>
        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>Title</h3>
            <p className='mt-5 max-w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero maiores facilis
          optio? Alias beatae explicabo magnam illo non nisi, ipsam facilis vitae vero expedita
          laboriosam esse reiciendis est magni.
            </p>
            <p className='mt-5 max-w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero maiores facilis
          optio? Alias beatae explicabo magnam illo non nisi, ipsam facilis vitae vero expedita
          laboriosam esse reiciendis est magni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsPage;

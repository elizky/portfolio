import type { Metadata } from 'next';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Calcula Tu Juntin',
  description: 'Details about the Calcula Tu Juntin project',
};

const CalculaTuJuntinPage = () => {
  return (
    <section className='projects'>
      <h1>Calcula Tu juntin</h1>

      <div className='prose text-white divide-y'>
        <p className='mt-5 max-w-[600px]'>
          ¡Bienvenido a Calcula tu Juntin! decidí crear una herramienta que simplificara el proceso
          de cálculo y dividiera equitativamente los gastos entre todos los participantes.
        </p>

        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>Origen del problema</h3>
            <p className='mt-5 max-w-[600px]'>
              Este proyecto surgió de mi experiencia personal al organizar eventos y salidas con
              amigos. Siempre había problemas para dividir los gastos de manera justa y evitar
              conflictos innecesarios.
            </p>
            <p className='mt-5 max-w-[600px]'>
              Aun sabiendo de la existencia de aplicaciones que resolvian mi problema, no lograba
              encontrar con una que sea lo suficientemente simple y sencilla como para solucionarlo
              en un periodo corto de tiempo y sin necesidad de andar creando usuarios o buscando muy
              dentro de la aplicacion la funcionalidad.
            </p>
            <p className='mt-5 max-w-[600px]'>
              Por eso puede pecar de simple y minimalista, porque lo es. Y asi lo quise hacer.
              Simple, rápida de usar y efectiva
            </p>
          </div>
        </div>
        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>Stack Tecnologico</h3>
            <p className='mt-5 max-w-[600px]'>
              En una primera version era solo HTML, CSS y Javascript Vanilla lo que utilice para
              crear este proyecto. Con el tiempo y a modo de practica, lo cambie por Next.js
              (version 12) y Material UI para la UI
            </p>
          </div>
        </div>
        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>Features</h3>
            <p className='mt-5 mb-0'>Acá no hay mucha ciencia, pero lo importante a saber es que:</p>
            <ul>
              <li>Proporciona el resultado indivial de cada participante</li>
              <li>Muestra en verde a quien le deben y cuanto</li>
              <li>Muestr en rojo quien debe</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CalculaTuJuntinPage;

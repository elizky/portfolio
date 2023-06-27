import type { Metadata } from 'next';

import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Bitacora',
  description: 'Details about the Bitacora project',
};

const BitacoraPage = () => {
  return (
    <section className='projects'>
      <h1>Bitacora</h1>

      <div className='prose text-white divide-y'>
        <p className='mt-5 max-w-[600px]'>
          ¡Bienvenido a Bitácora! Decidí crear esta aplicación que combina la autenticidad de un
          diario tradicional con la comodidad de la tecnología digital.
        </p>

        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>Origen del problema</h3>
            <p className='mt-5 max-w-[600px]'>
              Este proyecto nació de mi necesidad de tener un espacio seguro y privado donde pudiera
              expresarme libremente y mantener protegidos mis pensamientos y recuerdos personales.
              Si bien siempre lo pensé como una aplicacion mobil, decidí primero implementar mis
              conocimientos en desarrollo web para crearlo, darle una identidad y luego implementar
              la version mobile.
            </p>
          </div>
        </div>
        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>Stack Tecnologico</h3>
            <p className='mt-5 max-w-[600px]'>
              Utilice las herramientas y tecnologias mas actualizadas para hacer realidad Bitacora.
              El frontend esta desarrollado con Next.js 13, aprovechando el poder del server side
              rendering para optimizar la carga y poder implementar lógica del lado del servidar. El
              estilado esta hecho con tailwind tratando de seguir una impronta elegante y
              minimalista.
            </p>
            <p className='mt-5 max-w-[600px]'>
              Para la parte del backend utilize Firebase y todas las herramientas que proporciona:
              el manejo de logueo con un usuario propio o utilizando el provider de Google, la base
              de datos donde se alojan los posteos que se van haciendo y el cloud storage donde se
              almacenan las fotos que podes ir cargando. Todo esto enmantelado en estrictas reglas
              de uso para aumentar la privacidad.
            </p>
          </div>
        </div>
        <div className='my-8 divide-y '>
          <div className='flex flex-col items-start'>
            <h3 className='text-accent'>Features</h3>
            <p className='mt-5 mb-0'>Entre las features mas destacadas estan las siguientes</p>
            <ul>
              <li>
                Almacenar la ubicacion a la hora de hacer el posteo asi puedes ver luego donde
                estuviste la vez que escribiste eso que sentias.
              </li>
              <li>
                Tambien la posibilidad de agregar una foto al posteo para tener de recuerdo de ese
                momento.
              </li>
              <li>La posibilidad de cambiar de idioma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BitacoraPage;

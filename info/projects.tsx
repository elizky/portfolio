export const title = 'Projects';

export const aboutProjects = [
  "In my journey as a developer, I discovered that the best ideas and projects arise from personal needs. I firmly believe that if something has benefited me, it can also help others. That's why I've channeled my passion for technology and programming into creating personal projects that solve everyday problems and provide innovative solutions.",
];

export const projects = [
  {
    page: '/projects/bitacora',
    title: 'Bitacora',
    description:
      'This project is a secure and private digital journal. It was inspired by the need for a space where I can express myself authentically and safely store my personal thought and memories. Feel free to explore this project',
    link: 'https://bitacorizky.vercel.app/',
  },
  {
    page: '/projects/calcula-tu-juntin',
    title: 'Calcula tu juntin ',
    description:
      " Here, you'll find a tool to calculate and evenly split expenses for an event among friends. The idea came to me while organizing gatherings with my friends, wanting to avoid discussions about who paid for what. You can access this project",
    link: 'https://calculatujuntin.vercel.app/',
  },
  {
    page: '/projects/librerizky',
    title: 'Librerizky ',
    description:
      'See my own component library that i use in most of my projects. - Under construction 🚧',
    link: '',
  },
];

export const bitacora = {
  title: 'Bitacora',
  description:
    '¡Bienvenido a Bitácora! Decidí crear esta aplicación que combina la autenticidad de un diario tradicional con la comodidad de la tecnología digital.  ',
  problem: [
    'Este proyecto nació de mi necesidad de tener un espacio seguro y privado donde pudiera expresarme libremente y mantener protegidos mis pensamientos y recuerdos personales. Si bien siempre lo pensé como una aplicacion mobil, decidí primero implementar mis conocimientos en desarrollo web para crearlo, darle una identidad y luego implementar la version mobile.',
  ],
  stack: [
    'Utilice las herramientas y tecnologias mas actualizadas para hacer realidad Bitacora. El frontend esta desarrollado con Next.js 13, aprovechando el poder del server side rendering para optimizar la carga y poder implementar lógica del lado del servidar. El estilado esta hecho con tailwind tratando de seguir una impronta elegante y minimalista.',
    'Para la parte del backend utilize Firebase y todas las herramientas que proporciona: el manejo de logueo con un usuario propio o utilizando el provider de Google, la base de datos donde se alojan los posteos que se van haciendo y el cloud storage donde se almacenan las fotos que podes ir cargando. Todo esto enmantelado en estrictas reglas de uso para aumentar la privacidad.',
  ],
  features: [
    'Almacenar la ubicacion a la hora de hacer el posteo asi puedes ver luego donde estuviste la vez que escribiste eso que sentias.',
    'Tambien la posibilidad de agregar una foto al posteo para tener de recuerdo de ese momento.',
    'La posibilidad de cambiar de idioma',
  ],
};

export const ctj = {
  title: 'Calcula tu Juntin',
  description:
    '¡Bienvenido a Calcula tu Juntin! decidí crear una herramienta que simplificara el proceso de cálculo y dividiera equitativamente los gastos entre todos los participantes.  ',
  problem: [
    'Este proyecto surgió de mi experiencia personal al organizar eventos y salidas con amigos. Siempre había problemas para dividir los gastos de manera justa y evitar conflictos innecesarios.',
    'Aun sabiendo de la existencia de aplicaciones que resolvian mi problema, no lograba encontrar con una que sea lo suficientemente simple y sencilla como para solucionarlo en un periodo corto de tiempo y sin necesidad de andar creando usuarios o buscando muy dentro de la aplicacion la funcionalidad.',
    'Por eso puede pecar de simple y minimalista, porque lo es. Y asi lo quise hacer. Simple, rápida de usar y efectiva.',
  ],
  stack: [
    'En una primera version era solo HTML, CSS y Javascript Vanilla lo que utilice para crear este proyecto. Con el tiempo y a modo de practica, lo cambie por Next.js (version 12) y Material UI para la UI.',
  ],
  features: [
    'Proporciona el resultado indivial de cada participante',
    'Muestra en verde a quien le deben y cuanto',
    'Muestra en rojo quien debe',
  ],
};

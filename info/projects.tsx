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

export const bitacoraES = {
  title: 'Bitacora',
  description:
    '¡Bienvenido a Bitácora! Decidí crear esta aplicación que combina la autenticidad de un diario tradicional con la comodidad de la tecnología digital.  ',
  problemTitle: 'Origin of the problem',
  problemContent: [
    'Este proyecto nació de mi necesidad de tener un espacio seguro y privado donde pudiera expresarme libremente y mantener protegidos mis pensamientos y recuerdos personales. Si bien siempre lo pensé como una aplicacion mobil, decidí primero implementar mis conocimientos en desarrollo web para crearlo, darle una identidad y luego implementar la version mobile.',
  ],
  stackTitle: 'Stack Tecnologico',
  stackContent: [
    'Utilice las herramientas y tecnologias mas actualizadas para hacer realidad Bitacora. El frontend esta desarrollado con Next.js 13, aprovechando el poder del server side rendering para optimizar la carga y poder implementar lógica del lado del servidar. El estilado esta hecho con tailwind tratando de seguir una impronta elegante y minimalista.',
    'Para la parte del backend utilize Firebase y todas las herramientas que proporciona: el manejo de logueo con un usuario propio o utilizando el provider de Google, la base de datos donde se alojan los posteos que se van haciendo y el cloud storage donde se almacenan las fotos que podes ir cargando. Todo esto enmantelado en estrictas reglas de uso para aumentar la privacidad.',
  ],
  featuresTitle: 'Features',
  featuresSubtitle: 'Entre las features mas destacadas estan las siguientes',
  featuresContent: [
    'Almacenar la ubicacion a la hora de hacer el posteo asi puedes ver luego donde estuviste la vez que escribiste eso que sentias.',
    'Tambien la posibilidad de agregar una foto al posteo para tener de recuerdo de ese momento.',
    'La posibilidad de cambiar de idioma',
  ],
};

export const bitacoraEN = {
  title: 'Bitacora',
  description:
    'Welcome to Bitacora! I decided to create this application that combines the authenticity of a traditional journal with the convenience of digital technology.',
  problemTitle: 'Origin of the problem',
  problemContent: [
    'This project was born out of my need to have a safe and private space where I could express myself freely and keep my personal thoughts and memories protected. Although I always thought of it as a mobile application, I decided to first implement my knowledge in web development to create it, give it an identity and then implement the mobile version.    ',
  ],
  stackTitle: 'Technological Stack',
  stackContent: [
    'I used the most updated tools and technologies to make Bitacora a reality. The frontend is developed with Next.js 13, taking advantage of the power of server side rendering to optimize the load and to implement server side logic. The styling is made with tailwind trying to follow an elegant and minimalist look.',
    'For the backend I used Firebase and all the tools it provides: the login management with your own user or using the Google provider, the database where the posts are hosted and the cloud storage where the photos you can upload are stored. All this is wrapped in strict rules of use to increase privacy.',
  ],
  featuresTitle: 'Features',
  featuresSubtitle: 'Among the most outstanding features are the following',
  featuresContent: [
    'Store your location when you post so you can later see where you were when you wrote what you felt.',
    'Also the possibility of adding a photo to the post to remember that moment.',
    'The possibility to change the language',
  ],
};

export const ctjES = {
  title: 'Calcula tu Juntin',
  description:
    '¡Bienvenido a Calcula tu Juntin! decidí crear una herramienta que simplificara el proceso de cálculo y dividiera equitativamente los gastos entre todos los participantes.  ',
  problemTitle: 'Origen del problema',
  problemContent: [
    'Este proyecto surgió de mi experiencia personal al organizar eventos y salidas con amigos. Siempre había problemas para dividir los gastos de manera justa y evitar conflictos innecesarios.',
    'Aun sabiendo de la existencia de aplicaciones que resolvian mi problema, no lograba encontrar con una que sea lo suficientemente simple y sencilla como para solucionarlo en un periodo corto de tiempo y sin necesidad de andar creando usuarios o buscando muy dentro de la aplicacion la funcionalidad.',
    'Por eso puede pecar de simple y minimalista, porque lo es. Y asi lo quise hacer. Simple, rápida de usar y efectiva.',
  ],
  stackTitle: 'Stack Tecnologico',
  stackContent: [
    'En una primera version era solo HTML, CSS y Javascript Vanilla lo que utilice para crear este proyecto. Con el tiempo y a modo de practica, lo cambie por Next.js (version 12) y Material UI para la UI.',
  ],
  featuresTitle: 'Features',
  featuresSubtitle: 'Acá no hay mucha ciencia, pero lo importante a saber es que:',
  featuresContent: [
    'Proporciona el resultado indivial de cada participante',
    'Muestra en verde a quien le deben y cuanto',
    'Muestra en rojo quien debe',
  ],
};
export const ctjEN = {
  title: 'Calcula tu Juntin',
  description:
    'Welcome to Calcula tu Juntin! I decided to create a tool that would simplify the calculation process and divide the costs equally among all participants.',
  problemTitle: 'Origin of the problem',
  problemContent: [
    'This project came from my personal experience in organizing events and outings with friends. There were always problems in dividing expenses fairly and avoiding unnecessary conflicts.',
    "Even knowing about the existence of applications that solved my problem, I couldn't find one that was simple and easy enough to solve it in a short period of time and without the need to create users or search deep inside the application for the functionality.",
    "That's why it can be simple and minimalist, because it is. And that's how I wanted to make it. Simple, fast to use and effective.",
  ],
  stackTitle: 'Technology Stack',
  stackContent: [
    'In a first version it was only HTML, CSS and Javascript Vanilla what I used to create this project. With time and as a practice, I changed it to Next.js (version 12) and Material UI for the UI.',
  ],
  featuresTitle: 'Features',
  featuresSubtitle: 'There is not much science here, but the important thing to know is that:',
  featuresContent: [
    'Provides the individual result of each participant.',
    'Shows in green who is owed and how much',
    'Shows in red who is owed',
  ],
};

export const librerizkyES = {
  title: 'Librerizky',
  description:
    '¡Esta es mi propia Libreria! Pero todavía no esta lista. Cuando lo esté les aviso  ',
  // problem: [
  //   'Este proyecto surgió de mi experiencia personal al organizar eventos y salidas con amigos. Siempre había problemas para dividir los gastos de manera justa y evitar conflictos innecesarios.',
  //   'Aun sabiendo de la existencia de aplicaciones que resolvian mi problema, no lograba encontrar con una que sea lo suficientemente simple y sencilla como para solucionarlo en un periodo corto de tiempo y sin necesidad de andar creando usuarios o buscando muy dentro de la aplicacion la funcionalidad.',
  //   'Por eso puede pecar de simple y minimalista, porque lo es. Y asi lo quise hacer. Simple, rápida de usar y efectiva.',
  // ],
  // stack: [
  //   'En una primera version era solo HTML, CSS y Javascript Vanilla lo que utilice para crear este proyecto. Con el tiempo y a modo de practica, lo cambie por Next.js (version 12) y Material UI para la UI.',
  // ],
  // features: [
  //   'Proporciona el resultado indivial de cada participante',
  //   'Muestra en verde a quien le deben y cuanto',
  //   'Muestra en rojo quien debe',
  // ],
};
export const librerizkyEN = {
  title: 'Librerizky',
  description: "This is my own library! But it's not ready yet. When it is, I'll let you know",
  // problem: [
  //   'Este proyecto surgió de mi experiencia personal al organizar eventos y salidas con amigos. Siempre había problemas para dividir los gastos de manera justa y evitar conflictos innecesarios.',
  //   'Aun sabiendo de la existencia de aplicaciones que resolvian mi problema, no lograba encontrar con una que sea lo suficientemente simple y sencilla como para solucionarlo en un periodo corto de tiempo y sin necesidad de andar creando usuarios o buscando muy dentro de la aplicacion la funcionalidad.',
  //   'Por eso puede pecar de simple y minimalista, porque lo es. Y asi lo quise hacer. Simple, rápida de usar y efectiva.',
  // ],
  // stack: [
  //   'En una primera version era solo HTML, CSS y Javascript Vanilla lo que utilice para crear este proyecto. Con el tiempo y a modo de practica, lo cambie por Next.js (version 12) y Material UI para la UI.',
  // ],
  // features: [
  //   'Proporciona el resultado indivial de cada participante',
  //   'Muestra en verde a quien le deben y cuanto',
  //   'Muestra en rojo quien debe',
  // ],
};

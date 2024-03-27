export const title = 'Projects';

export const aboutProjects = [
  "In my journey as a developer, I discovered that the best ideas and projects arise from personal needs. I firmly believe that if something has benefited me, it can also help others. That's why I've channeled my passion for technology and programming into creating personal projects that solve everyday problems and provide innovative solutions.",
];

export const projects = [
  {
    page: '/projects/bitacorizky',
    title: 'Bitacorizky',
    description:
      'This project is a secure and private digital journal. It was inspired by the need for a space where I can express myself authentically and safely store my personal thought and memories. Feel free to explore this project ',
    link: 'https://bitacorizky.com/',
  },
  {
    page: '/projects/calculizky',
    title: 'Calculizky ',
    description:
      'A financial management application designed to provide insightful tools that help you better understand and manage your personal finances. You can access this project ',
    link: 'https://calculizky.com/',
  },
  // {
  //   page: '/projects/librerizky',
  //   title: 'Librerizky ',
  //   description:
  //     'See my own component library that i use in most of my projects. - Under construction 🚧',
  //   link: '',
  // },
];

export const titlesProyects = {
  problemTitle: 'Origin of the problem',
  stackTitle: 'Technology Stack',
  featuresTitle: 'Features',
};

export const bitacoraES = {
  title: 'Bitacorizky',
  description:
    '¡Bienvenido a Bitacorizky! Decidí crear esta aplicación que combina la autenticidad de un diario tradicional con la comodidad de la tecnología digital.  ',
  problemContent: [
    'Este proyecto nació de mi necesidad de tener un espacio seguro y privado donde pudiera expresarme libremente y mantener protegidos mis pensamientos y recuerdos personales. Si bien siempre lo pensé como una aplicacion mobil, decidí primero implementar mis conocimientos en desarrollo web para crearlo, darle una identidad y luego implementar la version mobile.',
  ],
  stackContent: [
    'Utilice las herramientas y tecnologias mas actualizadas para hacer realidad Bitacorizky. El frontend esta desarrollado con Next.js 14, aprovechando el poder del server side rendering para optimizar la carga y poder implementar lógica del lado del servidar. El estilado esta hecho con tailwind tratando de seguir una impronta elegante y minimalista.',
    'Para la parte del backend utilize Firebase y todas las herramientas que proporciona: el manejo de logueo con un usuario propio o utilizando el provider de Google, la base de datos donde se alojan los posteos que se van haciendo y el cloud storage donde se almacenan las fotos que podes ir cargando. Todo esto enmantelado en estrictas reglas de uso para aumentar la privacidad.',
  ],

  featuresSubtitle: 'Entre las features mas destacadas estan las siguientes',
  featuresContent: [
    'Almacenar la ubicacion a la hora de hacer el posteo asi puedes ver luego donde estuviste la vez que escribiste eso que sentias.',
    'Tambien la posibilidad de agregar una foto al posteo para tener de recuerdo de ese momento.',
    'La posibilidad de cambiar de idioma',
  ],
};

export const bitacoraEN = {
  title: 'Bitacorizky',
  description:
    'Welcome to Bitacorizky! I decided to create this application that combines the authenticity of a traditional journal with the convenience of digital technology.',
  problemContent: [
    'This project was born out of my need to have a safe and private space where I could express myself freely and keep my personal thoughts and memories protected. Although I always thought of it as a mobile application, I decided to first implement my knowledge in web development to create it, give it an identity and then implement the mobile version.    ',
  ],
  stackContent: [
    'I used the most updated tools and technologies to make Bitacorizky a reality. The frontend is developed with Next.js 14, taking advantage of the power of server side rendering to optimize the load and to implement server side logic. The styling is made with tailwind trying to follow an elegant and minimalist look.',
    'For the backend I used Firebase and all the tools it provides: the login management with your own user or using the Google provider, the database where the posts are hosted and the cloud storage where the photos you can upload are stored. All this is wrapped in strict rules of use to increase privacy.',
  ],

  featuresSubtitle: 'Among the most outstanding features are the following',
  featuresContent: [
    'Store your location when you post so you can later see where you were when you wrote what you felt.',
    'Also the possibility of adding a photo to the post to remember that moment.',
    'The possibility to change the language',
  ],
};

export const ctjES = {
  title: 'Calculizky',
  description:
    '¡Bienvenido a Calculizky! decidí crear una herramienta que simplificara el proceso de cálculo y dividiera equitativamente los gastos entre todos los participantes.  ',
  problemTitle: 'Origen del problema',
  problemContent: [
    'Este proyecto surgió de mi experiencia personal al organizar eventos y salidas con amigos. Siempre había problemas para dividir los gastos de manera justa y evitar conflictos innecesarios.',
    'Aun sabiendo de la existencia de aplicaciones que resolvian mi problema, no lograba encontrar con una que sea lo suficientemente simple y sencilla como para solucionarlo en un periodo corto de tiempo y sin necesidad de andar creando usuarios o buscando muy dentro de la aplicacion la funcionalidad.',
    'Por eso puede pecar de simple y minimalista, porque lo es. Y asi lo quise hacer. Simple, rápida de usar y efectiva.',
  ],
  stackContent: [
    'En una primera version era solo HTML, CSS y Javascript Vanilla lo que utilice para crear este proyecto. Con el tiempo y a modo de practica, lo cambie por Next.js (version 12) y Material UI para la UI.',
  ],

  featuresSubtitle: 'Acá no hay mucha ciencia, pero lo importante a saber es que:',
  featuresContent: [
    'Proporciona el resultado indivial de cada participante',
    'Muestra en verde a quien le deben y cuanto',
    'Muestra en rojo quien debe',
  ],
};
export const ctjEN = {
  title: 'Calculizky',
  description:
    'Welcome to Calculizky! I decided to create a tool that would simplify the calculation process and divide the costs equally among all participants.',
  problemContent: [
    'This project came from my personal experience in organizing events and outings with friends. There were always problems in dividing expenses fairly and avoiding unnecessary conflicts.',
    "Even knowing about the existence of applications that solved my problem, I couldn't find one that was simple and easy enough to solve it in a short period of time and without the need to create users or search deep inside the application for the functionality.",
    "That's why it can be simple and minimalist, because it is. And that's how I wanted to make it. Simple, fast to use and effective.",
  ],
  stackContent: [
    'In a first version it was only HTML, CSS and Javascript Vanilla what I used to create this project. With time and as a practice, I changed it to Next.js (version 12) and Material UI for the UI.',
  ],

  featuresSubtitle: 'There is not much science here, but the important thing to know is that:',
  featuresContent: [
    'Provides the individual result of each participant.',
    'Shows in green who is owed and how much',
    'Shows in red who is owed',
  ],
};
export const calculizkyES = {
  title: 'Calculizky',
  description:
    '¡Bienvenido a Calculizky! Calculizky es una aplicación de gestión financiera diseñada para proporcionarte herramientas perspicaces que te ayudarán a entender y administrar mejor tus finanzas personales. Con la combinación perfecta de simplicidad y funciones avanzadas, es tu solución integral para el bienestar financiero.',
  problemTitle: 'El Desafío',
  problemContent: [
    'La idea detrás de Calculizky surge de los desafíos que enfrentan muchas personas al realizar un seguimiento de sus actividades financieras. Con diversas fuentes de ingresos, gastos variados y metas financieras complejas, se necesitaba una plataforma unificada que proporcionara información clara y facilitara la toma de decisiones informadas.',
  ],
  stackContent: [
    'Calculizky aprovecha tecnologías de vanguardia para ofrecer una experiencia de usuario fluida. El frontend se desarrolla con React por su flexibilidad y eficiencia, y Recharts se utiliza para visualizar datos financieros de manera intuitiva.',
    'En el backend, Node.js con Express alimenta el servidor, y Prisma se utiliza como el conjunto de herramientas de base de datos para una gestión eficiente de datos. La autenticación se maneja de manera segura con NextAuth.js para garantizar la privacidad del usuario y la protección de datos.',
  ],
  featuresSubtitle: 'Explora las potentes características que Calculizky pone a tu alcance:',
  featuresContent: [
    'Registra y categoriza tus gastos e ingresos sin esfuerzo, proporcionando una visión completa de tus transacciones financieras.',
    'Gráficos y tablas dinámicas ofrecen visualizaciones de tus patrones de gasto, ayudándote a identificar tendencias y tomar decisiones financieras informadas.',
    'Autenticación segura y cifrado de datos para garantizar la confidencialidad y privacidad de tu información financiera.',
  ],
};

export const calculizkyEN = {
  title: 'Calculizky',
  description:
    "Welcome to Calculizky! Calculizky is a financial management application designed to provide insightful tools that help you better understand and manage your personal finances. With the perfect blend of simplicity and advanced features, it's your comprehensive solution for financial well-being.",
  problemTitle: 'The Challenge',
  problemContent: [
    'The idea behind Calculizky stems from the challenges many individuals face when tracking their financial activities. With diverse income sources, varied expenses, and complex financial goals, a unified platform was needed that would provide clear insights and facilitate informed decision-making.',
  ],
  stackContent: [
    'Calculizky leverages cutting-edge technologies to deliver a seamless user experience. The frontend is developed using React for its flexibility and efficiency, and Recharts is employed to visualize financial data intuitively.',
    'On the backend, Node.js with Express powers the server, and Prisma is used as the database toolkit for efficient data management. Authentication is securely handled with NextAuth.js to ensure user privacy and data protection.',
  ],
  featuresSubtitle: 'Explore the powerful features Calculizky puts at your fingertips:',
  featuresContent: [
    'Effortlessly record and categorize your expenses and income, providing a comprehensive view of your financial transactions.',
    'Dynamic charts and tables offer visualizations of your spending patterns, helping you identify trends and make informed financial decisions.',
    'Customizable budgeting tools allow you to set financial goals and track your progress over time.',
    'Secure authentication and data encryption to ensure the confidentiality and privacy of your financial information.',
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
};

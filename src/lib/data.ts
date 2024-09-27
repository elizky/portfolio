import { Project, RelatedProjects, SideProjects } from './interfaces';

export const aboutMe = {
  name: 'Izky',
  avatar: '/avatar-izky.png',

  about: [
    "Hey there, I'm Izky, but my mom calls me Nicolas when she gets angry. I'm a Front End developer since the pandemic, before that I was a musician.",
  ],

  bio: [
    "When I'm not diving into lines of code, I like to let my creativity soar by playing music and composing songs.",
    "I'm also a sports fan and enjoy watching games with friends, always cheering for my team, Boca Juniors!",
  ],
};

export const sideProjects: SideProjects[] = [
  {
    image: '/bitacorizkyIcon.png',
    name: 'Bitacorizky',
    description: 'A secure digital journal',
    link: 'https://bitacorizky.com',
  },
  {
    image: '/calculizkyIcon.png',
    name: 'Calculizky',
    description: 'Financial management app',
    link: 'https://calculizky.com',
  },
  {
    image: '/dividizky.png',
    name: 'Dividizky',
    description: 'Expense divider',
    link: 'https://www.dividizky.app/',
  },
  {
    image: '/planizkyIcon.png',
    name: 'Planizky - WIP 🚧',
    description: 'Gym tracker',
    link: '#',
  },
];

export const relatedProjects: RelatedProjects[] = [
  {
    image: '/bitacorizkyIcon.png',
    title: 'Bitacorizky',
    description: 'A secure digital journal',
    slug: 'bitacorizky',
  },
  {
    image: '/calculizkyIcon.png',
    title: 'Calculizky',
    description: 'Financial management app',
    slug: 'calculizky',
  },
  {
    image: '/dividizky.png',
    title: 'Dividizky',
    description: 'Expense divider',
    slug: 'dividizky',
  },
  {
    image: '/planizkyIcon.png',
    title: 'Planizky - WIP 🚧',
    description: 'Gym tracker',
    slug: '#',
  },
];

export const projects: Project[] = [
  {
    slug: 'bitacorizky',
    title: 'Bitacorizky',
    link: 'https://bitacorizky.com',
    icon: '/bitacorizkyIcon.png',
    subtitle: 'A Secure Digital Journal',
    description:
      'Bitacorizky is a secure and private digital journaling platform that combines the authenticity of traditional journaling with modern digital convenience.',
    problemContent: [
      "In today's digital age, many people struggle to find a safe and private space to express their thoughts and memories. Traditional journals can be lost or damaged, while digital solutions often lack the necessary privacy and security features.",
      'Bitacorizky was born out of the need for a secure, digital journaling platform that respects user privacy while offering the convenience of modern technology.',
    ],
    solutionContent: [
      'Bitacorizky provides a user-friendly interface for daily journaling, coupled with robust security measures to ensure user privacy. The application allows users to create entries, attach photos, and even record their location for each entry.',
      'We implemented end-to-end encryption to protect user data, ensuring that only the user can access their journal entries. The application also offers features like language switching and cloud backup for added convenience and peace of mind.',
    ],
    stackContent: [
      'The frontend is developed with Next.js 14, leveraging server-side rendering for optimal performance. Tailwind CSS is used for styling, creating an elegant and minimalist design.',
      'On the backend, we utilized Firebase for user authentication, database management, and cloud storage. This allows for secure and scalable data handling.',
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Firebase', 'TypeScript'],
    featuresSubtitle: 'Key Features of Bitacorizky',
    featuresContent: [
      'Secure, encrypted journal entries',
      'Photo attachment capability',
      'Location tagging for entries',
      'Multi-language support',
      'Cloud backup and sync',
    ],
    images: [
      '/bitacorizky.png',
      '/placeholder.svg?height=300&width=400',
      '/placeholder.svg?height=300&width=400',
      '/placeholder.svg?height=300&width=400',
      '/placeholder.svg?height=300&width=400',
    ],
  },
  // {
  //   slug: 'bitacorizky',
  //   title: 'Bitacorizky',
  //   subtitle: 'A Secure Digital Journal',
  //   description:
  //     'Welcome to Bitacorizky! I decided to create this application that combines the authenticity of a traditional journal with the convenience of digital technology.',
  //   problemContent: [
  //     'This project was born out of my need to have a safe and private space where I could express myself freely and keep my personal thoughts and memories protected. Although I always thought of it as a mobile application, I decided to first implement my knowledge in web development to create it, give it an identity and then implement the mobile version.',
  //   ],
  //   stackContent: [
  //     'I used the most updated tools and technologies to make Bitacorizky a reality. The frontend is developed with Next.js 14, taking advantage of the power of server side rendering to optimize the load and to implement server side logic. The styling is made with tailwind trying to follow an elegant and minimalist look.',
  //     'For the backend I used Firebase and all the tools it provides: the login management with your own user or using the Google provider, the database where the posts are hosted and the cloud storage where the photos you can upload are stored. All this is wrapped in strict rules of use to increase privacy.',
  //   ],
  //   featuresSubtitle: 'Among the most outstanding features are the following',
  //   featuresContent: [
  //     'Store your location when you post so you can later see where you were when you wrote what you felt.',
  //     'Also the possibility of adding a photo to the post to remember that moment.',
  //     'The possibility to change the language',
  //   ],
  // },
  {
    slug: 'calculizky',
    title: 'Calculizky',
    subtitle: 'Financial Management Application',
    link: 'https://calculizky.com',
    description:
      "Welcome to Calculizky! Calculizky is a financial management application designed to provide insightful tools that help you better understand and manage your personal finances. With the perfect blend of simplicity and advanced features, it's your comprehensive solution for financial well-being.",
    problemContent: [
      'The idea behind Calculizky stems from the challenges many individuals face when tracking their financial activities. With diverse income sources, varied expenses, and complex financial goals, a unified platform was needed that would provide clear insights and facilitate informed decision-making.',
    ],
    stackContent: [
      'Calculizky leverages cutting-edge technologies to deliver a seamless user experience. The frontend is developed using React for its flexibility and efficiency, and Recharts is employed to visualize financial data intuitively.',
      'On the backend, Node.js with Express powers the server, and Prisma is used as the database toolkit for efficient data management. Authentication is securely handled with NextAuth.js to ensure user privacy and data protection.',
    ],
    featuresSubtitle:
      'Explore the powerful features Calculizky puts at your fingertips:',
    featuresContent: [
      'Effortlessly record and categorize your expenses and income, providing a comprehensive view of your financial transactions.',
      'Dynamic charts and tables offer visualizations of your spending patterns, helping you identify trends and make informed financial decisions.',
      'Customizable budgeting tools allow you to set financial goals and track your progress over time.',
      'Secure authentication and data encryption to ensure the confidentiality and privacy of your financial information.',
    ],
    icon: '',
    solutionContent: [],
    techStack: [],
    images: [],
  },
];

export const mediumPosts = [
  {
    title: 'Cálculos y carnes: Cómo creé Dividizky en un fin de semana',
    link: 'https://medium.com/@nigd22/cálculos-y-carnes-cómo-creé-dividizky-en-un-fin-de-semana-6e748afb99b6',
  },
  {
    title: 'Discover the New Features in Calculizky!',
    link: 'https://medium.com/@nigd22/discover-the-new-features-in-calculizky-2b4378d0a7f6',
  },
  {
    title:
      'From Idea to Deployment in a Weekend: How I Created Calculizky, a Web App for Expense Management',
    link: 'https://medium.com/@nigd22/from-idea-to-deployment-in-a-weekend-how-i-created-calculizky-a-web-app-for-expense-management-5c5a9fd06237',
  },
  {
    title: 'Bitacorizky: A personal touch Side Project',
    link: 'https://medium.com/@nigd22/bitacorizky-a-personal-touch-side-project-df34db7468b8',
  },
];

export const blogPosts = [
  {
    slug: 'me',
    hero: {
      title: '¿Quién diablos es Izky? Descúbrelo Aquí',
      createdBy: 'Alguien',
      date: 'Publicado el',
    },
    article: {
      '1': {
        text: 'No hay límites para las posibilidades en internet, ¿verdad? Eso se planteó alguna vez un joven estudiante de programación con un talento oculto para el código cuando comenzó a crear sus primeros proyectos web. Hoy, es un desarrollador senior que destaca por su creatividad diferencial y pensamiento lateral',
        subtitle:
          'Estamos hablando de Izky. Bueno, tal vez no lo conozcas. Déjame contarte quién diablos es este muchacho y cómo llegó a convertirse en ello.',
      },
      '2': {
        title: 'Baby dev steps',
        text1:
          'Primero comencemos con una breve historia de cómo Izky ha comenzado en el mundo del desarrollo. Su primer trabajo fue en MobyDigital, empresa argentina donde perfeccionó el arte de hacer aplicaciones web con Angular.',
        text2:
          'Luego, su breve pero intenso paso por Flexxus como desarrollador full-stack le permitió dominar las API REST con Node.js y mantener aplicaciones web sin perder la cabeza.',
        text3:
          'Luego de un tiempo y mucha práctica en desarrollo, en enero de 2021 logra consolidar sus skills programadoras obteniendo su trabajo en Globant como Web UI. Jugando en las grandes ligas, Izky pudo poner en práctica su dominio de tecnologías como Angular, React y Next.js, convirtiéndose en una pieza clave del equipo agile.',
        text4:
          'Ha creado librerías en Storybook, ha desarrollado micro frontends… Nuestro amigo se ha probado a sí mismo en numerosas tecnologías y herramientas. Además, ha liderado equipos, probando que no solo sabe escribir código, sino también guiar a otros en la jungla tecnológica.',
      },
      '3': {
        title: 'Cómo entrenar a tu desarrollador',
        text1:
          'Todo personaje cinematográfico debe enfrentar una exigente etapa de entrenamiento para poder consolidarse en su campo de juego. Para nuestro personaje, esto fue clave. Por eso, se aprovechó de su mente creativa y comenzó a buscar problemas reales a los que generarle una solución web.',
        text2:
          'Así nacieron Bitacorizky y Calculizky, dos aplicaciones que no solo resuelven necesidades cotidianas, sino que también aportan un toque de innovación.',
        text3:
          'Bitacorizky es un diario digital seguro y privado, ideal para aquellos que quieren expresar sus pensamientos sin temor a ser descubiertos. Este proyecto nació de la necesidad de nuestro desarrollador de tener un lugar seguro y rápido para escribir sus pensamientos más fugaces y sus reflexiones más profundas.',
        text4:
          'Calculizky, por otro lado, es una aplicación de gestión financiera diseñada para que hasta el más despistado pueda entender y manejar sus finanzas personales. Esta herramienta es esencial para quienes buscan un poco de luz en el oscuro mundo de las finanzas.',
      },
      '4': {
        title: 'Más Allá del Código',
        text1:
          'Cuando no está creando su próximo gran proyecto tecnológico, Izky disfruta de jugar al fútbol y tenis, deportes que practica con la misma pasión que pone en sus proyectos. Además, compone música y toca diversos instrumentos, como parte de su antigua profesión como Productor Musical. Su objetivo de vida es demostrar que la creatividad y la técnica pueden coexistir de manera armoniosa, siendo verdaderamente multifacético.',
        text2: ' ',
        text3: ' ',
        text4: ' ',
      },
      '5': {
        title: 'Contacto',
        text1:
          'Si te has quedado con ganas de saber más sobre Izky, ya sea en el mundo del desarrollo o en sus exploraciones tecnológicas, no dudes en ponerte en contacto. Un gran desarrollador siempre está abierto a nuevas oportunidades y colaboraciones, y nuestro protagonista no es la excepción.',
        text2: ' ',
        text3: ' ',
        text4: ' ',
      },
    },
  },
];

export const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'GraphQL',
  'Docker',
  'AWS',
  'Git',
  'Jest',
  'Cypress',
  'Tailwind CSS',
];

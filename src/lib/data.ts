export const titlesProyects = {
  problemTitle: 'Origin of the problem',
  stackTitle: 'Technology Stack',
  featuresTitle: 'Features',
};

export interface SideProjects {
  image: string;
  name: string;
  description: string;
  link: string;
}

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
    name: 'Planizky',
    description: 'Gym tracker',
    link: '#',
  },
];

export const projects = [
  {
    slug: 'bitacorizky',
    title: 'Bitacorizky',
    subtitle: 'A Secure Digital Journal',
    description:
      'Welcome to Bitacorizky! I decided to create this application that combines the authenticity of a traditional journal with the convenience of digital technology.',
    problemContent: [
      'This project was born out of my need to have a safe and private space where I could express myself freely and keep my personal thoughts and memories protected. Although I always thought of it as a mobile application, I decided to first implement my knowledge in web development to create it, give it an identity and then implement the mobile version.',
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
  },
  {
    slug: 'calculizky',
    title: 'Calculizky',
    subtitle: 'Financial Management Application',
    description:
      "Welcome to Calculizky! Calculizky is a financial management application designed to provide insightful tools that help you better understand and manage your personal finances. With the perfect blend of simplicity and advanced features, it's your comprehensive solution for financial well-being.",
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
  },
];

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

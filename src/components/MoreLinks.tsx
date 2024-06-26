import React from 'react';
import Card from './ui/card';
import { icons, Linkedin, Send, SquareArrowOutUpRight } from 'lucide-react';
const links = [
  {
    href: '/NicolasGonzalez-en.pdf',
    text: 'Get Izky resume',
    icon: <SquareArrowOutUpRight className='h-4 w-4' />,
  },
  {
    href: 'https://www.linkedin.com/in/nicogonzalez22/',
    text: 'Write Izky on Linkedin',
    icon: <Linkedin className='h-4 w-4' />,
  },
  {
    href: 'mailto:nigd22@google.com',
    text: 'Email me',
    icon: <Send className='h-4 w-4' />,
  },
];

const MoreLinks = () => {
  return (
    <Card title='More Links'>
      <div className='space-y-4'>
        {links.map((link) => (
          <div key={link.text}>
            <a
              className='flex items-center gap-2 hover:underline underline-offset-2'
              rel='noopener noreferrer'
              target='_blank'
              href={link.href}
              download
            >
              <p>{link.text}</p>
              {link.icon}
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MoreLinks;

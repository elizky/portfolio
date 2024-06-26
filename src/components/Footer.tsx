import Link from 'next/link';

const footer = {
  createdBy: 'Created by ',
  name: 'Izky',
};
const Footer = () => {
  return (
    <footer className='py-6 flex items-center justify-center'>
      <p className='font-mono text-xs'>
        {footer.createdBy}
        <Link href='https://www.izky.dev/' target='_blank' className='hover:underline'>
          {footer.name}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className='py-6 flex items-center justify-center'>
      <p className='font-mono text-xs'>
        {t('createdBy')}
        <Link href='https://www.izky.dev/' target='_blank' className='hover:underline'>
          {t('name')}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

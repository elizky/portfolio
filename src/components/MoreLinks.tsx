import React from 'react';
import Card from './ui/card';
import { SquareArrowOutUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const MoreLinks = () => {
  const t = useTranslations('links');
  const keys = ['resume', 'linkedin', 'mail'] as const;
  return (
    <Card title='More Links'>
      <div className='space-y-4'>
        {keys.map((key) => (
          <div key={t(`${key}.text`)}>
            <a
              className='flex items-center gap-2 hover:underline underline-offset-2'
              rel='noopener noreferrer'
              target='_blank'
              href={t(`${key}.href`)}
              download
            >
              <p>{t(`${key}.text`)}</p>
              <SquareArrowOutUpRight className='h-4 w-4' />
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MoreLinks;

import Link from 'next/link';
import Card from './ui/card';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const RelatedPost = () => {
  const t = useTranslations('relatedPost');
  const keys = ['1', '2', '3'] as const;
  return (
    <Card title='Related Posts'>
      <div className='space-y-4'>
        {keys.map((key) => (
          <Link
            key={t(`${key}.title`)}
            href={t(`${key}.link`)}
            className='flex items-center space-x-4 hover:underline underline-offset-2'
            prefetch={false}
            target='blank'
          >
            <Image
              src={t(`${key}.image`)}
              alt={`image of ${t(`${key}.title`)}`}
              width={40}
              height={40}
              className='rounded-lg'
            />
            <div className='w-3/4'>
              <h4 className='text-ellipsis overflow-hidden truncate'>{t(`${key}.title`)}</h4>
              <p className='text-xs text-muted-foreground'>{t(`${key}.date`)}</p>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default RelatedPost;

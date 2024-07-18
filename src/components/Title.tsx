import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';

const Title = () => {
  const t = useTranslations('hero');
  const today = new Date().toLocaleString().split(',')[0];
  return (
    <section className='bg-gradient-to-b from-primary-foreground dark:from-secondary to-transparent text-primary py-12 md:py-20'>
      <div className='container'>
        <div className='max-w-3xl mx-auto text-center space-y-4'>
          <h1>{t('title')}</h1>
          <div className='flex items-center justify-center space-x-4'>
            <div className='flex items-center space-x-2'>
              <Avatar>
                <AvatarImage src='/avatar.png' />
                <AvatarFallback>I</AvatarFallback>
              </Avatar>
              <span className='text-sm font-medium'>{t('createdBy')}</span>
            </div>
            <Separator orientation='vertical' />
            <span className='text-xs text-muted-foreground italic'>
              {t('date')} {today}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;

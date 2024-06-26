import { useTranslations } from 'next-intl';

const Article = () => {
  const t = useTranslations('article');
  const keys = ['2', '3', '4', '5'] as const;
  return (
    <article className='prose prose-gray dark:prose-invert'>
      <p className='leading-7 [&:not(:first-child)]:mt-6 mb-6 italic'>{t('1.text')}</p>
      {keys.map((key) => (
        <div key={t(`${key}.title`)}>
          <h2>{t(`${key}.title`)}</h2>
          <p className='leading-7 [&:not(:first-child)]:mt-6 last:mb-6'>{t(`${key}.text`)}</p>
        </div>
      ))}
    </article>
  );
};

export default Article;

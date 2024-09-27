import Article from '@/components/blog/Article';
import Title from '@/components/blog/Title';

const page = () => {
  return (
    <main className='flex flex-col'>
      <Title />
      <div className='container  '>
        <Article />
      </div>
    </main>
  );
};

export default page;

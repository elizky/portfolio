import Article from '@/components/Article';
import Title from '@/components/Title';

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

import Article from '@/components/blog/Article';
import Title from '@/components/blog/Title';
import FollowMe2 from '@/components/FollowMe2';
import Footer from '@/components/Footer';
import { LetsTalk } from '@/components/LetsTalk';
import { Card } from '@/components/ui/card';

const page = () => {
  return (
    <Card className='space-y-8 pb-6'>
      <Title />
      <div className='container'>
        <Article />
      </div>
      <section>
        <LetsTalk />
      </section>
      <section className='px-4'>
        <FollowMe2 />
      </section>
      <Footer />
    </Card>
  );
};

export default page;

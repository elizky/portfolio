import calculizkyImage from '../../public/calculizky.png';
import bitacorizkyImage from '../../public/bitacorizky.png';

import Title from '@/components/Title';
import RelatedPost from '@/components/RelatedPost';
import NowPlaying from '@/components/NowPlaying';
import Article from '@/components/Article';
import Ads from '@/components/ui/ads';
import MoreLinks from '@/components/MoreLinks';

export default function Component() {
  return (
    <main className='flex flex-col'>
      <Title />

      <div className='container grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 py-12 md:py-20 md:px-36 lg:px-56 '>
        <div className='lg:hidden'>
          <Ads src={calculizkyImage} alt='Calculizky image' link='https://www.calculizky.com/' />
        </div>
        <Article />
        <div className='space-y-12 lg:max-w-64'>
          <RelatedPost />
          <div className='hidden lg:flex'>
            <Ads src={calculizkyImage} alt='Calculizky image' link='https://www.calculizky.com/' />
          </div>
          <NowPlaying />
          <MoreLinks />
          <div>
            <Ads
              src={bitacorizkyImage}
              alt='Bitacorizky image'
              link='https://www.bitacorizky.com/'
            />
          </div>
        </div>
      </div>
    </main>
  );
}

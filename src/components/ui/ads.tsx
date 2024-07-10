import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface AdsProps {
  src: StaticImageData;
  alt: string;
  link: string;
}
const Ads = ({ src, alt, link }: AdsProps) => {
  return (
    <Link href={link} target='blank' className='bg-gray-200 rounded-lg h-32'>
      <Image src={src} alt={alt} objectFit='cover' style={{ height: 'inherit', objectFit:'cover' }} />
    </Link>
  );
};

export default Ads;

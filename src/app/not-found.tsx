import { Button } from '@/components/ui/button';
import Link from 'next/link';

const error = () => {
  return (
    <div className='flex flex-col gap-4 py-72 text-center h-[calc(100vh-152px)]'>
      <h4>Nothing here 👀</h4>
      <Button variant='link'>
        <Link href='/'>Back to Home</Link>
      </Button>
    </div>
  );
};

export default error;

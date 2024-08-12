'use client';

import { useEffect } from 'react';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {}, [error]);

  return (
    <div className='flex flex-col gap-4 py-72 text-center h-[calc(100vh-152px)]'>
      <h4>Oops!</h4>
      <p>Something went wrong, try refreshing the page</p>
      <p className='font-mono'>{error.message}</p>
    </div>
  );
}

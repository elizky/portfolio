"use client"
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>Sory, what?</h1>
      <p className='mt-5 max-w-[600px]'>
        I guess you are trying to go somewhere but i dont know where
      </p>
      <p className='mt-5 max-w-[600px]'>
        Go <Link href='/'>home</Link> please
      </p>
    </div>
  );
}

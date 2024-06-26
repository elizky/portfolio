import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
const Title = () => {
  const today = new Date().toLocaleString().split(',')[0];
  console.log('today', today);
  return (
    <section className='bg-primary-foreground dark:bg-secondary text-primary py-12 md:py-20'>
      <div className='container'>
        <div className='max-w-3xl mx-auto text-center space-y-4'>
          <h1>¿Quién diablos es Izky? Descúbrelo Aquí</h1>
          <div className='flex items-center justify-center space-x-4'>
            <div className='flex items-center space-x-2'>
              <Avatar>
                <AvatarImage src='/avatar.png' />
                <AvatarFallback>I</AvatarFallback>
              </Avatar>
              <span className='text-sm font-medium'>Nicolas Gonzalez</span>
            </div>
            <Separator orientation='vertical' />
            <span className='text-xs text-muted-foreground italic'>Published on {today}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;

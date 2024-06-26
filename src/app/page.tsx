import Link from 'next/link';

import Header from '@/components/Header';
import Title from '@/components/Title';

export default function Component() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Title />

      <div className='container grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 py-12 md:py-20'>
        <article className='prose prose-gray dark:prose-invert'>
          <h2>Introduction</h2>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            In the ever-evolving world of web development, responsive web design has become a
            crucial aspect of creating engaging and accessible online experiences. As the number of
            devices and screen sizes continues to grow, it is essential for web designers and
            developers to master the art of crafting websites that seamlessly adapt to various
            viewports.
          </p>
          <h2>The Importance of Responsive Design</h2>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Responsive web design is not just a trend; it is a fundamental requirement for modern
            websites. With the increasing use of smartphones, tablets, and other mobile devices,
            users expect websites to provide a consistent and optimized experience across all
            platforms. Responsive design ensures that your content is easily accessible and visually
            appealing, regardless of the device being used.
          </p>
          <h2>Principles of Responsive Design</h2>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            At the core of responsive web design are three key principles:
          </p>

          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            By understanding and implementing these principles, you can create websites that adapt
            seamlessly to different screen sizes and devices, providing an optimal user experience.
          </p>
          <h2>Responsive Design Techniques</h2>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            There are various techniques and tools that web designers and developers can use to
            achieve responsive design. Some of the most common approaches include:
          </p>

          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            By mastering these techniques, you can create websites that seamlessly adapt to
            different screen sizes and provide an exceptional user experience.
          </p>
          <h2>Conclusion</h2>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Responsive web design is no longer an option, but a necessity in the modern digital
            landscape. By embracing the principles and techniques of responsive design, web
            designers and developers can create websites that engage and delight users across a wide
            range of devices. As the web continues to evolve, the mastery of responsive design will
            remain a crucial skill for anyone interested in building successful online experiences.
          </p>
        </article>
        <div className='space-y-8'>
          <div className='bg-muted rounded-lg p-6'>
            <h3>Related Posts</h3>
            <div className='space-y-4'>
              <Link href='#' className='flex items-center space-x-4' prefetch={false}>
                <img
                  src='/placeholder.svg'
                  alt='Related Post Thumbnail'
                  width={80}
                  height={80}
                  className='rounded-lg'
                />
                <div>
                  <h4>Exploring the Latest CSS Features</h4>
                  <p className='text-xs text-muted-foreground'>June 15, 2024</p>
                </div>
              </Link>
              <Link href='#' className='flex items-center space-x-4' prefetch={false}>
                <img
                  src='/placeholder.svg'
                  alt='Related Post Thumbnail'
                  width={80}
                  height={80}
                  className='rounded-lg'
                />
                <div>
                  <h4>Building Accessible Web Applications</h4>
                  <p className='text-xs text-muted-foreground'>May 28, 2024</p>
                </div>
              </Link>
              <Link href='#' className='flex items-center space-x-4' prefetch={false}>
                <img
                  src='/placeholder.svg'
                  alt='Related Post Thumbnail'
                  width={80}
                  height={80}
                  className='rounded-lg'
                />
                <div>
                  <h4>Optimizing Website Performance</h4>
                  <p className='text-xs text-muted-foreground'>April 10, 2024</p>
                </div>
              </Link>
            </div>
          </div>
          <div className='bg-muted rounded-lg p-6'>
            <h3>Categories</h3>
            <div className='space-y-2'>
              <Link href='#' className='text-sm hover:underline' prefetch={false}>
                Web Design
              </Link>
              <Link href='#' className='text-sm hover:underline' prefetch={false}>
                Front-end Development
              </Link>
              <Link href='#' className='text-sm hover:underline' prefetch={false}>
                Responsive Design
              </Link>
              <Link href='#' className='text-sm hover:underline' prefetch={false}>
                User Experience
              </Link>
              <Link href='#' className='text-sm hover:underline' prefetch={false}>
                CSS
              </Link>
            </div>
          </div>
          <div className='bg-muted rounded-lg p-6'>
            <h3>Advertisements</h3>
            <div className='space-y-4'>
              <div className='bg-gray-200 rounded-lg h-32' />
              <div className='bg-gray-200 rounded-lg h-32' />
            </div>
          </div>
          <div className='bg-muted rounded-lg p-6'>
            <h3>Music Player</h3>
            <div className='bg-gray-200 rounded-lg h-32' />
          </div>
          <div className='bg-muted rounded-lg p-6'>
            <h3>More Posts</h3>
            <div className='space-y-4'>
              <Link href='#' className='flex items-center space-x-4' prefetch={false}>
                <img
                  src='/placeholder.svg'
                  alt='Related Post Thumbnail'
                  width={80}
                  height={80}
                  className='rounded-lg'
                />
                <div>
                  <h4>Exploring the Latest CSS Features</h4>
                  <p className='text-xs text-muted-foreground'>June 15, 2024</p>
                </div>
              </Link>
              <Link href='#' className='flex items-center space-x-4' prefetch={false}>
                <img
                  src='/placeholder.svg'
                  alt='Related Post Thumbnail'
                  width={80}
                  height={80}
                  className='rounded-lg'
                />
                <div>
                  <h4>Building Accessible Web Applications</h4>
                  <p className='text-xs text-muted-foreground'>May 28, 2024</p>
                </div>
              </Link>
              <Link href='#' className='flex items-center space-x-4' prefetch={false}>
                <img
                  src='/placeholder.svg'
                  alt='Related Post Thumbnail'
                  width={80}
                  height={80}
                  className='rounded-lg'
                />
                <div>
                  <h4>Optimizing Website Performance</h4>
                  <p className='text-xs text-muted-foreground'>April 10, 2024</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-primary text-primary-foreground py-6'>
        <div className='container flex flex-col md:flex-row items-center justify-between'>
          <p className='text-sm'>&copy; 2024 Izky. All rights reserved.</p>
          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <Link href='#' className='hover:underline' prefetch={false}>
              Privacy Policy
            </Link>
            <Link href='#' className='hover:underline' prefetch={false}>
              Terms of Service
            </Link>
          </div>
          <div className='bg-gray-200 rounded-lg h-32 mt-4 md:mt-0 w-full md:w-auto'>
            <div className='flex items-center justify-center h-full'>
              <span className='text-sm font-medium'>Advertisement</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

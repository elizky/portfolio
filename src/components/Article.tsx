const article = [
  {
    title: 'Introduction',
    text: [
      ' In the ever-evolving world of web development, responsive web design has become a crucial aspect of creating engaging and accessible online experiences. As the number of devices and screen sizes continues to grow, it is essential for web designers and developers to master the art of crafting websites that seamlessly adapt to various viewports.',
    ],
  },
  {
    title: 'The Importance of Responsive Design',
    text: [
      'In the ever-evolving world of web development, responsive web design has become a crucial aspect of creating engaging and accessible online experiences. As the number of devices and screen sizes continues to grow, it is essential for web designers and developers to master the art of crafting websites that seamlessly adapt to various viewports.',
    ],
  },
  {
    title: 'Principles of Responsive Design',
    text: [
      ' In the ever-evolving world of web development, responsive web design has become a crucial aspect of creating engaging and accessible online experiences. As the number of devices and screen sizes continues to grow, it is essential for web designers and developers to master the art of crafting websites that seamlessly adapt to various viewports.',
      ' There are various techniques and tools that web designers and developers can use to achieve responsive design. Some of the most common approaches include:',
    ],
  },
  {
    title: 'Responsive Design Techniques',
    text: [
      ' By mastering these techniques, you can create websites that seamlessly adapt to different screen sizes and provide an exceptional user experience.',
      ' There are various techniques and tools that web designers and developers can use to achieve responsive design. Some of the most common approaches include:',
    ],
  },
  {
    title: 'The Importance of Responsive Design',
    text: [
      'In the ever-evolving world of web development, responsive web design has become a crucial aspect of creating engaging and accessible online experiences. As the number of devices and screen sizes continues to grow, it is essential for web designers and developers to master the art of crafting websites that seamlessly adapt to various viewports.',
    ],
  },
];

const Article = () => {
  return (
    <article className='prose prose-gray dark:prose-invert'>
      {article.map((parr) => (
        <div key={parr.title}>
          <h2>{parr.title}</h2>
          {parr.text.map((t) => (
            <p key={t} className='leading-7 [&:not(:first-child)]:mt-6 last:mb-6'>
              {t}
            </p>
          ))}
        </div>
      ))}
    </article>
  );
};

export default Article;

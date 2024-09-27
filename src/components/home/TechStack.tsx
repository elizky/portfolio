import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'GraphQL',
  'Docker',
  'AWS',
  'Git',
  'Jest',
  'Cypress',
  'Tailwind CSS',
];

export function TechStack() {
  return (
    <Card className='m-4'>
      <CardHeader>
        <CardTitle className='flex items-center gap-4'>
          <div className='h-2 w-2 rounded-full bg-red-300'></div>
          Tech Stack
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-wrap gap-2'>
        {techStack.map((tech, index) => (
          <Badge key={index} variant='secondary' className='text-sm font-semibold'>
            {tech}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}

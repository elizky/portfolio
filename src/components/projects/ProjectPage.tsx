import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ProjectPageProps {
  title: string;
  subtitle: string;
  description: string;
  problemTitle: string;
  problemContent: string[];
  stackTitle: string;
  stackContent: string[];
  featuresTitle: string;
  featuresSubtitle: string;
  featuresContent: string[];
}

export function ProjectPage({
  title,
  subtitle,
  description,
  problemTitle,
  problemContent,
  stackTitle,
  stackContent,
  featuresTitle,
  featuresSubtitle,
  featuresContent,
}: ProjectPageProps) {
  return (
    <Card className='space-y-6 p-6'>
      <Link href='/projects' className='inline-flex items-center text-blue-600 hover:underline'>
        <ArrowLeft className='h-4 w-4 mr-2' />
        Back to Projects
      </Link>

      <CardHeader>
        <CardTitle className='text-3xl font-bold'>{title}</CardTitle>
        <p className='text-xl text-muted-foreground'>{subtitle}</p>
      </CardHeader>

      <CardContent className='space-y-6'>
        <section>
          <p className='text-lg'>{description}</p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>{problemTitle}</h2>
          {problemContent.map((paragraph, index) => (
            <p key={index} className='mb-2'>
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>{stackTitle}</h2>
          {stackContent.map((paragraph, index) => (
            <p key={index} className='mb-2'>
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>{featuresTitle}</h2>
          <p className='mb-2'>{featuresSubtitle}</p>
          <ul className='list-disc pl-5 space-y-1'>
            {featuresContent.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      </CardContent>
    </Card>
  );
}

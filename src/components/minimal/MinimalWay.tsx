import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Copy, ExternalLink } from 'lucide-react';
import { Navbar } from './Navbar';
import { RainbowButton } from '../magicui/rainbow-button';

function PersonalInfo() {
  return (
    <div className='overflow-hidden'>
      <CardContent className='p-6'>
        <div className='flex items-center justify-between mb-4'>
          <Badge variant='secondary' className='text-xs font-normal'>
            Full Stack Dev
          </Badge>
          <a href='/NicolasGonzalez-en.pdf' rel='noopener noreferrer' target='_blank' download>
            <Badge
              variant='secondary'
              className='bg-green-100 text-green-800 text-xs font-normal cursor-pointer'
            >
              GET MY RESUME
            </Badge>
          </a>
        </div>
        <div className='flex flex-col-reverse sm:flex-row items-center gap-4'>
          <div className='flex-1 text-center sm:text-left'>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1 className='text-3xl font-bold mb-1'>I'm Izky 👋🏾</h1>
            <p className='text-muted-foreground mb-4'>
              Full Stack dev from Córdoba, ARG.
              <br />
              Currently working at Globant.
            </p>
            <div className='flex space-x-2'>
              <RainbowButton>Hire Me</RainbowButton>
              <Button variant='outline' className='flex items-center'>
                <Copy className='w-4 h-4 mr-2' />
                Copy Email
              </Button>
            </div>
          </div>
          <Image src='/avatar.png' alt='Izky' width={150} height={150} className='rounded-full' />
        </div>
      </CardContent>
    </div>
  );
}

function ProjectsCard() {
  return (
    <Card className='m-4'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle>Projects</CardTitle>
        <Button variant='ghost' className='text-sm'>
          View All
          <ChevronRight className='w-4 h-4 ml-1' />
        </Button>
      </CardHeader>
      <CardContent className='grid gap-4'>
        {['Acme', 'Globex', 'Initech'].map((project, index) => (
          <div key={index} className='flex items-center space-x-4'>
            <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl'>
              {project[0]}
            </div>
            <div className='flex-1'>
              <h3 className='font-semibold'>{project}</h3>
              <p className='text-sm text-muted-foreground'>Product design, UX research</p>
            </div>
            <ChevronRight className='w-5 h-5 text-muted-foreground' />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SecondCard() {
  return (
    <Card className='m-4'>
      <CardHeader>
        <CardTitle>Products</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4'>
        {['DesignSystem', 'Prototype', 'PortfolioKit'].map((product, index) => (
          <div key={index} className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <div className='w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl'>
                {product[0]}
              </div>
              <div>
                <h3 className='font-semibold'>{product}</h3>
              </div>
            </div>
            <Badge variant='secondary' className='font-normal'>
              UI KIT
              <ExternalLink className='w-3 h-3 ml-1' />
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function MinimalWay() {
  return (
    <Card className='space-y-4 pb-6'>
      <PersonalInfo />
      <ProjectsCard />
      <SecondCard />
    </Card>
  );
}

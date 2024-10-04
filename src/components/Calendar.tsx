'use client';
import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { Badge } from './ui/badge';
export default function Calendar({
  time,
  text,
}: {
  time: string;
  text: string;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: time });
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Badge
      variant='secondary'
      className='py-2 px-8 hover:bg-primary-foreground cursor-pointer transition-all shadow'
      data-cal-namespace={time}
      data-cal-link={`soyelizky/${time}`}
      data-cal-config='{"layout":"month_view"}'
    >
      {text}
    </Badge>
  );
}

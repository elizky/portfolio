import Calendar from './Calendar';

export function LetsTalk() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center py-12'>
      <h3>Lets Talk!</h3>
      <p>Set up a meet so we can talk about your concerne</p>
      <div className='flex justify-center gap-4 mt-4'>
        <Calendar time='15min' text='15 min' />
        <Calendar time='30min' text='30 min' />
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  children: React.ReactNode;
}
const Card = ({ title, children }: CardProps) => {
  return (
    <div className='bg-muted rounded-lg p-6 space-y-4 lg:max-w-80 '>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Card;

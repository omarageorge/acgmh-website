import { manrope } from '@/app/fonts';

interface HeadingProps {
  text: string;
  color?: 'primary' | 'base-100';
  left?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  color = 'primary',
  left = false,
}) => (
  <h2
    className={`${manrope.className} font-bold leading-tight ${color === 'primary' ? 'text-primary' : 'text-base-100'} ${left ? 'text-left' : 'text-center'} text-3xl sm:text-4xl lg:text-5xl mb-6`}
  >
    {text}
  </h2>
);

export default Heading;

// text-5xl font-bold  text-center text-primary mb-6

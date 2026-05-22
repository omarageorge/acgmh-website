import { manrope } from '@/app/fonts';

interface ImpactCardProps {
  title: string;
  body: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ title, body }) => (
  <div className='rounded-xl p-5 border border-secondary/10 bg-white'>
    <h4
      className={`${manrope.className} font-semibold text-xl text-secondary `}
    >
      {title}
    </h4>
    <p className='mt-2 text-sm leading-6 sm:text-base'>{body}</p>
  </div>
);
export default ImpactCard;

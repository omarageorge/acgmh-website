import { manrope } from '@/app/fonts';

interface ConferenceTrackCardProps {
  icon: React.ComponentType<React.SVGProps<SVGElement>>;
  title: string;
  description: string;
  color: string;
}

const ConferenceTrackCard: React.FC<ConferenceTrackCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
}) => (
  <div
    className={`bg-base-200 rounded-lg p-6 space-y-3 shadow-xs border-l-4`}
    style={{ borderColor: color }}
  >
    <div className=''>
      <Icon className={`size-8`} style={{ color: color }} />
    </div>
    <h3 className={`${manrope.className} font-normal text-xl text-primary`}>
      {title}
    </h3>
    <p className='text-base'>{description}</p>
  </div>
);

export default ConferenceTrackCard;

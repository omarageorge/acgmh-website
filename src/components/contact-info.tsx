import { manrope } from '@/app/fonts';

interface ContactInfoProps {
  icon: React.ComponentType<React.SVGProps<SVGElement>>;
  title: string;
  description: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className='flex gap-x-4 w-full'>
    {/* Icon */}
    <div className='flex-none w-16 h-16 sm:w-20 sm:h-20 bg-base-300 rounded-2xl flex items-center justify-center text-primary'>
      <Icon className='size-8' />
    </div>

    {/* Details */}
    <div className='h-full flex flex-col items-start justify-center gap-y-1'>
      <h3
        className={`${manrope.className} font-bold text-sm sm:text-base text-base-content uppercase`}
      >
        {title}
      </h3>
      <p>{description}</p>
    </div>
  </div>
);

export default ContactInfo;

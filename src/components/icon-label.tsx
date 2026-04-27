interface IconLabelProps {
  icon: React.ComponentType<React.SVGProps<SVGElement>>;
  text: string;
}

const IconLabel: React.FC<IconLabelProps> = ({ icon: Icon, text }) => (
  <div className='w-fit h-9 flex items-center rounded-full p-4 py-2 bg-white space-x-2'>
    <span className='text-secondary'>
      <Icon className='size-5' />
    </span>
    <span className='font-semibold text-sm text-primary'>{text}</span>
  </div>
);

export default IconLabel;

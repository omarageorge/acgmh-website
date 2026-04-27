interface SectionHeadingProps {
  text: string;
  icon?: React.ComponentType<React.SVGProps<SVGElement>>;
}

const SectionHeading = ({ text, icon: Icon }: SectionHeadingProps) => (
  <h2 className='flex items-center gap-x-2'>
    <span>{Icon && <Icon className='size-8 text-secondary' />}</span>
    <span className='font-bold text-2xl text-primary'>{text}</span>
  </h2>
);

export default SectionHeading;

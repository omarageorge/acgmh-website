import cn from 'classnames';

interface SectionTitleProps {
  children: React.ReactNode;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  light = false,
}) => {
  return (
    <h2
      className={cn(
        'font-bold text-primary mb-5 tracking-[-0.01em] text-2xl md:text-3xl',
        light && 'text-base-100!',
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;

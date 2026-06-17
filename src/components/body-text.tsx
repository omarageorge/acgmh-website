import cn from 'classnames';

interface BodyTextProps {
  children: React.ReactNode;
  light?: boolean;
}

const BodyText: React.FC<BodyTextProps> = ({ children, light = false }) => {
  return (
    <p
      className={cn(
        'text-sm sm:text-base leading-relaxed',
        light && 'text-white/75!',
      )}
    >
      {children}
    </p>
  );
};

export default BodyText;

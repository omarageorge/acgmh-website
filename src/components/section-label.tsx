import { manrope } from '@/app/fonts';
import cn from 'classnames';

interface SectionLabelProps {
  children: React.ReactNode;
  accent?: boolean;
}

const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  accent = false,
}) => {
  return (
    <p
      className={cn(
        `${manrope.className} text-xs sm:text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`,
        accent && 'text-accent!',
      )}
    >
      {children}
    </p>
  );
};

export default SectionLabel;

import { manrope } from '@/app/fonts';
import { AccentColor } from '@/data/themes';
import Link from 'next/link';

interface ThemeCardProps {
  num: number;
  page_title: string;
  subtitle: string;
  label: string;
  accent_color: AccentColor;
  href: string;
}

const ThemeCard: React.FC<ThemeCardProps> = ({
  num,
  label,
  page_title,
  subtitle,
  accent_color,
  href,
}) => (
  <Link href={href}>
    <div className='group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 no-underline'>
      {/* Header Row */}
      <div className='flex items-center gap-3'>
        {/* Number badge */}
        <div
          className={`w-10 h-10 flex-none flex items-center justify-center shrink-0 rounded-full px-2.5 py-1 text-sm font-bold leading-none ${accent_color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-secondary/10 text-secondary'}`}
        >
          {num}
        </div>
        {/* Label */}
        <p
          className={`${manrope.className} ${accent_color === 'accent' ? 'text-accent' : 'text-secondary'} font-bold uppercase text-sm tracking-[0.13em]`}
        >
          {label}
        </p>
      </div>

      {/*  Page title */}
      <div className='min-w-0'>
        <h3 className='text-base font-bold leading-snug text-primary'>
          {page_title}
        </h3>
      </div>

      {/* Description */}
      <p className='text-base leading-relaxed text-primary/80'>{subtitle}</p>

      {/* CTA */}
      <span
        className={`mt-auto text-sm font-semibold ${accent_color === 'accent' ? 'text-accent' : 'text-secondary'}`}
      >
        Explore theme →
      </span>
    </div>
  </Link>
);

export default ThemeCard;

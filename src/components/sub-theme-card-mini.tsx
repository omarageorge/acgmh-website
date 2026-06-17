import { manrope } from '@/app/fonts';
import Link from 'next/link';

interface SubThemeCardMiniProps {
  slug: string;
  label: string;
  subtitle: string;
  icon: React.ComponentType<React.SVGProps<SVGElement>>;
}

const SubThemeCardMini: React.FC<SubThemeCardMiniProps> = ({
  slug,
  label,
  subtitle,
  icon: Icon,
}) => (
  <Link href={`/themes/${slug}`}>
    <div className='h-full rounded-2xl bg-white shadow-xm border border-secondary/15 p-5 sm:p-6 transition-all duration-300 hover:shadow-sm'>
      <div className='flex items-start gap-4'>
        <div className='flex-none rounded-xl bg-secondary/10 p-3'>
          <Icon className='size-6 sm:size-7 text-secondary' />
        </div>

        <div className='min-w-0 flex-1'>
          <h3
            className={`${manrope.className} text-base sm:text-lg font-bold text-slate-900 leading-snug`}
          >
            {label}
          </h3>

          <p className='mt-2 text-sm sm:text-base leading-6 text-slate-500'>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default SubThemeCardMini;

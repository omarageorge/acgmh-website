import { manrope } from '@/app/fonts';
import Link from 'next/link';
import { ArrowLongRight } from './icons';

interface HeroProps {
  label: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  pills?: {
    text: string;
    icon?: React.ComponentType<React.SVGProps<SVGElement>>;
  }[];
}

const Hero: React.FC<HeroProps> = ({
  label,
  title,
  description,
  cta,
  pills,
}) => (
  <header className='bg-linear-to-r from-slate-950 via-slate-900 to-blue-950 py-24 relative overflow-hidden'>
    <div
      className='absolute inset-0 opacity-5'
      style={{
        backgroundImage:
          'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    ></div>
    <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
      <div className='w-full max-w-3xl space-y-10'>
        <div className=''>
          <p className='font-semibold uppercase text-accent/80 text-sm mb-4'>
            {label}
          </p>
          <h1
            className={`${manrope.className} font-extrabold leading-tight text-base-100 text-[clamp(2rem,4.2vw,3.2rem)] tracking-[-.02em] mb-4`}
          >
            {title}
          </h1>

          {/* Golden underline */}
          <div className='block w-14 h-0.75 mt-2 mb-7 bg-linear-to-r from-amber-500 to-amber-300 rounded-full'></div>

          <p className='text-base text-blue-100/75 max-w-2xl leading-relaxed'>
            {description}
          </p>
        </div>

        {cta && (
          <Link
            href={cta.href}
            className='btn btn-accent shadow-none border-none text-primary rounded-full'
          >
            {cta.label}
            <ArrowLongRight className='size-5' />
          </Link>
        )}

        {pills && pills.length > 0 && (
          <div className='flex flex-wrap gap-3'>
            {pills.map(({ text, icon: Icon }) => (
              <span
                key={text}
                className='flex-none inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white/10 text-white/80'
              >
                {Icon && <Icon className='w-4 h-4 text-accent' />}
                {text}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </header>
);
export default Hero;

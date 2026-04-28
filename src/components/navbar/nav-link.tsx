import { manrope } from '@/app/fonts';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <Link
    href={href}
    className={`${manrope.className} font-bold text-sm text-base-content hover:text-accent hover:underline hover:underline-offset-6 hover:decoration-2: hover:decoration-accent`}
  >
    {label}
  </Link>
);

export const NavLinkMobile: React.FC<NavLinkProps> = ({ href, label }) => (
  <Link
    href={href}
    className={`${manrope.className} px-4 py-2 bg-primary/10 hover:bg-primary rounded-lg border-0 text-primary hover:text-white text-left transition-all duration-150`}
  >
    {label}
  </Link>
);

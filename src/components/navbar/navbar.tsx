import { manrope } from '@/app/fonts';
import { NavBarRegistrationLink } from '../registration-link';
import { NavLink } from './nav-link';
import { navLinks } from '@/lib/data';
import Link from 'next/link';
import HamburgerMenu from './hamburger-menu';
import ConferenceLogo from '@/assets/logo.png';
import Image from 'next/image';

const Navbar = () => (
  <div className='w-full fixed top-0 left-0 z-40 bg-base-100 shadow-xs'>
    <nav className='navbar max-w-7xl h-20 mx-auto'>
      <div className='navbar-start'>
        <Link
          href='/'
          className={`${manrope.className} font-extrabold text-primary text-2xl flex items-center gap-x-2`}
        >
          <Image
            src={ConferenceLogo}
            width={48}
            height={48}
            className='w-12 h-12'
            alt=''
          />
          ACGMH
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex space-x-6'>
        {navLinks.map(({ href, label }) => (
          <NavLink key={label} href={href} label={label} />
        ))}
      </div>
      <div className='navbar-end'>
        <NavBarRegistrationLink />
        <HamburgerMenu />
      </div>
    </nav>
  </div>
);

export default Navbar;

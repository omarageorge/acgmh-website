import { manrope } from '@/app/fonts';
import { navLinks } from '@/lib/data';
import Link from 'next/link';
import Footer from '../sections/footer';
import HowToPartnerSection from '../sections/how-to-partner';
import { NavLinkMobile } from './nav-link';
import Navbar from './navbar';

type Props = {
  children: React.ReactNode;
};

const Drawer = ({ children }: Props) => (
  <div className='drawer'>
    <input id='my-drawer-1' type='checkbox' className='drawer-toggle' />
    <div className='drawer-content'>
      <Navbar />
      <div className='w-full h-20'></div>
      {/* Page content here */}
      <div className='w-full'>{children}</div>
      <Footer />
    </div>
    <div className='z-50 drawer-side md:hidden'>
      <label
        htmlFor='my-drawer-1'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>
      <ul className='menu bg-base-100 min-h-full w-80 p-6 space-y-3'>
        {/* Sidebar content here */}
        <div className='w-full h-auto py-2 rounded-md'>
          <Link
            href='/'
            className={`${manrope.className} font-extrabold text-primary text-2xl`}
          >
            ACGMH
          </Link>
        </div>

        {navLinks.map(({ href, label }) => (
          <NavLinkMobile key={label} href={href} label={label} />
        ))}
      </ul>
    </div>
  </div>
);

export default Drawer;

'use client';

import { manrope } from '@/app/fonts';
import { navLinks } from '@/data/nav-links';
import Link from 'next/link';
import { useRef } from 'react';
import Footer from '../sections/footer';
import { NavLinkMobile } from './nav-link';
import Navbar from './navbar';

type Props = {
  children: React.ReactNode;
};

const Drawer = ({ children }: Props) => {
  const drawerRef = useRef<HTMLInputElement>(null);

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };

  return (
    <div className='drawer'>
      <input
        id='my-drawer-1'
        ref={drawerRef}
        type='checkbox'
        className='drawer-toggle'
      />

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
            <li key={label} onClick={closeDrawer}>
              <NavLinkMobile href={href} label={label} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;

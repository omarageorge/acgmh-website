import { manrope } from '@/app/fonts';
import Link from 'next/link';

const Navbar = () => (
  <div className='w-full fixed top-0 left-0 z-50 bg-base-100 shadow-xs'>
    <nav className='navbar max-w-7xl h-20 mx-auto'>
      <div className='navbar-start'>
        <div className='dropdown hidden'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a
          className={`${manrope.className} font-extrabold text-primary text-2xl`}
        >
          ACGMH
        </a>
      </div>
      <div className='navbar-center hidden lg:flex space-x-6'>
        <Link
          href='#'
          className={`${manrope.className} font-bold text-sm text-base-content hover:text-accent hover:underline hover:underline-offset-6 hover:decoration-2: hover:decoration-accent`}
        >
          WHY THIS MATTERS
        </Link>
        <Link
          href='#'
          className={`${manrope.className} font-bold text-sm text-base-content`}
        >
          ABOUT
        </Link>
        <Link
          href='#'
          className={`${manrope.className} font-bold text-sm text-base-content`}
        >
          ABOUT
        </Link>
        <Link
          href='#'
          className={`${manrope.className} font-bold text-sm text-base-content`}
        >
          WHO SHOULD ATTEND
        </Link>
        <Link
          href='#'
          className={`${manrope.className} font-bold text-sm text-base-content`}
        >
          PARTNERSHIPS
        </Link>
      </div>
      <div className='navbar-end'>
        <a className='btn btn-sm sm:btn-md btn-accent text-primary rounded-lg'>
          Get Your Ticket
        </a>
      </div>
    </nav>
  </div>
);

export default Navbar;

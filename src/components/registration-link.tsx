import Link from 'next/link';

export const RegistrationLink = () => (
  <Link
    href='#'
    className='btn btn-lg btn-accent shadow-none border-none text-primary rounded-full'
  >
    Register Now
  </Link>
);

export const NavBarRegistrationLink = () => (
  <Link href='#'>
    <button className='btn btn-accent btn-sm sm:btn-md font-bold text-sm sm:text-base text-primary shadow-none rounded-full'>
      Register
    </button>
  </Link>
);

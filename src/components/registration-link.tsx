import Link from 'next/link';

export const RegistrationLink = () => (
  <Link href='#'>
    <button className='btn btn-accent btn-md sm:btn-lg rounded-lg font-bold text-sm sm:text-base text-primary'>
      Register Now
    </button>
  </Link>
);

export const NavBarRegistrationLink = () => (
  <Link href='#'>
    <button className='btn btn-accent btn-sm sm:btn-md font-bold text-sm sm:text-base text-primary shadow-none rounded-full'>
      Register
    </button>
  </Link>
);

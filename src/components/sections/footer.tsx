import { manrope } from '@/app/fonts';

const Footer = () => (
  <footer className='py-10 bg-[#000615]'>
    <div className='max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
      <span
        className={`${manrope.className} font-bold text-white text-sm sm:text-base`}
      >
        ACGMH <span className='text-accent'>2027</span>
      </span>
      <span className='text-sm sm:text-base text-blue-100/75 text-center md:text-left'>
        Africa at the Center of Global Mental Health Conference &nbsp;·&nbsp;
        Kampala, Uganda
      </span>
      <span className='text-sm sm:text-base text-blue-100/75'>
        &copy; 2027 Makerere University
      </span>
    </div>
  </footer>
);

export default Footer;

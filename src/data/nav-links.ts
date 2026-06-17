import { NavLink } from './definitions';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/abstracts', label: 'Abstracts' },
  {
    href: '/themes',
    label: 'Conference Themes',
    children: [
      { href: '/themes', label: 'Major Themes' },
      { href: '/themes/sub-themes', label: 'Sub Themes' },
    ],
  },
  { href: '/sponsor', label: 'Sponsor' },
  // { href: '/contact', label: 'Contact' },
];

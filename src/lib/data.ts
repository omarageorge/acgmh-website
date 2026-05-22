import {
  Beaker,
  Bolt,
  Briefcase,
  ComputerDesktop,
  CurrencyDollar,
  DocumentMagnifyingGlass,
  ExclamationTriangle,
  FaceSmile,
  Photo,
  ShieldCheck,
  UserGroup,
  Users,
} from '@/components/icons';
import { NavLink, TierData } from './definitions';

export const navLinks: NavLink[] = [
  { href: '/', label: 'About' },
  { href: '/', label: 'Conference Themes' },
  { href: '/', label: 'Call for Submissions' },
  { href: '/sponsor', label: 'Sponsorships' },
  { href: '/contact', label: 'Contact' },
];

export const tiers: TierData[] = [
  {
    label: 'Bronze',
    price: '$1,000',
    circleColor: '#CD7F32',
    accentColor: '#CD7F32',
    accentGradient: 'linear-gradient(90deg, #CD7F32, #E8A45A)',
    badgeBg: '#FDF0E6',
    badgeColor: '#A0622A',
    btnBg: '#FDF0E6',
    btnColor: '#A0622A',
    btnBorder: '#E8C8A0',
    btnHoverBg: '#CD7F32',
    checkColor: '#CD7F32',
    features: [
      'Acknowledgement across all materials',
      '1 delegate pass',
      'Certificate of sponsorship',
      'Social media feature',
    ],
  },
  {
    label: 'Silver',
    price: '$2,500',
    circleColor: '#8E9EAB',
    accentColor: '#8E9EAB',
    accentGradient: 'linear-gradient(90deg, #8E9EAB, #BDC8D0)',
    badgeBg: '#EEF1F3',
    badgeColor: '#5A7080',
    btnBg: '#EEF1F3',
    btnColor: '#5A7080',
    btnBorder: '#C8D4DB',
    btnHoverBg: '#8E9EAB',
    checkColor: '#8E9EAB',
    features: [
      'All Bronze benefits',
      '3 delegate passes',
      'Logo on event banner',
      'Exhibition table',
      'Brand mention in opening remarks',
    ],
  },

  {
    label: 'Platinum',
    price: '$10,000',
    circleColor: '#5B6B7A',
    accentColor: '#5B6B7A',
    accentGradient: 'linear-gradient(90deg, #5B6B7A, #9BB0BE)',
    badgeBg: '#EAECF0',
    badgeColor: '#3D5060',
    btnBg: '#EAECF0',
    btnColor: '#3D5060',
    btnBorder: '#B0BCC5',
    btnHoverBg: '#5B6B7A',
    checkColor: '#5B6B7A',
    features: [
      'All Gold benefits',
      'Unlimited delegate passes',
      'Headline logo on all collateral',
      'Keynote speaking slot (30 mins)',
      'VIP networking dinner access',
      'Exclusive post-event report',
      'Full delegate database access',
    ],
  },
  {
    label: 'Gold',
    price: '$5,000',
    circleColor: '#F0C968',
    accentColor: '#2A2518',
    accentGradient: 'linear-gradient(90deg, #C9972A, #F0C968)',
    badgeBg: '#2A2518',
    badgeColor: '#F0C968',
    btnBg: '#C9972A',
    btnColor: '#1C1A17',
    btnBorder: '#C9972A',
    btnHoverBg: '#F0C968',
    checkColor: '#F0C968',
    dark: true,
    popular: true,
    features: [
      'All Silver benefits',
      '5 delegate passes',
      'Premium logo placement',
      'Dedicated exhibition booth',
      'Speaking slot (10 mins)',
      'Branded session room',
    ],
  },
];

export const conference_themes: {
  icon: React.ComponentType<React.SVGProps<SVGElement>>;
  title: string;
  body: string;
}[] = [
  {
    icon: ShieldCheck,
    title: 'Integrating Mental Health into PHC',
    body: 'Strengthening primary healthcare systems for universal mental health coverage.',
  },
  {
    icon: ComputerDesktop,
    title: 'Digital Mental Health & AI',
    body: 'Utilizing technology to expand reach and personalize care delivery',
  },
  {
    icon: CurrencyDollar,
    title: 'Financing & Sustainability',
    body: 'Innovative funding models and demonstrating ROI for mental health investments.',
  },
  {
    icon: Users,
    title: 'Cultural & Gender Determinants',
    body: 'Tailoring interventions to diverse cultural contexts and gender-specific needs.',
  },
  {
    icon: Briefcase,
    title: 'Workforce Development',
    body: 'Task-sharing and capacity building for community health workers.',
  },
  {
    icon: Beaker,
    title: 'Research & Implementation Science',
    body: 'Moving findings from clinical trials into community practice.',
  },
  {
    icon: FaceSmile,
    title: 'Youth Mental Health',
    body: "Prioritizing the mental wellbeing of Africa's growing youth population.",
  },
  {
    icon: Photo,
    title: 'Arts, Faith & Culture',
    body: 'Engaging traditional healers and creative arts in therapeutic pathways.',
  },
  {
    icon: UserGroup,
    title: 'Social Connection',
    body: 'Combating loneliness and building strong community support networks.',
  },
  {
    icon: ExclamationTriangle,
    title: 'Suicide Prevention',
    body: 'Evidence-based strategies for crisis intervention and prevention.',
  },
  {
    icon: DocumentMagnifyingGlass,
    title: 'Substance Use',
    body: 'Addressing the intersection of mental health and addiction.',
  },
  {
    icon: Bolt,
    title: 'Trauma & Violence',
    body: 'Healing from personal, community, and systemic trauma.',
  },
];

export const cross_cutting_priorities: { title: string; body: string }[] = [
  {
    title: 'Equity and Inclusion',
    body: 'Leaving no one behind in service delivery.',
  },
  {
    title: 'Ethics and Safeguarding',
    body: 'Upholding the highest standards of care and rights.',
  },
  {
    title: 'Policy Translation',
    body: 'Turning research into actionable national policies.',
  },
  {
    title: 'Community Ownership',
    body: 'Empowering locals to lead their own mental health programs.',
  },
  {
    title: 'Scalability & Sustainability',
    body: 'Models that grow and endure beyond pilot phases',
  },
  {
    title: 'Interdisciplinary Collaboration',
    body: 'Cross-sectoral partnerships for holistic health.',
  },
];

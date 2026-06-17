export type NavLink = {
  href: string;
  label: string;
  children?: NavLink[];
};

export interface TierData {
  label: string;
  price: string;
  circleColor: string;
  accentColor: string;
  accentGradient: string;
  badgeBg: string;
  badgeColor: string;
  btnBg: string;
  btnColor: string;
  btnBorder: string;
  btnHoverBg: string;
  checkColor: string;
  dark?: boolean;
  popular?: boolean;
  features: string[];
}

export enum Color {
  Primary = '#0b1f3a',
  Secondary = '#1f7a6b',
  Accent = '#d4af37',
}

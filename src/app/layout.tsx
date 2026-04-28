import Drawer from '@/components/navbar/drawer';
import type { Metadata } from 'next';
import { publicSans } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'ACGMH International Conference 2027',
  description:
    'Africa at the Centre of Global Mental Health International Conference is a landmark three-day gathering in Kampala bringing together 500+ delegates from across Africa and the world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      data-theme='custom'
      className={`${publicSans.className} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <Drawer>{children}</Drawer>
      </body>
    </html>
  );
}

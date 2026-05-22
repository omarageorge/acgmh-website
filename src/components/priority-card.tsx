import React from 'react';
import { CheckCircle } from './icons';
import { manrope } from '@/app/fonts';

interface PriorityCardProps {
  title: string;
  body: string;
}

const PriorityCard: React.FC<PriorityCardProps> = ({ title, body }) => (
  <div className='flex items-start h-full gap-2 '>
    <div className='flex-none pt-1'>
      <CheckCircle className='size-5 sm:size-6 text-accent' />
    </div>

    <div className='flex-1 min-w-0'>
      <h4
        className={`${manrope.className} text-base font-semibold leading-snug text-white sm:text-lg`}
      >
        {title}
      </h4>

      <p className='mt-2 text-sm leading-6 text-white/70 sm:text-base'>
        {body}
      </p>
    </div>
  </div>
);

export default PriorityCard;

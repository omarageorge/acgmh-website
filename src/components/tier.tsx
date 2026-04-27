import { TierData } from '@/lib/definitions';
import TierCircle from './tier-circle';
import { manrope } from '@/app/fonts';
import CheckIcon from './icons/check-icon';

const Tier: React.FC<TierData> = ({
  label,
  price,
  circleColor,
  accentColor,
  badgeBg,
  badgeColor,
  features,
}) => (
  <div
    className='bg-base-100 rounded-2xl p-6 flex flex-col border-t-4 shadow-xs'
    style={{ borderColor: accentColor }}
  >
    {/* Tier Badge */}
    <div
      className='inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 mb-4 rounded-full w-fit m-0.5 py-1.5 px-3'
      style={{ backgroundColor: badgeBg }}
    >
      <TierCircle color={circleColor} />
      <span
        className='text-sm font-semibold uppercase'
        style={{ color: badgeColor }}
      >
        {label}
      </span>
    </div>

    {/* Tier name and price */}
    <div className={`${manrope.className} font-bold text-4xl`}>{price}</div>
    <div className='text-sm text-[#9C8C78] mt-1'>and above</div>

    <hr className='border-0 border-t-2 border-[#ECEAE5] my-5 mx-0' />

    {/* Features */}
    <ul className='flex flex-col gap-3 flex-1 mb-2 p-0'>
      {features.map((feature, index) => (
        <li key={index} className='flex items-start gap-2.5'>
          <span>
            <CheckIcon className='size-4' style={{ color: circleColor }} />
          </span>
          <span className='text-sm text-primary'>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Tier;

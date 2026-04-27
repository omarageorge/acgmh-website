interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => (
  <div className='bg-white/5 border border-white/10 p-6 rounded-lg space-y-4'>
    <h3 className='font-bold text-xl text-accent'>{title}</h3>
    <p className='font-normal text-base text-white/70'>{description}</p>
  </div>
);
export default BenefitCard;

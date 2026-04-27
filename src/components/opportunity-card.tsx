interface OpportunityCardProps {
  title: string;
  description: string;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  title,
  description,
}) => (
  <div className='w-full border border-primary/10 bg-base-100 rounded-lg p-6 space-y-2 sm:space-y-3'>
    <h3 className='font-bold text-primary'>{title}</h3>
    <p>{description}</p>
  </div>
);

export default OpportunityCard;

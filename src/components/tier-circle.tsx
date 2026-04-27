interface TierCircleProps {
  color: string;
}

const TierCircle: React.FC<TierCircleProps> = ({ color }) => (
  <svg width='10' height='10' viewBox='0 0 12 12' fill='none'>
    <circle cx='6' cy='6' r='5' fill={color} />
  </svg>
);

export default TierCircle;

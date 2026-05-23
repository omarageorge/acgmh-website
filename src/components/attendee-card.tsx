interface AttendeeCardProps {
  icon: React.ComponentType<React.SVGProps<SVGElement>>;
  label: string;
}

const AttendeeCard: React.FC<AttendeeCardProps> = ({ icon: Icon, label }) => (
  <div className='rounded-xl bg-secondary/5 flex flex-col items-center justify-center py-6 space-y-3'>
    <Icon className='size-6 sm:size-7 text-secondary' />
    <p>{label}</p>
  </div>
);

export default AttendeeCard;

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
}) => (
  <div className='w-full h-auto flex flex-col items-start gap-y-3 border border-primary/20 rounded-xl px-6 py-4 '>
    <h2 className='font-bold text-5xl text-primary/20'>{step}</h2>
    <h3 className='font-bold text-xl text-primary'>{title}</h3>
    <p>{description}</p>
  </div>
);
export default ProcessStep;

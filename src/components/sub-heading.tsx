interface SubHeadingProps {
  children: React.ReactNode;
  defaultColor?: boolean;
  left?: boolean;
}

const SubHeading: React.FC<SubHeadingProps> = ({
  children,
  defaultColor = true,
  left = false,
}) => (
  <p
    className={`w-full text-lg ${left ? 'text-left' : 'max-w-2xl mx-auto text-center'} leading-7 ${defaultColor === false && 'text-white/70'}`}
  >
    {children}
  </p>
);

export default SubHeading;

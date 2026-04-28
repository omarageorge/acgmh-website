import Heading from '../heading';
import ProcessStep from '../process-step';
import SubHeading from '../sub-heading';

const HowToPartnerSection = () => (
  <section id='partnership' className='w-full h-auto bg-neutral'>
    <div className='w-full max-w-7xl h-auto mx-auto px-6 py-12 sm:py-16 md:py-20 lg:py-24 space-y-12 sm:space-y-16 md:space-y-20'>
      <div className=''>
        <Heading text='How To Partner With Us' />
        <SubHeading>
          Partnership commitments are accepted on a first-come, first-served
          basis. Tier availability is limited. Early expressions of interest are
          strongly encouraged.
        </SubHeading>
      </div>

      <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        <ProcessStep
          step='01'
          title='Tier Selection'
          description='Review this prospectus and select your preferred tier or in-kind option.'
        />
        <ProcessStep
          step='02'
          title='Registration'
          description='Contact the Summit Secretariat to register interest and confirm tier availability.'
        />
        <ProcessStep
          step='03'
          title='Partnership Agreement'
          description='Complete and sign the Summit Partnership Agreement.'
        />
        <ProcessStep
          step='04'
          title='Commitment'
          description='Submit payment or confirm in-kind commitment and provide your logo and organisational profile.'
        />
      </div>
    </div>
  </section>
);

export default HowToPartnerSection;

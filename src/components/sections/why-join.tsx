import BenefitCard from '../benefit-card';
import Heading from '../heading';
import SubHeading from '../sub-heading';

const WhyJoinSection = () => (
  <section id='benefits' className='w-full h-auto bg-[#000615]'>
    <div className='w-full max-w-7xl h-auto mx-auto px-6 py-12 sm:py-16 md:py-20 lg:py-24 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24'>
      <div className=''>
        <Heading text='Why Join Us' color='base-100' />
        <SubHeading defaultColor={false}>
          Mental health is not a niche. It is the foundation of human
          productivity, family stability, economic growth, and social cohesion.
        </SubHeading>
      </div>

      <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        <BenefitCard
          title='Global Visibility'
          description='Brand presence across all platforms reaching 500+ global leaders'
        />
        <BenefitCard
          title='Policy Alignment'
          description='Align with WHO CMHAP 2013 - 2030, Africa CDC Strategy, and SDG 3.4'
        />
        <BenefitCard
          title='Strategic Relationships'
          description='Build strategic relationships with researchers, donors, ac, and NGOs'
        />
        <BenefitCard
          title='Impact'
          description='Demonstrate commitment to mental health equity and universal health coverage'
        />
      </div>
    </div>
  </section>
);

export default WhyJoinSection;

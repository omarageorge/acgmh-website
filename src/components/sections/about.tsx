import SpekeResortEntranceImage from '@/assets/a_picture_of_speke_resort_munyonyo_entrance.jpg';
import { Color } from '@/lib/definitions';
import Image from 'next/image';
import ConferenceTrackCard from '../conference-track-card';
import Heading from '../heading';
import BanknotesIcon from '../icons/banknotes-icon';
import BeakerIcon from '../icons/beaker-icon';
import CheckCircleIcon from '../icons/check-circle-icon';
import DocumentTextIcon from '../icons/document-text-icon';
import SubHeading from '../sub-heading';

const AboutSection = () => (
  <section id='about' className='w-full h-auto'>
    <div className='w-full max-w-7xl h-auto mx-auto px-6 py-12 sm:py-16 md:py-20 lg:py-24 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24'>
      <div className=''>
        <Heading text='Mental Health Cannot Wait' />
        <SubHeading>
          Over{' '}
          <span className='font-bold text-primary'>116 million people</span>{' '}
          across the African continent are living with mental health conditions
          and fewer than one in 10 receives any care, the stakes could not be
          higher.
        </SubHeading>
      </div>

      {/* Conference Tracks */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <ConferenceTrackCard
          icon={BeakerIcon}
          title='Public Health Systems'
          description='Reimagining health systems to integrate mental wellness at the primary care level.'
          color={Color.Secondary}
        />
        <ConferenceTrackCard
          icon={DocumentTextIcon}
          title='Policy Agendas'
          description='Influencing continental and global frameworks to prioritize mental health equity.'
          color={Color.Accent}
        />
        <ConferenceTrackCard
          icon={BanknotesIcon}
          title='Investment Priorities'
          description='Mobilizing resources from public and private sectors for scalable interventions.'
          color={Color.Primary}
        />
      </div>

      <div className='w-full h-auto flex flex-col lg:flex-row items-center gap-x-12 gap-y-10'>
        <div className='w-full lg:w-1/2'>
          <Image
            src={SpekeResortEntranceImage}
            width={1200}
            height={800}
            placeholder='blur'
            alt='An image of the speke resort munyonyo entrance'
            className='w-full h-auto rounded-lg object-cover shadow-lg'
          />
        </div>

        {/* Text */}
        <div className='w-full lg:w-1/2'>
          <Heading
            text='More Than a Conference — A Turning Point'
            left={true}
          />
          <SubHeading left={true}>
            The Africa at the Centre Conference 2027 is where the evidence meets
            the will to act. We invite you to be part of that moment — not as a
            peripheral sponsor, but as a co-architect of what comes next.
          </SubHeading>

          <ul className='list-none space-y-4 mt-6'>
            <li>
              <CheckCircleIcon className='w-6 h-6 text-secondary inline-block mr-2' />
              <span>Interdisciplinary Dialogue</span>
            </li>
            <li>
              <CheckCircleIcon className='w-6 h-6 text-secondary inline-block mr-2' />
              <span>Global Leadership</span>
            </li>
            <li>
              <CheckCircleIcon className='w-6 h-6 text-secondary inline-block mr-2' />
              <span>Action-Oriented</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default AboutSection;

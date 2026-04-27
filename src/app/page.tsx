import SpekeResortConferenceRoomImage from '@/assets/a_picture_of_speke_resort_munyonyo_conference_hall.jpg';
import SpekeResortEntranceImage from '@/assets/a_picture_of_speke_resort_munyonyo_entrance.jpg';
import BenefitCard from '@/components/benefit-card';
import ConferenceTrackCard from '@/components/conference-track-card';
import Heading from '@/components/heading';
import IconLabel from '@/components/icon-label';
import BanknotesIcon from '@/components/icons/banknotes-icon';
import BeakerIcon from '@/components/icons/beaker-icon';
import CalendarIcon from '@/components/icons/calendar-icon';
import CheckCircleIcon from '@/components/icons/check-circle-icon';
import DocumentTextIcon from '@/components/icons/document-text-icon';
import HandshakeIcon from '@/components/icons/handshake-icon';
import LocationIcon from '@/components/icons/location-icon';
import UserGroupIcon from '@/components/icons/user-group-icon';
import Navbar from '@/components/navbar';
import OpportunityCard from '@/components/opportunity-card';
import SectionHeading from '@/components/section-heading';
import SubHeading from '@/components/sub-heading';
import Tier from '@/components/tier';
import { tiers } from '@/lib/data';
import { Color } from '@/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';
import { manrope } from './fonts';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='w-full pt-20'>
        <header className='w-full h-auto lg:h-[calc(100vh-5rem)] bg-base-300'>
          <div className='w-full max-w-7xl mx-auto h-full flex flex-col gap-x-6 lg:flex-row items-center justify-between px-6 py-12 space-y-10 lg:space-y-0'>
            {/* Header content */}
            <div className='space-y-6'>
              <h1
                className={`${manrope.className} font-extrabold text-primary text-4xl sm:text-5xl lg:text-6xl leading-tight`}
              >
                Africa at the Centre of Global Mental Health
              </h1>

              {/* Conference description */}
              <p className='font-normal leading-7 text-lg text-primary lg:max-w-2xl'>
                A landmark international conference bringing together leaders,
                researchers, policymakers, and innovators to shape the future of
                mental health in Africa and beyond.
              </p>

              {/* Conference image for small devices */}
              <div className='lg:hidden w-full py-6'>
                <Image
                  src={SpekeResortConferenceRoomImage}
                  alt='An image of speke resort munyonyo conference room small screen version'
                  className='w-full h-auto rounded-lg object-cover shadow-lg'
                />
              </div>

              {/* Key Highlight */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center flex-wrap space-y-4 sm:space-y-0  sm:space-x-6'>
                <IconLabel icon={LocationIcon} text='Kampala, Uganda' />
                <IconLabel icon={CalendarIcon} text='5-7 April 2027' />
                <IconLabel icon={UserGroupIcon} text='500+ Global Delegates' />
              </div>

              {/* Call to action */}
              <div className='flex flex-row items-start sm:items-center space-y-4 sm:space-y-0 space-x-4 sm:space-x-6'>
                <Link href='#'>
                  <button className='btn btn-accent btn-md sm:btn-lg rounded-lg font-bold text-sm sm:text-base text-primary'>
                    Get Your Ticket
                  </button>
                </Link>

                <Link href='#'>
                  <button className='btn btn-md sm:btn-lg border-2 border-primary rounded-lg font-bold text-sm sm:text-base text-primary hover:bg-primary hover:text-neutral'>
                    Partner With Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Header */}
            {/* <div className='w-full max-w-md lg:max-w-lg xl:max-w-xl'> */}
            <div className='hidden lg:block w-full max-w-xl'>
              <Image
                src={SpekeResortConferenceRoomImage}
                alt='An image of speke resort munyonyo conference room'
                className='w-full h-auto rounded-2xl object-cover lg:rotate-6 shadow-lg'
              />
            </div>
          </div>
        </header>

        {/* Main content */}

        <main className='w-full h-auto bg-base-100'>
          {/* First Section */}
          <section className='w-full h-auto'>
            <div className='w-full max-w-7xl h-auto mx-auto px-6 py-12 sm:py-16 md:py-20 lg:py-24 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24'>
              <div className=''>
                <Heading text='Mental Health Cannot Wait' />
                <SubHeading>
                  Over{' '}
                  <span className='font-bold text-primary'>
                    116 million people
                  </span>{' '}
                  across the African continent are living with mental health
                  conditions and fewer than one in 10 receives any care, the
                  stakes could not be higher.
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
                {/* Image */}
                <div className='w-full lg:w-1/2'>
                  <Image
                    src={SpekeResortEntranceImage}
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
                    The Africa at the Centre Conference 2027 is where the
                    evidence meets the will to act. We invite you to be part of
                    that moment — not as a peripheral sponsor, but as a
                    co-architect of what comes next.
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

          {/* Second Section */}
          <section className='w-full h-auto bg-[#000615]'>
            <div className='w-full max-w-7xl h-auto mx-auto px-6 py-12 sm:py-16 md:py-20 lg:py-24 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24'>
              <div className=''>
                <Heading text='Why Join Us' color='base-100' />
                <SubHeading defaultColor={false}>
                  Mental health is not a niche. It is the foundation of human
                  productivity, family stability, economic growth, and social
                  cohesion.
                </SubHeading>
              </div>

              <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                <BenefitCard
                  title='Global Visibility'
                  description='Brand presence across all platforms reaching 500+ global leaders'
                />
                <BenefitCard
                  title='Policy Alignment'
                  description='Align with WHO CMHAP 2013–2030, Africa CDC Strategy, and SDG 3.4'
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

          {/* Third Section */}
          <section className='w-full h-auto bg-[#f5f3ef]'>
            <div className='w-full max-w-7xl h-auto mx-auto px-6 py-12 sm:py-16 md:py-20 lg:py-24 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24'>
              <div className=''>
                <Heading text='Sponsorship Tiers' />
                <SubHeading>
                  We invite your organisation to become a partner of the Africa
                  at the Centre of Global Mental Health International Conference
                  2027
                </SubHeading>
              </div>

              {/* Sponsorship Tiers Content */}
              {/* Responsive grid repeat 4 */}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {tiers.map((tier, i) => (
                  <Tier key={i} {...tier} />
                ))}
              </div>

              {/* In-Kind Partnerships */}
              <div>
                <SectionHeading
                  text='In-Kind Partnerships'
                  icon={HandshakeIcon}
                />

                <div className='w-full h-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                  <OpportunityCard
                    title='Catering & Hospitality'
                    description='Cover coffee breaks, welcome dinner, or closing reception → recognition equivalent to monetary value'
                  />
                  <OpportunityCard
                    title='AV, Technology & Streaming'
                    description='Provide hybrid streaming infrastructure or conference app → Platinum if full cost covered'
                  />
                  <OpportunityCard
                    title='Publications & Printing'
                    description='Sponsor proceedings, programme booklet, or delegate bags → Gold/Silver recognition'
                  />
                  <OpportunityCard
                    title='Photography & Film'
                    description='Professional event documentation and highlight reel → Silver recognition'
                  />
                  <OpportunityCard
                    title='Translation & Interpretation'
                    description='Simultaneous EN/FR interpretation or captioning → Gold if full service covered'
                  />
                  <OpportunityCard
                    title='Student Bursaries'
                    description='Fund travel and accommodation for early-career delegates → Named bursary scheme'
                  />
                </div>

                <div className='border border-secondary/60 bg-secondary/5 rounded-xl p-6 mt-8 space-y-2 sm:space-y-3'>
                  <h1 className='font-semibold text- text-primary'>
                    Friends of the Conference | Any contribution below USD 1,000
                  </h1>
                  <p>
                    Individuals, community organisations, and grassroots groups
                    are warmly welcomed. Friends receive a personalised
                    certificate, acknowledgement in the programme, and the
                    knowledge that their contribution directly supports a young
                    African mental health scholar.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Fourth Section */}
          <section className='w-full h-auto bg-neutral'>
            <div className='w-full max-w-7xl h-auto mx-auto px-6 py-12 sm:py-16 md:py-20 lg:py-24 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24'>
              <div className=''>
                <Heading text='How To Partner With Us' />
                <SubHeading>
                  Partnership commitments are accepted on a first-come,
                  first-served basis. Tier availability is limited. Early
                  expressions of interest are strongly encouraged.
                </SubHeading>
              </div>

              <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                <div className=''>
                  <h2 className='font-bold text-5xl text-primary/20'>01</h2>
                  <h3 className='font-bold text-xl text-primary'>
                    Tier Selection
                  </h3>
                  <p>
                    Review this prospectus and select your preferred tier or
                    in-kind option.
                  </p>
                </div>
                <div className=''>
                  <h2 className='font-bold text-5xl text-primary/20'>02</h2>
                  <h3 className='font-bold text-xl text-primary'>
                    Registration
                  </h3>
                  <p>
                    Contact the Summit Secretariat to register interest and
                    confirm tier availability.
                  </p>
                </div>
                <div className=''>
                  <h2 className='font-bold text-5xl text-primary/20'>03</h2>
                  <h3 className='font-bold text-xl text-primary'>
                    Summit Agreement
                  </h3>
                  <p>Complete and sign the Summit Partnership Agreement.</p>
                </div>
                <div className=''>
                  <h2 className='font-bold text-5xl text-primary/20'>04</h2>
                  <h3 className='font-bold text-xl text-primary'>Commitment</h3>
                  <p>
                    Submit payment or confirm in-kind commitment and provide
                    your logo and organisational profile.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

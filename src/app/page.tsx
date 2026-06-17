import SpekeResortConferenceRoomImage from '@/assets/a_picture_of_speke_resort_munyonyo_conference_hall.jpg';
import IconLabel from '@/components/icon-label';
import { Calendar, MapPin, UserGroup } from '@/components/icons';
import AboutSection from '@/components/sections/about';
import SubConferenceThemes from '@/components/sections/sub-conference-themes';
import WhoShouldAttend from '@/components/sections/who-should-attend';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { manrope } from './fonts';

export const metadata: Metadata = {
  title: 'Africa at the Centre of Global Mental Health Conference 2027',
  description:
    'Join us for a landmark international conference in 2027, bringing together leaders, researchers, policymakers, and innovators to shape the future of mental health in Africa and beyond. Explore groundbreaking research, innovative solutions, and collaborative opportunities to advance mental health care across the continent.',
};

export default function Home() {
  return (
    <>
      <div className='w-full'>
        <header
          id='home'
          className='w-full h-auto lg:h-[calc(100vh-5rem)] bg-base-300'
        >
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
                  width={1196}
                  height={900}
                  placeholder='blur'
                  className='w-full h-auto rounded-lg object-cover shadow-lg'
                  alt='An image of speke resort munyonyo conference room small screen version'
                />
              </div>

              {/* Key Highlight */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center flex-wrap space-y-4 sm:space-y-0  sm:space-x-6'>
                <IconLabel icon={MapPin} text='Makerere University' />
                <IconLabel icon={Calendar} text='7-9 April 2027' />
                <IconLabel icon={UserGroup} text='500+ Global Delegates' />
              </div>

              {/* Call to action */}
              <div className='flex flex-row items-start sm:items-center space-y-4 sm:space-y-0 space-x-4 sm:space-x-6'>
                <Link
                  href='#'
                  className='btn btn-lg btn-accent shadow-none border-none text-primary rounded-full'
                >
                  Register Now
                </Link>
                <Link
                  href='/sponsor'
                  className='btn btn-lg btn-ghost shadow-none border border-primary text-primary rounded-full'
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Image Header */}
            {/* <div className='w-full max-w-md lg:max-w-lg xl:max-w-xl'> */}
            <div className='hidden lg:block w-full max-w-xl'>
              <Image
                src={SpekeResortConferenceRoomImage}
                width={1196}
                height={900}
                placeholder='blur'
                alt='An image of speke resort munyonyo conference room'
                className='w-full h-auto rounded-2xl object-cover lg:rotate-6 shadow-lg'
              />
            </div>
          </div>
        </header>

        {/* Main content */}

        <main className='w-full h-auto bg-base-100'>
          <AboutSection />
          <SubConferenceThemes />
          <WhoShouldAttend />
        </main>
      </div>
    </>
  );
}

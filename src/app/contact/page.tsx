import ContactInfo from '@/components/contact-info';
import BuildingLibrary from '@/components/icons/building-library';
import Envelope from '@/components/icons/envelope';
import LocationIcon from '@/components/icons/location-icon';
import Phone from '@/components/icons/phone';
import HowToPartnerSection from '@/components/sections/how-to-partner';
import WhyJoinSection from '@/components/sections/why-join';
import { manrope } from '../fonts';

function ContactPage() {
  return (
    <>
      <section className=''>
        <div className='w-full max-w-7xl h-auto mx-auto px-6 py-12 sm:py-16 md:py-20 lg:py-24 space-y-12 sm:space-y-16'>
          <div className='space-y-3'>
            <h1
              className={`${manrope.className} font-bold text-base sm:text-xl text-secondary uppercase`}
            >
              Summit Secretariat
            </h1>
            <p className='font-extrabold text-primary text-3xl sm:text-5xl lg:text-6xl leading-tight'>
              Assoc. Prof. Rosco Kasujja
            </p>
          </div>

          <div className='w-full grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-10'>
            <ContactInfo
              icon={BuildingLibrary}
              title='Institution'
              description='Dept. of Mental Health & Community Psychology, Makerere University'
            />
            <ContactInfo
              icon={LocationIcon}
              title='Location'
              description='Makerere University'
            />
            <ContactInfo
              icon={Envelope}
              title='Email Address'
              description='secretariat@mentalhealth.ug'
            />
            <ContactInfo
              icon={Phone}
              title='Direct Line'
              description='+256 414 531 902'
            />
          </div>
        </div>
      </section>
      <WhyJoinSection />
      <HowToPartnerSection />
    </>
  );
}

export default ContactPage;

import ContactInfo from '@/components/contact-info';
import Hero from '@/components/hero';
import { BuildingLibrary, Envelope, MapPin, Phone } from '@/components/icons';
import { manrope } from '../fonts';

function ContactPage() {
  return (
    <>
      <Hero
        label='Contact Info · ACGMH 2027'
        title='Get in Touch'
        description='We would love to hear from you!'
      />

      <section className=''>
        <div className='w-full max-w-7xl h-auto mx-auto px-6 py-12 sm:py-16 md:py-20 lg:py-24 space-y-12 sm:space-y-16'>
          <div className='space-y-3'>
            <p className={` font-bold text-md text-secondary uppercase`}>
              Summit Secretariat
            </p>
            <h1
              className={`${manrope.className} font-bold leading-tight text-primary text-left text-3xl sm:text-4xl lg:text-5xl mb-6`}
            >
              Assoc. Prof. Rosco Kasujja
            </h1>
          </div>

          <div className='w-full grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-10'>
            <ContactInfo
              icon={BuildingLibrary}
              title='Institution'
              description='Dept. of Mental Health & Community Psychology, Makerere University'
            />
            <ContactInfo
              icon={MapPin}
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
    </>
  );
}

export default ContactPage;

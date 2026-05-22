import Heading from '@/components/heading';
import { Handshake } from '@/components/icons';
import OpportunityCard from '@/components/opportunity-card';
import SectionHeading from '@/components/section-heading';
import HowToPartnerSection from '@/components/sections/how-to-partner';
import WhyJoinSection from '@/components/sections/why-join';
import SubHeading from '@/components/sub-heading';
import Tier from '@/components/tier';
import { tiers } from '@/lib/data';

function PartnershipPage() {
  return (
    <>
      <section className='w-full h-auto bg-[#f5f3ef]'>
        <div className='w-full max-w-7xl h-auto mx-auto px-6 py-12 sm:py-16 md:py-20 lg:py-24 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24'>
          <div className=''>
            <Heading text='Sponsorship Tiers' />
            <SubHeading>
              We invite your organisation to become a partner of the Africa at
              the Centre of Global Mental Health International Conference 2027
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
            <SectionHeading text='In-Kind Partnerships' icon={Handshake} />

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
                Individuals, community organisations, and grassroots groups are
                warmly welcomed. Friends receive a personalised certificate,
                acknowledgement in the programme, and the knowledge that their
                contribution directly supports a young African mental health
                scholar.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhyJoinSection />
      <HowToPartnerSection />
    </>
  );
}

export default PartnershipPage;

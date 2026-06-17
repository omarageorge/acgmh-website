import BodyText from '@/components/body-text';
import GoldRule from '@/components/gold-rule';
import Hero from '@/components/hero';
import { ArrowLongRight } from '@/components/icons';
import SectionLabel from '@/components/section-label';
import SectionTitle from '@/components/section-title';
import MajorConferenceThemes from '@/components/sections/major-conference-themes';
import { major_conference_themes } from '@/data/major-themes';
import { Metadata } from 'next';
import Link from 'next/link';
import { manrope } from '../fonts';

export const metadata: Metadata = {
  title: 'Conference Themes — ACGMHC 2027',
  description:
    "Explore the fifteen interconnected sub-themes framing the conference's core focus on innovation, equity, and resilience in community-based mental health systems across Africa and the global south.",
};

export default function Themes() {
  return (
    <>
      <Hero
        label='ACGMH 2027  ·  Makerere University, Kampala'
        title='Major Conference Themes'
        description='Strengthening Community-Based Mental Health Systems: Innovation, Equity, and Resilience. Three major conference tracks consolidate our sub-themes while communicating an African-centered, systems-focused vision for global mental health.'
        pills={[
          { text: '3 Major Themes' },
          { text: '15 Sub-Themes' },
          { text: '10 Cross-Cutting Priorities' },
        ]}
      />

      <GoldRule />

      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <SectionLabel>Why Three Themes</SectionLabel>
            <SectionTitle> Consolidated Tracks, Consistent Vision</SectionTitle>
            <BodyText>
              Based on the overarching vision of &ldquo;Strengthening
              Community-Based Mental Health Systems: Innovation, Equity, and
              Resilience,&rdquo; the themes have been strategically consolidated
              into three major conference tracks that are broad enough to
              accommodate the existing sub-themes while clearly communicating
              the conference&rsquo;s African-centered vision and systems focus.
            </BodyText>
          </div>
        </div>
      </section>

      <GoldRule />

      {/* Major Conference Themes */}
      {major_conference_themes.map((theme) => (
        <MajorConferenceThemes key={theme.id} {...theme} />
      ))}

      <GoldRule />

      <section className='py-16 bg- flex flex-col items-center justify-center gap-6'>
        <Link
          href='/themes/sub-themes'
          className='btn sm:btn-lg btn-ghost shadow-none border border-accent/33 text-accent bg-accent/10 hover:bg-accent/20 rounded-full'
        >
          Browse All (15) Sub-Themes
        </Link>
      </section>

      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='mb-10 max-w-2xl'>
            <SectionLabel accent={true}>Across Every Theme</SectionLabel>

            <SectionTitle>Cross-Cutting Priorities</SectionTitle>

            <BodyText>
              The following principles apply across all conference themes and
              guide every submission, panel, and discussion at ACGMH 2027.
            </BodyText>
          </div>

          <div className='flex flex-wrap gap-3'>
            {[
              'Equity and inclusion',
              'Community ownership and participation',
              'Ethics and safeguarding',
              'African-led and locally grounded solutions',
              'Scalability and sustainability',
              'Interdisciplinary collaboration',
              'Human rights and dignity',
              'Evidence-informed practice and policy translation',
              'Youth and lived experience engagement',
              'Cultural responsiveness and contextual adaptation',
            ].map((priority) => (
              <span
                key={priority}
                className='priority-chip px-5 py-2.5 bg-white border border-gray-200 rounded-full font-semibold text-sm sm:text-base text-on-surface cursor-default shadow-sm'
              >
                {priority}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Positioning */}
      <section className='bg-linear-to-r from-slate-950 via-slate-900 to-blue-950 py-24 relative overflow-hidden'>
        <div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        ></div>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
          <div className='grid lg:grid-cols-5 gap-14 items-start'>
            <div className='lg:col-span-2'>
              <SectionLabel accent>Conference Positioning</SectionLabel>
              <SectionTitle light>
                From the Margins to the Center of Global Mental Health
              </SectionTitle>
              <BodyText light>
                The conference seeks to reposition Africa from the margins to
                the center of global mental health conversations.
              </BodyText>
            </div>
            <div className='lg:col-span-3 grid sm:grid-cols-2 gap-4'>
              {[
                {
                  number: '01',
                  text: 'Elevating African scholarship, practice, and lived experience',
                },
                {
                  number: '02',
                  text: 'Strengthening community-based systems of care',
                },
                {
                  number: '03',
                  text: 'Promoting innovation grounded in local realities',
                },
                {
                  number: '04',
                  text: 'Advancing culturally meaningful, scalable, and sustainable mental health solutions for Africa and the world',
                },
              ].map(({ number, text }) => (
                <div
                  key={number}
                  className='pos-card p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)]'
                >
                  <p
                    className={`${manrope.className} font-extrabold text-accent mb-3 text-2xl`}
                  >
                    {number}
                  </p>

                  <BodyText light>{text}</BodyText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6'>
          <div>
            <SectionLabel>Ready To Contribute</SectionLabel>

            <SectionTitle>
              Submit your abstract under any major theme
            </SectionTitle>
          </div>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='#'
              className='btn btn-accent shadow-none border-none text-primary rounded-full'
            >
              Submit Now
              <ArrowLongRight className='size-5' />
            </Link>

            <Link
              href='/themes/sub-themes'
              className='btn btn-ghost shadow-none border border-primary text-primary hover:bg-primary/10 rounded-full'
            >
              Browse Detailed Sub-Themes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

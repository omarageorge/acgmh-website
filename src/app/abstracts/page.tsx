import GoldRule from '@/components/gold-rule';
import Hero from '@/components/hero';
import {
  ArrowLongRight,
  Calendar,
  Check,
  FaceSmile,
  MapPin,
} from '@/components/icons';
import { Metadata } from 'next';
import Link from 'next/link';
import { manrope } from '../fonts';

export const metadata: Metadata = {
  title: 'Call for Abstracts — ACGMHC 2027',
  description:
    'We warmly invite submissions for presentations, posters, workshops, symposia, IGNITE talks, panels, and community dialogue sessions for our inaugural conference at Makerere University, Kampala.',
};

function AbstractsPage() {
  return (
    <>
      <Hero
        label='Call for Abstracts · ACGMH 2027'
        title='Africa at the Center of Global Mental Health'
        description='We warmly invite submissions for presentations, posters, workshops, symposia, IGNITE talks, panels, and community dialogue sessions for our inaugural conference at Makerere University, Kampala.'
        cta={{ label: 'Submit an Abstract', href: '#' }}
        pills={[
          { text: ' 7 - 9 April 2027', icon: Calendar },
          { text: 'Makerere University, Kampala', icon: MapPin },
          { text: 'Deadline: November 2026', icon: FaceSmile },
          { text: 'Pre-Conference Workshops: 5 - 6 April', icon: Check },
        ]}
      />

      <GoldRule />

      {/* STATS BAND */}
      <section className='bg-white py-14'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='grid grid-cols-3 divide-x divide-gray-200'>
            {[
              {
                val: '2027',
                label: 'Inaugural Conference',
                color: 'text-primary',
              },
              {
                val: '3 Days',
                label: '7 - 9 April + pre-workshops',
                color: 'text-secondary',
              },
              {
                val: '8+',
                label: 'Submission categories',
                color: 'text-accent',
              },
            ].map(({ val, label, color }) => (
              <div key={val} className='px-8 first:pl-0'>
                <p className={`font-bold text-5xl ${color} mb-1`}>{val}</p>
                <p className='text-base'>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldRule />

      {/* SUBMISSION CATEGORIES */}
      <section className='py-24 bg-neutral'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='mb-14'>
            <p
              className={`${manrope.className} text-sm sm:text-base font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
              style={{ letterSpacing: '0.13em' }}
            >
              Submission Formats
            </p>
            <h2 className='font-bold text-primary mb-5 tracking-[-0.01em] text-3xl'>
              Presentation Categories
            </h2>
            <p className='text-base max-w-xl leading-relaxed'>
              Choose the format that best fits your work. All submissions are
              peer-reviewed by the Scientific Committee.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {/* Oral */}
            <div className='bg-white border border-gray-200 rounded-2xl p-7 shadow-card flex flex-col'>
              <div
                className='w-10 h-10 rounded-xl flex items-center justify-center mb-5'
                style={{ background: 'rgba(0,6,21,0.05)' }}
              >
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                  <rect
                    x='2'
                    y='3'
                    width='16'
                    height='11'
                    rx='2'
                    stroke='#0b1f3a'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M7 17h6M10 14v3'
                    stroke='#0b1f3a'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
              <h3 className='font-bold text-primary text-lg mb-2'>
                Oral Presentations
              </h3>
              <p className='text-base leading-relaxed mb-5 flex-1'>
                Traditional presentations showcasing completed or emerging
                research, implementation experiences, innovations, or policy
                initiatives.
              </p>
              <div className='flex flex-wrap gap-2'>
                <span
                  className='px-3 py-1 text-primary text-xs sm:text-sm font-body font-semibold rounded-full'
                  style={{ background: 'rgba(0,6,21,0.06)' }}
                >
                  15 min presentation
                </span>
                <span
                  className='px-3 py-1 text-primary text-xs sm:text-sm font-body font-semibold rounded-full'
                  style={{ background: 'rgba(0,6,21,0.06)' }}
                >
                  5 min discussion
                </span>
                <span
                  className='px-3 py-1 text-accent text-xs sm:text-sm font-body font-semibold rounded-full'
                  style={{ background: 'rgba(201,168,76,0.12)' }}
                >
                  250&ndash;300 words
                </span>
              </div>
            </div>

            {/* Poster */}
            <div className='bg-white border border-gray-200 rounded-2xl p-7 shadow-card flex flex-col'>
              <div
                className='w-10 h-10 rounded-xl flex items-center justify-center mb-5'
                style={{ background: 'rgba(0,107,92,0.08)' }}
              >
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                  <rect
                    x='3'
                    y='2'
                    width='14'
                    height='16'
                    rx='2'
                    stroke='#006b5c'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M7 7h6M7 10h4M7 13h5'
                    stroke='#006b5c'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
              <h3 className='font-bold text-primary text-lg mb-2'>
                Poster Presentations
              </h3>
              <p className='text-on-surface-variant text-sm sm:text-base leading-relaxed mb-5 flex-1'>
                Interactive sessions to share research findings, implementation
                experiences, and community innovations. Strongly encouraged for
                students and early-career researchers.
              </p>
              <div className='flex flex-wrap gap-2'>
                <span
                  className='px-3 py-1 text-secondary text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(0,107,92,0.1)' }}
                >
                  Students welcome
                </span>
                <span
                  className='px-3 py-1 text-secondary text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(0,107,92,0.1)' }}
                >
                  Community orgs
                </span>
                <span
                  className='px-3 py-1 text-accent text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(201,168,76,0.12)' }}
                >
                  250&ndash;300 words
                </span>
              </div>
            </div>

            {/* Symposia */}
            <div className='bg-white border border-gray-200 rounded-2xl p-7 shadow-card flex flex-col'>
              <div
                className='w-10 h-10 rounded-xl flex items-center justify-center mb-5'
                style={{ background: 'rgba(0,6,21,0.05)' }}
              >
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                  <circle
                    cx='5'
                    cy='10'
                    r='2.5'
                    stroke='#0b1f3a'
                    strokeWidth='1.5'
                  />
                  <circle
                    cx='10'
                    cy='5'
                    r='2.5'
                    stroke='#0b1f3a'
                    strokeWidth='1.5'
                  />
                  <circle
                    cx='15'
                    cy='10'
                    r='2.5'
                    stroke='#0b1f3a'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M7 9l3-2.5M13 9l-3-2.5'
                    stroke='#0b1f3a'
                    strokeWidth='1.3'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
              <h3 className='font-bold text-primary text-lg mb-2'>Symposia</h3>
              <p className='text-on-surface-variant text-sm sm:text-base leading-relaxed mb-5 flex-1'>
                Multiple presenters addressing a shared topic or challenge with
                a coordinated theme and chairperson.
              </p>
              <div className='flex flex-wrap gap-2'>
                <span
                  className='px-3 py-1 text-primary text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(0,6,21,0.06)' }}
                >
                  60&ndash;90 min
                </span>
                <span
                  className='px-3 py-1 text-primary text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(0,6,21,0.06)' }}
                >
                  3&ndash;5 presenters
                </span>
                <span
                  className='px-3 py-1 text-accent text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(201,168,76,0.12)' }}
                >
                  400&ndash;500 words
                </span>
              </div>
            </div>

            {/* Workshops */}
            <div className='bg-white border border-gray-200 rounded-2xl p-7 shadow-card flex flex-col'>
              <div
                className='w-10 h-10 rounded-xl flex items-center justify-center mb-5'
                style={{ background: 'rgba(0,107,92,0.08)' }}
              >
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                  <path
                    d='M4 13.5l4-4 3 3 5-6'
                    stroke='#006b5c'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <rect
                    x='2'
                    y='2'
                    width='16'
                    height='16'
                    rx='2'
                    stroke='#006b5c'
                    strokeWidth='1.5'
                  />
                </svg>
              </div>
              <h3 className='font-bold text-primary text-lg mb-2'>Workshops</h3>
              <p className='text-on-surface-variant text-sm sm:text-base leading-relaxed mb-5 flex-1'>
                Interactive, skills-focused sessions covering psychotherapy
                training, implementation science, grant writing, digital mental
                health, supervision systems, and more.
              </p>
              <div className='flex flex-wrap gap-2'>
                <span
                  className='px-3 py-1 text-secondary text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(0,107,92,0.1)' }}
                >
                  Skills-building
                </span>
                <span
                  className='px-3 py-1 text-secondary text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(0,107,92,0.1)' }}
                >
                  Participatory
                </span>
                <span
                  className='px-3 py-1 text-accent text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(201,168,76,0.12)' }}
                >
                  400&ndash;500 words
                </span>
              </div>
            </div>

            {/* IGNITE */}
            <div
              className='border rounded-2xl p-7 shadow-card flex flex-col relative overflow-hidden'
              style={{ background: '#0b1f3a', borderColor: '#0b1f3a' }}
            >
              <div className='absolute top-4 right-4'>
                <span
                  className='px-2.5 py-1 bg-accent text-primary text-xs sm:text-sm font-bold rounded-full'
                  style={{ letterSpacing: '0.05em' }}
                >
                  FEATURED
                </span>
              </div>
              <div
                className='w-10 h-10 rounded-xl flex items-center justify-center mb-5'
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                  <path
                    d='M11 2L4 12h6l-1 6 7-10h-6l1-6z'
                    stroke='#c9a84c'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='font-bold text-white text-lg mb-1'>
                IGNITE Sessions
              </h3>
              <p className='font-semibold text-accent text-xs sm:text-sm mb-3'>
                Big Ideas. Bold Voices. Five Minutes.
              </p>
              <p className='text-sm sm:text-base text-white/75 leading-relaxed mb-5 flex-1'>
                20 slides, auto-advancing every 15 seconds. High-energy format
                ideal for pilot studies, community innovations, lived experience
                perspectives, and &quot;what if?&quot; future-oriented ideas.
              </p>
              <div className='flex flex-wrap gap-2'>
                <span
                  className='px-3 py-1 text-white text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  20 slides · 5 min
                </span>
                <span
                  className='px-3 py-1 text-accent text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(201,168,76,0.2)' }}
                >
                  250&ndash;300 words
                </span>
              </div>
            </div>

            {/* Panels & Community Voices */}
            <div className='bg-white border border-gray-200 rounded-2xl p-7 shadow-card flex flex-col'>
              <div
                className='w-10 h-10 rounded-xl flex items-center justify-center mb-5'
                style={{ background: 'rgba(201,168,76,0.1)' }}
              >
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                  <path
                    d='M2 15s2-3 5-3 6 2 6 2'
                    stroke='#c9a84c'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  />
                  <circle
                    cx='7'
                    cy='8'
                    r='3'
                    stroke='#c9a84c'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M14 11c1-1.5 2.5-2 3-2'
                    stroke='#c9a84c'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  />
                  <circle
                    cx='15.5'
                    cy='6'
                    r='2'
                    stroke='#c9a84c'
                    strokeWidth='1.5'
                  />
                </svg>
              </div>
              <h3 className='font-bold text-primary text-lg mb-2'>
                Panels & Community Voices
              </h3>
              <p className='text-on-surface-variant text-sm sm:text-base leading-relaxed mb-5 flex-1'>
                Cross-sector discussions, service user panels, youth-led
                dialogues, storytelling, arts-based presentations, film,
                photography, poetry, and spoken word.
              </p>
              <div className='flex flex-wrap gap-2'>
                <span
                  className='px-3 py-1 text-accent text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(201,168,76,0.12)' }}
                >
                  Cross-sector
                </span>
                <span
                  className='px-3 py-1 text-accent text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(201,168,76,0.12)' }}
                >
                  Arts welcome
                </span>
                <span
                  className='px-3 py-1 text-accent text-xs sm:text-sm font-semibold rounded-full'
                  style={{ background: 'rgba(201,168,76,0.12)' }}
                >
                  400&ndash;500 words
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='grid lg:grid-cols-5 gap-14 items-start'>
            <div className='lg:col-span-2'>
              <p
                className={`${manrope.className} text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
              >
                Conference Themes
              </p>
              <h2 className='font-bold text-primary mb-5 tracking-[-0.01em] text-3xl'>
                Thematic Areas
              </h2>
              <p className='text-sm sm:text-base leading-relaxed mb-6'>
                Submissions are invited under — but not limited to — the
                following themes. Cross-thematic work is strongly encouraged.
              </p>
              <div className='p-5 rounded-2xl border bg-[rgba(0,107,92,0.06)] border-[rgba(0,107,92,0.2)]'>
                <p className='text-sm sm:text-base leading-relaxed font-semibold text-[#006b5c]'>
                  Special consideration is given to African-led research,
                  community-based approaches, youth participation, and lived
                  experience contributions.
                </p>
              </div>
            </div>
            <div className='lg:col-span-3 space-y-1'>
              {[
                {
                  title: 'Community Mental Health Systems',
                  desc: 'Task-sharing, primary healthcare integration, psychosocial interventions, systems strengthening',
                },
                {
                  title: 'Psychotherapy & Intervention Innovation',
                  desc: 'IPT-G, FHS, evidence-based adaptation, group and scalable therapies',
                },
                {
                  title: 'Child, Adolescent & Youth Mental Health',
                  desc: 'School programs, peer-led interventions, university mental health, arts and sports',
                },
                {
                  title: 'Humanitarian & Refugee Mental Health',
                  desc: 'Trauma-informed care, forced displacement, resilience, post-conflict recovery',
                },
                {
                  title: 'Suicide Prevention & Crisis Response',
                  desc: 'Prevention systems, decriminalization, bereavement, postvention, crisis models',
                },
                {
                  title: 'Digital Mental Health & Innovation',
                  desc: 'Tele-mental health, digital supervision, mobile tools, AI and mental health systems',
                },
                {
                  title: 'Culture, Faith & Indigenous Systems',
                  desc: 'Cultural understandings of distress, faith-based initiatives, indigenous healing, stigma reduction',
                },
                {
                  title: 'Implementation Science & Policy',
                  desc: 'Monitoring and evaluation, scaling interventions, evidence-to-policy translation',
                },
                {
                  title: 'Voices from the Community',
                  desc: 'Lived experience, service user leadership, lay counsellor experiences, youth storytelling',
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className='flex gap-3 p-4 transition-colors cursor-default'
                >
                  <div className=''></div>
                  <div>
                    <p className='font-semibold text-primary text-base sm:text-lg mb-0.5'>
                      {title}
                    </p>
                    <p className='text-sm sm:text-base leading-relaxed'>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoldRule />

      {/* PRESENTATION TRACKS */}
      <section className='py-16 bg-neutral'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <p
            className={`${manrope.className} text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
          >
            Presentation Tracks
          </p>
          <h2 className='font-bold text-primary mb-5 tracking-[-0.01em] text-3xl'>
            Select Your Track
          </h2>
          <div className='flex flex-wrap gap-3'>
            {[
              'Research Track',
              'Practice & Implementation Track',
              'Community Voices Track',
              'Youth Track',
              'Policy & Systems Track',
              'Humanitarian Mental Health Track',
              'Digital Innovation Track',
              'Arts, Storytelling & Creative Expression Track',
            ].map((track) => (
              <span
                key={track}
                className='track-chip px-5 py-2.5 bg-white border border-gray-200 rounded-full font-semibold text-sm text-on-surface cursor-default shadow-sm'
              >
                {track}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SUBMISSION GUIDELINES */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='mb-14'>
            <p
              className={`${manrope.className} text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
            >
              How to Submit
            </p>
            <h2 className='font-bold text-primary mb-5 tracking-[-0.01em] text-3xl'>
              Submission Guidelines
            </h2>
          </div>
          <div className='grid lg:grid-cols-2 gap-14'>
            {/* Left */}
            <div className='space-y-10'>
              <div>
                <h3 className='font-bold text-primary text-lg mb-5 flex items-center gap-3'>
                  <span className='w-7 h-7 rounded-full bg-primary text-white text-base sm:text-lg font-semibold flex items-center justify-center shrink-0'>
                    1
                  </span>
                  Abstract Requirements
                </h3>
                <div className='space-y-3'>
                  {[
                    'Title',
                    'Author(s) and affiliation(s)',
                    'Background / context',
                    'Objectives',
                    'Methods / approach',
                    'Findings or key insights',
                    'Implications for practice, policy, or research',
                  ].map((item) => (
                    <div key={item} className='flex items-start gap-3'>
                      <div className='w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2'></div>
                      <p className='text-sm sm:text-base'>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className='font-bold text-primary text-lg mb-5 flex items-center gap-3'>
                  <span className='w-7 h-7 rounded-full bg-primary text-white text-base sm:text-lg font-semibold flex items-center justify-center shrink-0'>
                    2
                  </span>
                  Word Limits &amp; Language
                </h3>
                <div className='divide-y divide-gray-100'>
                  {[
                    {
                      label: 'Oral / Poster / IGNITE',
                      value: '250 - 300 words',
                      className: 'bg-[rgba(0,6,21,0.06)] text-primary',
                    },
                    {
                      label: 'Symposia / Workshops / Panels',
                      value: '400 - 500 words',
                      className: 'bg-[rgba(0,6,21,0.06)] text-primary',
                    },
                    {
                      label: 'Language',
                      value: 'English only',
                      className: 'bg-[rgba(0,107,92,0.1)] text-secondary',
                    },
                  ].map(({ label, value, className }) => (
                    <div
                      key={label}
                      className='flex justify-between items-center py-3'
                    >
                      <span className='text-sm sm:text-base text-on-surface'>
                        {label}
                      </span>
                      <span
                        className={`font-bold text-sm sm:text-base px-3 py-1 rounded-full ${className}`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className='space-y-10'>
              <div>
                <h3 className='font-bold text-primary text-lg mb-5 flex items-center gap-3'>
                  <span className='w-7 h-7 rounded-full bg-primary text-white text-base sm:text-lg font-semibold flex items-center justify-center shrink-0'>
                    3
                  </span>
                  Review Criteria
                </h3>
                <div className='space-y-3'>
                  {[
                    'Relevance to conference themes',
                    'Scientific and practical quality',
                    'Innovation and originality',
                    'Community relevance and impact',
                    'Equity and inclusion perspectives',
                  ].map((item) => (
                    <div key={item} className='flex items-start gap-3'>
                      <svg
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                        className='shrink-0 mt-0.5'
                      >
                        <path
                          d='M2 7l3.5 3.5 6.5-6.5'
                          stroke='#006b5c'
                          strokeWidth='1.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <p className='text-sm sm:text-base'>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className='font-bold text-primary text-lg mb-5 flex items-center gap-3'>
                  <span className='w-7 h-7 rounded-full bg-accent text-primary text-base sm:text-lg font-semibold flex items-center justify-center shrink-0'>
                    4
                  </span>
                  Ethical Standards
                </h3>
                <p className='text-sm sm:text-base leading-relaxed mb-4'>
                  All submissions involving human participants must comply with
                  ethical standards and institutional review processes where
                  applicable. Authors should disclose:
                </p>
                <div className='space-y-3'>
                  {[
                    'Funding sources',
                    'Conflicts of interest',
                    'Use of generative AI tools where relevant',
                  ].map((item) => (
                    <div key={item} className='flex items-start gap-3'>
                      <div className='w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2'></div>
                      <p className='text-sm sm:text-base'>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY CALLOUT */}
      <section className='py-20 bg-[#006b5c]'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <p
                className={`${manrope.className} text-sm font-bold uppercase text-[#9cefdd] mb-3 tracking-[0.13em]`}
              >
                Community &amp; Lived Experience
              </p>
              <h2 className='font-bold text-white mb-5 tracking-[-0.01em] text-3xl'>
                You do not need to be an academic researcher to submit.
              </h2>
              <p className='text-sm sm:text-base leading-relaxed text-[rgba(255,255,255,0.8)]'>
                This conference intentionally creates space for lived experience
                and community narratives. We warmly welcome service users, youth
                groups, community organizations, lay counsellors, advocates, and
                frontline implementers.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              {[
                'Community impact stories',
                'Lessons learned',
                'Practice innovations',
                'Storytelling & advocacy',
                'Lived experience',
                'Arts & creative expression',
                'Poetry & spoken word',
                'Film & photography',
              ].map((item) => (
                <div
                  key={item}
                  className='flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.12)]'
                >
                  <div className='w-2 h-2 rounded-full shrink-0 bg-[#9cefdd]'></div>
                  <span className='text-white text-xs sm:text-sm'>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY DATES */}
      <section className='py-24 bg-neutral'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='grid lg:grid-cols-3 gap-16'>
            <div>
              <p
                className={`${manrope.className} text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
              >
                Timeline
              </p>
              <h2 className='font-bold text-primary mb-5 tracking-[-0.01em] text-3xl'>
                Important Dates
              </h2>
              <p className='text-sm sm:text-base leading-relaxed'>
                Mark these dates carefully. The submission portal opens June
                2026 on the official conference website.
              </p>
            </div>
            <div className='lg:col-span-2'>
              <div className='relative pl-10'>
                <div className='absolute left-1.5 top-4 bottom-4 w-px bg-gray-200'></div>

                {[
                  {
                    date: 'June 2026',
                    title: 'Call for Submissions Opens',
                    desc: 'The submission portal goes live on the official conference website.',
                    dotStyle: {},
                  },
                  {
                    date: 'November 2026',
                    title: 'Submission Deadline',
                    desc: 'Final deadline for all abstract and proposal submissions.',
                    dotStyle: {},
                  },
                  {
                    date: 'January 2027',
                    title: 'Notification of Acceptance',
                    desc: 'Authors notified of decisions by the Scientific Committee.',
                    dotStyle: {},
                  },
                  {
                    date: 'February 2027',
                    title: 'Presenter Confirmation Deadline',
                    desc: 'Accepted presenters confirm their participation.',
                    dotStyle: {},
                  },
                  {
                    date: '5 - 6 April 2027',
                    title: 'Pre-Conference Workshops',
                    desc: 'Intensive hands-on learning: IPT-G, FHS, implementation science, grant writing, supervision, M&E, digital tools, and trauma-informed care.',
                    dotStyle: {},
                  },
                ].map(({ date, title, desc }) => (
                  <div key={date} className='relative mb-8'>
                    <div className='w-3.5 h-3.5 rounded-full shrink-0 absolute -left-10 top-1 bg-accent shadow-[0_0_0_4px_rgba(201,168,76,0.18)]'></div>
                    <p className='text-sm sm:text-base font-semibold uppercase text-accent mb-0.5 tracking-[0.12em]'>
                      {date}
                    </p>
                    <p className='font-bold text-primary text-base sm:text-lg mb-1'>
                      {title}
                    </p>
                    <p className='text-sm sm:text-base'>{desc}</p>
                  </div>
                ))}

                <div className='relative'>
                  <div className='w-3.5 h-3.5 rounded-full shrink-0 absolute -left-10 top-1 bg-[#006b5c] shadow-[0_0_0_4px_rgba(0,107,92,0.18)]'></div>
                  <p
                    className={`${manrope.className} text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
                  >
                    7 - 9 April 2027
                  </p>
                  <p className='font-bold text-primary text-base sm:text-lg mb-1'>
                    Conference Dates
                  </p>
                  <p className='text-sm sm:text-base'>
                    Africa at the Center of Global Mental Health — Makerere
                    University, Kampala, Uganda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS & PUBLICATION */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <p
              className={`${manrope.className} text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
            >
              Awards &amp; Opportunities
            </p>
            <h2 className='font-bold text-primary mb-5 tracking-[-0.01em] text-3xl'>
              Recognition &amp; Publication
            </h2>
            <p className='text-sm sm:text-base max-w-xl mx-auto'>
              Excellence is recognised across multiple categories, with pathways
              to publication through leading platforms.
            </p>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
            {[
              {
                emoji: '🏆',
                title: 'Best Student Poster',
                desc: 'Recognising outstanding student research',
              },
              {
                emoji: '🌍',
                title: 'Best Community Innovation',
                desc: 'Celebrating grassroots solutions',
              },
              {
                emoji: '⚡',
                title: 'Best Youth Presentation',
                desc: 'Amplifying youth leadership',
              },
              {
                emoji: '🔬',
                title: 'Excellence in Implementation Science',
                desc: 'Rigorous and scalable approaches',
              },
              {
                emoji: '🤝',
                title: 'Community Leadership Recognition',
                desc: 'Honouring community changemakers',
              },
              {
                emoji: '💙',
                title: 'Lived Experience Leadership Award',
                desc: 'Centring service user voices',
              },
            ].map(({ emoji, title, desc }) => (
              <div
                key={title}
                className='p-6 rounded-2xl border border-gray-200 hover:border-accent/50 transition-colors text-center'
              >
                <div className='text-2xl mb-3'>{emoji}</div>
                <p className='font-bold text-primary text-sm sm:text-base mb-1'>
                  {title}
                </p>
                <p className='text-sm sm:text-base'>{desc}</p>
              </div>
            ))}
          </div>
          <div className='p-6 bg-neutral rounded-2xl border border-gray-200'>
            <p className='font-bold text-primary text-sm sm:text-base mb-4'>
              Publication Opportunities
            </p>
            <div className='flex flex-wrap gap-3'>
              {[
                { label: 'Conference proceedings', className: '' },
                { label: 'Policy briefs', className: '' },
                { label: 'Implementation briefs', className: '' },
                { label: 'Special journal issues', className: '' },
                {
                  label: 'African Community Mental Health Journal (Inaugural)',
                  className: 'text-[#006b5c] border-[rgba(0,107,92,0.3)]',
                },
              ].map(({ label, className }) => (
                <span
                  key={label}
                  className={`px-4 py-2 bg-white border border-gray-200 rounded-full text-sm sm:tex-base font-semibold text-on-surface ${className}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-linear-to-r from-slate-950 via-slate-900 to-blue-950 py-24 relative overflow-hidden'>
        <div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        ></div>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10'>
          <p
            className={`${manrope.className} text-sm font-bold uppercase text-accent mb-3 tracking-[0.13em]`}
          >
            Submission Portal
          </p>
          <h2 className='font-bold text-white mb-5 tracking-[-0.01em] text-3xl'>
            Ready to Share Your Work?
          </h2>
          <p className='text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed text-blue-100/75'>
            The submission portal opens in June 2026. Limited travel support and
            bursary opportunities may be available for students, early-career
            researchers, community representatives, and service users.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              href='#'
              className='btn btn-accent shadow-none border-none text-primary rounded-full'
            >
              Visit Submission Portal
              <ArrowLongRight className='size-5' />
            </Link>

            <Link
              href='#'
              className='btn btn-ghost shadow-none border border-base-100 text-white hover:bg-white/10 rounded-full'
            >
              Contact the Secretariat
            </Link>
          </div>
          <p className='text-sm sm:text-base mt-8 text-[rgba(255,255,255,0.35)]'>
            School of Psychology, Makerere University &nbsp;·&nbsp; Kampala,
            Uganda
          </p>
        </div>
      </section>
    </>
  );
}

export default AbstractsPage;

import { manrope } from '@/app/fonts';
import Hero from '@/components/hero';
import { ArrowLongRight, Calendar } from '@/components/icons';
import SubThemeCard from '@/components/sub-theme-card';
import { sub_themes } from '@/data/sub-themes';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conference Sub Themes — ACGMHC 2027',
  description:
    "Explore the fifteen interconnected sub-themes framing the conference's core focus on innovation, equity, and resilience in community-based mental health systems across Africa and the global south.",
};

export default function SubThemesPage() {
  return (
    <>
      <Hero
        label='ACGMH 2027  ·  Makerere University, Kampala'
        title='Conference Sub Themes'
        description="Fifteen interconnected sub-themes framing the conference's core focus on innovation, equity, and resilience in community-based mental health systems across Africa and the global south."
        pills={[
          { text: '7 - 9 April 2027', icon: Calendar },
          { text: '15 Sub-Themes' },
        ]}
      />

      <section className='py-20 bg-[#f3f4f5]'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='mb-12'>
            <p
              className={`${manrope.className} text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
            >
              Sub-Themes
            </p>
            <h2
              className={`${manrope.className} font-bold text-primary mb-5 text-3xl tracking-[-0.01em]`}
            >
              Explore All 15 Themes
            </h2>

            <p className='text-base max-w-xl leading-relaxed'>
              Click any theme to explore its full description, areas of focus,
              key questions, and submission expectations.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {sub_themes.map(
              ({ slug, num, label, page_title, subtitle, accent_color }) => (
                <SubThemeCard
                  key={slug}
                  num={num}
                  label={label}
                  page_title={page_title}
                  subtitle={subtitle}
                  accent_color={accent_color}
                  href={`/themes/sub-themes/${slug}`}
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 bg-[#0b1f3a]'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6'>
          <div>
            <p
              className={`${manrope.className} text-xs sm:text-sm font-bold uppercase text-accent mb-3 tracking-[0.13em]`}
            >
              Submissions Open June 2026
            </p>
            <h3 className='font-bold text-white mb-5 tracking-[-0.01em] text-2xl'>
              Ready to submit your abstract
            </h3>
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
              href='/abstracts'
              className='btn btn-ghost shadow-none border border-base-100 text-white hover:bg-white/10 rounded-full'
            >
              View Abstract Guidelines
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

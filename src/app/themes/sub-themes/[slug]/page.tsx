import { manrope } from '@/app/fonts';
import GoldRule from '@/components/gold-rule';
import Hero from '@/components/hero';
import { ArrowLongRight, Calendar, Check } from '@/components/icons';
import { getThemeBySlug, SubTheme } from '@/data/sub-themes';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ThemeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({
  params,
}: ThemeDetailPageProps): Promise<Metadata> => {
  const slug = (await params).slug;
  const theme = getThemeBySlug(slug);

  if (!theme) return {};

  return {
    title: `${theme.page_title} — ACGMHC 2027`,
    description: theme.subtitle,
  };
};

async function ThemeDetailPage({ params }: ThemeDetailPageProps) {
  const { slug } = await params;

  const theme = getThemeBySlug(slug);

  if (!theme) throw notFound();

  const {
    num,
    page_title,
    subtitle,
    label,
    overview_paras,
    why_items,
    focus_blocks,
    questions,
    contributions,
    strategic_text,
    cross_items,
  } = theme as SubTheme;

  return (
    <>
      {/* HERO */}
      <Hero
        label={`Theme ${num} ·  ACGMH 2027`}
        title={page_title}
        description={subtitle}
        pills={[{ text: '7 - 9 April 2027', icon: Calendar }, { text: label }]}
      />

      <GoldRule />

      {/* OVERVIEW */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='grid lg:grid-cols-5 gap-14'>
            <div className='lg:col-span-2'>
              <p
                className={`${manrope.className} text-xs sm:text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
              >
                Overview
              </p>
              <h2 className='font-bold text-primary mb-5 tracking-[-0.01em] text-2xl md:text-3xl'>
                About This Theme
              </h2>
              <p className='text-sm sm:text-base leading-relaxed'>
                This theme is part of the broader conference focus on
                community-based mental health systems, innovation, equity, and
                resilience across Africa and low- and middle-income countries.
              </p>
              <Link
                href='/themes'
                className='inline-flex items-center gap-2 mt-6 text-sm font-semibold text-secondary hover:text-secondary/90'
              >
                &larr; All Themes
              </Link>
            </div>
            <div className='lg:col-span-3 space-y-5'>
              {overview_paras.map((p, i) => (
                <p key={i} className='text-sm sm:text-base leading-relaxed'>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoldRule />

      {/* WHY THIS THEME MATTERS */}
      <section className='py-20 bg-neutral'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-14 items-start'>
            <div>
              <p
                className={`${manrope.className} text-xs sm:text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
              >
                Significance
              </p>
              <h2 className='font-bold text-primary mb-5 tracking-[-0.01em] text-2xl md:text-3xl'>
                Why This Theme Matters
              </h2>
              <p className='text-sm sm:text-base leading-relaxed'>
                This theme addresses urgent and interconnected challenges in
                mental health systems, with direct implications for research,
                policy, practice, and communities.
              </p>
            </div>
            <div className='space-y-4'>
              {why_items.map((item) => (
                <div key={item} className='flex items-start gap-3'>
                  <Check className='size-6 stroke-3 text-secondary' />
                  <p className='text-sm sm:text-base leading-relaxed'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='mb-12'>
            <p
              className={`${manrope.className} text-xs sm:text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
            >
              Key Areas of Focus
            </p>
            <h2 className='font-bold text-primary mb-5 tracking-[-0.01em] text-2xl md:text-3xl'>
              Areas of Exploration
            </h2>
            <p className='font-body text-on-surface-variant text-base max-w-2xl leading-relaxed'>
              Submissions may address any of the following focus areas, or
              propose related topics aligned with the conference vision.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {focus_blocks.map((block) => (
              <div
                key={block.title}
                className='focus-card bg-white border border-gray-200 rounded-2xl p-6 flex flex-col'
              >
                <h4 className='font-bold text-primary text-md mb-4'>
                  {block.title}
                </h4>
                <div className='space-y-2.5'>
                  {block.items.map((item) => (
                    <div key={item} className='flex items-start gap-2.5'>
                      <div className='w-1.75 h-1.75 mt-1.75 bg-secondary rounded-full shrink-0'></div>
                      <p className='text-sm sm:text-base leading-relaxed'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldRule />

      {/* CONSIDERATIONS */}

      {cross_items.length > 0 && (
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='mb-10'>
              <p
                className={`${manrope.className} text-xs sm:text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
              >
                Cross-Cutting Considerations
              </p>
              <h2 className='font-bold text-primary mb-5 tracking-[-0.01em] text-2xl md:text-3xl'>
                Key Considerations
              </h2>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {cross_items.map((ci) => (
                <div
                  key={ci.label}
                  className='p-5 bg-white border border-gray-200 rounded-2xl'
                >
                  <p className='font-bold text-primary text-sm sm:text-md mb-1 uppercase'>
                    {ci.label}
                  </p>
                  <p className='text-sm sm:text-base leading-relaxed'>
                    {ci.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <GoldRule />

      {/* KEY QUESTIONS */}
      <section className='py-20 bg-neutral'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='mb-10'>
            <p
              className={`${manrope.className} text-xs sm:text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
            >
              Guiding Questions
            </p>
            <h2 className='font-bold text-primary mb-5 tracking-[-0.01em] text-2xl md:text-3xl'>
              Key Questions for Exploration
            </h2>
          </div>
          <div className='grid sm:grid-cols-2 gap-4'>
            {questions.map((q) => (
              <div
                key={q}
                className='q-card p-5 bg-white border border-gray-200 rounded-2xl cursor-default'
              >
                <p className='text-sm sm:text-base leading-relaxed'>{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRIBUTIONS & STRATEGIC */}
      <section className='py-20 bg-[#0b1f3a]'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-14 items-start'>
            <div>
              <p
                className={`${manrope.className} text-sm font-bold uppercase text-accent mb-3 tracking-[0.13em]`}
              >
                What We Invite
              </p>
              <h2 className='font-bold text-white mb-6 tracking-[-0.01em] text-3xl'>
                Expected Contributions
              </h2>
              <div className='flex flex-wrap gap-3'>
                {contributions.map((c) => (
                  <span
                    key={c}
                    className='px-5 py-2.5 bg-white border border-gray-200 rounded-full font-body font-semibold text-sm lg:text-base text-primary cursor-default shadow-sm'
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className='p-8 rounded-2xl bg-white/8 border border-white/60'>
              <p
                className={`${manrope.className} text-xs sm:text-sm font-bold uppercase text-accent mb-3 tracking-[0.13em]`}
              >
                Strategic Importance
              </p>
              <h3 className='font-display font-bold text-white text-md lg:text-lg mb-4'>
                Why This Matters for the Conference
              </h3>
              <p className='text-sm lg:text-base text-blue-100/75 leading-relaxed'>
                {strategic_text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6'>
          <div>
            <p
              className={`${manrope.className} text-xs sm:text-sm font-bold uppercase text-secondary mb-3 tracking-[0.13em]`}
            >
              Ready to contribute?
            </p>
            <h3 className='font-bold text-primary mb-5 tracking-[-0.01em] text-2xl'>
              Submit your abstract for Theme {num}
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
              href='/themes/sub-themes'
              className='btn btn-ghost shadow-none border border-primary text-primary hover:bg-primary/5 rounded-full'
            >
              Browse All Themes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThemeDetailPage;

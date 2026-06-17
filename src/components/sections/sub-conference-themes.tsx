import { manrope } from '@/app/fonts';
import { cross_cutting_priorities } from '@/data/cross-cutting-priorities';
import { sub_themes } from '@/data/sub-themes';
import Heading from '../heading';
import ImpactCard from '../impact-card';
import PriorityCard from '../priority-card';
import SubHeading from '../sub-heading';
import SubThemeCardMini from '../sub-theme-card-mini';

const SubConferenceThemes = () => (
  <section id='conference-themes' className='w-full h-auto bg-gray-500/6'>
    <div className='w-full h-auto px-6 py-12 mx-auto space-y-12 max-w-7xl sm:py-16 md:py-20 lg:py-24 sm:space-y-16 md:space-y-20 lg:space-y-24'>
      <div className=''>
        <Heading text='Conference Themes' />
        <SubHeading>
          Exploring 15 critical areas to reshape the mental health landscape
          through interdisciplinary collaboration.
        </SubHeading>
      </div>

      <div className='grid items-stretch grid-cols-1 gap-4 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6 lg:gap-8'>
        {sub_themes.map(({ num, slug, label, subtitle, icon }) => (
          <SubThemeCardMini
            key={num}
            slug={slug}
            label={label}
            subtitle={subtitle}
            icon={icon}
          />
        ))}
      </div>

      <div className='w-full px-5 py-8 space-y-10 overflow-hidden rounded-2xl sm:rounded-3xl bg-primary sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-16 sm:space-y-12 md:space-y-16'>
        <h2
          className={`${manrope.className} font-bold text-white text-center text-2xl sm:text-3xl lg:text-4xl`}
        >
          Cross-Cutting Priorities
        </h2>

        <div className='grid items-start grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 sm:gap-8 lg:gap-10'>
          {cross_cutting_priorities.map((item, index) => (
            <div
              key={index}
              className='h-full rounded-xl bg-white/5 p-4 sm:p-5 backdrop-blur-[2px]'
            >
              <PriorityCard {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className='space-y-10 sm:space-y-12 md:space-y-16'>
        <div>
          <Heading text='Strategic Impact' />
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <ImpactCard
            title='Paradigm Shift'
            body='Participate in redefining mental health from institutional-only to community- first care models.'
          />
          <ImpactCard
            title='Investment ROI'
            body='Explore the economic case for mental health and network with institutional donors.'
          />
          <ImpactCard
            title='Human-Centered'
            body='Contribute to design processes that put the lived experience of Africans at the core.'
          />
          <ImpactCard
            title='Policy Alignment'
            body='Directly contribute to the "Kampala Declaration" for future continental mental health policy.'
          />
        </div>
      </div>
    </div>
  </section>
);

export default SubConferenceThemes;

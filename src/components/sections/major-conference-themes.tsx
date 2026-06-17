import cn from 'classnames';
import SectionTitle from '../section-title';
import BodyText from '../body-text';

interface MajorConferenceThemesProps {
  number: string;
  theme: 'accent' | 'secondary';

  tagline: string;
  title: string;

  description: string[];

  africanPerspective: string;

  keyAreas: string[];
}

const MajorConferenceThemes: React.FC<MajorConferenceThemesProps> = ({
  number,
  theme,
  tagline,
  title,
  description,
  africanPerspective,
  keyAreas,
}) => {
  const isAccent = theme === 'accent';

  const colorClasses = {
    sectionBg: isAccent ? 'bg-neutral' : 'bg-white',
    badgeBg: isAccent ? 'bg-accent/10' : 'bg-secondary/10',
    badgeText: isAccent ? 'text-accent' : 'text-secondary',

    perspectiveBg: isAccent ? 'bg-accent/10' : 'bg-secondary/10',
    perspectiveBorder: isAccent ? 'border-accent/20' : 'border-secondary/20',

    perspectiveText: isAccent ? 'text-accent' : 'text-secondary',

    bullet: isAccent ? 'bg-accent' : 'bg-secondary',
  };

  return (
    <section className={cn('py-20', colorClasses.sectionBg)}>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-5 gap-14 items-start'>
          {/* Intro Column */}
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-4 mb-5'>
              <div
                className={cn(
                  'w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-extrabold text-[15px]',
                  colorClasses.badgeBg,
                  colorClasses.badgeText,
                )}
              >
                {number}
              </div>

              <p
                className={cn(
                  'text-xs sm:text-sm font-bold uppercase tracking-[0.13em]',
                  colorClasses.badgeText,
                )}
              >
                {tagline}
              </p>
            </div>

            <SectionTitle>{title}</SectionTitle>

            <div className='space-y-4 mb-6'>
              {description.map((paragraph) => (
                <BodyText key={paragraph}>{paragraph}</BodyText>
              ))}
            </div>

            <div
              className={cn(
                'p-5 rounded-2xl border',
                colorClasses.perspectiveBg,
                colorClasses.perspectiveBorder,
              )}
            >
              <p
                className={cn(
                  'text-xs sm:text-sm font-extrabold uppercase mb-3 tracking-[0.13em]',
                  colorClasses.perspectiveText,
                )}
              >
                African Perspective
              </p>

              <p
                className={cn(
                  'text-sm sm:text-base leading-relaxed',
                  colorClasses.perspectiveText,
                )}
              >
                {africanPerspective}
              </p>
            </div>
          </div>

          <div className='lg:col-span-3'>
            <KeyAreasCard
              keyAreas={keyAreas}
              bulletClass={colorClasses.bullet}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorConferenceThemes;

function KeyAreasCard({
  keyAreas,
  bulletClass,
}: {
  keyAreas: string[];
  bulletClass: string;
}) {
  return (
    <div className='bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_2px_20px_rgba(11,31,58,0.06)]'>
      <h3 className='font-bold text-primary text-base mb-6'>
        Key Areas Include
      </h3>

      <div className='grid sm:grid-cols-2 gap-4'>
        {keyAreas.map((item) => (
          <div key={item} className='flex items-start gap-3'>
            <div
              className={cn(
                'w-1.75 h-1.75 mt-1.75 rounded-full shrink-0',
                bulletClass,
              )}
            />

            <p className='text-sm sm:text-base leading-relaxed'>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

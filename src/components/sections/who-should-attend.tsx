import AttendeeCard from '../attendee-card';
import Heading from '../heading';
import { Beaker, BuildingLibrary, CurrencyDollar, PlusCircle } from '../icons';
import AcademicCap from '../icons/academic-cap';
import BuildingOffice from '../icons/building-office';
import ClipboardDocumentCheck from '../icons/clipboard-document-check';
import Heart from '../icons/heart';

const WhoShouldAttend = () => (
  <section className='w-full h-auto bg-white'>
    <div className='w-full h-auto px-6 py-12 mx-auto space-y-12 max-w-7xl sm:py-16 md:py-20 lg:py-24 sm:space-y-16 md:space-y-20 lg:space-y-24'>
      <div>
        <Heading text='Who Should Attend' />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <AttendeeCard icon={BuildingLibrary} label='Government Leaders' />
        <AttendeeCard icon={Beaker} label='Researchers' />
        <AttendeeCard icon={Heart} label='NGOs' />
        <AttendeeCard icon={ClipboardDocumentCheck} label='Practitioners' />
        <AttendeeCard icon={CurrencyDollar} label='Donors' />
        <AttendeeCard icon={BuildingOffice} label='Private Sector' />
        <AttendeeCard icon={AcademicCap} label='Students' />
        <AttendeeCard icon={PlusCircle} label='And You' />
      </div>
    </div>
  </section>
);

export default WhoShouldAttend;

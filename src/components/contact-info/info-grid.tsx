import { CardInfo } from './card-info/card-info';
import { LocationInfo } from './location/location-info';
import ReservationInfo from './reservation/reservation-info';
import { ScheduleInfo } from './schedule/schedule-info';

interface InfoGridProps {
  mainContainer?: string;
}

export const InfoGrid: React.FC<InfoGridProps> = ({
  mainContainer,
}) => {

  return (
    <div
      id='contacto-info'
      className='w-full mt-10 bg-pallete-black py-4'
    >
          <div className={`
        
        ${mainContainer}
        `}>
        <div id='aboutus-info' className={`p-0 flex justify-center lg:justify-end w-full`}>
          <CardInfo />
        </div>
        <div
          id='schedules-info'
          className='p-0 w-full flex flex-col justify-center items-center lg:items-start'
        >
          <ScheduleInfo />
          <LocationInfo />
        </div>
        <div id='reservation-info' className='p-0 flex justify-center lg:justify-start w-full'>
          <ReservationInfo />
        </div>
      </div>
    </div>
  );
};
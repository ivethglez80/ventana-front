import { fontMontserrat } from '@/fonts/fonts';
import { Card, CardBody } from '@nextui-org/react';
import { ScheduleData } from './schedule-data';
interface ScheduleItem {
  label: string;
  time: string;
}

export const ScheduleInfo: React.FC = () => {
  const scheduleItems: ScheduleItem[] = [
    { label: 'Ventas', time: '10:00 a 23:30 hs' },
    { label: 'Clase de Tango', time: '19:00 a 20:00 hs' },
    { label: 'Degustación en la Cava', time: '19:00 a 20:00 hs' },
    { label: 'Cena', time: '20:00 hs' },
    { label: 'Show', time: '22:00 hs' },
  ];

  return (
    <section aria-labelledby='schedule-heading' >
      <Card
        className={`
        bg-transparent
        tracking-wide 
        text-white
        `}
      >
        <CardBody>
          <header className='flex flex-col lg:items-start lg:text-left font-monttserrat'>
            <h2
              id='schedule-heading'
              className={`
              text-sm
              text-center
              
              uppercase
              font-bold
              ${fontMontserrat.className}
              
              `}
            >
              abierto todos los días
            </h2>
          </header>
          <div
            className={`
            flex
            flex-col
            items-center
            text-center
            text-white
            text-responsive-base
            lg:items-start
            lg:text-left
            text-sm
            w-full
            `}
          >
            {scheduleItems.map((item, idx) => (
              <ScheduleData key={idx} label={item.label} time={item.time} />
            ))}
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

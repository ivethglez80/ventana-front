import type { Service } from '@/types';
import { ResponsiveServiceCard } from './responsive-card';
import { fontRubik } from '@/fonts/fonts';

interface ServiceGridProps {
  services: Service[];
  title: string;
  extend: string
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  services,
  title,
  extend
}) => (
  <div className='flex flex-col'>
    <div
      className={`title-styles p-5
          flex
          w-full
          justify-center
          items-center
          text-center
          bg-white
          text-2xl
          ${fontRubik.className}
          antialiased
          uppercase`}
    >
      {title}
    </div>
    <div className={`responsive-container grid ${extend} bg-pallete-black`}>
      {services.map((service, i) => (
        <ResponsiveServiceCard key={i} service={service} />
      ))}
    </div>
  </div>
);

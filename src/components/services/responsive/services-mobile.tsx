import { mockService } from '@/mocks/service-mocks';
import { ServiceGrid } from '../service-grid';

export const MobileServices = () => {


  return (
    <ServiceGrid
      services={mockService}
      title='conozca todos los servicios de familia tango show argentina'
      extend='grid-cols-2 gap-4 py-4'
    />
  );

};

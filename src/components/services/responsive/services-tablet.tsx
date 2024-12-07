import { mockService } from '@/mocks/service-mocks';
import { ServiceGrid } from '../service-grid';

export const TabletServices = () => {
  return (
    <ServiceGrid
      services={mockService.filter((s) => s.mobile)}
      title='conozca todos los servicios de familia tango show argentina'
      extend='grid-cols-6 py-8'
    />
  );
};

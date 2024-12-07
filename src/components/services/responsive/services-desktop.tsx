import { mockService } from '@/mocks/service-mocks';
import { ServiceGrid } from '../service-grid';

export const DesktopServices = () => {
  return (

    <ServiceGrid
      services={mockService.filter((s) => s.desktop)}
      title='conozca todos los servicios de familia tango show argentina'
      extend='grid-cols-7 py-8 gap-8'
    />
  );
};

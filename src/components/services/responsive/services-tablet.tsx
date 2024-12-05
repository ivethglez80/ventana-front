'use client'
import { mockService } from '@/mocks/service-mocks';
import { ServiceGrid } from '../service-grid';

export const TabletServices = () => {
  return (

    <ServiceGrid
      services={mockService.filter((s) => s.mobile)}
      title='conozca todos los servicios de familia tango show argentina'
      py={8}
      gridColumns={6}
    />
  );
};

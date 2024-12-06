'use client'
import { mockService } from '@/mocks/service-mocks';
import { ServiceGrid } from '../service-grid';

export const MobileServices = () => {


  return (
    <ServiceGrid
      services={mockService}
      title='conozca todos los servicios de familia tango show argentina'
      
      gap={4}
      py={4}
      gridColumns={2}
    />
  );

};

'use client'
import { fontRubik } from '@/fonts/fonts';
import { mockService } from '@/mocks/service-mocks';
import { ServiceGrid } from '../service-grid';

export const DesktopServices = () => {
  return (

    <ServiceGrid
      services={mockService.filter((s) => s.desktop)}
      title='conozca todos los servicios de familia tango show argentina'
      py={8}
      gap={8}
      gridColumns={7}
    />
  );
};

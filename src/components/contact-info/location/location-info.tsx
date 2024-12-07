
import React from 'react';
import Link from 'next/link';
import { Card, CardBody } from '@nextui-org/react';
import { fontMontserrat } from '@/fonts/fonts';

interface LocationInfoProps {
  address?: string;
  city?: string;
  country?: string;
  mapsLink?: string;
}

export const LocationInfo: React.FC<LocationInfoProps> = ({
  address = 'Balcarce 431 - San Telmo',
  city = 'Buenos Aires',
  country = 'Argentina',
  mapsLink = 'https://maps.google.com/...',
}) => {
  const renderLocationContent = () => (
    <div
      className={`
        lg:self-start
        
        flex
        flex-col 
        items-center
        lg:items-start
        lg:text-left 
        text-sm 
        uppercase 
        text-white 
        font-bold
        w-full 
        ${fontMontserrat.className}
      `}
    >
      <h3 className='mb-2 text-sm'>¿Dónde estamos?</h3>
      <address
        className='
          capitalize
          font-normal 
          text-center
          lg:items-start
          lg:text-left
          text-sm
          not-italic 
          flex
          flex-col 
          items-center 
          gap-1
        '
      >
        <span className='flex items-center lg:items-start gap-2'>
          {address}
        </span>
        <span>
          {city} - {country}
        </span>
      </address>
    </div>
  );

  return (
    <section
      aria-labelledby='location-heading'
      className='location-info-container'
    >
      <Card
        className='
          max-w-[400px] 
          bg-pallete-black 
          text-white 
          hover:shadow-lg 
          transition-shadow 
          duration-300
        '
        aria-label='Información de Ubicación'
      >
        <CardBody>
          {mapsLink ? (
            <Link
              href={mapsLink}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Ver ubicación en Google Maps'
              className='block'
            >
              {renderLocationContent()}
            </Link>
          ) : (
            renderLocationContent()
          )}
        </CardBody>
      </Card>
    </section>
  );
};

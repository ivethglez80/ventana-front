'use client';


import { Card } from './card';
import { useState } from 'react';
import { fontMontserrat } from '@/fonts/fonts';
import { getRandomReservations, mockReservations } from '@/mocks/reservations-mock';

export const Reservations: React.FC = () => {
  const [reservations, setReservations] = useState(mockReservations);

  const handleRandomSelection = () => {
    setReservations(getRandomReservations());
  };

  return (
    <div className='container mx-auto mt-0 bg-[#f0f0f0]'>
          <div className={`
        flex
        justify-center
        items-center
        gap-4
        mb-6
        pt-4
        px-4
        ${fontMontserrat.className}
        `}>
        <h2 className='text-sm text-ellipsis lg:text-2xl text-center font-bold uppercase'>
          reservá tu entrada y disfruta del show más visitado de buenos aires
        </h2>
        <button
          onClick={handleRandomSelection}
          className='hidden bg-black text-white px-4 py-2 rounded'
        >
          Selección Aleatoria
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {reservations.map((reservation) => (
          <Card key={reservation.showId} {...reservation} />
        ))}
      </div>
    </div>
  );
};

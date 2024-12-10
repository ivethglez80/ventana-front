import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { fontRubik } from '@/fonts/fonts';
import clsx from 'clsx';

interface CardFooterProps {
  title: string;
  detailLink: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  title,
  detailLink,
}) => {
  return (
    <div className='flex justify-between items-center p-4'>
      <Link
        href={detailLink}
        className={clsx(
          `text-pallete-gold px-4 py-2 rounded tracking-wide font-bold capitalize transition`,
          `${fontRubik.className}`
        )}
        aria-label={`Ver detalles de ${title}`}
      >
        +ver detalle
      </Link>
      <Button
        variant='solid'
        radius='sm'
        href={detailLink}
        size='lg'
        className={clsx(
          'bg-pallete-gold text-black font-normal tracking-wide uppercase text-lg px-10 py-2 hover:bg-gold-light transition'
        , `${fontRubik.className}`)}
        aria-label={`Ver detalles de ${title}`}
      >
        reservar
      </Button>
    </div>
  );
};

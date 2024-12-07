import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';
import { fontMontserrat } from '@/fonts/fonts';

interface CardInfoProps {
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  href?: string;
}

export const CardInfo: React.FC<CardInfoProps> = ({
  imageSrc = '/info/laventana-footer.png',
  imageAlt = 'La Ventana Tango',
  buttonText = 'sobre nosotros',
  href = '/about',
}) => {
  return (
    <section
      aria-labelledby='about-section'
      >
      <Card
        className={`
          py-4 
           bg-transparent
          aspect-auto 
          mx-auto 
          hover:shadow-lg 
          transition-shadow 
          duration-300
        `}
        aria-label='Información sobre La Ventana'
      >
        <CardBody
          className={`
            overflow-visible 
            py-2 
            flex 
            justify-center 
            items-center
          `}
        >
          <figure className='min-w-[200px] aspect-square flex justify-center'>
            <Image
              alt={imageAlt}
              className={`
                object-cover 
                rounded-xl 
                w-auto
                h-auto
                max-w-[100px] 
                transition-transform 
                duration-300 
                hover:scale-105
              `}
              src={imageSrc}
              width={400}
              height={1000}
              loading='lazy'
            />
          </figure>
        </CardBody>

        <CardHeader
          className={`
            pb-0 
            pt-2 
            px-4 
            flex-col 
            items-center
          `}
        >
          <Link
            href={href}
            aria-label='Ir a la página Sobre Nosotros'
            className='w-full max-w-[250px]'
          >
            <Button
              as='div'
              variant='solid'
              size='md'
              className={`
                uppercase 
                py-2 
                px-6 
                w-full 
                font-sans 
                font-[500] 
                tracking-wide 
                ${fontMontserrat.className} 
                text-md 
                bg-pallete-gold 
                hover:bg-pallete-gold/90 
                transition-colors 
                duration-300
                flex 
                items-center 
                justify-center 
                gap-2
              `}
            >
              {buttonText}
            </Button>
          </Link>
        </CardHeader>
      </Card>
    </section>
  );
};

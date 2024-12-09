'use client';

import { fontMontserrat, fontRubik } from '@/fonts/fonts';
import Image from 'next/image';
import { NewsletterForm } from './newsletter-form';
import { Toaster } from 'sonner';
import { ErrorBoundary } from '../errors/error-boundary';

export const Newsletter: React.FC = () => {
  return (
    <section
      id='suscribe'
      className={`w-full border-t-1 border-black sm:border-none bg-[#f0f0f0] lg:bg-transparent flex justify-center py-4 md:mx-0 md:min-h-[100px] ${fontMontserrat.className} antialiased`}
    >
      <Toaster richColors />

      <div
        className={`
          w-full
          bg-[#f0f0f0] 
        lg:bg-white
          sm:rounded-lg
          lg:rounded-l-lg
          sm:bg-transparent
          lg:shadow
        `}
      >
        <div className='w-full flex flex-col items-center lg:flex-row'>
          {/* first box */}
          <div
            className={`w-full lg:basis-1/2 flex flex-col justify-center items-center ${fontRubik.className} tracking-wide`}
          >
            {/* title */}
            <h4
              className={`font-bold tracking-wide uppercase text-base mt-2 md:text-xl`}
            >
              suscribite a nuestro newsletter
            </h4>

            {/* form */}
            <div className='flex mt-0 sm:px-10 space-x-0 border-6 w-full'>
              <ErrorBoundary>
                <NewsletterForm />
              </ErrorBoundary>
            </div>
          </div>

          {/* flag - second box */}
          <div className='hidden lg:basis-1/2 lg:flex min-h-[150px]'>
            <div className='relative'>
              <Image
                data-src='https://www.laventanaweb.com/images/argentina-newsletter.jpg'
                alt='Argentina flag'
                className='h-full object-cover'
                src='https://www.laventanaweb.com/images/argentina-newsletter.jpg'
                priority={true}
                quality={100}
                width={900}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

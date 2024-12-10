import { Toaster } from 'sonner';

import { SearchForm } from './search-form';
export const Search = () => {
  return (
    <section id='buscador' className='bg-white pb-10'>
      <Toaster richColors />
      <div className='w-full mx-auto flex flex-col lg:w-1/2'>
        <h1 className='md:text-2xl titulo text-center font-bold md:pt-8 pt-6 text-base uppercase'>
          reservá hoy tu show de tango en la ventana
        </h1>

        <SearchForm />
      </div>
    </section>
  );
};

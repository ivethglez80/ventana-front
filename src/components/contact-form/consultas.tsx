'use client';
import { Toaster } from 'sonner';
import { ContactForm } from './contact-form';

export const Consultas = () => {
  return (
    <section
      id='form-contacto'
      className='bg-pallete-black pb-10 px-4 md:mx-0 md:min-h-[500px] min-h-[744px]'
    >
      <h4 className='text-white p-5 text-center tracking-wide uppercase font-bold font-montserrat text-xl'>
        consultas
      </h4>
      
      <Toaster richColors />
      <ContactForm />
    </section>
  );
};


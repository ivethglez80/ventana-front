import { Button } from '@nextui-org/react';
import {  useForm, Controller } from 'react-hook-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea as TextareaCustom } from '@/components/ui/textarea';
import { useValidation } from '@/hooks/useValidation';
import { contactFormSchema } from '@/actions/contact-form/schemas/schema-contact-form';
import { useContactForm } from '@/actions/contact-form/hooks/useContactForm';
import { ContactFormData, ContactFormErrors } from '@/actions/contact-form/types/contact-form.types';
import {Input as CustomInput} from '@/components/ui/input'


export const ContactForm = () => {
  const { validate } = useValidation(contactFormSchema)
  const {submitContact} = useContactForm()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      whatsApp: '',
      content: '',
      subscribe: false
    },
  });


  const onSubmit = async (data: ContactFormData) => {
    const validationResult = validate(data)

    if ('errors' in validationResult) {
      console.error('Validation errors:', validationResult.errors)
      return;
    }

    const result = await submitContact(data)

    if (result.success) {
      reset()
    }

  };

  const onError = (errors: ContactFormErrors) => {
    if (errors.name) {
      toast.error(errors.name.message);
    }
    if (errors.lastName) {
      toast.error(errors.lastName.message);
    }
    if (errors.email) {
      toast.error(errors.email.message);
    }
    if (errors.content) {
      toast.error(errors.content.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      acceptCharset='UTF-8'
      id='frmContacto'
      role='form'
      className='max-w-[960px] mx-auto pt-[20px] animate__animated'
      noValidate
    >
      <div className='grid sm:grid-cols-2 gap-6'>
        <div>
          <div className='relative z-0 w-full mb-8 text-white group'>
            <Controller
              name='name'
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label='Nombre'
                  variant='underlined'
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                  
                />
              )}
            />
          </div>
          <div className='relative z-0 w-full mb-8 text-white group'>
            <Controller
              name='lastName'
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label='Apellido'
                  variant='underlined'
                  isInvalid={!!errors.lastName}
                  errorMessage={errors.lastName?.message}
                  
                />
              )}
            />
          </div>
          <div className='relative z-0 w-full mb-8 text-white group'>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label='Email'
                  variant='underlined'
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                />
              )}
            />
          </div>
          <div className='relative z-0 w-full mb-8  group'>
            <Controller
              name='whatsApp'
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label='WhatsApp'
                  variant='underlined'
                  isInvalid={!!errors.whatsApp}
                  errorMessage={errors.whatsApp?.message}
                  
                />
              )}
            />
          </div>
        </div>

        <div>
          <div className='flex flex-col justify-between gap-4 z-0 w-full mb-6 group'>
            <label
              htmlFor='comentario'
              className=' text-white font-bold font-montserrat tracking-wide'
            >
              Comentario
            </label>
            <Controller
              name='content'
              control={control}
              render={({ field }) => (
                <TextareaCustom
                  {...field}
                  isInvalid={!!errors.content}
                  errorMessage={errors.content?.message}
                />
              )}
            />
          </div>

          <div className='mb-10'>
            <Controller
              name='subscribe'
              control={control}
              render={({ field: {value, onChange, ref} }) => (
                <input
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                  ref={ref}
                  id='checked-checkbox'
                  type='checkbox'
                  className='mr-2 border-3 text-center text-blue-600 bg-gray-100 border-gray-300'
                />
              )}
            />

            <label htmlFor='checked-checkbox' className='text-white'>
              Deseo suscribirme al newsletter
            </label>
          </div>

          <Button
            type='submit'
            variant='solid'
            className={`text-black uppercase border text-center bg-pallete-gold focus:bg-gold-light focus:outline-none font-large font-bold font-montserrat rounded-lg text-xl w-full sm:w-auto px-5 py-2`}
          >
            enviar
          </Button>
        </div>
      </div>
    </form>
  );
};

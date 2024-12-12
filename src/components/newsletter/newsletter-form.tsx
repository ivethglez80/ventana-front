import { Button, Input } from '@nextui-org/react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useValidation } from '@/hooks/useValidation';
import { useNewsletter } from '@/actions/newsletter/hooks/useNewsletter';
import type { NewsletterFormErrors, NewsletterSchemaType } from '@/actions/newsletter/types/newsletter.types';
import { newsletterSchema } from '@/actions/newsletter/schemas/newsletter-schema';
export const NewsletterForm = () => {
  const { validate } = useValidation(newsletterSchema);
  const { subscribe } = useNewsletter();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterSchemaType>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
      source: 'web',
    },
  });

  const onSubmit = async (data: NewsletterSchemaType) => {
    const validationResult = validate(data);

    if ('errors' in validationResult) {
      console.error('Validation errors:', validationResult.errors);
      return;
    }

    const success = await subscribe(data.email);
    if (success) {
      reset();
    }
  };

  const onError = (errors: NewsletterFormErrors) => {
    if (errors.email) {
      console.log(errors);
      toast.error(`${errors.email.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      acceptCharset='UTF-8'
      id='frmSuscribir'
      role='form'
      className='w-full flex gap-2 items-baseline'
      noValidate={true}
    >
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type='email'
            label='Email'
            errorMessage={errors.email?.message}
            isInvalid={!!errors.email}
            classNames={{
              base: 'border-gray-900 animate-delay-400 focus:border-gray-300',
            }}
            labelPlacement='inside'
            variant='underlined'
            required
            className='block placeholder-black py-2.5 px-4 w-full text-sm text-gray-900 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 peer mt-0'
          />
        )}
      />

      <div className='flex items-end'>
        <Button
          type='submit'
          variant='solid'
          className='mb-2 text-black uppercase w-1/2 lg:w-10/12 focus:outline-none rounded-lg text-sm lg:text-lg px-5 py-2 mt-1 text-center bg-pallete-gold focus:bg-gold-light'
        >
          Enviar
        </Button>
      </div>
    </form>
  );
};

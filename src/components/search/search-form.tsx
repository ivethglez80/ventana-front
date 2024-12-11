'use client';

import { useSearch } from '@/actions/search/hooks/useSearch';
import { searchSchema } from '@/actions/search/schemas/search-schema';
import { SearchFormData, SearchFormErrors } from '@/actions/search/types/search.types';
import { useValidation } from '@/hooks/useValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { DropdownForm } from './form/dropdown-form';
import { DateForm } from './form/date-form';
import { PassangersInput } from './form/pasajeros';


export const SearchForm: React.FC = () => {
  const { validate } = useValidation(searchSchema);
  const { search, loading } = useSearch();

  const methods = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      evento: '',
      fecha: null,
      pasajeros: 1,
    },
  });

  const {
    reset,
    formState: { errors },
    control,
    setValue,
    handleSubmit,
  } = methods;

  const onSubmit = async (data: SearchFormData) => {
    const validationResult = validate(data);

    if ('errors' in validationResult) {
      console.error('Validation errors:', validationResult.errors);
      return;
    }

    const result = await search(data);

    if (result.success) {
      reset();
    }
  };

  const onError = (errors: SearchFormErrors) => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message);
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className='mt-6 flex flex-col gap-4 items-center justify-center'
      >
        <div className='flex flex-col lg:flex-row gap-4 px-10 sm:px-4'>
        <DropdownForm control={control} setValue={setValue} />
        <DateForm control={control} />
        <PassangersInput control={control} errors={errors} />
          
</div>
        <Button
          type='submit'
          variant='solid'
          size='lg'
          radius='sm'
          isLoading={loading}
          className='bg-pallete-black text-white font-bold uppercase px-10'
        >
          buscar
        </Button>
      </form>
    </FormProvider>
  );
};
'use client';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import { SearchFormData } from '@/actions/search/types/search.types';
import { fontMontserrat } from '@/fonts/fonts';
import { Input } from '@nextui-org/react';

interface PasajerosInputProps {
  control: Control<SearchFormData>;
  errors: FieldErrors<SearchFormData>;
}

export const PassangersInput: React.FC<PasajerosInputProps> = ({
  control,
  errors,
}) => {
  return (
    <Controller
      name='pasajeros'
      control={control}
      render={({ field }) => (
        <div>
          <label htmlFor='pax_buscador' className={`mt-1 ${fontMontserrat.className} font-semibold uppercase`}>
            cantidad de pax
          </label>
          <Input
            type='number'
            radius='sm'
            // label='Cantidad de Personas'
            variant='bordered'
            value={field.value.toString()}
            onChange={(e) => field.onChange(Number(e.target.value))}
            isInvalid={!!errors.pasajeros}
            errorMessage={errors.pasajeros?.message}
          />
        </div>
      )}
    />
  );
};

'use client';
import { Controller, Control } from 'react-hook-form';
import { DatePicker } from '@nextui-org/react';
import { getLocalTimeZone, parseDate, today } from '@internationalized/date';
import { SearchFormData } from '@/actions/search/types/search.types';
import { fontMontserrat } from '@/fonts/fonts';

interface FechaPickerProps {
  control: Control<SearchFormData>;
}

export const DateForm: React.FC<FechaPickerProps> = ({ control }) => {
  return (
    <Controller
      name='fecha'
      control={control}
      render={({ field: { value, onChange, ref } }) => (
        <div>
          <label
            htmlFor='fecha_buscador'
            className={`mt-1 ${fontMontserrat.className} font-semibold uppercase`}
          >
            fecha
          </label>
          <DatePicker
            classNames={{ selectorIcon: [''], } }
            ref={ref}
            radius='sm'
            variant='bordered'
            disableAnimation
            value={value ? parseDate(value.toString()) : null}
            onChange={onChange}
            minValue={today(getLocalTimeZone())}
            aria-label='Selecciona una fecha'
          />
        </div>
      )}
    />
  );
};

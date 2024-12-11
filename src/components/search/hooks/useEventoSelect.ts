import { SearchFormData } from '@/actions/search/types/search.types';
import { useCallback, useMemo } from 'react';
import { Control, UseFormSetValue, useWatch } from 'react-hook-form';
import { eventos } from '../mock/data';

interface SelectionProps {
  control: Control<SearchFormData>;
  setValue: UseFormSetValue<SearchFormData>;
}

export function useEventoSelection({control, setValue}:SelectionProps) {

  const eventoValue = useWatch({
    control,
    name: 'evento', 
  });

  const handleEventoSelect = useCallback(
    (key: React.Key) => {
      setValue('evento', key.toString(), {
        shouldValidate: true,
        shouldDirty: true,
      });
    },
    [setValue]
  );

  const selectedEventoName = useMemo(() => {
    return (
      eventos.find((e) => e.value === eventoValue)?.name ||
      'Selecciona un evento'
    );
  }, [eventoValue]);

  return {
    selectedEventoName,
    handleEventoSelect,
  };
}

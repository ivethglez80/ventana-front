'use client';
import { Controller, Control } from 'react-hook-form';
import { 
  Dropdown, 
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem, 
  Button 
} from '@nextui-org/react';
import { SearchFormData } from '@/actions/search/types/search.types';
import { useEventoSelection } from '../hooks/useEventoSelect';
import { eventos } from '../mock/data';
import { fontMontserrat } from '@/fonts/fonts';
import { TicketIcon } from '@/components/icons';

interface EventosDropdownProps {
  control: Control<SearchFormData>;
  setValue: (name: keyof SearchFormData, value: any) => void;
}

export const DropdownForm: React.FC<EventosDropdownProps> = ({ 
  control, 
  setValue 
}) => {
  const { handleEventoSelect, selectedEventoName } = useEventoSelection(
    control,
    setValue
  );

  return (
    <Controller
      name='evento'
      control={control}
      render={({ field }) => (
        <div>
          <label
            htmlFor='idShow'
            className={`mt-1 ${fontMontserrat.className} font-semibold uppercase`}
          >
            tipo de show
          </label>
          <Dropdown >
            <DropdownTrigger className='w-full'>
              <Button startContent={<TicketIcon className='fill-pallete-anexo'/>} variant='bordered' radius='sm' className='capitalize text-black'>
                {selectedEventoName}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label='Eventos disponibles'
              onAction={handleEventoSelect}
            >
              {eventos.map((evento) => (
                <DropdownItem key={evento.value} textValue={evento.name}>
                  {evento.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
    />
  );
};
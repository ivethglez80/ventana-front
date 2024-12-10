import { DateValue } from '@internationalized/date';
import { z } from 'zod';

export const searchSchema = z.object({
  evento: z.string().min(1, { message: 'Selecciona un evento' }),
    fecha: z.custom<DateValue>().nullable(),
  pasajeros: z
    .number()
    .min(1, { message: 'Debe haber al menos un pasajero' })
    .max(20, { message: 'Máximo 20 pasajeros' }),
});


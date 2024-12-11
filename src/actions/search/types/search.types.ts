import {z} from 'zod'
import { searchSchema } from '../schemas/search-schema';
import { DateValue } from '@nextui-org/react';
import { FieldErrors } from 'react-hook-form';

export type SearchSchemaType = z.infer<typeof searchSchema>;

export type SearchFormData = {
    evento: string;
    fecha: DateValue | null;
    pasajeros: number
}
export interface SearchResult {
  success: boolean;
  message: string;
  code?: string;
}
export type SearchFormErrors = FieldErrors<SearchFormData>;

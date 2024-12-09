import { z } from 'zod';
import { contactFormSchema } from '../schemas/schema-contact-form';

export type ContactFormData = z.infer<typeof contactFormSchema>;

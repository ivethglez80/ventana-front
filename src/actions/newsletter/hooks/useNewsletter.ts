import { createSubscribe } from '@/actions/newsletter/newsletter-action';
import { newsletterSchema } from '@/actions/newsletter/schemas/newsletter-schema';
import { useState } from 'react';
import { toast } from 'sonner';

export function useNewsletter() {
  const [loading, setLoading] = useState(false);

  const subscribe = async (email: string) => {
    setLoading(true);
    try {

      const result = newsletterSchema.safeParse({
        email,
        source: 'web',
      });

      if (!result.success) {
        toast.error(result.error.errors[0].message);
        return false;
      }

      // server action
      const response = await createSubscribe(result.data);

      if (response.success) {
        toast.success('¡Suscripción exitosa!');
        return true;
      } else {
        toast.error(response.message);
        return false;
      }
    } catch (error) {
      toast.error('Error inesperado');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading };
}

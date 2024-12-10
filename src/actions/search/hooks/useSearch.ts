import { useState } from 'react';
import { toast } from 'sonner';
import { createSearch } from '../search-action';

export function useSearch() {
  const [loading, setLoading] = useState(false);

  const search = async (data: unknown) => {
    setLoading(true);
    try {
      const result = await createSearch(data);

      if (result.success) {
        toast.success('Búsqueda realizada con éxito');
        return { success: true, data: result.success };
      } else {
        toast.error(result.success);
        return { success: false, error: 'no encontrado' };
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Error inesperado en la búsqueda';

      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { search, loading };
}
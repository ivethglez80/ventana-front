'use client';

import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { CardHeader } from './card-header';
import { CardBody } from './card-body';
import { CardFooter } from './card-footer';
import { CardSchema } from './schemas/reserva-schema';
import { CardValidationErrors } from './validation/card-validation-error';

type CardProps = z.infer<typeof CardSchema>;

export const Card: React.FC<CardProps> = ({
  title,
  availability,
  showTime,
  price,
  currency,
  detailLink,
  showId,
}) => {
  const [validationErrors, setValidationErrors] = useState<z.ZodError | null>(
    null
  );

  const validateProps = () => {
    try {
      CardSchema.parse({
        title,
        availability,
        showTime,
        price,
        currency,
        detailLink,
        showId,
      });
      setValidationErrors(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setValidationErrors(error);
        console.error('Validation Errors:', error.errors);
      }
    }
  };

  useEffect(() => {
    validateProps();
  }, []);

  if (validationErrors) {
    return <CardValidationErrors errors={validationErrors} />;
  }

  return (
    <div
      className='bg-white shadow-md rounded-xl transform transition-transform duration-300 hover:scale-105'
      aria-labelledby={`card-title-${showId}`}
      data-testid='reservation-card'
    >
      <CardHeader title={title} showId={showId} availability={availability} />

      <CardBody
        availability={availability}
        showTime={showTime}
        price={price}
        currency={currency}
      />

      <CardFooter title={title} detailLink={detailLink} />
    </div>
  );
};

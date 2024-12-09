import * as React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  variant?: 'default' | 'underlined' | 'bordered';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { 
      className, 
      type = 'text', 
      label, 
      isInvalid = false, 
      errorMessage, 
      variant = 'underlined', 
      ...props 
    }, 
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(!!props.value || !!props.defaultValue);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value);
      props.onChange?.(e);
    };

    const showFloatingLabel = isFocused || hasValue;

    const getVariantClasses = () => {
      switch (variant) {
        case 'underlined':
          return cn(
            'border-b-2 border-x-0 border-t-0 bg-transparent px-2 pt-6 pb-1 text-white',
            isInvalid 
              ? 'border-red-500 text-red-500 focus:border-red-500' 
              : 'border-white focus:border-white'
          );
        case 'bordered':
          return cn(
            'border rounded-md px-3 py-2',
            isInvalid 
              ? 'border-red-500 text-red-500 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
          );
        default:
          return cn(
            'border px-3 py-2',
            isInvalid 
              ? 'border-red-500 text-red-500 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
          );
      }
    };

    return (
      <div className="relative w-full">
        <div className="relative">
          <input
            type={type}
            className={cn(
              `w-full text-lg 
              focus:outline-none focus:ring-none focus:ring-opacity-50
              disabled:cursor-not-allowed disabled:opacity-50
              peer
              placeholder-transparent`,
              getVariantClasses(),
              className
            )}
            ref={ref}
            aria-invalid={isInvalid}
            placeholder=" " 
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
          {label && (
            <label
              className={cn(
                `absolute 
                left-2 
                top-0
                pt-2
                text-md 
                text-white 
                transition-all 
                duration-300 
                ease-in-out
                origin-left
                pointer-events-none
                peer-focus:text-white
                peer-focus:top-0
                peer-focus:text-sm
                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:-translate-y-1/2
                peer-placeholder-shown:text-base
                ${variant === 'underlined' ? 'peer-focus:left-0' : 'peer-focus:left-2'}`,
                isInvalid 
                  ? 'text-red-500 peer-focus:text-red-500' 
                  : '',
                showFloatingLabel 
                  ? 'top-0 text-base text-white' 
                  : 'top-1/2 -translate-y-1/2 text-base'
              )}
            >
              {label}
            </label>
          )}
        </div>
        {isInvalid && errorMessage && (
          <p className="mt-1 text-xs text-red-500">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
import React, { ReactNode } from 'react';
import { fontMontserrat } from '@/fonts/fonts';
import clsx from 'clsx';
import Link from 'next/link';

interface FooterProps {
  powerBy?: string;
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'minimal' | 'extended';
  backgroundColor?: string;
  textColor?: string;
}

export const Footer: React.FC<FooterProps> = ({
  powerBy = 'Powered by Your Company',
  children,
  className,
  variant = 'default',
  backgroundColor = 'bg-palletete-gold',
  textColor = 'text-foreground',
}) => {
  const baseClasses = clsx(
    'w-full p-5',
    fontMontserrat.variable,
    'font-sans font-normal',
    backgroundColor,
    textColor,
    className
  );

  const renderFooterContent = () => {
    switch (variant) {
      case 'minimal':
        return (
          <div className='container mx-auto flex justify-center items-center font-montserrat font-[500] text-lg tracking-wide text-center'>
            <h2>{powerBy}</h2>
          </div>
        );

      case 'extended':
        return (
          <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h3 className='font-bold mb-4'>About Us</h3>
              {/* column 1 */}
            </div>
            <div>
              <h3 className='font-bold mb-4'>Contact</h3>
              {/* column 2 */}
            </div>
            <div>
              <h3 className='font-bold mb-4'>Follow Us</h3>
              {/*  column 3 */}
            </div>
          </div>
        );

      default:
        return (
          <div className='container mx-auto flex flex-col items-center'>
            <h2 className='text-center'>{powerBy}</h2>
            {children}
          </div>
        );
    }
  };

  return (
    <footer
      id='footer'
      aria-description='footer section'
      className={baseClasses}
    >
      {renderFooterContent()}
    </footer>
  );
};

// extend
export const FooterSocialLinks = () => (
  <div className='flex space-x-4 mt-4'>
    {/* Icons  */}
    <Link as='/x' href='#' className='hover:text-blue-500'>
      {/* Twitter Icon */}
    </Link>
    <Link as='/facebook' href='#' className='hover:text-blue-500'>
      {/* Facebook Icon */}
    </Link>
    <Link as='/instagram' href='#' className='hover:text-pink-500'>
      {/* Instagram Icon */}
    </Link>
  </div>
);

export const FooterLegalLinks = () => (
  <div className='flex space-x-4 mt-4 text-sm'>
    <Link as='/privacy' href='/privacy' className='hover:underline'>
      Privacy Policy
    </Link>
    <Link as='/terms' href='/terms' className='hover:underline'>
      Terms of Service
    </Link>
    <Link as='/cookies' href='/cookies' className='hover:underline'>
      Cookie Policy
    </Link>
  </div>
);

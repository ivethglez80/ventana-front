'use client';

import Link from 'next/link';
import { CloseIcon, MobileHamburger, Schedule } from '@/components/icons';
import { useNavbar } from '@/components/navbar/hooks/useNavbar';
import { Logo } from '@/components/logo/logo';
import { Button } from '@nextui-org/react';
import { MobileMenu } from '@/components/navbar/mobile/mobile-menu';
import { CustomImg } from '@/components/custom/custom-img';

export const MobileNavbar = () => {
  const {
    isMobileMenuOpen,
    mobileMenuRef,
    toggleMobileMenu,
    setIsMobileMenuOpen,
  } = useNavbar();

  return (
    <nav
      className={`
        fixed 
        top-0 
        w-full 
        h-20 
        bg-pallete-black 
        z-50 
        sm:hidden
      `}
    >
      <div
        className={`
          w-full 
          h-full 
          flex
          justify-between
          gap-0
          
        `}
      >
        {/* Schedule */}
        <div
          className={`
            order-2
            bg-pallete-gold 
            w-full 
            h-full
            max-w-[100px] 
            flex
            justify-center 
            items-center
          `}
        >
          <Schedule
            color='pallete-title'
            className='group-hover:fill-white h-8 transition-colors'
          />
        </div>
        {/* WhatsApp */}
        <div
          className={`
            order-4
            p-2
            w-full
            max-w-[70px] 
            h-full 
            grid 
            place-items-center
              `}
        >
          <CustomImg
            src={'/btn_whatsapp.png'}
            alt='icon whatsapp'
            width={100}
            height={100}
          />
        </div>
        {/* flag => replace with button translate*/}
        <div
          className={`
            order-3
            p-4
            w-full
            max-w-[70px] 
            h-full 
            grid 
            place-items-center
              `}
        >
          <CustomImg
            src={'/argentina.png'}
            alt='icon whatsapp'
            width={100}
            height={100}
          />
        </div>

        {/* Logo */}
        <div
          className={`
            order-1
            flex
            justify-center 
            items-center
            h-full
          `}
        >
          <Link
            as='/'
            href='/'
            className='flex justify-center items-center w-full px-2'
          >
            <Logo src='/logo.png' />
          </Link>
        </div>

        {/* Menu */}
        <div
          className={`
            order-5 
            flex 
            justify-center 
            items-center 
            space-x-2
          `}
        >
          <Button
            size='sm'
            className='bg-transparent text-white'
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <MobileHamburger /> : <CloseIcon />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        ref={mobileMenuRef}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};

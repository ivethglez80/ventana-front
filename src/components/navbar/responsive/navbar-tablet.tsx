'use client';

import Link from 'next/link';
import { useNavbar } from '@/components/navbar/hooks/useNavbar';
import { NavLinks } from '@/components/navbar/mobile/navlinks';
import { LanguageDropdown } from '@/components/navbar/language/language-dropdown';
import { Logo } from '@/components/logo/logo';
import Image from 'next/image';

export const TabletNavbar = () => {
  const {
    isLanguageDropdownOpen,
    languageDropdownRef,
    toggleLanguageDropdown,
  } = useNavbar();

  return (
    <nav
      className={`
        hidden 
        sm:flex 
        md:flex 
        w-full 
        h-24 
        bg-pallete-black
        items-center 
        justify-center
        space-x-4 
        px-4 
        fixed 
        top-0 
        z-50
      `}
    >
      <Link href='/'>
        <Logo src='/logo.png' />
      </Link>

      <div className='relative flex items-center space-x-2'>
        <NavLinks isMobile={false} onMobileLinkClick={() => {}} />

        <Image src='/btn_whatsapp.png' alt='Whatsapp' width={30} height={30} />
      </div>
      <div className='absolute top-0 right-0'>
        <LanguageDropdown
          isOpen={isLanguageDropdownOpen}
          ref={languageDropdownRef}
          onToggle={toggleLanguageDropdown}
          onClose={() => {}}
        />
      </div>
    </nav>
  );
};

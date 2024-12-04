'use client';

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useNavbar } from "./hooks/useNavbar";
import { LanguageDropdown } from "./language/language-dropdown";
import { Logo } from "../logo/logo";
import NavMobile from "./mobile/nav-mobile";
import { CloseIcon, MobileHamburger } from "../icons";
import { NavLinks } from "./mobile/navlinks";
import { CustomImg } from "../custom/custom-img";
import { MobileMenu } from "./mobile/mobile-menu";



const Navbar: React.FC = () => {
  const {
    isMobileMenuOpen,
    isLanguageDropdownOpen,
    isMobile,
    mobileMenuRef,
    languageDropdownRef,
    toggleMobileMenu,
    toggleLanguageDropdown,
    setIsMobileMenuOpen,
  } = useNavbar();

  return (
    <nav
      className={`
    bg-pallete-black
    px-2
    h-24
    z-50
    sm:w-full
    `}
    >
      <div
        className={`
        container
        mx-auto
        flex
        justify-between
        items-center
        p-4
        h-full
        md:justify-center
        xl:gap-8
        `}
      >
        {/* button language */}
        <div
          className={`
          absolute
          top-0
          right-0
          m-0
          z-50
          hidden
          sm:flex
          `}
        >
          <LanguageDropdown
            isOpen={isLanguageDropdownOpen}
            ref={languageDropdownRef}
            onToggle={toggleLanguageDropdown}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>

        <Link href='/'>
          <Logo src='/logo.png' />
        </Link>
        {/* navigation mobile */}
        <NavMobile />

        {isMobile ? (
          <div
            className={`
          flex
          items-center
          space-x-4
          `}
          >
            <Button
              size='sm'
              className={`
                bg-black
                focus:outline-none
                text-white
                shadow-none
                `}
              variant='flat'
              onClick={(e) => {
                e.stopPropagation();
                toggleMobileMenu(e);
              }}
            >
              {isMobileMenuOpen ? <MobileHamburger /> : <CloseIcon />}
            </Button>
          </div>
        ) : (
          <div className='flex items-center space-x-2'>
            <NavLinks
              isMobile={isMobileMenuOpen}
              onMobileLinkClick={setIsMobileMenuOpen}
            />
            <div
              className={`
              hidden
              sm:grid
              place-items-center
              place-content-center
              h-full
              w-fit
              col-span-1
              col-start-3
              p-0
              max-w-[30px]
              `}
            >
              <CustomImg
                src={'/btn_whatsapp.png'}
                alt='icon whatsapp'
                width={100}
                height={100}
              />
            </div>
          </div>
        )}

        <MobileMenu
          isOpen={isMobileMenuOpen}
          ref={mobileMenuRef}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;

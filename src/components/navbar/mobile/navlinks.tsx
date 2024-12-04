import React from 'react';
import Link from 'next/link';
import { fontMontserrat } from '@/fonts/fonts';
import { siteConfig } from '@/config/site';

interface NavLinksProps {
  isMobile: boolean;
  onMobileLinkClick: (value: boolean) => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  isMobile,
  onMobileLinkClick,
}) => {
  return (
    <ul
      className={`${
        isMobile
          ? `
          flex 
          flex-col 
          items-center 
          gap-4 
          py-8
          `
          : `
          hidden 
          sm:grid 
          sm:grid-flow-col 
          sm:auto-cols-auto 
          sm:text-[10px] 
          sm:w-full 
          md:text-[12px] 
          lg:text-lg 
          lg:gap-4
          `
      } ${fontMontserrat.className} font-sans font-normal`}
    >
      {siteConfig.navItems.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item.href}
            className={`
              w-full
              py-2
              px-5
              text-pallete-title
              hover:bg-pallete-gold
              transition-colors
              ease-linear
              duration-100
              sm:p-2
              `}
            onClick={() => isMobile && onMobileLinkClick(false)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

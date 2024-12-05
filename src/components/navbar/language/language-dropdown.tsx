import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { ChevronDown } from '@/components/icons';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

interface LanguageData {
  code: string;
  name: string;
  flag: string;
  pathImg: string;
}

interface LanguageDropdownProps {
  isOpen: boolean;
  ref: React.RefObject<HTMLDivElement>;
  onToggle: (e?: React.MouseEvent) => void;
  onClose: (value: boolean) => void;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  isOpen,
  ref,
  onToggle,
  onClose,
}) => {
  const languages: LanguageData[] = [
    { code: 'en', name: 'Inglés', flag: '🇺🇸', pathImg: '/' },
    { code: 'es', name: 'Español', flag: '🇪🇸', pathImg: '/' },
  ];

  return (
    <div
      ref={ref}
      className={`
        flex
        justify-center
        bg-background
        w-20 border
        rounded-bl-lg
        `}
    >
      <Button
        radius='sm'
        onClick={onToggle}
        className={`
          flex
          justify-stretch
          items-center
          bg-background
          text-foreground
          px-2
          py-0
          border-none
          w-sm h-6
          max-h-[24px]
          `}
      >
        <div
          className={`
          relative
          w-full
          h-auto
          min-w-[6px]
          max-w-[20px]
          shadow-sm
          `}
        >
          <Image
            src={'/argentina.png'}
            alt={'flag language'}
            width={6}
            height={6}
            className={`
              rounded-full
              w-full
              `}
            priority
            quality={100}
          />
        </div>
        <ChevronDown
          className={clsx(
            `w-6 
            h-6
            str
            text-slate-400
            `,
            isOpen ? 'animate-rotate180' : 'animate-rotate0'
          )}
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`
              absolute
              top-full
              right-0
              mt-1
              w-44
              bg-white
              border
              rounded-md
              shadow-lg
              z-50`}
          >
            {languages.map((lang, idx) => (
              <Link
                key={idx}
                href={`/${lang.code}`}
                className={`
                  flex
                  items-center
                  px-4
                  py-2
                  text-foreground
                  hover:bg-pallete-gold
                  `}
                onClick={() => onClose(false)}
              >
                <span className='mr-2'>{lang.flag}</span>
                {lang.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

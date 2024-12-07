import { Breakpoint } from '@/config/interfaces/breakpoints-interface';
import { getBreakpoint } from '@/config/get-breakpoints';
import { useEffect, useState } from 'react';

export function useResponsive() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('xs');
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = getBreakpoint(width);

      setWindowSize({ width, height: window.innerHeight });
      setCurrentBreakpoint(breakpoint);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    currentBreakpoint,
    windowSize,
    isMobile: currentBreakpoint === 'xs',
    isTablet: ['sm', 'md'].includes(currentBreakpoint),
    isDesktop: ['lg', 'xl'].includes(currentBreakpoint),
    isBreakpoint: (bp: Breakpoint) => currentBreakpoint === bp,
  };
}

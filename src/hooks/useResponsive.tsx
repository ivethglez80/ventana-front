import { useState, useEffect } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const useResponsive = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('xs');
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowSize({ width, height: window.innerHeight });

      let breakpoint: Breakpoint = 'xs';
      if (width >= 640) breakpoint = 'sm';
      if (width >= 768) breakpoint = 'md';
      if (width >= 1024) breakpoint = 'lg';
      if (width >= 1280) breakpoint = 'xl';

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
  };
};

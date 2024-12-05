'use client';

import { useResponsive } from '@/hooks/useResponsive';
import { MobileNavbar } from './responsive/navbar-mobile';
import { TabletNavbar } from './responsive/navbar-tablet';
import { DesktopNavbar } from './responsive/navbar-desktop';

const Navbar: React.FC = () => {
  const { currentBreakpoint } = useResponsive();

  if (currentBreakpoint === 'xs') return <MobileNavbar />;
  if (['sm', 'md'].includes(currentBreakpoint)) return <TabletNavbar />;

  return <DesktopNavbar />;
};

export default Navbar;

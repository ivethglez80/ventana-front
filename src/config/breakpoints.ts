export const BREAKPOINTS = {
  xs: { max: 639 },
  sm: { min: 640, max: 767 },
  md: { min: 768, max: 1023 },
  lg: { min: 1024, max: 1279 },
  xl: { min: 1280 },
};

export const getBreakpoint = (width: number) => {
  if (width <= BREAKPOINTS.xs.max) return 'xs';
  if (width >= BREAKPOINTS.sm.min && width <= BREAKPOINTS.sm.max) return 'sm';
  if (width >= BREAKPOINTS.md.min && width <= BREAKPOINTS.md.max) return 'md';
  if (width >= BREAKPOINTS.lg.min && width <= BREAKPOINTS.lg.max) return 'lg';
  return 'xl';
};

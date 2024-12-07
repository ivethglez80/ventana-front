import { Breakpoint, BreakpointConfig } from "./interfaces/breakpoints-interface";

export const BREAKPOINTS: Record<Breakpoint, BreakpointConfig> = {
  xs: { max: 639 },
  sm: { min: 640, max: 767 },
  md: { min: 768, max: 1023 },
  lg: { min: 1024, max: 1279 },
  xl: { min: 1280 },
};

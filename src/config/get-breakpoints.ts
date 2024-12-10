import { BREAKPOINTS } from './breakpoints';
import type { Breakpoint } from './interfaces/breakpoints-interface';

export function  getBreakpoint(width: number): Breakpoint {
  for (const [breakpoint, config] of Object.entries(BREAKPOINTS)) {
    const meetsMin = config.min === undefined || width >= config.min;
    const meetsMax = config.max === undefined || width <= config.max;

    if (meetsMin && meetsMax) {
      return breakpoint as Breakpoint;
    }
  }

  return 'lg';
}

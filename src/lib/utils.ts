import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidGoogleMapsUrl(url: string): boolean {
  const googleMapsRegex = /^https:\/\/www\.google\.com\/maps\/embed\?/;
  return googleMapsRegex.test(url);
}
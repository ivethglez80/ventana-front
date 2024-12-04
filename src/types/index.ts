import { StaticImageData } from 'next/image';
import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
  fill?: string;
};

export interface ImageProps {
  src: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  extend?: string;
}

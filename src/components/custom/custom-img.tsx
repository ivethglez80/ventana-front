import { ImageProps } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';

export const CustomImg: React.FC<ImageProps> = (imgSrc) => {
  const { src, alt = 'img', width, height, extend } = imgSrc;
  return (
    <div className='relative w-auto h-auto min-w-[30px] md:max-w-[300px]'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`rounded-full w-${width} h-${height} ${extend}`}
        priority
        quality={100}
      />
    </div>
  );
};

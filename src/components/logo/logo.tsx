import { ImageProps } from '@/types';
import Image from 'next/image';

export const Logo: React.FC<ImageProps> = (imgSrc) => {
  const { src, alt = 'logo la-ventanaweb' } = imgSrc;
  return (
    <div className='relative w-full h-auto min-w-sm max-w-[8rem] sm:w-[100px] xl:w-[200px]'>
      <Image
        src={src}
        alt={alt}
        priority
        quality={100}
        width={750}
        height={800}
      />
    </div>
  );
};

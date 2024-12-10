'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/types/interfaces/shows/shows.interface';
import { ZoomModal } from '../ui/modals/zoom-modal';

interface GalleryClientProps {
  images: GalleryItem[];
}

export const ShowsClient: React.FC<GalleryClientProps> = ({ images }) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const handleImageClick = useCallback((src: string) => {
    setZoomedImage(src);
  }, []);

  const handleCloseZoom = useCallback(() => {
    setZoomedImage(null);
  }, []);

  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => handleImageClick(image.src)}
          onKeyDown={(e) => e.key === 'Enter' && handleImageClick(image.src)}
          role='button'
          tabIndex={0}
          aria-label={`Ampliar imagen ${image.alt}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            className='col-span-1 object-cover w-auto animate-fade animate-duration-200 animate-delay-100 h-auto'
            priority={true}
            quality={100}
            width={750}
            height={1000}
          />
        </div>
      ))}

      {zoomedImage && <ZoomModal src={zoomedImage} onClose={handleCloseZoom} />}
    </>
  );
};

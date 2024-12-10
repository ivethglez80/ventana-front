import Image from 'next/image';
import { useEffect } from 'react';

interface ModalImageProps {
  src: string;
  onClose: () => void;
}


export const ZoomModal: React.FC<ModalImageProps> = ({
  src,
  onClose,
}) => {
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
}, [onClose])

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label='imagen ampliada'
      className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'
    >
      <button
        className='absolute top-4 right-4 text-white text-2xl'
        onClick={onClose}
        aria-label='cerrar imagen'
      >
        &times;
      </button>
      <Image
        src={src}
        alt='Zoomed Image'
        className='max-w-full max-h-full'
        priority={true}
        quality={100}
        width={1500}
        height={1500}
      />
    </div>
  );
};

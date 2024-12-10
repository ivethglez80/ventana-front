import Image from 'next/image';
import Link from 'next/link';
import { TextHeading } from '../ui/textheading';

interface ImageMenu {
  href: string;
  alt: string;
}

export const MenuGallery: React.FC = () => {
  const images: ImageMenu[] = [
    {
      href: '/menu/imagen_10417.jpg',
      alt: 'menu img',
    },
    {
      href: '/menu/imagen_44742.jpg',
      alt: 'menu img',
    },
    {
      href: '/menu/imagen_56140.jpg',
      alt: 'menu img',
    },
    {
      href: '/menu/imagen_65204.jpg',
      alt: 'menu img',
    },
    {
      href: '/menu/imagen_74123.jpg',
      alt: 'menu img',
    },
    {
      href: '/menu/imagen_86895.jpg',
      alt: 'menu img',
    },
    {
      href: '/menu/imagen_92391.jpg',
      alt: 'menu img',
    },
    {
      href: '/menu/imagen_97019.jpg',
      alt: 'menu img',
    },
  ];

  return (
    <section
      id='menu'
      className={`
        bg-black
        flex
        flex-wrap
        justify-center
        w-full
        `}
    >
      <TextHeading
        color='white'
        className={`
        text-white
         text-base sm:text-3xl
        md:p-14
        py-9
        px-2
        text-center
        tracking-[0.1rem]
        w-full
        uppercase
        `}
      >
        cena gourmet de 3 pasos con bebidas incluidas{' '}
      </TextHeading>
      <div
        className={`
        grid
        grid-cols-2
        sm:grid-cols-4
        place-content-stretch
        `}
      >
        {images.map((image, index) => (
          <Link key={index} href={'https://www.laventanaweb.com/menu'}>
            <Image
              src={image.href}
              className={`
                col-span-1
                object-cover
                w-full
                animate-fade
                animate-duration-200
                animate-delay-100
                max-w-[100%]
                h-auto
                `}
              alt='image gallery'
              priority={true}
              quality={100}
              width={750}
              height={1000}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};


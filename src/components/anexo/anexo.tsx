import { Paragraph } from '../ui/paragraph';
import { TextHeading } from '../ui/textheading';
import { AnexoClient } from './anexo-client';

export const Anexo: React.FC = () => {
  return (
    <section
      id='anexo'
      className='bg-pallete-anexo md:pb-10 pb-5 sm:px-4 flex flex-wrap'
    >
      <div
        className='mx-auto max-w-[1170px] text-white uppercase'
        id='refWidth'
      >
        <TextHeading
          className=' text-base sm:text-3xl md:pt-10 p-4 leading-normal tracking-wide '
          color='white'
        >
          disfrutá de una noche de tango en buenos aires
        </TextHeading>
        <Paragraph
          className='md:pb-8 pb-6 text-pallete-gold leading-normal tracking-wide'
          color=''
        >
          antes de la cena podrás contratar una clase de tango o una degustación
          de vinos
        </Paragraph>

        <AnexoClient />
      </div>
    </section>
  );
};


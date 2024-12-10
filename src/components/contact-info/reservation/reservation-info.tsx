import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { fontMontserrat } from '@/fonts/fonts';

import { SocialMedia } from '../social-media/social-media';
import { ContactMethodLink, contactMethods } from './reservation-methods';

const ReservationInfo: React.FC = () => {
  return (
    <div>
      <Card className='bg-transparent max-w-[400px] text-white px-2'>
        <CardHeader>
          <div
            className={`flex justify-center lg:justify-start uppercase w-full font-bold leading-relaxed ${fontMontserrat.className} text-responsive-base`}
          >
            <p className='font-bold'>reservas</p>
          </div>
        </CardHeader>
        <CardBody className='p-0'>
          <nav
            aria-label='methods contact'
            className='flex flex-col items-center gap-1'
          >
            {contactMethods.map((method) => (
              <ContactMethodLink key={method.type} {...method} />
            ))}
          </nav>
        </CardBody>
      </Card>
      <SocialMedia />
    </div>
  );
};

export default ReservationInfo;

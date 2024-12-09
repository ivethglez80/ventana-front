import { Services } from '@/components/services/services';
import {ContactInfo} from '@/components/contact-info/contact-info'
import { GoogleMap } from '@/components/map/map-location';
import { Newsletter } from '@/components/newsletter/newsletter';
const Home = () => {
  return (
    <main
      id='home'
      className={`
    responsive-container
    
    `}
    >
      {/* features */}
      <div className='flex justify-center'>
        <div className='lg:w-7/12 h-fit flex flex-col items-center w-full'>
          <Newsletter />
        </div>
      </div>
      <GoogleMap />
      <ContactInfo />
      <Services />
    </main>
  );
};

export default Home;

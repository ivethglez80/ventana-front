import { Services } from '@/components/services/services';
import {ContactInfo} from '@/components/contact-info/contact-info'
import { GoogleMap } from '@/components/map/map-location';
import { WrapperMain } from '@/components/modules/wrapper-main/wrapper-main';
const Home = () => {
  return (
    <main
      id='home'
      className={`
    responsive-container
    
    `}
    >
      {/* features */}
      <WrapperMain/>
      <GoogleMap />
      <ContactInfo />
      <Services />
    </main>
  );
};

export default Home;

import { Services } from '@/components/services/services';
import {ContactInfo} from '@/components/contact-info/contact-info'
import { GoogleMap } from '@/components/map/map-location';
const Home = () => {
  return (
    <main
      id='home'
      className={`
    responsive-container
    
    `}
    >
      {/* features */}
      <GoogleMap/>
      <ContactInfo/>
      <Services />
    </main>
  );
};

export default Home;

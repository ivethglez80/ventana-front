import { Services } from '@/components/services/services';
import { ContactInfo } from '@/components/contact-info/contact-info';
import { GoogleMap } from '@/components/map/map-location';
import { WrapperMain } from '@/components/modules/wrapper-main/wrapper-main';
import { Consultas } from '@/components/contact-form/consultas';
import { Shows } from '@/components/shows/shows';
const Home = () => {
  return (
    <main
      id='home'
      className={`
    responsive-container
    
    `}
    >
      {/* features */}
      <Shows />
      <WrapperMain />
      <Consultas />
      <GoogleMap />
      <ContactInfo />
      <Services />
    </main>
  );
};

export default Home;

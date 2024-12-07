import { Services } from '@/components/services/services';
import {ContactInfo} from '@/components/contact-info/contact-info'
const Home = () => {
  return (
    <main
      id='home'
      className={`
    responsive-container
    
    `}
    >
      {/* features */}
      <ContactInfo/>
      <Services />
    </main>
  );
};

export default Home;

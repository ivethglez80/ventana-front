import { Services } from '@/components/services/services';
import { ContactInfo } from '@/components/contact-info/contact-info';
import { GoogleMap } from '@/components/map/map-location';
import { WrapperMain } from '@/components/modules/wrapper-main/wrapper-main';
import { Consultas } from '@/components/contact-form/consultas';
import { Shows } from '@/components/shows/shows';
import { MenuGallery } from '@/components/menu/menu-gallery';
import { Anexo } from '@/components/anexo/anexo';
import { Salones } from '@/components/salones/salones';
import { Search } from '@/components/search/search';
import { DynamicVimeoHome } from '@/components/vimeo/dynamic-vimeo';
const Home = () => {
  
  return (
    <main
      id='home'
      className={`
    responsive-container
    
    `}
    >
      {/* features */}
      <DynamicVimeoHome/>
      <Salones/>
      <Search/>
      <Anexo/>
      <MenuGallery/>
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

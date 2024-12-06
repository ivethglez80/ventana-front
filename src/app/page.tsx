import { Services } from '@/components/services/services';

const Home = () => {
  return (
    <main
      id='home'
      className={`
    responsive-container
    
    `}
    >
      {/* features */}
      <Services />
    </main>
  );
};

export default Home;

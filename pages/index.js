import Head from 'next/head';
import TecsNavbar from '../components/TecsNavbar';
import TecsCarousel from '../components/TecsCarousel';

const Home = () => (
  <>
    <Head>
      <title>Tecs</title>      
    </Head>
    
    <TecsNavbar /> {/*Bootstrap navbar*/}
    <TecsCarousel /> {/*Bootstrap carousel*/}
  </>
);

export default Home;

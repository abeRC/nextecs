import Head from 'next/head';
import TecsCarousel from '../components/TecsCarousel';

const Home = () => (
  <>
    <Head>
      <title>Tecs</title>      
    </Head>
    <h1>Oi</h1>

    <TecsCarousel /> {/*Bootstrap carousel*/}
  </>
);

export default Home;

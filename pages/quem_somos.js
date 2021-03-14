import Head from 'next/head';
import TecsNavbar from '../components/TecsNavbar';
import TecsTextLayout from '../components/TecsTextLayout';

const QuemSomos = () => (
  <>
    <Head> {/*Replace with a default TecsHead that allows you to change the title and stuff */}
      <title>Tecs</title>      
    </Head>
    
    <TecsNavbar /> {/*Bootstrap navbar*/}
    
    <TecsTextLayout>
      <h1>HMMMM</h1>
      <h2>a:</h2>
      <p>oi</p>
      <h2>b:</h2>
      <p>ola</p>
    </TecsTextLayout>
  </>
);

export default QuemSomos;

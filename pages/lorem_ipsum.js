import Head from 'next/head';
import TecsNavbar from '../components/TecsNavbar';
import TecsCarousel from '../components/TecsCarousel';

const Home = () => (
  <>
    <Head>
      <title>Tecs</title>      
    </Head>
    
    <TecsNavbar /> {/*Bootstrap navbar*/}
    <div className="container">
      <h1>Lorem ipsum</h1>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut massa quis mi aliquam iaculis a ac libero. Nam arcu massa, aliquet sit amet scelerisque vel, pellentesque quis risus. Sed sit amet eros interdum, consectetur nunc at, volutpat lectus. Donec vehicula fringilla tellus, in congue magna porttitor sit amet. Donec convallis magna orci, nec luctus sapien sollicitudin quis. Duis diam eros, interdum ut ultricies id, lobortis et lorem. Cras massa ex, facilisis at volutpat a, ultrices nec augue. Aliquam sollicitudin eget risus nec semper. Phasellus dapibus orci nec lacinia aliquet. Praesent sed massa non ex egestas maximus non at velit. Nullam venenatis rutrum eros in tincidunt. Cras eleifend ipsum erat. Donec pulvinar felis nec mauris volutpat, et imperdiet enim maximus. Sed quis lacinia orci, vitae tincidunt diam. Aenean quis orci vehicula, blandit libero nec, congue velit. 
      </p>
    </div>
  </>
);

export default Home;

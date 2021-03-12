import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/utils.css';

// Always renders in every page.
const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
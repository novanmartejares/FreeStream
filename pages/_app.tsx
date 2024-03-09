import '@/styles/globals.scss';
import '@/styles/ads.js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

import { Provider } from 'react-redux';
import store from '@/redux/store';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Navbar, Footer } from '@/components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
        <script src="/ads.js"></script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;

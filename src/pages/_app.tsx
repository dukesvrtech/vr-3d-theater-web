import '../styles/global.css';

import type { AppProps } from 'next/app';

import Providers from '../lib/providers';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Providers>
    <Component {...pageProps} />
  </Providers>
);

export default MyApp;

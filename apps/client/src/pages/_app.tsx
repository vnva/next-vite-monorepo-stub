import type { AppProps } from 'next/app';

import '@/core/styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

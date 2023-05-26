import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

import '@/core/styles/index.scss';

const montserratFont = localFont({
  src: [
    { path: '../core/assets/fonts/montserrat-bold.woff2', weight: '700', style: 'normal' },
    { path: '../core/assets/fonts/montserrat-bold.woff', weight: '700', style: 'normal' },
    { path: '../core/assets/fonts/montserrat-semi-bold.woff2', weight: '600', style: 'normal' },
    { path: '../core/assets/fonts/montserrat-semi-bold.woff', weight: '600', style: 'normal' },
    { path: '../core/assets/fonts/montserrat-medium.woff2', weight: '500', style: 'normal' },
    { path: '../core/assets/fonts/montserrat-medium.woff', weight: '500', style: 'normal' },
    { path: '../core/assets/fonts/montserrat-regular.woff2', weight: '400', style: 'normal' },
    { path: '../core/assets/fonts/montserrat-regular.woff', weight: '400', style: 'normal' },
  ],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style global jsx>{`
        :root {
          --montserrat-font: ${montserratFont.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />;
    </>
  );
}

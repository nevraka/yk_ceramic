import '../../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', (url) => {
    NProgress.done();
  });
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Component {...pageProps} />
      <a
        className="github-fork-ribbon right-bottom fixed"
        href="https://github.com/nevraka/yk_ceramic"
        data-ribbon="Fork me on GitHub"
        title="Fork me on GitHub"
      >
        Fork me on GitHub
      </a>
      <Footer />
    </>
  );
}
export default MyApp;

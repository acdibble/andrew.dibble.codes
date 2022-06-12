import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <div className="w-full max-w-3xl justify-center">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

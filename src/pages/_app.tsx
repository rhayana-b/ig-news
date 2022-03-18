import { AppProps } from 'next/app';
import { SessionProvider as NextAuthSessioProvider } from 'next-auth/react';
import { Header } from '../components/Header' 
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthSessioProvider session={pageProps.session} refetchInterval={5 * 60}>
      <Header />
      <Component {...pageProps} />
    </NextAuthSessioProvider>
  )
}

export default MyApp

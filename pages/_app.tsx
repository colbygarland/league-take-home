import type { AppProps } from 'next/app';
import { StoreProvider, rootStore } from '../stores/rootStore';
import 'tailwindcss/tailwind.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Container } from '../components/container';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider value={rootStore}>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </StoreProvider>
  );
}

export default MyApp;

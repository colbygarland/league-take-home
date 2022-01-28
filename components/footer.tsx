import { AUTHOR_WEBSITE } from '../constants';
import { Container } from './container';

export const Footer = () => (
  <footer className="bg-primary py-4 shadow mt-10">
    <Container>
      <p className="text-white text-lg">
        Made with 💖 by{' '}
        <a href={AUTHOR_WEBSITE} target="_blank" className="font-bold transition-all duration-200 hover:text-rose-500">
          Colby Garland
        </a>
      </p>
    </Container>
  </footer>
);

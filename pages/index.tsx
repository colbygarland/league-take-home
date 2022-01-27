import axios from 'axios';
import { Album } from '../components/album/album';
import { Container } from '../components/container';
import { API_URL } from '../constants';

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

interface HomeProps {
  albums: IAlbum[];
}

export default function Home({ albums }: HomeProps) {
  const renderAlbums = () => {
    return albums.map((album) => <Album album={album} key={album.id} />);
  };

  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{renderAlbums()}</div>
    </Container>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(`${API_URL}/users/1/albums`);
    const albums = await response.data;
    return { props: { albums } };
  } catch (error) {
    console.error(error);
  }
}

import axios from 'axios';
import { Album } from '../components/album/album';
import { Container } from '../components/container';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { API_URL } from '../constants';
import { rootStore, useStore } from '../stores/rootStore';

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

interface HomeProps {
  albums?: IAlbum[];
}

export default function Home({ albums }: HomeProps) {
  const { dataStore } = useStore();

  const renderAlbums = () => {
    if (albums === undefined) {
      console.log('pulling from mst');
      return dataStore.albums.map((album) => <Album album={album} key={album.id} />);
    } else {
      return albums.map((album) => <Album album={album} key={album.id} />);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{renderAlbums()}</div>
      </Container>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  // We want to cache this data, since it looks like it doesn't need to change often
  // Note: if this was a real application, I would add an expire time of probably an hour or a day,
  //       but for this application I think having no cache is fine.
  const { dataStore } = rootStore;
  if (dataStore.albums.length !== 0) return { props: {} };
  try {
    const response = await axios.get(`${API_URL}/users/1/albums`);
    const albums = await response.data;
    dataStore.setAlbums(albums);
    return { props: { albums } };
  } catch (error) {
    console.error(error);
  }
}

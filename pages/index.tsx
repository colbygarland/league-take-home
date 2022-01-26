import axios from 'axios';
import { Album } from '../components/album/album';
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
  return albums.map((album) => <Album album={album} key={album.id} />);
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(`${API_URL}/users/1/albums`);
    const data = await response.data;
    return { props: { albums: data } };
  } catch (error) {
    console.error(error);
  }
}

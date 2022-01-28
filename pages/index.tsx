import { get } from '../api';
import { Album } from '../components/album/album';
import { IAlbum } from '../stores/dataStore';
import { rootStore, useStore } from '../stores/rootStore';

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

  return <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{renderAlbums()}</div>;
}

export async function getServerSideProps() {
  // Have a sensible default in case of an error
  let albums = {};

  // We want to cache this data, since it looks like it doesn't need to change often
  // Note: if this was a real application, I would add an expire time of probably an hour or a day,
  //       but for this application I think having no expire is fine.
  const { dataStore } = rootStore;
  if (dataStore.albums.length !== 0) {
    albums = dataStore.albums;
  } else {
    albums = await get('users/1/albums');
  }

  return { props: { albums } };
}

import axios from 'axios';
import { Thumbnail } from '../../components/album/thumbnail';
import { Arrow } from '../../components/arrow';
import { Container } from '../../components/container';
import { API_URL } from '../../constants';

export interface IAlbumDetail {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface AlbumDetailsProps {
  photos: IAlbumDetail[];
}

export default function AlbumDetails({ photos }: AlbumDetailsProps) {
  const renderPhotos = () => photos.map((photo) => <Thumbnail thumbnail={photo} key={photo.id} />);

  return (
    <Container>
      <div className="py-3">
        <a href="/">
          <Arrow />
        </a>
      </div>

      <div className="mt-10 px-6">
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6">{renderPhotos()}</div>
      </div>
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  const { albumId } = context.query;
  try {
    const response = await axios.get(`${API_URL}/albums/${albumId}/photos`);
    const photos = await response.data;
    return { props: { photos } };
  } catch (error) {
    console.error(error);
  }
}

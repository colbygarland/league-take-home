import { Thumbnail } from '../../components/album/thumbnail';
import { Arrow } from '../../components/icons/arrow';
import { get } from '../../api';
import Link from 'next/link';

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
    <>
      <div className="py-3">
        <Link href="/">
          <a>
            <Arrow />
          </a>
        </Link>
      </div>

      <div className="mt-10 px-6">
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6">{renderPhotos()}</div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { albumId } = context.query;
  const photos = await get(`albums/${albumId}/photos`);
  return { props: { photos } };
}

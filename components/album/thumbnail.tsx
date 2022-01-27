import { IAlbumDetail } from '../../pages/albums/[albumId]';

interface ThumbnailProps {
  thumbnail: IAlbumDetail;
}

export const Thumbnail = ({ thumbnail }: ThumbnailProps) => {
  return (
    <div>
      <a className="block" href={thumbnail.url} target="_blank" referrerPolicy="origin">
        <img src={thumbnail.thumbnailUrl} alt={thumbnail.title} />
        <h5>
          <small>{thumbnail.title}</small>
        </h5>
      </a>
    </div>
  );
};

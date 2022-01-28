import { IPhoto } from '../../stores/dataStore';
import { useStore } from '../../stores/rootStore';

interface ThumbnailProps {
  thumbnail: IPhoto;
  highlightSearchTerm?: boolean;
}

export const Thumbnail = ({ thumbnail, highlightSearchTerm = false }: ThumbnailProps) => {
  const { dataStore } = useStore();

  const renderTitle = () => {
    let title = thumbnail.title;
    if (!highlightSearchTerm) return title;
    const index = thumbnail.title.indexOf(dataStore.searchTerm);
    if (index >= 0) {
      return (
        <span>
          {title.substring(0, index)}
          <em>{title.substring(index, index + dataStore.searchTerm.length)}</em>
          {title.substring(index + dataStore.searchTerm.length)}
        </span>
      );
    }
    return title;
  };

  return (
    <div>
      <a className="block" href={thumbnail.url} target="_blank" referrerPolicy="origin">
        <img src={thumbnail.thumbnailUrl} alt={thumbnail.title} className="shadow rounded-md" />
        <h5>
          <small>{renderTitle()}</small>
        </h5>
      </a>
    </div>
  );
};

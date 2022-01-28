import { Thumbnail } from '../components/album/thumbnail';
import { IPhoto } from '../stores/dataStore';
import { useStore } from '../stores/rootStore';

export default function Search() {
  const { dataStore } = useStore();
  return (
    <>
      <h1 className="text-3xl mb-10">Search Results for "{dataStore.searchTerm}"</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {dataStore.searchResults.map((id) => (
          <Thumbnail thumbnail={dataStore.getPhotoById(id) as IPhoto} highlightSearchTerm key={id} />
        ))}
      </div>
    </>
  );
}

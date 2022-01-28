import { useState } from 'react';
import { useRouter } from 'next/router';
import { get } from '../api';
import { useStore } from '../stores/rootStore';
import { Search } from './icons/search';

export const SearchForm = () => {
  const { dataStore } = useStore();
  const router = useRouter();
  const [fetching, setFetching] = useState<boolean>(false);

  const handleChange = (event: any) => {
    dataStore.setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setFetching(true);

    // The first time, we need to get from the api
    let photos = [];
    if (dataStore.photos.length === 0) {
      photos = await get('photos');
      dataStore.setPhotos(photos);
    } else {
      // Otherwise, let us use the cached response to speed up the search time!
      photos = dataStore.photos;
    }

    // Search through and find the photos that titles match our term
    dataStore.findPhotosByTitle();
    setFetching(false);
    router.push('/search');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            disabled={fetching}
            onChange={handleChange}
            type="search"
            name="search"
            placeholder='Search "Lorem ipsem dolor"'
            className="bg-gray-200 pl-2 pr-20 py-2 rounded-md border-2 border-transparent focus:shadow-xl focus:outline-none"
          />
          <div className="absolute inset-y-0 right-2 flex items-center bg-gray-200 px-2">
            <button onClick={handleSubmit}>
              <Search />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

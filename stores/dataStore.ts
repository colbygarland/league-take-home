import { cast, SnapshotOut, types } from 'mobx-state-tree';

const Photo = types.model({
  id: types.optional(types.identifierNumber, 0),
  albumId: types.optional(types.number, 0),
  title: types.optional(types.string, ''),
  url: types.optional(types.string, ''),
  thumbnailUrl: types.optional(types.string, ''),
});
export interface IPhoto extends SnapshotOut<typeof Photo> {}

const Album = types.model({
  id: types.optional(types.identifierNumber, 0),
  userId: types.optional(types.number, 0),
  title: types.optional(types.string, ''),
  photos: types.optional(types.array(Photo), []),
});
export interface IAlbum extends SnapshotOut<typeof Album> {}

export const DataStore = types
  .model('DataStore')
  .props({
    albums: types.optional(types.array(Album), []),
    photos: types.optional(types.array(Photo), []),
    searchTerm: types.optional(types.string, ''),
    searchResults: types.optional(types.array(types.number), []),
  })
  .views((self) => ({
    getPhotoById: (id: number): IPhoto | undefined => {
      return self.photos.find((photo) => photo.id === id);
    },
  }))
  .actions((self) => ({
    setAlbums: (albums: IAlbum[]) => {
      self.albums = cast(albums);
    },
    setPhotos: (photos: IPhoto[]) => {
      self.photos = cast(photos);
    },
    setSearchTerm: (term: string) => {
      self.searchTerm = term;
    },
    findPhotosByTitle: () => {
      const results: number[] = self.photos.filter((photo) => photo.title.includes(self.searchTerm)).map((photo) => photo.id);
      self.searchResults = cast(results);
    },
  }));

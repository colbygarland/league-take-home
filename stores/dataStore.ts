import { types } from 'mobx-state-tree';

const Photo = types.model({
  id: types.optional(types.identifierNumber, 0),
  albumId: types.optional(types.number, 0),
  title: types.optional(types.string, ''),
  url: types.optional(types.string, ''),
  thumbnailUrl: types.optional(types.string, ''),
});

const Album = types.model({
  id: types.optional(types.identifierNumber, 0),
  userId: types.optional(types.number, 0),
  title: types.optional(types.string, ''),
  photos: types.optional(types.array(Photo), []),
});

export const DataStore = types
  .model('DataStore')
  .props({
    albums: types.optional(types.array(Album), []),
  })
  .actions((self) => ({
    setAlbums: (albums: any) => {
      self.albums = albums;
    },
  }));

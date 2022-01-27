import { useContext, createContext } from 'react';
import { types, Instance } from 'mobx-state-tree';
import { DataStore } from './dataStore';

export const rootStore = types
  .model({
    dataStore: DataStore,
  })
  .create({
    dataStore: {},
  });

const RootStoreContext = createContext<null | Instance<typeof rootStore>>(null);
export const StoreProvider = RootStoreContext.Provider;

export function useStore() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}

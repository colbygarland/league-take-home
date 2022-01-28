import React from 'react';
import { StoreProvider, rootStore } from '../stores/rootStore';

/**
 * Used to satisfy MST during testing.
 * @param children
 * @returns React.ReactNode
 */
export const WithMST = (child: any) => {
  return <StoreProvider value={rootStore}>{child}</StoreProvider>;
};

it('empty test', () => {
  expect(true).toBe(true);
});

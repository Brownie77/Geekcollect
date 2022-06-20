import { createSelector } from "@reduxjs/toolkit";

const collectionSelector = (state) => state.сollectionItems.сollectionItems;
const collectionItemIdSelector = (state) =>
  state.сollectionItems.selectedItemId;
const selectedItemInfoSelector = createSelector(
  [collectionSelector, collectionItemIdSelector],
  (items, id) => items.filter((item) => item.id === id)
);

const itemFromCollectionSelector = (state, id) =>
  state.сollectionItems.сollectionItems.filter((item) => item.id === id);

export {
  collectionSelector,
  itemFromCollectionSelector,
  selectedItemInfoSelector,
};

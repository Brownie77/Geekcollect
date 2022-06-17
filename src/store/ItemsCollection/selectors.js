const collectionSelector = (state) => state.сollectionItems.сollectionItems;

const itemFromCollectionSelector = (state, id) =>
  state.сollectionItems.сollectionItems.filter((item) => item.id === id);

export { collectionSelector, itemFromCollectionSelector };

import { createSlice } from "@reduxjs/toolkit";

const collectItemSlice = createSlice({
  name: "collectionItems",
  initialState: {
    сollectionItems: [],
  },
  reducers: {
    addCollectionItem(state, action) {
      state.сollectionItems.push({
        id: action.payload.id,
        title: action.payload.title,
        collection: action.payload.collection,
        description: action.payload.description,
        photo: "https://picsum.photos/200/300",
      });
    },
    deleteCollectionItem(state, action) {
      state.сollectionItems = state.сollectionItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    changeCollectionItem(state, action) {
      state.сollectionItems = state.сollectionItems.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    },
  },
});

export const { addCollectionItem, deleteCollectionItem, changeCollectionItem } =
  collectItemSlice.actions;
export default collectItemSlice.reducer;

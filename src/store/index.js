import { configureStore } from "@reduxjs/toolkit";
import collectItemReducer from "./ItemsCollection/reducer";

export default configureStore({
  reducer: {
    сollectionItems: collectItemReducer,
  },
});

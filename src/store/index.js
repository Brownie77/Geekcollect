import { configureStore, combineReducers } from "@reduxjs/toolkit";
import collectItemReducer from "./ItemsCollection/reducer";
import collectionReducer from "./Collections/reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  сollectionItems: collectItemReducer,
  collections: collectionReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["collections"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

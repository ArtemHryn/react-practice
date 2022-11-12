import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import wordSlice from './wordSlice';
import filterSlice from './filterWord';

const rootPersistConfig = {
  key: 'words',
  storage: storage,
  whitelist: ['words'],
};

const rootReducer = combineReducers({ words: wordSlice, filter: filterSlice });

const wordsPersistReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: wordsPersistReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { shopApi } from './shopApi';

const rootReducer = combineReducers({
  [shopApi.reducerPath]: shopApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
  devTools: process.env.NODE_ENV != 'production',
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;

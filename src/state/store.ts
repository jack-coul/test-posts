import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { defaultApi } from './endpoints/endpoints.api';

export const store = configureStore({
  reducer: {
    [defaultApi.reducerPath]: defaultApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(defaultApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import cartStorage from './localStorages/cartStorage';
export const store = configureStore({
   reducer: {
      cartReducer,
   },
   preloadedState: cartStorage().getLocalStorageCart(),
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
         cartStorage().localStorageCartMiddleware.middleware
      ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

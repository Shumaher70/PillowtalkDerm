import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./features/cartSlice"
import sidebarReducer from "./features/sidebarSlice"
import cartStorage from "./localStorages/cartStorage"
import commentSlice from "./features/commentSlice"
import commentImagesReducer from "./features/commentImagesSlice"
export const store = configureStore({
   reducer: {
      cartReducer,
      sidebarReducer,
      commentSlice,
      commentImagesReducer,
   },
   preloadedState: {
      cartReducer: cartStorage().getLocalStorageCart(),
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
         cartStorage().localStorageCartMiddleware.middleware
      ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

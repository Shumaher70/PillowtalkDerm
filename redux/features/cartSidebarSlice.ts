import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartSidebar {
   sidebar: boolean;
}

const initialState = {
   sidebar: false,
} as CartSidebar;

export const sidebar = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      sidebarCart: (state, action: PayloadAction<boolean>) => {
         state.sidebar = action.payload;
      },
   },
});

export const { sidebarCart } = sidebar.actions;

export default sidebar.reducer;

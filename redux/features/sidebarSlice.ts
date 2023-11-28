import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface sidebar {
   sidebarCart: boolean;
   slideShop: boolean;
   slideSkinNerdAcademy: boolean;
}

const initialState = {
   sidebarCart: false,
   slideShop: false,
   slideSkinNerdAcademy: false,
} as sidebar;

export const sidebar = createSlice({
   name: 'sidebar',
   initialState,
   reducers: {
      sidebarCart: (state, action: PayloadAction<boolean>) => {
         state.sidebarCart = action.payload;
      },
      slideShop: (state, action: PayloadAction<boolean>) => {
         state.slideShop = action.payload;
      },
      slideSkinNerdAcademy: (state, action: PayloadAction<boolean>) => {
         state.slideSkinNerdAcademy = action.payload;
      },
   },
});

export const { sidebarCart, slideShop, slideSkinNerdAcademy } = sidebar.actions;

export default sidebar.reducer;

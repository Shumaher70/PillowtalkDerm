import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface sidebar {
   sidebarCart: boolean;
   sidebarBurger: boolean;
   sidebarSearch: boolean;

   slideShop: boolean;
   slideSkinNerdAcademy: boolean;
   slideSearch: boolean;
}

const initialState = {
   sidebarCart: false,
   sidebarBurger: false,
   sidebarSearch: false,

   slideShop: false,
   slideSkinNerdAcademy: false,
   slideSearch: false,
} as sidebar;

export const sidebar = createSlice({
   name: 'sidebar',
   initialState,
   reducers: {
      sidebarCart: (state, action: PayloadAction<boolean>) => {
         state.sidebarCart = action.payload;
      },
      sidebarBurger: (state, action: PayloadAction<boolean>) => {
         state.sidebarBurger = action.payload;
      },
      sidebarSearch: (state, action: PayloadAction<boolean>) => {
         state.sidebarSearch = action.payload;
      },

      slideShop: (state, action: PayloadAction<boolean>) => {
         state.slideShop = action.payload;
      },
      slideSkinNerdAcademy: (state, action: PayloadAction<boolean>) => {
         state.slideSkinNerdAcademy = action.payload;
      },
      slideSearch: (state, action: PayloadAction<boolean>) => {
         state.slideSearch = action.payload;
      },
   },
});

export const {
   sidebarCart,
   slideShop,
   slideSkinNerdAcademy,

   sidebarBurger,
   sidebarSearch,
   slideSearch,
} = sidebar.actions;

export default sidebar.reducer;

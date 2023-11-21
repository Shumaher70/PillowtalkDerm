import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import {
   addCart,
   sidebarCart,
   removeCart,
   increaseCart,
   decreaseCart,
} from '../features/cartSlice';

const localStorageCart = () => {
   const localStorageCartMiddleware = createListenerMiddleware();

   localStorageCartMiddleware.startListening({
      matcher: isAnyOf(
         addCart,
         sidebarCart,
         removeCart,
         increaseCart,
         decreaseCart
      ),
      effect: (action, listenerApi) =>
         localStorage.setItem('cart', JSON.stringify(listenerApi.getState())),
   });

   const getLocalStorageCart = () => {
      if (localStorage.getItem('cart') !== null) {
         return JSON.parse(localStorage.getItem('cart') as string);
      }
   };
   return { getLocalStorageCart, localStorageCartMiddleware };
};

export default localStorageCart;

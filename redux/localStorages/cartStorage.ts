import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { addCart, removeCart, updateCart } from '../features/cartSlice';

const localStorageCart = () => {
   const localStorageCartMiddleware = createListenerMiddleware();

   localStorageCartMiddleware.startListening({
      matcher: isAnyOf(addCart, removeCart, updateCart),
      effect: (action, listenerApi) => {
         if (typeof localStorage !== 'undefined') {
            localStorage.setItem(
               'cart',
               JSON.stringify((listenerApi.getState() as RootState).cartReducer)
            );
         }
      },
   });

   const getLocalStorageCart = () => {
      if (
         typeof localStorage !== 'undefined' &&
         localStorage.getItem('cart') !== null
      ) {
         return JSON.parse(localStorage.getItem('cart') as string);
      }
   };
   return { getLocalStorageCart, localStorageCartMiddleware };
};

export default localStorageCart;

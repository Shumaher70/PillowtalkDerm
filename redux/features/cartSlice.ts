import { CartType } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CartState = {
   carts: CartType[]
   totalPrice: number
   totalQuantity: number
}

const initialState = {
   carts: [],
   totalPrice: 0,
   totalQuantity: 0,
} as CartState

export const cart = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addCart: (state, action: PayloadAction<CartType>) => {
         if (
            state.carts.filter((cart) => cart.id.includes(action.payload.id))
               .length === 0
         ) {
            state.carts.push(action.payload)
         } else {
            state.carts.map((cart) => {
               cart.id === action.payload.id ? (cart.quantity += 1) : null
               cart.id === action.payload.id
                  ? (cart.totalPrice = cart.price * cart.quantity)
                  : null
            })
         }
         state.totalPrice = state.carts
            .map((cart) => cart.totalPrice)
            .reduce((sum, acc) => sum + acc, 0)
         state.totalQuantity = state.carts
            .map((cart) => cart.quantity)
            .reduce((sum, acc) => sum + acc, 0)
      },

      removeCart: (state, action: PayloadAction<string>) => {
         state.carts = state.carts.filter((cart) => {
            return cart.id !== action.payload
         })
         state.totalPrice = state.carts
            .map((cart) => cart.totalPrice)
            .reduce((sum, acc) => sum + acc, 0)
         state.totalQuantity = state.carts
            .map((cart) => cart.quantity)
            .reduce((sum, acc) => sum + acc, 0)
      },

      updateCart: (
         state,
         action: PayloadAction<{ id: string; quantity: number }>
      ) => {
         state.carts.map((cart) => {
            if (cart.id === action.payload.id) {
               cart.totalPrice = cart.price * cart.quantity
               cart.quantity = action.payload.quantity
            }
         })
         state.totalPrice = state.carts
            .map((cart) => cart.totalPrice)
            .reduce((sum, acc) => sum + acc, 0)
         state.totalQuantity = state.carts
            .map((cart) => cart.quantity)
            .reduce((sum, acc) => sum + acc, 0)
      },

      addOrder: (
         state,
         action: PayloadAction<{ id: string; quantity: number }>
      ) => {
         state.carts.map((cart) => {
            if (cart.id === action.payload.id) {
               cart.totalPrice = cart.price * cart.quantity
               cart.quantity = cart.quantity + action.payload.quantity
            }
         })
         state.totalPrice = state.carts
            .map((cart) => cart.totalPrice)
            .reduce((sum, acc) => sum + acc, 0)
         state.totalQuantity = state.carts
            .map((cart) => cart.quantity)
            .reduce((sum, acc) => sum + acc, 0)
      },

      refreshCarts: (state) => {
         state.carts = []
         state.totalPrice = 0
         state.totalQuantity = 0
      },
   },
})

export const { addCart, removeCart, updateCart, addOrder, refreshCarts } =
   cart.actions

export default cart.reducer

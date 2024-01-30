import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface cartMotion {
   visibility: boolean
}

const initialSate = {
   visibility: true,
} as cartMotion

const cartMotion = createSlice({
   name: "filter",
   initialState: initialSate,
   reducers: {
      visibilityAction: (state, action: PayloadAction<boolean>) => {
         state.visibility = action.payload
      },
   },
})

export const { visibilityAction } = cartMotion.actions

export default cartMotion.reducer

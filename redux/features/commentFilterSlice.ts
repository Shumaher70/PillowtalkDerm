import { Review } from "@prisma/client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface filter {
   sort: string
   stars: number
   media: boolean
   take: number
   review: Review[]
}

const initialSate = {
   sort: "most-recent",
   stars: 0,
   media: false,
   take: 5,
   review: [],
} as filter

const filter = createSlice({
   name: "filter",
   initialState: initialSate,
   reducers: {
      sortAction: (state, action: PayloadAction<string>) => {
         state.sort = action.payload
      },
      starsAction: (state, action: PayloadAction<number>) => {
         state.stars = action.payload
      },
      mediaAction: (state, action: PayloadAction<boolean>) => {
         state.media = action.payload
      },
      dataReviewAction: (state, action: PayloadAction<Review[]>) => {
         state.review = action.payload
      },
      takeAction: (state) => {
         state.take += 5
      },
   },
})

export const {
   mediaAction,
   starsAction,
   takeAction,
   sortAction,
   dataReviewAction,
} = filter.actions

export default filter.reducer

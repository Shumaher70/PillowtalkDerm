import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface comment {
   review: {
      step?: number
      stars?: number
      review?: string
      titleReview?: string
      images?: string[]
      name?: string
      email?: string
   }
}

const initialState = {
   review: {
      step: 1,
      stars: 0,
      review: "",
      titleReview: "",
      images: [""],
      name: "",
      email: "",
   },
} as comment

export const comment = createSlice({
   name: "comment",
   initialState,
   reducers: {
      stepAction: (state, action: PayloadAction<number>) => {
         state.review.step = action.payload
      },
      starsAction: (state, action: PayloadAction<number>) => {
         state.review.stars = action.payload
      },
      reviewAction: (state, action: PayloadAction<string>) => {
         state.review.review = action.payload
      },
      titleReviewAction: (state, action: PayloadAction<string>) => {
         state.review.titleReview = action.payload
      },
      imagesAction: (state, action: PayloadAction<string[]>) => {
         state.review.images = action.payload
      },
      nameAction: (state, action: PayloadAction<string>) => {
         state.review.name = action.payload
      },
      emailAction: (state, action: PayloadAction<string>) => {
         state.review.email = action.payload
      },
      refreshAction: (state) => {
         state.review.step = 1
         state.review.stars = 0
         state.review.review = ""
         state.review.images = [""]
         state.review.name = ""
         state.review.email = ""
      },
   },
})

export const {
   stepAction,
   starsAction,
   reviewAction,
   titleReviewAction,
   imagesAction,
   nameAction,
   emailAction,
   refreshAction,
} = comment.actions

export default comment.reducer
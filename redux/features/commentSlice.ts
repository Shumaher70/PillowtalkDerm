import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface comment {
   review: {
      step?: number
      stars?: number
      review?: string
      titleReview?: string
      imageUrl?: string[]
      imageKey?: string[]
      name?: string
      email?: string
      recommend?: boolean
      productId: string
   }
}

const initialState = {
   review: {
      step: 1,
      stars: 0,
      titleReview: "",
      name: "",
      email: "",
      review: "",
      imageUrl: [],
      imageKey: [],
      recommend: true,
      productId: "",
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
      imageUrlAction: (state, action: PayloadAction<string[]>) => {
         state.review.imageUrl = action.payload
      },
      imageKeyAction: (state, action: PayloadAction<string[]>) => {
         state.review.imageKey = action.payload
      },
      nameAction: (state, action: PayloadAction<string>) => {
         state.review.name = action.payload
      },
      emailAction: (state, action: PayloadAction<string>) => {
         state.review.email = action.payload
      },
      recommendAction: (state, action: PayloadAction<boolean>) => {
         state.review.recommend = action.payload
      },
      productIdAction: (state, action: PayloadAction<string>) => {
         state.review.productId = action.payload
      },

      refreshAction: (state) => {
         state.review.step = 1
         state.review.stars = 0
         state.review.review = ""
         state.review.imageUrl = []
         state.review.imageKey = []
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
   imageUrlAction,
   imageKeyAction,
   nameAction,
   emailAction,
   refreshAction,
   recommendAction,
   productIdAction,
} = comment.actions

export default comment.reducer

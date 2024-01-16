import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface commentImages {
   commentImages?: boolean
   indexImage?: number | null
   createdAt: Date | null
   titleReview?: string
   verified: boolean
   imageUrl?: string[]
   recommend: boolean
   dislike?: number
   review?: string
   stars?: number
   email: string
   name?: string
   like?: number
   id: string
}

const initialState = {
   commentImages: false,
   titleReview: "",
   indexImage: null,
   recommend: false,
   createdAt: null,
   verified: false,
   imageUrl: [],
   dislike: 0,
   review: "",
   email: "",
   stars: 0,
   name: "",
   like: 0,
   id: "",
} as commentImages

export const commentImages = createSlice({
   name: "commentImages",
   initialState,
   reducers: {
      commentAction: (state, action: PayloadAction<commentImages>) => {
         state.commentImages = action.payload.commentImages
         state.titleReview = action.payload.titleReview
         state.indexImage = action.payload.indexImage
         state.createdAt = action.payload.createdAt
         state.verified = action.payload.verified
         state.imageUrl = action.payload.imageUrl
         state.dislike = action.payload.dislike
         state.review = action.payload.review
         state.stars = action.payload.stars
         state.email = action.payload.email
         state.like = action.payload.like
         state.name = action.payload.name
         state.id = action.payload.id
         state.recommend = action.payload.recommend
      },
      imageForwardAction: (state) => {
         if (state.imageUrl!.length < state.indexImage! + 2) {
            state.indexImage = 0
         } else {
            state.indexImage! += 1
         }
      },
      imageBackAction: (state) => {
         if (state.indexImage! - 1 < 0) {
            state.indexImage = state.imageUrl!.length - 1
         } else {
            state.indexImage! -= 1
         }
      },
      imageRefreshAction: (state) => {
         state.commentImages = false
         state.titleReview = ""
         state.indexImage = null
         state.recommend = false
         state.createdAt = null
         state.verified = false
         state.imageUrl = []
         state.dislike = 0
         state.review = ""
         state.stars = 0
         state.name = ""
         state.like = 0
         state.id = ""
      },
   },
})

export const {
   commentAction,
   imageForwardAction,
   imageBackAction,
   imageRefreshAction,
} = commentImages.actions

export default commentImages.reducer

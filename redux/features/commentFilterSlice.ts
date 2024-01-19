import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface filter {
   mostRecent: boolean
   oldest: boolean
   highestRecent: boolean
   lowestRecent: boolean
   mostHelpful: boolean
   stars: number
   media: boolean
}

const initialSate = {
   mostRecent: true,
   oldest: false,
   highestRecent: false,
   lowestRecent: false,
   mostHelpful: false,
   stars: 0,
   media: false,
} as filter

const filter = createSlice({
   name: "filter",
   initialState: initialSate,
   reducers: {
      mostRecentAction: (state, action: PayloadAction<boolean>) => {
         state.mostRecent = action.payload
         state.oldest = false
         state.highestRecent = false
         state.lowestRecent = false
         state.mostHelpful = false
      },
      oldestAction: (state, action: PayloadAction<boolean>) => {
         state.mostRecent = false
         state.oldest = action.payload
         state.highestRecent = false
         state.lowestRecent = false
         state.mostHelpful = false
      },
      highestRecentAction: (state, action: PayloadAction<boolean>) => {
         state.mostRecent = false
         state.oldest = false
         state.highestRecent = action.payload
         state.lowestRecent = false
         state.mostHelpful = false
      },
      lowestRecentAction: (state, action: PayloadAction<boolean>) => {
         state.mostRecent = false
         state.oldest = false
         state.highestRecent = false
         state.lowestRecent = action.payload
         state.mostHelpful = false
      },
      mostHelpfulAction: (state, action: PayloadAction<boolean>) => {
         state.mostRecent = false
         state.oldest = false
         state.highestRecent = false
         state.lowestRecent = false
         state.mostHelpful = action.payload
      },
      starsAction: (state, action: PayloadAction<number>) => {
         state.stars = action.payload
      },
      mediaAction: (state, action: PayloadAction<boolean>) => {
         state.media = action.payload
      },
   },
})

export const {
   mostRecentAction,
   oldestAction,
   highestRecentAction,
   lowestRecentAction,
   mostHelpfulAction,
   starsAction,
   mediaAction,
} = filter.actions

export default filter.reducer

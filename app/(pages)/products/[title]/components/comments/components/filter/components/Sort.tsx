"use client"

import {
   highestRecentAction,
   lowestRecentAction,
   mostHelpfulAction,
   mostRecentAction,
   oldestAction,
} from "@/redux/features/commentFilterSlice"
import { useAppDispatch } from "@/redux/hooks"

const Sort = () => {
   const dispatch = useAppDispatch()
   const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      switch (event.currentTarget.value) {
         case "Most recent":
            dispatch(mostRecentAction(true))
            break
         case "Oldest":
            dispatch(oldestAction(true))
            break
         case "Highest rated":
            dispatch(highestRecentAction(true))
            break
         case "Lowest rated":
            dispatch(lowestRecentAction(true))
            break
         case "Most helpful":
            dispatch(mostHelpfulAction(true))
            break
         default:
            dispatch(mostRecentAction(true))
      }
   }

   return (
      <div className="relative w-full">
         <select
            onChange={changeHandler}
            className="relative w-full rounded-[10px] bg-white p-1 pt-[20px]"
         >
            <option value="Most recent">Most recent</option>
            <option value="Oldest">Oldest</option>
            <option value="Highest rated">Highest rated</option>
            <option value="Lowest rated">Lowest rated</option>
            <option value="Most helpful">Most helpful</option>
         </select>
         <div className="absolute left-2 top-[2px] text-[14px]">Sort by</div>
      </div>
   )
}

export default Sort

"use client"

import { sortAction } from "@/redux/features/commentFilterSlice"
import { useAppDispatch } from "@/redux/hooks"

const Sort = () => {
   const dispatch = useAppDispatch()
   const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(sortAction(event.currentTarget.value))
   }

   return (
      <div className="relative w-full">
         <select
            onChange={changeHandler}
            className="relative w-full rounded-[10px] bg-white p-1 pt-[20px]"
         >
            <option value="most-recent">Most recent</option>
            <option value="oldest">Oldest</option>
            <option value="highest-rated">Highest rated</option>
            <option value="lowest-rated">Lowest rated</option>
            <option value="most-helpful">Most helpful</option>
         </select>
         <div className="absolute left-2 top-[2px] text-[14px]">Sort by</div>
      </div>
   )
}
export default Sort

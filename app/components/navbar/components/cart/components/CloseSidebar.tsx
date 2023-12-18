import { sidebarCart } from "@/redux/features/sidebarSlice"
import { useAppDispatch } from "@/redux/hooks"
import { AiOutlineClose } from "react-icons/ai"

const CloseSidebar = () => {
   const dispatch = useAppDispatch()

   return (
      <AiOutlineClose
         className="cursor-pointer text-[15px] text-black"
         onClick={() => dispatch(sidebarCart(false))}
      />
   )
}

export default CloseSidebar

import Comment from "./components/Comment"
import Likes from "./components/Likes"
import Stars from "./components/Stars"

const UserComment = () => {
   return (
      <div className="flex h-full w-full flex-col">
         <div className="h-full w-full">
            <Stars />
         </div>

         <div className="h-full w-full">
            <Comment />
         </div>

         <div className="h-full w-full pt-10">
            <Likes />
         </div>
      </div>
   )
}

export default UserComment

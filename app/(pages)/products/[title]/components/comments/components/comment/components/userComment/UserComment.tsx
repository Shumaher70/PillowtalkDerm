import { Review } from "@prisma/client"
import Comment from "./components/Comment"
import Likes from "./components/Likes"
import Stars from "./components/Stars"

interface UserCommentProps {
   comment: Review
}

const UserComment = ({ comment }: UserCommentProps) => {
   return (
      <div className="flex h-full w-full flex-col">
         <div className="h-full w-full">
            <Stars stars={comment.rating} date={comment.createdAt} />
         </div>

         <div className="h-full w-full">
            <Comment
               title={comment.title}
               comment={comment.comment}
               media={comment.images}
            />
         </div>

         <div className="h-full w-full pt-10">
            <Likes
               like={comment.like}
               dislike={comment.dislike}
               id={comment.id}
            />
         </div>
      </div>
   )
}

export default UserComment

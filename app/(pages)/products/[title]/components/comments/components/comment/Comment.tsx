import { Review, User as userType } from "@prisma/client"
import User from "./components/user/User"
import UserComment from "./components/userComment/UserComment"

interface CommentProps {
   review: Review
}

const Comment = ({ review }: CommentProps) => {
   return (
      <div className="flex w-full flex-col md:flex-row lg:gap-5">
         <div className="container-rounded-t md:rounded-l-[10px w-full overflow-hidden bg-white p-[16px] pb-0 md:rounded-[0px] lg:max-w-[250px] lg:rounded-[30px]">
            <User
               name={review.name}
               recommend={review.recommend}
               email={review.email}
            />
         </div>

         <div className="container-rounded-b w-full overflow-hidden bg-white p-[16px] pt-0 md:rounded-[0px] md:rounded-r-[10px] md:pt-[16px] lg:rounded-[30px]">
            <UserComment comment={review} />
         </div>
      </div>
   )
}

export default Comment

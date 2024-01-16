import { commentImages } from "@/redux/features/commentImagesSlice"
import Customer from "./components/Customer"
import Stars from "./components/Stars"
import Likes from "./components/Likes"
import Data from "./components/Data"
import Comment from "./components/Comment"

interface UserImageProps {
   user: commentImages
}

const UserImage = ({ user }: UserImageProps) => {
   return (
      <>
         <div className="flex w-full justify-between">
            <Customer
               name={user.name!}
               email={user.email}
               verified={user.verified}
            />
            <Stars stars={user.stars!} />
         </div>

         <div className="mt-2 flex w-full justify-between">
            <Likes like={user.like!} dislike={user.dislike!} id={user.id} />
            <Data date={user.createdAt!} />
         </div>
         <Comment comment={user.review!} title={user.titleReview!} />
      </>
   )
}

export default UserImage

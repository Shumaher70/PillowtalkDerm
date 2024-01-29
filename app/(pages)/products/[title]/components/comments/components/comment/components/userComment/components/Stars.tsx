import { IoMdStar, IoMdStarOutline } from "react-icons/io"

interface StarsProps {
   stars: number
   date: Date
}

const Stars = ({ stars, date }: StarsProps) => {
   const time = (date: Date) => {
      const timeDifference = Math.abs(
         new Date().getTime() - new Date(date).getTime()
      )

      const millisecondsInSecond = 1000
      const millisecondsInMinute = millisecondsInSecond * 60
      const millisecondsInHour = millisecondsInMinute * 60
      const millisecondsInDay = millisecondsInHour * 24

      const seconds = Math.floor(timeDifference / millisecondsInSecond)
      const minutes = Math.floor(
         (timeDifference % millisecondsInHour) / millisecondsInMinute
      )
      const hours = Math.floor(
         (timeDifference % millisecondsInDay) / millisecondsInHour
      )
      const days = Math.floor(timeDifference / millisecondsInDay)
      const months = Math.floor(days / 31)
      const years = Math.floor(months / 12)
      if (seconds && !minutes && !hours && !days && !months && !years) {
         return `${
            seconds > 1 ? `${seconds} seconds ago` : `${seconds} minute ago`
         }`
      } else if (minutes && !hours && !days && !months && !years) {
         return `${
            minutes > 1 ? `${minutes} minutes ago` : `${minutes} minute ago`
         }`
      } else if (hours && !days && !months && !years) {
         return `${hours > 1 ? `${hours} hours ago` : `${hours} hour ago`}`
      } else if (days && !months && !years) {
         return `${days > 1 ? `${days} days ago` : `${days} day ago`}`
      } else if (months && !years) {
         return `${months > 1 ? `${months} months ago` : `${months} month ago`}`
      } else if (years) {
         return `${years > 1 ? `${years} years ago` : `${years} year ago`}`
      }
   }

   return (
      <div className="flex w-full items-center gap-4">
         <div className="flex w-[86px] gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
               let star
               if (stars >= index + 1) {
                  star = (
                     <IoMdStar
                        key={index}
                        className="text-[14px] text-[#F92672]"
                     />
                  )
               } else {
                  star = (
                     <IoMdStarOutline
                        key={index}
                        className="text-[14px] text-[#F92672]"
                     />
                  )
               }
               return star
            })}
         </div>
         <span className="text-[14px]">{time(date)}</span>
      </div>
   )
}

export default Stars

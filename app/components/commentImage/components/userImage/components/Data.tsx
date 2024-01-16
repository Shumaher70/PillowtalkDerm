interface DataProps {
   date: Date
}

const Data = ({ date }: DataProps) => {
   const time = (date: Date) => {
      const timeDifference = Math.abs(new Date().getTime() - date.getTime())

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
   return <div className="whitespace-nowrap text-[14px]">{time(date)}</div>
}

export default Data

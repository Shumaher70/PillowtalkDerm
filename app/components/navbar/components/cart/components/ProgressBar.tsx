import progressTitle from "@/utils/progressTitle"
import calcProgressBar from "../../../../../../utils/calcProgressBar"

interface ProgressBarProps {
   totalPrice: number
   freeShipping: number
}

const ProgressBar = ({ totalPrice, freeShipping }: ProgressBarProps) => {
   const progress = calcProgressBar(totalPrice, freeShipping)

   return (
      <div className="w-full">
         <p className="text-p w-full text-center">
            {progressTitle(totalPrice, freeShipping)}
         </p>

         <div className="bg-accent mt-3 h-[6px] w-full overflow-hidden rounded-full">
            <div
               style={{
                  width: `${progress}`,
               }}
               className="h-full bg-gradient-to-r from-pink-400  to-pink-600 transition-all !duration-1000"
            />
         </div>
      </div>
   )
}

export default ProgressBar

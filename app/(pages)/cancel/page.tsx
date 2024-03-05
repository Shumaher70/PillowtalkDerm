import { Metadata } from "next"
import ButtonRepeatPayment from "./ButtonRepeatPayment"

export const metadata: Metadata = {
   title: "Not enough funds - PillowTalkDerm",
   description: "Not enough funds",
}

const page = () => {
   return (
      <main className="container-p mt-[50px] h-full w-full">
         <div className="flex-center container-rounded flex h-full w-full overflow-hidden bg-gray-100 text-center shadow-lg">
            <div className="container-p absolute">
               <h1 className="text-section leading-[45px] md:leading-[60px]">
                  Something wrong payment failed
               </h1>
               <p className="mt-2">
                  There may not be enough funds on the balance sheet
               </p>
               <ButtonRepeatPayment />
            </div>
         </div>
      </main>
   )
}

export default page

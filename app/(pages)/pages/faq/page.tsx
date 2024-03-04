import { Metadata } from "next"
import FaqScroll from "./components/FaqScroll"

export const metadata: Metadata = {
   title: "FAQs | PillowtalkDerm - Dr. Idriss ",
   description:
      "Find the answers to commonly asked questions about PillowtalkDerm by Dr. Shereene Idriss products, including the Major Fade Solution System and The Depuffer.",
}

const page = () => {
   return (
      <main className="bg-secondary w-full">
         <div className="mt-[15px] pt-[40px] md:pt-[80px] lg:mt-[30px]">
            <FaqScroll />
         </div>
      </main>
   )
}

export default page

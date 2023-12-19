import React from "react"
import ImageDescription from "./components/ImageDescription"
import { ProductDescription } from "@prisma/client"
import DescriptionBlock from "./components/DescriptionBlock"
import Pair from "../card/components/pair/Pair"

const Description = ({
   description,
   title,
   pair,
}: {
   description: ProductDescription[]
   title: string
   pair: string[]
}) => {
   return (
      <div className="container-px">
         <div className="bg-secondary container-rounded flex h-min flex-col lg:min-h-[70vh] lg:flex-row-reverse">
            <div className="relative w-full pt-[80%] lg:w-2/4 lg:p-0 lg:pt-[0]">
               <ImageDescription image={description[0].image} />
            </div>

            <div className="flex w-full flex-col justify-between lg:w-2/4">
               <DescriptionBlock description={description[0]} title={title} />

               <div className="max-w-[550px]">
                  <h2 className="text-p p-[16px] pb-0 font-bold uppercase">
                     pair with it
                  </h2>
                  <Pair pair={pair} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Description
